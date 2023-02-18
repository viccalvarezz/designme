import { Database } from "./supabase";
export type { Database } from "./supabase";

export type Game = Database["public"]["Tables"]["games"]["Row"];

export type Question = Database["public"]["Tables"]["questions"]["Row"] & {
  answer?: Answer;
};

export type Answer = Database["public"]["Tables"]["answers"]["Row"];
