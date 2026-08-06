import type { ServerResponse } from "http";

export function json(res: ServerResponse, status: number, data: unknown): void;
export function escapeHtml(text: string): string;
export function sanitizeHommage(input: unknown): {
  name: string;
  relation: string;
  message: string;
};
