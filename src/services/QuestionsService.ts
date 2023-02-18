import { Database, Question } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";

export class QuestionsService {
  supabase: SupabaseClient<Database>;

  constructor({ supabase }) {
    this.supabase = supabase;
  }

  async fetchOne({ id }: { id: number }): Promise<Question> {
    const { data: question } = await this.supabase
      .from("questions")
      .select("*")
      .eq("id", id)
      .single();

    return question;
  }

  async fetchAll({ gameId }: { gameId: number }): Promise<Array<Question>> {
    const { data: questions } = await this.supabase
      .from("questions")
      .select("*, users_answers(answers(*))")
      .eq("game_id", gameId);

    return questions.map((question) => {
      const answer = question.users_answers[0]?.answers;

      return {
        ...question,
        ...(answer && { answer }),
      };
    });
  }
}
