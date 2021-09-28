import { BoardsCollection } from "../types";
import { makeUrl } from "../utils/makeUrls";

export class BoardsApi {
  public async fetch(token: string): Promise<BoardsCollection> {
    try {
      const response = await fetch(
        makeUrl("/1/members/me/boards", true, token)
      );
      const list = await response.json();
      return list;
    } catch (e) {
      throw e;
    }
  }
}
