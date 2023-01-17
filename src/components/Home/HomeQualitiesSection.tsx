import React from "react";
import Image from "next/image";
import {
  Stack,
  Heading,
  StackProps,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";

export type HomeQualitiesSectionProps = StackProps;

export const HomeQualitiesSection = (props: HomeQualitiesSectionProps) => {
  const qualities = [
    { title: "Commitment", src: "/images/person1.png", alt: "" },
    { title: "Patience", src: "/images/person2.png", alt: "" },
    { title: "Practice", src: "/images/person3.png", alt: "" },
  ];

  return (
    <Stack as="section" py={16} bg={useColorModeValue("cream.50", "grey.800")}>
      <LayoutContainer>
        <Stack spacing={8}>
          <Heading as="h2" fontSize="2xl" fontWeight="bold" textAlign="center">
            What do you need to start learning?
          </Heading>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={8}
          >
            {qualities.map(({ title, src, alt }, index) => (
              <GridItem key={index}>
                <Stack spacing={8} align="center">
                  <Image
                    src={src}
                    alt={alt}
                    width={128}
                    height={128}
                    layout="fixed"
                  />

                  <Heading as="h3" fontSize="lg">
                    {title}
                  </Heading>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
