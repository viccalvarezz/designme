import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { GameSessionCard } from "@/components/Game/GameSessionCard";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

const HomePage = () => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <GameSessionCard></GameSessionCard>
      </LayoutMain>

      <LayoutFooter />
    </>
  );
};

// export const getServerSideProps = withPageAuth({ redirectTo: "/" });

export default HomePage;
