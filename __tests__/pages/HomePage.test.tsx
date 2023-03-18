import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/index";
import { ProvidersWrapper } from "../utils/ProvidersWrapper";

describe("HomePage", () => {
  it("should render hero section", async () => {
    render(<HomePage />, { wrapper: ProvidersWrapper });

    expect(
      await screen.findByRole("heading", {
        name: /Learn the basics of UI\/UX design/i,
        level: 1,
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

  it("should render qualities section", async () => {
    render(<HomePage />, { wrapper: ProvidersWrapper });

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

  it("should render benefits section", async () => {
    render(<HomePage />, { wrapper: ProvidersWrapper });

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

  it("should render news section", async () => {
    render(<HomePage />, { wrapper: ProvidersWrapper });

    const links = await screen.findAllByRole("link", {
      name: /See more/i,
    });

    expect(
      await screen.findByRole("heading", {
        name: /Basic principles of design?/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Read the fundamental principles for designing user interfaces to get into context./i
      )
    ).toBeInTheDocument();
    expect(links[0]).toHaveAttribute(
      "href",
      "https://xd.adobe.com/ideas/process/ui-design/4-golden-rules-ui-design/"
    );

    expect(
      await screen.findByRole("heading", {
        name: /Web desing trends 2023/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Read about the possible user interface designs that will be trending this year./i
      )
    ).toBeInTheDocument();
    expect(links[1]).toHaveAttribute(
      "href",
      "https://ttt.studio/blog/7-ux-ui-design-trends-to-look-out-for-in-2023/"
    );
  });

  it("should render footer", async () => {
    render(<HomePage />, { wrapper: ProvidersWrapper });

    expect(
      await screen.findByText(/Copyright © 2023 designme/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Made with ❤️ by @viccalvarezz/i)
    ).toBeInTheDocument();
  });
});
