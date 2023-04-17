import { describe, expect, it } from "vitest";

import { masked } from "@/utils/validation";

describe("Test `masked` function", () => {
  it("should return a masked value", () => {
    expect(masked("12345678910", "###.###.###-##")).toBe("123.456.789-10");
  });

  it("sould return an incomplete masked value", () => {
    expect(masked("123456", "###.###.###-##")).toBe("123.456");
  });

  it("should return a masked value with a custom mask symbol", () => {
    expect(masked("12345678910", "XXX.XXX.XXX-XX", "X")).toBe("123.456.789-10");
  });
});
