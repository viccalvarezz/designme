import { Database, Game } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";

export class GamesService {
  supabase: SupabaseClient<Database>;

  constructor({ supabase }) {
    this.supabase = supabase;
  }

  async fetchAll(): Promise<Array<Game>> {
    const { data: games } = await this.supabase.from("games").select("*");

    return games;
  }

  async fetchOne({ id }: { id: number }): Promise<Game> {
    const { data: game } = await this.supabase
      .from("games")
      .select("*")
      .eq("id", id)
      .single();

    return game;
  }
}
