import { render, screen } from "@testing-library/react";
import { GameSessionCard } from "@/components/Game/GameSessionCard";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

describe("GameSessionCard", () => {
  it("should render", async () => {
    const index = 1;
    const game = {
      id: 1,
      name: "Fuentes",
      description:
        "Who are you developing for? How will they use your design? Building user personas can answer these",
      created_at: "2023-02-18T17:30:20.058376+00:00",
      level_id: 1,
    };

    render(<GameSessionCard index={index} game={game} />, {
      wrapper: ProvidersWrapper,
    });

    expect(
      await screen.findByRole("heading", {
        name: game.name,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(await screen.findByText(game.description)).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: "Start" })).toHaveAttribute(
      "href",
      `/games/${game.id}`
    );
  });
});
