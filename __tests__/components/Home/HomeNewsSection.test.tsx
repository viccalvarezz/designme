import { render, screen } from "@testing-library/react";
import { HomeNewsSection } from "@/components/Home/HomeNewsSection";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("HomeNewsSection", () => {
  it("should render", async () => {
    render(<HomeNewsSection />, { wrapper: ProvidersWrapper });

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
});
