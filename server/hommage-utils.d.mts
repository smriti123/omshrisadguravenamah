import type { ServerResponse } from "http";

export const NAME_MAX_LENGTH: number;
export const MESSAGE_MAX_LENGTH: number;
export const SUBMISSION_WINDOW_MINUTES: number;
export const SUBMISSION_LIMIT_PER_WINDOW: number;

export function cleanText(value: unknown): string;

export function validateHommageSubmission(payload?: {
  name?: string | number;
  message?: string | number;
  consent?: boolean | string;
  website?: string | number;
}): {
  ok: boolean;
  errors: string[];
  data: { name: string; message: string; consent: boolean };
};

export function isValidAdminAction(action: string): boolean;

export function json(res: ServerResponse, status: number, data: unknown): void;
export function escapeHtml(text: string): string;
export function sanitizeHommage(input: unknown): {
  name: string;
  relation: string;
  message: string;
};
