import { render, screen } from "@testing-library/react";
import { ProfileStats } from "@/components/Profile/ProfileStats";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("ProfileStats", () => {
  it("should render", async () => {
    const name = "Victoria Alvarez";
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

    render(<ProfileStats stats={stats} />, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByText("B")).toBeInTheDocument();
    expect(await screen.findByText("67 %")).toBeInTheDocument();

    expect(await screen.findByText("I")).toBeInTheDocument();
    expect(await screen.findByText("100 %")).toBeInTheDocument();
  });
});
