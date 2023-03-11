import { Stack, Box, Heading } from "@chakra-ui/react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { GameSessionCard } from "@/components/Game/GameSessionCard";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { ProfileCard } from "@/components/Profile/ProfileCard";
import { useUser } from "@supabase/auth-helpers-react";
import { Level, Game, LevelStats } from "@/types";
import { createServices } from "@/services";
import { getPrivateProps } from "@/utils/getPrivateProps";
import { withPrivatePage } from "@/utils/withPrivatePage";

export interface GamesPageProps {
  levels: Array<Level>;
  games: Array<Game>;
  stats: Array<LevelStats>;
}

const GamesPage = ({ levels, games, stats }: GamesPageProps) => {
  const user = useUser();

  return (
    <>
      <LayoutHeader />
      <LayoutMain my={8}>
        <LayoutContainer>
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            h="full"
            spacing={6}
          >
            <Stack flex={1} spacing={10}>
              {levels.map((level) => (
                <Stack key={level.id} spacing={4}>
                  <Heading>
                    {level.name.charAt(0)}: {level.name}
                  </Heading>

                  <Stack spacing={10}>
                    {games
                      .filter((game) => game.level_id === level.id)
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
              <ProfileCard
                name={user?.user_metadata.name}
                src={user?.user_metadata.avatar_url}
                stats={stats}
              />
            </Box>
          </Stack>
        </LayoutContainer>
      </LayoutMain>

      <LayoutFooter />
    </>
  );
};

export const getServerSideProps = getPrivateProps(
  async (ctx, session) => {
    const supabase = createServerSupabaseClient<Database>(ctx);
    const services = createServices({ supabase });

    const [levels, games, stats] = await Promise.all([
      services.levels.fetchAll(),
      services.games.fetchAll(),
      services.levels.fetchStats({ userId: session.user.id }),
    ]);

    return {
      props: {
        levels,
        games,
        stats,
      },
    };
  },
  { isRequired: true }
);

export default withPrivatePage(GamesPage);
