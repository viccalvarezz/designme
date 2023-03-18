import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useUser } from "@supabase/auth-helpers-react";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { ProvidersWrapper } from "../../utils/ProvidersWrapper";

const user = {
  id: "4f6ab4dc-9c9c-4a31-87fd-0387c944dbd0",
  email: "victoria.alvarez.sordo@gmail.com",
  user_metadata: {
    avatar_url: "https://avatars.githubusercontent.com/u/43728577?v=4",
    user_name: "viccalvarezz",
    name: "Victoria Alvarez",
  },
};
const signOut = jest.fn();

jest.mock("@supabase/auth-helpers-react", () => ({
  ...jest.requireActual("@supabase/auth-helpers-react"),
  useUser: jest.fn(),
  useSupabaseClient: () => ({
    auth: {
      signOut: signOut.mockReturnValue({}),
    },
  }),
}));

describe("LayoutHeader", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render", async () => {
    render(<LayoutHeader />, {
      wrapper: (props) => <ProvidersWrapper {...props} />,
    });

    expect(await screen.findByRole("link", { name: /Home/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(
      await screen.findByRole("button", { name: /Login/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /Switch to dark mode/i })
    ).toBeInTheDocument();
  });

  it("should switch between theme modes", async () => {
    render(<LayoutHeader />, { wrapper: ProvidersWrapper });

    userEvent.click(
      await screen.findByRole("button", { name: /Switch to dark mode/i })
    );

    userEvent.click(
      await screen.findByRole("button", { name: /Switch to light mode/i })
    );

    expect(
      await screen.findByRole("button", { name: /Switch to dark mode/i })
    ).toBeInTheDocument();
  });

  it("should render when a user is authenticated", async () => {
    (useUser as jest.Mock).mockReturnValueOnce(user);

    render(<LayoutHeader />, {
      wrapper: ProvidersWrapper,
    });

    expect(await screen.findByRole("link", { name: /Home/i })).toHaveAttribute(
      "href",
      "/games"
    );
    expect(
      await screen.findByRole("img", { name: "Victoria Alvarez" })
    ).toBeInTheDocument();
  });

  it("should logout", async () => {
    (useUser as jest.Mock).mockReturnValueOnce(user);

    render(<LayoutHeader />, {
      wrapper: ProvidersWrapper,
    });

    userEvent.click(
      await screen.findByRole("img", { name: "Victoria Alvarez" })
    );

    userEvent.click(await screen.findByRole("menuitem", { name: /Logout/i }));

    await waitFor(() => expect(signOut).toHaveBeenCalled());
  });
});
