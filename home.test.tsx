// @ts-ignore
import { describe, expect, it, jest, mock } from "bun:test";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
    it("プロジェクト登録画面が表示されていること", async () => {
        render(await Home());
    });
});
