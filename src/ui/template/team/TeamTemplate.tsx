import { PageHeader } from "@/ui/molecules/PageHeader";
import { TeamGroupPhoto, TeamList } from "@/ui/organisms/team/TeamSections";
import { TEAM_PAGE } from "@/ui/content/team";

export const TeamTemplate = () => (
  <>
    <PageHeader title={TEAM_PAGE.header.title} text={TEAM_PAGE.header.text} />
    <TeamGroupPhoto />
    <TeamList />
  </>
);

export default TeamTemplate;
