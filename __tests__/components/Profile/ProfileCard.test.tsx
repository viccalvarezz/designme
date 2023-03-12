import { render, screen } from "@testing-library/react";
import { ProfileCard } from "@/components/Profile/ProfileCard";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("ProfileCard", () => {
  it("should render", async () => {
    const name = "Victoria Alvarez";
    const stats = [
      {
        id: 1,
        name: "Basic",
        total_questions: 3,
        correct_answers: 2,
      },
    ];

    render(<ProfileCard name={name} stats={stats} />, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByText(name)).toBeInTheDocument();
    expect(await screen.findByRole("img", { name })).toBeInTheDocument();
    expect(await screen.findByText("B")).toBeInTheDocument();
    expect(await screen.findByText("67 %")).toBeInTheDocument();
  });
});
