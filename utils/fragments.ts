import { FragmentType, useFragment } from '@generated-gql-fragment';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const getFragment = useFragment;

export function getOptionalFragment<TType>(
  _documentNode: DocumentNode<TType, any>,
  fragmentType: FragmentType<DocumentNode<TType, any>> | null | undefined,
): TType | null {
  return (fragmentType ?? null) as any;
}
