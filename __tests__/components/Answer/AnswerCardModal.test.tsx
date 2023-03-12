import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AnswerModal } from "@/components/Answer/AnswerModal";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("AnswerCard", () => {
  it("should render when is not correct", async () => {
    const question = {
      id: 1,
      game_id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
      created_at: "2023-02-18T17:33:50.912759+00:00",
    };
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
    const onClose = jest.fn();

    render(
      <AnswerModal
        isOpen
        question={question}
        answer={answer}
        onClose={onClose}
      />,
      {
        wrapper: ProvidersWrapper,
      }
    );

    expect(await screen.findByText("Wrong answer")).toBeInTheDocument();
    expect(
      await screen.findByText(
        "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?"
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
  });

  it("should render when is correct", async () => {
    const question = {
      id: 1,
      game_id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
      created_at: "2023-02-18T17:33:50.912759+00:00",
    };
    const answer = {
      id: 1,
      question_id: 1,
      src: "https://picsum.photos/400/600",
      alt: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit a, potenti fames ultrices turpis vel magnis montes lacinia duis, congue praesent porta sollicitudin taciti tempor nisi.",
      is_correct: true,
      created_at: "2023-02-18T17:39:00.538276+00:00",
    };
    const onClose = jest.fn();

    render(
      <AnswerModal
        isOpen
        question={question}
        answer={answer}
        onClose={onClose}
      />,
      {
        wrapper: ProvidersWrapper,
      }
    );

    expect(await screen.findByText("Right answer")).toBeInTheDocument();
    expect(
      await screen.findByText(
        "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?"
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
  });

  it("should close modal when continue button is clicked", async () => {
    const question = {
      id: 1,
      game_id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit a ?",
      created_at: "2023-02-18T17:33:50.912759+00:00",
    };
    const answer = {
      id: 1,
      question_id: 1,
      src: "https://picsum.photos/400/600",
      alt: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit a, potenti fames ultrices turpis vel magnis montes lacinia duis, congue praesent porta sollicitudin taciti tempor nisi.",
      is_correct: true,
      created_at: "2023-02-18T17:39:00.538276+00:00",
    };
    const onClose = jest.fn();

    render(
      <AnswerModal
        isOpen
        question={question}
        answer={answer}
        onClose={onClose}
      />,
      {
        wrapper: ProvidersWrapper,
      }
    );

    userEvent.click(await screen.findByRole("button", { name: "Continue" }));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });
});
