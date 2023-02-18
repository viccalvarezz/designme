import { Answer, Database } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";

export class AnswersService {
  supabase: SupabaseClient<Database>;

  constructor({ supabase }) {
    this.supabase = supabase;
  }

  async fetchAll({
    questionId,
  }: {
    questionId: number;
  }): Promise<Array<Answer>> {
    const { data: answers } = await this.supabase
      .from("answers")
      .select("*")
      .eq("question_id", questionId);

    return answers;
  }

  async create({
    questionId,
    answerId,
    userId,
  }: {
    questionId: number;
    answerId: number;
    userId: string;
  }) {
    return this.supabase.from("users_answers").insert({
      question_id: questionId,
      answer_id: answerId,
      user_id: userId,
    });
  }
}
