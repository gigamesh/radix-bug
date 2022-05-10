export type CommentType = {
  username?: string | null;
  avatarUrl?: string | null;
  twitterHandle?: string | null;
  publicAddress: string;
  txHref?: string;
  commentText?: string;
  rank?: number;
  amountPaidInWei?: string;
  commentTimestamp?: number;
  purchasedAt?: string;
  tokenId?: string;
  isEggWinner?: boolean;
  isPresaleNft: boolean;
  hasArtistRole?: boolean;
};
