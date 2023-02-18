import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Heading, Stack } from "@chakra-ui/react";
import { Database } from "@/types/supabase";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { LayoutPrivate } from "@/components/Layout/LayoutPrivate";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { QuestionCard } from "@/components/Question/QuestionCard";
import { GetServerSideProps } from "next";
import { createServices } from "@/services";

const GameDetailPage = ({ game, questions }) => {
  console.log(questions);

  return (
    <LayoutPrivate>
      <LayoutHeader />
      <LayoutMain>
        <LayoutContainer>
          <Stack spacing={8}>
            <Heading>{game.name}</Heading>

            <Stack flex={1} spacing={10}>
              {questions.map((question, index) => (
                <QuestionCard
                  key={index}
                  index={index + 1}
                  question={question}
                />
              ))}
            </Stack>
          </Stack>
        </LayoutContainer>
      </LayoutMain>

      <LayoutFooter />
    </LayoutPrivate>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  const id = Number(params.id as string);

  const supabase = createServerSupabaseClient<Database>(ctx);
  const services = createServices({ supabase });
  // Check if we have a session
  const [game, questions] = await Promise.all([
    services.games.fetchOne({ id }),
    services.questions.fetchAll({ gameId: id }),
  ]);

  return {
    props: {
      game,
      questions,
    },
  };
};

export default GameDetailPage;
