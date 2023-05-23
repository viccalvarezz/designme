import React from "react";
import {
  Stack,
  Box,
  Heading,
  StackProps,
  Grid,
  GridItem,
  Icon,
  Text,
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
  const benefits = [
    {
      title: "New sessions",
      description:
        "Every month you will find new sessions and new exercises to practice.",
      icon: BiAddToQueue,
    },
    {
      title: "Short sessions",
      description:
        "The sessions are short so that you can do them quickly and not get bored.",
      icon: BiAlarm,
    },
    {
      title: "View your progress",
      description:
        "Your progress will be available for you to view graphically and encourage you to complete 100%.",
      icon: BiLineChart,
    },
    {
      title: "Flexibility",
      description:
        "Study when it suits you and when you want, you set your own schedule",
      icon: BiExpand,
    },
    {
      title: "Review and redo",
      description:
        "You can redo and review the sessions you have completed as many times as you want.",
      icon: BiNews,
    },
    {
      title: "Interesting news",
      description:
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
            rowGap={{ base: 12, md: 20 }}
            columnGap={28}
          >
            {benefits.map(({ title, description, icon }, index) => (
              <GridItem key={index}>
                <Stack spacing={4} align="center" textAlign="center">
                  <Box
                    borderRadius="full"
                    bgColor="green.400"
                    w={45}
                    h={45}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={icon} w={30} h={30} color="cream.50" />
                  </Box>
                  <Heading as="h3" fontSize="lg">
                    {title}
                  </Heading>
                  <Text>{description}</Text>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
