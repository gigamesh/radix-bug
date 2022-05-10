import { ApolloClient, gql } from '@apollo/client';
import { GetSignedUploadParamsDocument, MediaType } from '@generated-gql';
import { ApiDataError, FailedMediaUploadError } from '@utils/error';

function uploadMediaToS3(file: File, url: string, fields: any) {
  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  return fetch(url, {
    method: 'POST',
    body: formData,
  });
}

gql(/* GraphQL */ `
  query getSignedUploadParams($uploadRequest: UploadRequest!) {
    getSignedUploadParams(uploadRequest: $uploadRequest) {
      uploadKey
      url
      fields
    }
  }
`);

export async function uploadFileAndReturnKey(
  file: File,
  mediaType: MediaType,
  client: ApolloClient<any>,
): Promise<string> {
  const res = await client.query({
    query: GetSignedUploadParamsDocument,
    variables: { uploadRequest: { fileName: getS3SafeKeyName(file.name), mediaType } },
  });

  const params = res.data.getSignedUploadParams;
  if (!params) {
    throw new ApiDataError();
  }

  const s3Res = await uploadMediaToS3(file, params.url, params.fields);
  if (s3Res.status != 201) {
    console.error(s3Res);
    throw new FailedMediaUploadError();
  }

  return params.uploadKey;
}

export function getS3SafeKeyName(name: string) {
  return name.replace(/[^0-9a-zA-Z!\-_\.\*\`]/gi, '_');
}
