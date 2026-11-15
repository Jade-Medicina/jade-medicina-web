import { PageHeader } from "@/ui/molecules/PageHeader";
import { Button } from "@/ui/atoms/Button";
import { UI_TEXT } from "@/ui/content/site";

export const NotFoundTemplate = () => (
  <PageHeader title={UI_TEXT.notFound.title} text={UI_TEXT.notFound.text}>
    <Button href="/" variant="light" icon="back">
      {UI_TEXT.notFound.cta}
    </Button>
  </PageHeader>
);

export default NotFoundTemplate;
