import { render, screen } from "@testing-library/react";
import { QuestionCard } from "@/components/Question/QuestionCard";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("QuestionCard", () => {
  it("should render without answer", async () => {
    const index = 1;
    const question = {
      id: 1,
      game_id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
      created_at: "2023-02-18T17:33:50.912759+00:00",
    };

    render(<QuestionCard index={index} question={question} />, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByText(question.description)).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: "Start" })).toHaveAttribute(
      "href",
      `/questions/${question.id}`
    );
  });

  it("should render with answer", async () => {
    const index = 1;
    const question = {
      id: 1,
      game_id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
      created_at: "2023-02-18T17:33:50.912759+00:00",
      answer: {
        id: 1,
        question_id: 1,
        src: "https://picsum.photos/400/600",
        alt: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit a, potenti fames ultrices turpis vel magnis montes lacinia duis, congue praesent porta sollicitudin taciti tempor nisi.",
        is_correct: false,
        created_at: "2023-02-18T17:39:00.538276+00:00",
      },
    };

    render(<QuestionCard index={index} question={question} />, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByText(question.description)).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: "Retry" })).toHaveAttribute(
      "href",
      `/questions/${question.id}`
    );
  });
});
