import { JsonRpcProvider } from '@ethersproject/providers';
import { defaultChainId, networkNames } from '@utils/constants';

export function getFrontendWeb3Provider() {
  const network = networkNames[defaultChainId];
  const providerURL =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
      ? 'http://localhost:8545'
      : `https://eth-${network}.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_FRONTEND_ALCHEMY_KEY}`;

  return new JsonRpcProvider(providerURL);
}
