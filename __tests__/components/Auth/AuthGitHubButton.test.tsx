import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useUser } from "@supabase/auth-helpers-react";
import { AuthGitHubButton } from "@/components/Auth/AuthGitHubButton";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";
import { session } from "../../../__mocks__/session";

const push = jest.fn();
const signInWithOAuth = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({ push }),
}));

jest.mock("@supabase/auth-helpers-react", () => ({
  ...jest.requireActual("@supabase/auth-helpers-react"),
  useUser: jest.fn(),
  useSupabaseClient: () => ({
    auth: {
      signInWithOAuth: signInWithOAuth.mockReturnValue({}),
    },
  }),
}));

describe("LayoutHeader", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render", async () => {
    const name = "Login";

    render(<AuthGitHubButton>{name}</AuthGitHubButton>, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByRole("button", { name }));
  });

  it("should login when clicked", async () => {
    // (useUser as jest.Mock).mockReturnValue(session.user);

    const name = "Login";

    render(<AuthGitHubButton>{name}</AuthGitHubButton>, {
      wrapper: ProvidersWrapper,
    });

    userEvent.click(await screen.findByRole("button", { name }));

    await waitFor(() =>
      expect(signInWithOAuth).toHaveBeenCalledWith({
        options: { redirectTo: "http://localhost" },
        provider: "github",
      })
    );
  });

  it("should navigate to games when authenticated", async () => {
    (useUser as jest.Mock).mockReturnValue(session.user);

    const name = "Login";

    render(<AuthGitHubButton>{name}</AuthGitHubButton>, {
      wrapper: ProvidersWrapper,
    });

    userEvent.click(await screen.findByRole("button", { name }));

    await waitFor(() => expect(push).toHaveBeenCalledWith("/games"));
  });
});
