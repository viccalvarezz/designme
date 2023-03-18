import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AnswerCard } from "@/components/Answer/AnswerCard";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

const upsertAnswer = jest.fn();

jest.mock("@/components/Service/useServices", () => ({
  useServices: () => ({
    answers: {
      upsert: upsertAnswer,
    },
  }),
}));

describe("AnswerCard", () => {
  it("should render", async () => {
    const userId = "1";
    const answer = {
      id: 1,
      question_id: 1,
      src: "https://picsum.photos/400/600",
      alt: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit a, potenti fames ultrices turpis vel magnis montes lacinia duis, congue praesent porta sollicitudin taciti tempor nisi.",
      is_correct: false,
      created_at: "2023-02-18T17:39:00.538276+00:00",
    };
    const onSelect = jest.fn();

    render(<AnswerCard userId={userId} answer={answer} onSelect={onSelect} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("img", { name: answer.alt })
    ).toHaveAttribute("src", answer.src);
    expect(
      await screen.findByRole("button", { name: "Select" })
    ).toBeInTheDocument();
  });

  it("should select an answer when clicked", async () => {
    const userId = "1";
    const answer = {
      id: 1,
      question_id: 1,
      src: "https://picsum.photos/400/600",
      alt: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit a, potenti fames ultrices turpis vel magnis montes lacinia duis, congue praesent porta sollicitudin taciti tempor nisi.",
      is_correct: false,
      created_at: "2023-02-18T17:39:00.538276+00:00",
    };
    const onSelect = jest.fn();

    render(<AnswerCard userId={userId} answer={answer} onSelect={onSelect} />, {
      wrapper: ProvidersWrapper,
    });

    userEvent.click(await screen.findByRole("button", { name: "Select" }));

    await waitFor(() => [
      expect(upsertAnswer).toHaveBeenCalledWith({
        answerId: answer.id,
        questionId: answer.question_id,
        userId,
      }),
      expect(onSelect).toHaveBeenCalled(),
    ]);
  });
});
