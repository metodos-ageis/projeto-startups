import { QueryClient } from "@tanstack/react-query";

export class AppQueryClient {
  static instance?: QueryClient;

  static get() {
    if (!this.instance) {
      this.instance = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      });
    }

    return this.instance;
  }
}
