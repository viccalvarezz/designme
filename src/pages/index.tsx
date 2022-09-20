import { Text } from "@chakra-ui/react";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";

const IndexPage = () => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <LayoutContainer>
          <Text>etwwe</Text>
        </LayoutContainer>
      </LayoutMain>
    </>
  );
};

export default IndexPage;
