export const NAME_MAX_LENGTH: number;
export const MESSAGE_MAX_LENGTH: number;
export const SUBMISSION_WINDOW_MINUTES: number;
export const SUBMISSION_LIMIT_PER_WINDOW: number;
export function cleanText(value: unknown): string;
export function validateHommageSubmission(payload?: Record<string, unknown>): {
  ok: boolean;
  errors: string[];
  data: { name: string; message: string; consent: boolean };
};
export function isValidAdminAction(action: unknown): boolean;
