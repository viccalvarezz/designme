import { Session } from "@supabase/supabase-js";

export const session = {
  expires_at: 1678645783,
  expires_in: 3564,
  token_type: "bearer",
  access_token: "access_token",
  refresh_token: "refresh_token",
  provider_token: "provider_token",
  provider_refresh_token: null,
  user: {
    id: "4f6ab4dc-9c9c-4a31-87fd-0387c944dbd0",
    aud: "authenticated",
    email: "victoria.alvarez.sordo@gmail.com",
    phone: "",
    app_metadata: {
      provider: "github",
      providers: ["github"],
    },
    user_metadata: {
      avatar_url: "https://avatars.githubusercontent.com/u/43728577?v=4",
      email: "victoria.alvarez.sordo@gmail.com",
      email_verified: true,
      full_name: "Victoria Alvarez",
      iss: "https://api.github.com",
      name: "Victoria Alvarez",
      preferred_username: "viccalvarezz",
      provider_id: "43728577",
      sub: "43728511",
      user_name: "viccalvarezz",
    },
    role: "authenticated",
    aal: "aal1",
    amr: [
      {
        method: "oauth",
        timestamp: 1678642183,
      },
    ],
    session_id: "0a6de51a-5324-4389-be0f-eb72ede3c113",
  },
};
