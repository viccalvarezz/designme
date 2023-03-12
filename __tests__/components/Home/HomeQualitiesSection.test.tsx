import { render, screen } from "@testing-library/react";
import { HomeQualitiesSection } from "@/components/Home/HomeQualitiesSection";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("HomeQualitiesSection", () => {
  it("should render qualities section", async () => {
    render(<HomeQualitiesSection />, { wrapper: ProvidersWrapper });

    expect(
      await screen.findByRole("heading", {
        name: /What do you need to start learning?/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        name: /Commitment/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        name: /Patience/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        name: /Practice/i,
        level: 3,
      })
    ).toBeInTheDocument();
  });
});
