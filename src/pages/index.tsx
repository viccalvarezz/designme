import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { HomeHero } from "@/components/Home/HomeHero";

const IndexPage = () => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <HomeHero />
      </LayoutMain>
    </>
  );
};

export default IndexPage;
