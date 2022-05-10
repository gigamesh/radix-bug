import { useSafeLayoutEffect } from '@chakra-ui/react';
import type { PlaylistInput } from '@generated-gql';
import { proxy, useSnapshot } from 'valtio';

export const PlaylistInputStore = proxy<PlaylistInput>({
  type: 'HOME',
  associationId: null,
});

export function useSetPlaylistInput({ type, associationId }: PlaylistInput) {
  useSafeLayoutEffect(() => {
    const prevType = PlaylistInputStore.type;
    const prevAssociationId = PlaylistInputStore.associationId;

    PlaylistInputStore.type = type;
    PlaylistInputStore.associationId = associationId;

    return () => {
      PlaylistInputStore.type = prevType;
      PlaylistInputStore.associationId = prevAssociationId;
    };
  }, [type, associationId]);
}

export function useGetPlaylistInput() {
  return useSnapshot(PlaylistInputStore, {
    sync: true,
  });
}
