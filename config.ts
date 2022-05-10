export const nftmarketaddress = '5FbDB2315678afecb367f032d93F642f64180aa3';
export const nftaddress = 'e7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export const config = {
  algorithms: ['HS256' as const],
  tokenSecret:
    process.env.TOKEN_SECRET ||
    'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
};
