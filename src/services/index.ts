import { Database } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { LevelsService } from "./LevelsService";
import { AnswersService } from "./AnswersService";
import { GamesService } from "./GamesService";
import { QuestionsService } from "./QuestionsService";

export const createServices = ({
  supabase,
}: {
  supabase: SupabaseClient<Database>;
}) => {
  return {
    levels: new LevelsService({ supabase }),
    games: new GamesService({ supabase }),
    questions: new QuestionsService({ supabase }),
    answers: new AnswersService({ supabase }),
  };
};
