import { Database, Level, LevelStats } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";

export class LevelsService {
  supabase: SupabaseClient<Database>;

  constructor({ supabase }) {
    this.supabase = supabase;
  }

  async fetchAll(): Promise<Array<Level>> {
    const { data: levels } = await this.supabase.from("levels").select("*");

    return levels;
  }

  async fetchStats({ userId }: { userId: string }): Promise<Array<LevelStats>> {
    // @ts-ignore
    const { data } = await this.supabase.rpc("stats", {
      user_id: userId,
    });

    return data;
  }
}
