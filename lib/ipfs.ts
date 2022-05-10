import pinataClient, { PinataPinResponse } from '@pinata/sdk';
import axios, { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';

import s3 from './s3';

const ipfsClient = pinataClient(
  process.env.PINATA_API_KEY as string,
  process.env.PINATA_SECRET as string,
);

export const pinS3File = async (awsFileKey: string) => {
  const s3Stream = s3
    .getObject({
      Bucket: process.env.BUCKET_NAME as string,
      Key: awsFileKey,
    })
    .createReadStream();

  const form = new FormData({ maxDataSize: Infinity });
  // This is necessary because unlike when getting a stream directly from a file,
  // the filename isn’t automatically provided when streaming a file from S3.
  form.append('file', s3Stream, {
    filename: awsFileKey,
  });

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
    maxBodyLength: Infinity,
    headers: {
      pinata_api_key: process.env.PINATA_API_KEY as string,
      pinata_secret_api_key: process.env.PINATA_SECRET as string,
      ...form.getHeaders(),
    },
    data: form,
  };

  const resp = await axios(config);
  const data: PinataPinResponse = resp.data;
  console.log('pinned s3 file', data.IpfsHash);

  return data.IpfsHash;
};

export const pinJSON = async (json: Object) => {
  const resp = await ipfsClient.pinJSONToIPFS(json);
  console.log('pinned json file', resp);

  return resp.IpfsHash;
};

export const unpinHash = (hash: string) => {
  ipfsClient.unpin(hash);
};
