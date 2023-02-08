import { Stack, Box } from "@chakra-ui/react";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { GameSessionCard } from "@/components/Game/GameSessionCard";
import { LayoutPrivate } from "@/components/Layout/LayoutPrivate";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { GameProfileBox } from "@/components/Game/GameProfileBox";

const HomePage = () => {
  const games = Array.from({ length: 5 }, () => ({}));

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
              {games.map((game, index) => (
                <GameSessionCard
                  key={index}
                  index={index + 1}
                  title="Name"
                  description="Description"
                />
              ))}
            </Stack>

            <Box
              maxW={{ base: "full", md: "sm" }}
              w="full"
              h="full"
              position={{ base: "static", md: "sticky" }}
              top={24}
            >
              <GameProfileBox name="Victoria Alvarez" />
            </Box>
          </Stack>
        </LayoutContainer>
      </LayoutMain>

      <LayoutFooter />
    </LayoutPrivate>
  );
};

// export const getServerSideProps = withPageAuth({ redirectTo: "/" });

export default HomePage;
