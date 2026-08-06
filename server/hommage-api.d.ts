declare module "./hommage-api.mjs" {
  import type { ServerResponse, IncomingMessage } from "http";

  export function handleApi(
    req: IncomingMessage,
    res: ServerResponse,
    url: URL
  ): Promise<unknown>;

  export function json(
    res: ServerResponse,
    status: number,
    data: unknown
  ): void;
}
