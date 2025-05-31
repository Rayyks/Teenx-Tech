import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Hardware Support",
    description:
      "Perbaikan PC, laptop, aksesoris. Kami deep-dive, bukan cuma perbaiki gejala.",
    pro: 0,
  },
  {
    title: "Software Services",
    description:
      "Install ulang, optimasi sistem, troubleshooting error, dan lainnya.",
    pro: 0,
  },
  {
    title: "Marketing & Reseller Program",
    description:
      "Gabung jadi affiliate produk digital & hardware, dapet komisi dari tiap penjualan.",
    pro: 0,
  },
  {
    title: "Jasa Pembuatan Website",
    description:
      "Buat website profesional untuk bisnis Anda, mulai dari desain hingga pengembangan.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Layanan Kami
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Layanan IT Terbaik untuk Anda
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Kami menyediakan berbagai layanan IT untuk memenuhi kebutuhan Anda,
        mulai dari perbaikan hardware hingga optimasi software.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              New
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
