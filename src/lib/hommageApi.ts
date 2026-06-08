export type HommageMessage = {
  id: number;
  name: string;
  message: string;
  created_at: string;
  approved?: number;
  rejected?: number;
  ip_hash?: string;
};

const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...options.headers,
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error || data.errors?.join(" ") || "Request failed.";
    throw new Error(message);
  }
  return data as T;
}

export const getPublicHommages = () => apiRequest<{ messages: HommageMessage[] }>("/api/hommages");

export const submitHommage = (payload: {
  name: string;
  message: string;
  consent: boolean;
  website?: string;
}) => apiRequest<{ message: string; homage?: HommageMessage }>("/api/hommages", { method: "POST", body: JSON.stringify(payload) });

export const getAdminHommages = (password: string, status: string) =>
  apiRequest<{ messages: HommageMessage[] }>(`/api/admin/hommages?status=${encodeURIComponent(status)}`, {
    headers: { authorization: `Bearer ${password}` },
  });

export const moderateHommage = (password: string, id: number, action: "approve" | "reject" | "delete") =>
  apiRequest<{ ok: true }>(`/api/admin/hommages/${id}/${action}`, {
    method: "POST",
    headers: { authorization: `Bearer ${password}` },
  });
