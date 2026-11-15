import { PageHeader } from "@/ui/molecules/PageHeader";
import { ServicesIndex } from "@/ui/organisms/services/ServicesIndex";
import { ServiceCover } from "@/ui/organisms/services/ServiceCover";
import { ServiceBlocks } from "@/ui/organisms/services/ServiceBlocks";
import type { Service } from "@/models/content.model";
import { SERVICES_PAGE } from "@/ui/content/services";

export const ServicesTemplate = () => (
  <>
    <PageHeader title={SERVICES_PAGE.header.title} text={SERVICES_PAGE.header.text} />
    <ServicesIndex />
  </>
);

export const ServiceDetailTemplate = ({ service }: { service: Service }) => (
  <article aria-labelledby="titulo-servicio">
    <ServiceCover service={service} />
    <ServiceBlocks blocks={service.blocks} />
  </article>
);
