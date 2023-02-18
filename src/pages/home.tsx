import { Stack, Box, Heading } from "@chakra-ui/react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { GameSessionCard } from "@/components/Game/GameSessionCard";
import { LayoutPrivate } from "@/components/Layout/LayoutPrivate";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { GameProfileBox } from "@/components/Game/GameProfileBox";
import { GetServerSideProps } from "next";
import { useUser } from "@supabase/auth-helpers-react";
import { Game } from "@/types";

export interface HomePageProps {
  games: Array<Game>;
}

const HomePage = ({ games }: HomePageProps) => {
  const user = useUser();
  const groups = Array.from(new Set(games.map((game) => game.level)));

  return (
    <LayoutPrivate>
      <LayoutHeader />
      <LayoutMain my={8}>
        <LayoutContainer>
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            h="full"
            spacing={6}
          >
            <Stack flex={1} spacing={10}>
              {groups.map((level) => (
                <Stack key={level} spacing={4}>
                  <Heading>{level}</Heading>

                  <Stack spacing={10}>
                    {games
                      .filter((game) => game.level === level)
                      .map((game, index) => (
                        <GameSessionCard
                          key={index}
                          index={index + 1}
                          game={game}
                        />
                      ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>

            <Box
              maxW={{ base: "full", md: "sm" }}
              w="full"
              h="full"
              position={{ base: "static", md: "sticky" }}
              top={24}
            >
              <GameProfileBox
                name={user?.user_metadata.name}
                src={user?.user_metadata.avatar_url}
              />
            </Box>
          </Stack>
        </LayoutContainer>
      </LayoutMain>

      <LayoutFooter />
    </LayoutPrivate>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient<Database>(ctx);
  // Check if we have a session
  const { data: games } = await supabase
    .from("games")
    .select("*")
    .order("id", { ascending: true });

  return {
    props: {
      games,
    },
  };
};

export default HomePage;
