import { Database } from "./supabase";
export type { Database } from "./supabase";

export interface LevelStats {
  id: number;
  name: string;
  correct_answers: number;
  total_questions: number;
}

export type Level = Database["public"]["Tables"]["levels"]["Row"];

export type Game = Database["public"]["Tables"]["games"]["Row"] & {
  level?: Level;
};

export type Question = Database["public"]["Tables"]["questions"]["Row"] & {
  answer?: Answer;
};

export type Answer = Database["public"]["Tables"]["answers"]["Row"];
