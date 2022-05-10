import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { HttpLink } from '@apollo/client/link/http';
import { relayStylePagination } from '@apollo/client/utilities';
import { graphqlClientHeaders } from '@context/auth';
import { StaticRevalidationPolicy } from '@utils/constants';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import React from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const GATEWAY_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/graphql'
    : process.env.NEXT_PUBLIC_GATEWAY_API_URL;

if (!GATEWAY_API_URL) throw Error('No NEXT_PUBLIC_GATEWAY_API_URL environment variable set!');

const clientSideErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(error => {
      console.error(`[GraphQL error]: ${JSON.stringify(error, null, 2)}`);
    });
  }

  if (networkError) console.error(`[Network error]: ${networkError}`);
});
const httpLink = new HttpLink({
  uri: GATEWAY_API_URL,
  credentials: 'same-origin',
  headers: graphqlClientHeaders,
});

const apolloLink = from([clientSideErrorLink, httpLink]);

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: apolloLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getMintedReleaseById(_, { args, toReference }) {
              return args?.releaseId
                ? toReference({
                    __typename: 'Release',
                    id: args?.releaseId,
                  })
                : undefined;
            },
            release(_, { args, toReference }) {
              return args?.id
                ? toReference({
                    __typename: 'Release',
                    id: args?.id,
                  })
                : undefined;
            },
            artist(_, { args, toReference }) {
              return args?.id
                ? toReference({
                    __typename: 'Artist',
                    id: args?.id,
                  })
                : undefined;
            },
            track(_, { args, toReference }) {
              return args?.id
                ? toReference({
                    __typename: 'Track',
                    id: args?.id,
                  })
                : undefined;
            },
            user(_, { args, toReference }) {
              return args?.id
                ? toReference({
                    __typename: 'User',
                    id: args?.id,
                  })
                : undefined;
            },
            getAllMintedReleasesPaginated: relayStylePagination(),
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: StaticRevalidationPolicy,
        nextFetchPolicy: 'cache-first',
      },
    },
  });
}

export function initializeApollo(initialState?: NormalizedCacheObject) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState?: NormalizedCacheObject) {
  const store = React.useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
