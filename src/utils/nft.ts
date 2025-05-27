// Generate a random numeric ID between 1 and 100000
export function generateTokenId(): number {
  return Math.floor(Math.random() * 100000) + 1;
}
