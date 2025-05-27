const API_BASE_URL = "https://your-backend-api.com"; // Update accordingly

// Generate a random numeric ID between 1 and 100000
export function generateTokenId(): number {
  return Math.floor(Math.random() * 100000) + 1;
}

export async function storeMetadata(data: {
  name: string;
  description: string;
  logoUrl: string;
}): Promise<{ tokenId: number; metadataUrl: string }> {
  const res = await fetch(`${API_BASE_URL}/nfts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to store metadata");

  const saved = await res.json();
  return {
    tokenId: saved.id,
    metadataUrl: `${API_BASE_URL}/nfts/${saved.id}`,
  };
}
