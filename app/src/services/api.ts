import { useAuth } from "@/store";

class ApiError<E> extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly data: E | string
  ) {
    super(message);
  }
}

export class Api {
  static readonly BASE_URL = new URL("https://api.example.com");

  private static getURL(path: string, params: Record<string, string>) {
    const url = new URL(path, Api.BASE_URL);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    return url;
  }

  private static getHeaders(credentials = useAuth.getState().token) {
    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    if (credentials) {
      headers.append("Authorization", `Bearer ${credentials}`);
    }

    return headers;
  }

  private static async request<R, E = never>(
    url: URL,
    options: RequestInit = {}
  ): Promise<R> {
    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      let data: E | string;
      try {
        data = await response.json();
      } catch (e) {
        data = await response.text();
      }

      throw new ApiError(response.statusText, response.status, data);
    }

    const data = await response.json();
    return data;
  }

  static async get<R, E = never>(
    path: string,
    params: Record<string, string> = {},
    headers = Api.getHeaders(),
    signal?: AbortSignal
  ) {
    const requestUrl = Api.getURL(path, params);
    return Api.request<R, E>(requestUrl, { method: "get", headers, signal });
  }

  static async post<R, B, E = never>(
    path: string,
    body: B,
    params: Record<string, string> = {},
    headers = Api.getHeaders(),
    signal?: AbortSignal
  ) {
    const requestUrl = Api.getURL(path, params);
    return Api.request<R, E>(requestUrl, {
      method: "post",
      headers,
      body: JSON.stringify(body),
      signal,
    });
  }

  static async put<R, B, E = never>(
    path: string,
    body: B,
    params: Record<string, string> = {},
    headers = Api.getHeaders(),
    signal?: AbortSignal
  ) {
    const requestUrl = Api.getURL(path, params);
    return Api.request<R, E>(requestUrl, {
      method: "put",
      headers,
      body: JSON.stringify(body),
      signal,
    });
  }

  static async patch<R, B, E = never>(
    path: string,
    body: B,
    params: Record<string, string> = {},
    headers = Api.getHeaders(),
    signal?: AbortSignal
  ) {
    const requestUrl = Api.getURL(path, params);
    return Api.request<R, E>(requestUrl, {
      method: "patch",
      headers,
      body: JSON.stringify(body),
      signal,
    });
  }

  static async delete<R, E = never>(
    path: string,
    params: Record<string, string> = {},
    headers = Api.getHeaders(),
    signal?: AbortSignal
  ) {
    const requestUrl = Api.getURL(path, params);
    return Api.request<R, E>(requestUrl, { method: "delete", headers, signal });
  }
}
