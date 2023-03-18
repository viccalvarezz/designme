import { render, screen } from "@testing-library/react";
import GamesPage from "@/pages/games";
import { ProvidersWrapper } from "../utils/ProvidersWrapper";

const levels = [
  {
    id: 1,
    name: "Basic",
    created_at: "2023-03-18T16:27:36.922Z",
  },
];
const stats = [
  {
    id: 1,
    name: "Basic",
    total_questions: 3,
    correct_answers: 2,
  },
];
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
const signOut = jest.fn();

jest.mock("@supabase/auth-helpers-react", () => ({
  ...jest.requireActual("@supabase/auth-helpers-react"),
  useSessionContext: jest.fn().mockReturnValue({
    isLoading: false,
    session: {},
  }),
  useUser: jest.fn().mockReturnValue({
    id: "4f6ab4dc-9c9c-4a31-87fd-0387c944dbd0",
    email: "victoria.alvarez.sordo@gmail.com",
    user_metadata: {
      avatar_url: "https://avatars.githubusercontent.com/u/43728577?v=4",
      user_name: "viccalvarezz",
      name: "Victoria Alvarez",
    },
  }),
  useSupabaseClient: () => ({
    auth: {
      signOut: signOut.mockReturnValue({}),
    },
  }),
}));

describe("GamesPage", () => {
  it("should render level", async () => {
    render(<GamesPage stats={stats} levels={levels} games={games} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("heading", {
        name: /Basic/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });

  it("should render profile and stats", async () => {
    render(<GamesPage stats={stats} levels={levels} games={games} />, {
      wrapper: ProvidersWrapper,
    });

    const name = "Victoria Alvarez";

    expect(await screen.findByText(name)).toBeInTheDocument();
    expect(await screen.findByText("67 %")).toBeInTheDocument();
  });

  test.each(games)("should render games", async (game) => {
    render(<GamesPage stats={stats} levels={levels} games={games} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("heading", {
        name: game.name,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(await screen.findByText(game.description)).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: "Start" })).toHaveAttribute(
      "href",
      `/games/${game.id}`
    );
  });
});
