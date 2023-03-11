import React from "react";
import { Stack, Box, Text, StackProps } from "@chakra-ui/react";
import { LevelStats } from "@/types";

export type ProfileStatsItemProps = StackProps & {
  stat: LevelStats;
};

export const ProfileStatsItem = ({
  stat,
  ...others
}: ProfileStatsItemProps) => {
  const percentage = Math.round(
    stat.total_questions > 0
      ? (stat.correct_answers / stat.total_questions) * 100
      : 0
  );

  return (
    <Stack direction="column" pt={8} spacing={2} {...others}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        h={36}
      >
        <Box
          position="relative"
          w={4}
          h={`${percentage > 0 ? percentage : 5}%`}
          bgColor="yellow.500"
          borderRadius="sm"
        >
          <Box
            position="absolute"
            top={-8}
            whiteSpace="nowrap"
            left="50%"
            transform="translate(-50%, 0)"
          >
            <Text fontWeight="bold" textAlign="center">
              {percentage} %
            </Text>
          </Box>
        </Box>
      </Box>

      <Text fontWeight="bold" textAlign="center">
        {stat.name.charAt(0).toUpperCase()}
      </Text>
    </Stack>
  );
};
