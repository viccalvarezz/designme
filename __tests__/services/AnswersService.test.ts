import { AnswersService } from "@/services/AnswersService";

describe("AnswersService", () => {
  let supabase;
  let service;

  beforeEach(() => {
    supabase = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn(),
      upsert: jest.fn(),
    };
    service = new AnswersService({ supabase });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch all answers", async () => {
    const answers = [
      {
        id: 1,
        question_id: 1,
        src: "https://picsum.photos/400/600",
        alt: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit a, potenti fames ultrices turpis vel magnis montes lacinia duis, congue praesent porta sollicitudin taciti tempor nisi.",
        is_correct: false,
        created_at: "2023-02-18T17:39:00.538276+00:00",
      },
    ];

    const questionId = 1;
    const eq = jest.fn().mockReturnValueOnce({
      data: answers,
    });

    jest.spyOn(supabase.from("answers"), "select").mockReturnValueOnce({ eq });

    const result = await service.fetchAll({ questionId });

    expect(result).toEqual(answers);
    expect(supabase.from("answers").select).toHaveBeenCalledWith("*");
    expect(eq).toHaveBeenCalledWith("question_id", questionId);
  });

  it("should update an answers", async () => {
    const data = {
      questionId: 2,
      answerId: 1,
      userId: "3",
    };

    const id = 1;
    const single = jest.fn().mockReturnValueOnce({ data: { id } });

    jest.spyOn(supabase.from("users_answers"), "select").mockReturnValueOnce({
      eq: jest.fn().mockReturnValueOnce({
        eq: jest.fn().mockReturnValueOnce({
          single,
        }),
      }),
    });
    jest.spyOn(supabase.from("users_answers"), "upsert");

    await service.upsert(data);

    expect(supabase.from("users_answers").select).toHaveBeenCalledWith("*");
    expect(supabase.from("users_answers").upsert).toHaveBeenCalledWith({
      answer_id: 1,
      id,
      question_id: 2,
      user_id: "3",
    });
  });

  it("should create an answers", async () => {
    const data = {
      questionId: 2,
      answerId: 1,
      userId: "3",
    };

    const single = jest.fn().mockReturnValueOnce({ data: {} });

    jest.spyOn(supabase.from("users_answers"), "select").mockReturnValueOnce({
      eq: jest.fn().mockReturnValueOnce({
        eq: jest.fn().mockReturnValueOnce({
          single,
        }),
      }),
    });
    jest.spyOn(supabase.from("users_answers"), "upsert");

    await service.upsert(data);

    expect(supabase.from("users_answers").select).toHaveBeenCalledWith("*");
    expect(supabase.from("users_answers").upsert).toHaveBeenCalledWith({
      answer_id: 1,
      id: undefined,
      question_id: 2,
      user_id: "3",
    });
  });
});
