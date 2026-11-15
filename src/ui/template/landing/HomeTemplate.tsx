import { HomeHero } from "@/ui/organisms/hero/HomeHero";
import { QuickAccess } from "@/ui/organisms/quickAccess/QuickAccess";
import { HomeServices } from "@/ui/organisms/homeServices/HomeServices";
import { Benefits } from "@/ui/organisms/benefits/Benefits";
import { HomeClosing } from "@/ui/organisms/homeClosing/HomeClosing";

export const HomeTemplate = () => (
  <>
    <HomeHero />
    <QuickAccess />
    <HomeServices />
    <Benefits />
    <HomeClosing />
  </>
);

export default HomeTemplate;
