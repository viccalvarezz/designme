import { GamesService } from "@/services/GamesService";

describe("GamesService", () => {
  let supabase;
  let service;

  beforeEach(() => {
    supabase = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn(),
    };
    service = new GamesService({ supabase });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch all games", async () => {
    const games = [
      {
        id: 1,
        name: "Fuentes",
        description:
          "Who are you developing for? How will they use your design? Building user personas can answer these",
        created_at: "2023-02-18T17:30:20.058376+00:00",
        level_id: 1,
      },
    ];

    jest
      .spyOn(supabase.from("games"), "select")
      .mockReturnValueOnce({ data: games });

    const result = await service.fetchAll();

    expect(result).toEqual(games);
    expect(supabase.from("games").select).toHaveBeenCalledWith("*");
  });

  it("should fetch one game by id", async () => {
    const game = {
      id: 1,
      name: "Fuentes",
      description:
        "Who are you developing for? How will they use your design? Building user personas can answer these",
      created_at: "2023-02-18T17:30:20.058376+00:00",
      level_id: 1,
    };

    const eq = jest.fn().mockReturnValueOnce({
      single: jest.fn().mockReturnValueOnce({ data: game }),
    });
    jest.spyOn(supabase.from("games"), "select").mockReturnValueOnce({
      eq,
    });

    const result = await service.fetchOne({ id: 1 });

    expect(result).toEqual(game);
    expect(supabase.from("games").select).toHaveBeenCalledWith("*");
    expect(eq).toHaveBeenCalledWith("id", 1);
  });
});
