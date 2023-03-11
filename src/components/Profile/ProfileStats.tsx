import React from "react";
import { Stack, StackProps } from "@chakra-ui/react";
import { LevelStats } from "@/types";
import { ProfileStatsItem } from "./ProfileStatsItem";

export type ProfileStatsProps = StackProps & {
  stats: Array<LevelStats>;
};

export const ProfileStats = ({ stats, ...others }: ProfileStatsProps) => {
  return (
    <Stack direction="row" spacing={10} {...others}>
      {stats
        .sort((a, b) => a.id - b.id)
        .map((stat) => (
          <ProfileStatsItem stat={stat} />
        ))}
    </Stack>
  );
};
