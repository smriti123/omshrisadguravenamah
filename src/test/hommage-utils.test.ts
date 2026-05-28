import { describe, expect, it } from "vitest";
import { validateHommageSubmission } from "../../server/hommage-utils.mjs";

describe("validateHommageSubmission", () => {
  it("accepts valid submissions and trims whitespace", () => {
    const result = validateHommageSubmission({
      name: "  Devotee  ",
      message: "  Om Shanti  ",
      consent: true,
      website: "",
    });

    expect(result.ok).toBe(true);
    expect(result.data).toMatchObject({ name: "Devotee", message: "Om Shanti", consent: true });
  });

  it("rejects missing consent and oversized fields", () => {
    const result = validateHommageSubmission({
      name: "x".repeat(51),
      message: "y".repeat(301),
      consent: false,
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain("Name must be 50 characters or fewer.");
    expect(result.errors).toContain("Hommage message must be 300 characters or fewer.");
    expect(result.errors).toContain("Consent is required.");
  });

  it("rejects honeypot spam submissions", () => {
    const result = validateHommageSubmission({
      name: "Devotee",
      message: "Pranams",
      consent: true,
      website: "https://spam.example",
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain("Submission could not be accepted.");
  });
});
