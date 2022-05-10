export function loginMessageToSign(nonce: number | string) {
  return `Welcome to Sound!\n\nApprove this message to securely log in. \n\nnonce: ${nonce}`;
}

export function gameChunkMessageToSign(winningSongSlot: number, nonce: number) {
  return `Welcome to Sound!\n\nThe winning slot is at: ${winningSongSlot}. \n\nnonce: ${nonce}`;
}
