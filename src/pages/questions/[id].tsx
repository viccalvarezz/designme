import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Grid, Heading, Stack, Box, Text } from "@chakra-ui/react";
import { Database } from "@/types/supabase";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { LayoutPrivate } from "@/components/Layout/LayoutPrivate";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { AnswerCard } from "@/components/Answer/AnswerCard";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { createServices } from "@/services";
import { useUser } from "@supabase/auth-helpers-react";
import { Answer, Question } from "@/types";

export interface QuestionDetailPageProps {
  question: Question;
  answers: Array<Answer>;
}

const QuestionDetailPage = ({ question, answers }: QuestionDetailPageProps) => {
  const router = useRouter();
  const user = useUser();

  const handleSelect = () => {
    router.push(`/games/${question.game_id}`);
  };

  return (
    <LayoutPrivate>
      <LayoutHeader />
      <LayoutMain>
        <LayoutContainer>
          <Stack spacing={8} alignItems="center">
            <Stack w="full" spacing={2}>
              <Heading as="h1">Question</Heading>
              <Text>{question.description}</Text>
            </Stack>

            <Box w="full" maxW="container.lg">
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={8}
              >
                {answers.map((answer, index) => (
                  <AnswerCard
                    key={index}
                    userId={user.id}
                    questionId={question.id}
                    answer={answer}
                    onSelect={handleSelect}
                  />
                ))}
              </Grid>
            </Box>
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

  const [question, answers] = await Promise.all([
    services.questions.fetchOne({ id }),
    services.answers.fetchAll({ questionId: id }),
  ]);

  return {
    props: {
      question,
      answers,
    },
  };
};

export default QuestionDetailPage;
