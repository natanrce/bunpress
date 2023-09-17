import { Server } from "bun";

export type Json = {
  [key: string]: any;
};

export type CBumRequest = {
  method: string;
  request: Request;
  path: string;
  headers?: Json;
  query?: Json;
  body?: Json | string;
  params?: Json;
};

export interface CBumResponse {
  status(code: number): this;
  json(body: any): void;
  send(body: any): void;
}

export type Handler = (req: CBumRequest, res: CBumResponse) => void;

export interface RequestMethod {
  get(path: string, ...handlers: Handler[]): void;
  post(path: string, ...handlers: Handler[]): void;
  put(path: string, ...handlers: Handler[]): void;
  patch(path: string, ...handlers: Handler[]): void;
  delete(path: string, ...handlers: Handler[]): void;
}

export class CBum implements RequestMethod {
  listen(port: number, callback?: () => void): Server {
    callback?.call(null);

    return Bun.serve({
      fetch(request, server) {
        return new Response("Wooow, look at him!");
      },
    });
  }

  get(path: string, ...handlers: Handler[]): void {
    throw new Error("Method not implemented.");
  }
  post(path: string, ...handlers: Handler[]): void {
    throw new Error("Method not implemented.");
  }
  put(path: string, ...handlers: Handler[]): void {
    throw new Error("Method not implemented.");
  }
  patch(path: string, ...handlers: Handler[]): void {
    throw new Error("Method not implemented.");
  }
  delete(path: string, ...handlers: Handler[]): void {
    throw new Error("Method not implemented.");
  }
}
