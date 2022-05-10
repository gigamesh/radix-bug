import aws from 'aws-sdk';
import axios from 'axios';

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
  signatureVersion: 'v4',
});

const s3 = new aws.S3();

export function getArtistUploadKey(artistId: string, uploadType: string, fileName: string): string {
  // s3 bucket name cannot certain characters, so encode provided fileName
  // https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html
  const encodedFileName = encodeURIComponent(fileName);
  const nonce = Math.floor(Math.random() * 10000000);
  return `artist-uploads/${artistId}/${uploadType}/${nonce}-${encodedFileName}`;
}

export function getUserUploadKey(userId: string, uploadType: string, fileName: string): string {
  const encodedFileName = encodeURIComponent(fileName);
  const nonce = Math.floor(Math.random() * 10000000);
  return `user-uploads/${userId}/${uploadType}/${nonce}-${encodedFileName}`;
}

export function getUploadBucket(): string {
  return process.env.BUCKET_NAME || 'sound-collective-dev';
}

export async function uploadToS3(url: string, key: string) {
  const { data } = await axios.get(url, { responseType: 'stream' });
  const response = await s3
    .upload({
      Bucket: process.env.BUCKET_NAME as string,
      Key: key,
      ACL: 'public-read',
      Body: data,
    })
    .promise();
  return response.Location;
}

export default s3;
