import { LevelsService } from "@/services/LevelsService";

describe("LevelsService", () => {
  let supabase;
  let service;

  beforeEach(() => {
    supabase = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      rpc: jest.fn(),
    };
    service = new LevelsService({ supabase });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch all levels", async () => {
    const levels = [
      {
        id: 1,
        name: "Dificil",
        created_at: "2023-03-18T16:27:36.922Z",
      },
    ];

    jest
      .spyOn(supabase.from("levels"), "select")
      .mockReturnValueOnce({ data: levels });

    const result = await service.fetchAll();

    expect(result).toEqual(levels);
    expect(supabase.from("levels").select).toHaveBeenCalledWith("*");
  });

  it("should fetch stats", async () => {
    const stats = [
      {
        id: 1,
        name: "Basic",
        total_questions: 3,
        correct_answers: 2,
      },
      {
        id: 2,
        name: "Intermediate",
        total_questions: 3,
        correct_answers: 3,
      },
    ];
    const userId = "1";

    supabase.rpc.mockReturnValueOnce({ data: stats });

    await service.fetchStats({ userId });

    expect(supabase.rpc).toHaveBeenCalledWith("compute_stats", {
      current: userId,
    });
  });
});
