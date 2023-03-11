import React from "react";
import { Avatar, Stack, StackProps, Heading } from "@chakra-ui/react";
import { LevelStats } from "@/types";
import { ProfileStats } from "./ProfileStats";

export type ProfileCardProps = StackProps & {
  name: string;
  src?: string;
  stats: Array<LevelStats>;
};

export const ProfileCard = ({
  name,
  src,
  stats,
  ...others
}: ProfileCardProps) => {
  return (
    <Stack
      as="article"
      spacing={6}
      bgColor="orange.100"
      p={6}
      borderRadius="md"
      alignItems="center"
      w="full"
      {...others}
    >
      <Avatar name={name} size="xl" src={src} />

      <Heading as="h2" fontSize="xl">
        {name}
      </Heading>

      <ProfileStats stats={stats} />
    </Stack>
  );
};
