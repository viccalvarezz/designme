import React from "react";
import Image from "next/image";
import {
  Stack,
  Box,
  Heading,
  StackProps,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import {
  BiAddToQueue,
  BiAlarm,
  BiLineChart,
  BiExpand,
  BiNews,
  BiRefresh,
} from "react-icons/bi";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";

export type HomeBenefitsSectionProps = StackProps;

export const HomeBenefitsSection = (props: HomeBenefitsSectionProps) => {
  const qualities = [
    {
      title: "New sessions",
      subtitle:
        "Every month you will find new sessions and new exercises to practice.",
      icon: BiAddToQueue,
    },
    {
      title: "Short sessions",
      subtitle:
        "The sessions are short so that you can do them quickly and not get bored.",
      icon: BiAlarm,
    },
    {
      title: "View your progress",
      subtitle:
        "Your progress will be available for you to view graphically and encourage vou to complete 100%.",
      icon: BiLineChart,
    },
    {
      title: "Flexibility",
      subtitle:
        "Study when it suits you and when you want, you set your own schedule",
      icon: BiExpand,
    },
    {
      title: "Review and redo",
      subtitle:
        "You can redo and review the sessions you have completed as many times as you want.",
      icon: BiNews,
    },
    {
      title: "Interesting news",
      subtitle:
        "You will have at our disposal additional updated information about Ul/UX design.",
      icon: BiRefresh,
    },
  ];

  return (
    <Stack as="section" py={16} {...props}>
      <LayoutContainer>
        <Stack spacing={8}>
          <Heading as="h2" fontSize="2xl" fontWeight="bold" textAlign="center">
            What do we offer?
          </Heading>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            rowGap={20}
            columnGap={8}
          >
            {qualities.map(({ title, subtitle, icon }, index) => (
              <GridItem key={index}>
                <Stack spacing={8} align="center" textAlign="center">
                  <Box
                    borderRadius="full"
                    backgroundColor="green.400"
                    width={45}
                    height={45}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={icon} width={30} height={30} color="cream.50" />
                  </Box>
                  <Heading as="h3" fontSize="lg">
                    {title}
                  </Heading>
                  <p>{subtitle}</p>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
