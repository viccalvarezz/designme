import { Database } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { AnswersService } from "./AnswersService";
import { GamesService } from "./GamesService";
import { QuestionsService } from "./QuestionsService";

export const createServices = ({
  supabase,
}: {
  supabase: SupabaseClient<Database>;
}) => {
  return {
    games: new GamesService({ supabase }),
    questions: new QuestionsService({ supabase }),
    answers: new AnswersService({ supabase }),
  };
};
