import { render, screen } from "@testing-library/react";
import { HomeBenefitsSection } from "@/components/Home/HomeBenefitsSection";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("HomeBenefitsSection", () => {
  it("should render", async () => {
    render(<HomeBenefitsSection />, { wrapper: ProvidersWrapper });

    expect(
      await screen.findByRole("heading", {
        name: /What do we offer?/i,
        level: 2,
      })
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /New sessions?/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Every month you will find new sessions and new exercises to practice./i
      )
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /Short sessions/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /The sessions are short so that you can do them quickly and not get bored./i
      )
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /View your progress/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Your progress will be available for you to view graphically and encourage vou to complete 100%./i
      )
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /Flexibility/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Study when it suits you and when you want, you set your own schedule/i
      )
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /Review and redo/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /You can redo and review the sessions you have completed as many times as you want./i
      )
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", {
        name: /Interesting news/i,
        level: 3,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /You will have at our disposal additional updated information about Ul\/UX design./i
      )
    ).toBeInTheDocument();
  });
});
