import React from "react";
import {
  Stack,
  StackProps,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";

export type HomeNewsSectionProps = StackProps;

export const HomeNewsSection = (props: HomeNewsSectionProps) => {
  const news = [
    {
      title: "Basic principles of design",
      description:
        "Read the fundamental principles for designing user interfaces to get into context.",
      link: "https://xd.adobe.com/ideas/process/ui-design/4-golden-rules-ui-design/",
    },
    {
      title: "Web desing trends 2023",
      description:
        "Read about the possible user interface designs that will be trending this year.",
      link: "https://ttt.studio/blog/7-ux-ui-design-trends-to-look-out-for-in-2023/",
    },
  ];

  return (
    <Stack as="section" py={16} bg="cream.50" {...props}>
      <LayoutContainer>
        <Stack spacing={8}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={8}
            justifyItems="center"
          >
            {news.map(({ title, description, link }, index) => (
              <GridItem key={index} w={{ base: "100%", lg: "450px" }}>
                <Stack
                  as="article"
                  boxShadow="md"
                  borderRadius="md"
                  bgColor="white"
                  p={8}
                  spacing={4}
                  h="full"
                >
                  <Stack flex={1} spacing={4}>
                    <Heading as="h2" fontSize="lg">
                      {title}
                    </Heading>

                    <Text>{description}</Text>
                  </Stack>
                  <Button
                    as="a"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={link}
                    colorScheme="green"
                    w={28}
                  >
                    See more
                  </Button>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
