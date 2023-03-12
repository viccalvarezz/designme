import { render, screen } from "@testing-library/react";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("LayoutFooter", () => {
  it("should render footer", async () => {
    render(<LayoutFooter />, { wrapper: ProvidersWrapper });

    expect(
      await screen.findByText(/Copyright © 2023 designme/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Made with ❤️ by @viccalvarezz/i)
    ).toBeInTheDocument();
  });
});
