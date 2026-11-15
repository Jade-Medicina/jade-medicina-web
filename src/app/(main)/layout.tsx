import { PublicLayout } from "@/ui/layouts/PublicLayout";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PublicLayout>{children}</PublicLayout>;
}
