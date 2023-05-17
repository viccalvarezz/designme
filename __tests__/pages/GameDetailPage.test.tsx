import { render, screen } from "@testing-library/react";
import GameDetailPage from "@/pages/games/[id]";
import { ProvidersWrapper } from "../utils/ProvidersWrapper";

const game = { name: "Colors" };

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
}));

describe("GameDetailPage", () => {
  test("renders game questions", async () => {
    const questions = [
      {
        id: 1,
        description: "Black color to be used",
      },
    ];

    render(<GameDetailPage game={game} questions={questions} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("heading", {
        name: /Colors/i,
      })
    ).toBeInTheDocument();
    expect(await screen.findByText(/Black color to be used/i));
    expect(await screen.findByText(/Start/i));
  });

  test("renders game question already responded", async () => {
    const questions = [
      {
        id: 1,
        description: "Black color to be used",
        answer: {
          id: 1,
          question_id: 1,
          src: "https://llgoowumvlccpmaocxvd.supabase.co/storage/v1/object/sign/answers-images/black-color-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbnN3ZXJzLWltYWdlcy9ibGFjay1jb2xvci0yLnBuZyIsImlhdCI6MTY4MzAzODc5MiwiZXhwIjoxNzE0NTc0NzkyfQ.l8-7V8MhiaF2PLxTuMFBCZCNgOmd6S31a3LpP-_URo4&t=2023-05-02T14%3A46%3A32.340Z",
          alt: "image 1",
          description:
            "In nature there is no pure black color #000000 so the human eye is not familiar with it. The best option is to use a very dark gray that will be easier for users to process",
          is_correct: true,
          created_at: "2023-02-18T17:33:50.912759+00:00",
        },
      },
    ];

    render(<GameDetailPage game={game} questions={questions} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("heading", {
        name: /Colors/i,
      })
    ).toBeInTheDocument();
    expect(await screen.findByText(/Black color to be used/i));
    expect(await screen.findByText(/Retry/i));
  });
});
