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

  async upsert({
    questionId,
    answerId,
    userId,
  }: {
    questionId: number;
    answerId: number;
    userId: string;
  }) {
    const { data: joined } = await this.supabase
      .from("users_answers")
      .select("*")
      .eq("question_id", questionId)
      .eq("user_id", userId)
      .single();

    return this.supabase.from("users_answers").upsert({
      id: joined?.id,
      question_id: questionId,
      answer_id: answerId,
      user_id: userId,
    });
  }
}
