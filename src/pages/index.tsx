import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { HomeHero } from "@/components/Home/HomeHero";
import { HomeQualitiesSection } from "@/components/Home/HomeQualitiesSection";
import { HomeBenefitsSection } from "@/components/Home/HomeBenefitsSection";
import { HomeNewsSection } from "@/components/Home/HomeNewsSection";

const IndexPage = () => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <HomeHero />

        <HomeQualitiesSection />

        <HomeBenefitsSection />

        <HomeNewsSection />
      </LayoutMain>

      <LayoutFooter />
    </>
  );
};

export default IndexPage;
