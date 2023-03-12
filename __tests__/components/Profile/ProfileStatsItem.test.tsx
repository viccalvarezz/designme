import { render, screen } from "@testing-library/react";
import { ProfileStatsItem } from "@/components/Profile/ProfileStatsItem";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("ProfileStatsItem", () => {
  it("should render", async () => {
    const stat = {
      id: 1,
      name: "Basic",
      total_questions: 3,
      correct_answers: 1,
    };

    render(<ProfileStatsItem stat={stat} />, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByText("B")).toBeInTheDocument();
    expect(await screen.findByText("33 %")).toBeInTheDocument();
  });
});
