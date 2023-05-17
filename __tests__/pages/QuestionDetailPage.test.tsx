import { render, screen, waitFor } from "@testing-library/react";
import QuestionDetailPage from "@/pages/questions/[id]";
import { ProvidersWrapper } from "../utils/ProvidersWrapper";
import userEvent from "@testing-library/user-event";

const question = {
  id: 1,
  game_id: 1,
  description: "Black color to be used",
  created_at: "2023-02-18T17:33:50.912759+00:00",
};

const answers = [
  {
    id: 1,
    question_id: 1,
    src: "https://llgoowumvlccpmaocxvd.supabase.co/storage/v1/object/sign/answers-images/black-color-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbnN3ZXJzLWltYWdlcy9ibGFjay1jb2xvci0yLnBuZyIsImlhdCI6MTY4MzAzODc5MiwiZXhwIjoxNzE0NTc0NzkyfQ.l8-7V8MhiaF2PLxTuMFBCZCNgOmd6S31a3LpP-_URo4&t=2023-05-02T14%3A46%3A32.340Z",
    alt: "image 1",
    description:
      "In nature there is no pure black color #000000 so the human eye is not familiar with it. The best option is to use a very dark gray that will be easier for users to process",
    is_correct: false,
    created_at: "2023-02-18T17:33:50.912759+00:00",
  },
  {
    id: 2,
    question_id: 1,
    src: "https://llgoowumvlccpmaocxvd.supabase.co/storage/v1/object/sign/answers-images/black-color-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbnN3ZXJzLWltYWdlcy9ibGFjay1jb2xvci0xLnBuZyIsImlhdCI6MTY4MzE4OTYyMiwiZXhwIjoxNzE0NzI1NjIyfQ.mqQIXmA-jaUbJK9ss9dIsbG0naJ5sR8qOTYImm9gV4Y&t=2023-05-04T08%3A40%3A22.230Z",
    alt: "image 2",
    description:
      "In nature there is no pure black color #000000 so the human eye is not familiar with it. The best option is to use a very dark gray that will be easier for users to process. In this example #252525 is shown but you can choose others.",
    is_correct: true,
    created_at: "2023-02-18T17:33:50.912759+00:00",
  },
];

const upsertAnswer = jest.fn();

jest.mock("@/components/Service/useServices", () => ({
  useServices: () => ({
    answers: {
      upsert: upsertAnswer,
    },
  }),
}));

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

describe("QuestionDetailPage", () => {
  test("renders questions answers", async () => {
    render(<QuestionDetailPage question={question} answers={answers} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("heading", {
        name: /Question/i,
      })
    ).toBeInTheDocument();
    expect(await screen.findByText(/Black color to be used/i));
    expect(
      await screen.findByRole("img", {
        name: "image 1",
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("img", {
        name: "image 2",
      })
    ).toBeInTheDocument();
  });

  test("renders answer card modal when answer is responded incorrectly", async () => {
    render(<QuestionDetailPage question={question} answers={answers} />, {
      wrapper: ProvidersWrapper,
    });

    userEvent.click(
      (await screen.findAllByRole("button", { name: "Select" })).at(0)
    );

    expect(await screen.findByText("Wrong answer")).toBeInTheDocument();
    expect(
      await screen.findByText(
        /In nature there is no pure black color #000000 so the human eye is not familiar with it. The best option is to use a very dark gray that will be easier for users to process/i
      )
    ).toBeInTheDocument();
    expect(await screen.findByText("Continue")).toBeInTheDocument();
  });

  test("renders answer card modal when answer is responded correctly", async () => {
    render(<QuestionDetailPage question={question} answers={answers} />, {
      wrapper: ProvidersWrapper,
    });

    userEvent.click(
      (await screen.findAllByRole("button", { name: "Select" })).at(1)
    );

    expect(await screen.findByText("Right answer")).toBeInTheDocument();
    expect(
      await screen.findByText(
        /In nature there is no pure black color #000000 so the human eye is not familiar with it. The best option is to use a very dark gray that will be easier for users to process. In this example #252525 is shown but you can choose others./i
      )
    ).toBeInTheDocument();
    expect(await screen.findByText("Continue")).toBeInTheDocument();
  });
});
