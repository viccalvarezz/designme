import { render, screen } from "@testing-library/react";
import { HomeHero } from "@/components/Home/HomeHero";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("HomeHero", () => {
  it("should render", async () => {
    render(<HomeHero />, { wrapper: ProvidersWrapper });

    expect(
      await screen.findByRole("heading", {
        name: /Learn the basics of UI\/UX design/i,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /A fun, easy and fast way to learn the essentials of user interface design/i
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /Code base/i })
    ).toHaveAttribute("href", "https://github.com/viccalvarezz");
    expect(
      await screen.findByRole("button", { name: /Start learning/i })
    ).toBeInTheDocument();
  });
});
