import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Grid, Heading, Stack, Box, Text } from "@chakra-ui/react";
import { Database } from "@/types/supabase";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { useUser } from "@supabase/auth-helpers-react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { createServices } from "@/services";
import { Answer, Question } from "@/types";
import { AnswerCard } from "@/components/Answer/AnswerCard";
import { AnswerModal } from "@/components/Answer/AnswerModal";
import { withPrivatePage } from "@/utils/withPrivatePage";
import { getPrivateProps } from "@/utils/getPrivateProps";

export interface QuestionDetailPageProps {
  question: Question;
  answers: Array<Answer>;
}

const QuestionDetailPage = ({ question, answers }: QuestionDetailPageProps) => {
  const router = useRouter();
  const user = useUser();
  const [answer, setAnswer] = useState<Answer>(null);

  const isOpen = !!answer;

  const handleSelect = (
    event: React.MouseEvent<HTMLButtonElement>,
    answer: Answer
  ) => {
    setAnswer(answer);
  };

  const handleClose = () => {
    setAnswer(null);

    router.push(`/games/${question.game_id}`);
  };

  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <LayoutContainer>
          <Stack spacing={8} alignItems="center">
            <Stack w="full" spacing={2}>
              <Heading as="h1">Question</Heading>
              <Text>{question.description}</Text>
            </Stack>

            <Box w="full" maxW="container.lg">
              <AnswerModal
                isOpen={isOpen}
                answer={answer}
                onClose={handleClose}
              />

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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = getPrivateProps(
  async (ctx) => {
    const { params } = ctx;
    const id = Number(params.id as string);

    const supabase = createServerSupabaseClient<Database>(ctx);
    const services = createServices({ supabase });

    const [question, answers] = await Promise.all([
      services.questions.fetchOne({ id }),
      services.answers.fetchAll({ questionId: id }),
    ]);

    if (!question) {
      return { notFound: true };
    }

    return {
      props: {
        question,
        answers,
      },
    };
  },
  { isRequired: true }
);

export default withPrivatePage(QuestionDetailPage);
