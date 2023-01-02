import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { HomeHero } from "@/components/Home/HomeHero";
import { HomeQualitiesSection } from "@/components/Home/HomeQualitiesSection";
import { HomeBenefitsSection } from "@/components/Home/HomeBenefitsSection";

const IndexPage = () => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <HomeHero />
        <HomeQualitiesSection />
        <HomeBenefitsSection />
      </LayoutMain>
    </>
  );
};

export default IndexPage;
