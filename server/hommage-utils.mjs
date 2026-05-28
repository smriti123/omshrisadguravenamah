export const NAME_MAX_LENGTH = 50;
export const MESSAGE_MAX_LENGTH = 300;
export const SUBMISSION_WINDOW_MINUTES = 60;
export const SUBMISSION_LIMIT_PER_WINDOW = 5;

export function cleanText(value) {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function validateHommageSubmission(payload = {}) {
  const name = cleanText(payload.name);
  const message = cleanText(payload.message);
  const consent = payload.consent === true || payload.consent === "true" || payload.consent === "on";
  const honeypot = cleanText(payload.website);
  const errors = [];

  if (honeypot) {
    errors.push("Submission could not be accepted.");
  }

  if (!name) {
    errors.push("Name is required.");
  } else if (name.length > NAME_MAX_LENGTH) {
    errors.push(`Name must be ${NAME_MAX_LENGTH} characters or fewer.`);
  }

  if (!message) {
    errors.push("Hommage message is required.");
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.push(`Hommage message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`);
  }

  if (!consent) {
    errors.push("Consent is required.");
  }

  return {
    ok: errors.length === 0,
    errors,
    data: { name, message, consent },
  };
}

export function isValidAdminAction(action) {
  return ["approve", "reject", "delete"].includes(action);
}
