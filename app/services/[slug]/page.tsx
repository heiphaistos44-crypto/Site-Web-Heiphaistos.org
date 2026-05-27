import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_DATA, SERVICE_MAP } from "@/lib/serviceData";
import ServiceDetailPage from "@/components/ServiceDetailPage";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return SERVICE_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_MAP[slug];
  if (!service) return {};
  return { title: service.metaTitle };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const service = SERVICE_MAP[slug];
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
