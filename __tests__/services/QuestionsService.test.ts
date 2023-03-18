import { QuestionsService } from "@/services/QuestionsService";

describe("QuestionsService", () => {
  let supabase;
  let service;

  beforeEach(() => {
    supabase = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn(),
    };
    service = new QuestionsService({ supabase });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch all questions", async () => {
    const questions = [
      {
        id: 1,
        game_id: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
        created_at: "2023-02-18T17:33:50.912759+00:00",
        users_answers: [],
      },
    ];

    const eq = jest.fn().mockReturnValueOnce({ data: questions });

    jest.spyOn(supabase.from("questions"), "select").mockReturnValueOnce({
      eq: jest.fn().mockReturnValueOnce({
        eq,
      }),
    });

    const userId = "1";
    const gameId = 2;

    const result = await service.fetchAll({ userId, gameId });

    expect(result).toEqual(questions);
    expect(supabase.from("questions").select).toHaveBeenCalledWith(
      "*, users_answers(answers(*))"
    );
  });

  it("should fetch one question", async () => {
    const question = {
      id: 1,
      game_id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
      created_at: "2023-02-18T17:33:50.912759+00:00",
      users_answers: [],
    };
    const single = jest.fn().mockReturnValueOnce({ data: question });

    jest.spyOn(supabase.from("questions"), "select").mockReturnValueOnce({
      eq: jest.fn().mockReturnValueOnce({
        single,
      }),
    });

    const id = 2;

    const result = await service.fetchOne({ id });

    expect(result).toEqual(question);
    expect(supabase.from("questions").select).toHaveBeenCalledWith("*");
  });
});
