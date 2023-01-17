import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { HomeHero } from "@/components/Home/HomeHero";
import { HomeQualitiesSection } from "@/components/Home/HomeQualitiesSection";
import { HomeBenefitsSection } from "@/components/Home/HomeBenefitsSection";
import { HomeNewsSection } from "@/components/Home/HomeNewsSection";
import { Center, Divider } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <HomeHero />
        <Center>
          <Divider w="container.xl" />
        </Center>
        <HomeQualitiesSection />
        <Center>
          <Divider w="container.xl" />
        </Center>
        <HomeBenefitsSection />
        <Center>
          <Divider w="container.xl" />
        </Center>
        <HomeNewsSection />
      </LayoutMain>

      <LayoutFooter />
    </>
  );
};

export default IndexPage;
