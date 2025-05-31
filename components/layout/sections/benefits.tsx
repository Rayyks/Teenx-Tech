import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Fix Sekali, Tenang Terus",
    description:
      "Kami enggak cuma beresin yang keliatan doang, tapi nyelam sampai dalem. Jadi jarang banget ada masalah balik lagi.",
  },
  {
    icon: "LineChart",
    title: "Cepat? Bisa Banget",
    description: "Mau siapin hari ini? Besok? Selalu siap tempur.",
  },
  {
    icon: "Wallet",
    title: "Harga Anak Kampus Banget",
    description:
      "Service berkualitas enggak harus mahal. Kita bikin semua affordable tapi tetap premium.",
  },
  {
    icon: "Sparkle",
    title: "Akses Full Digital",
    description:
      "Kami Lagi develop web app biar lo bisa booking, tracking, sampai bayar—all in one place. Riwayat service lo juga bakal ke-record.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kenapa Harus TEENX?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kami bukan cuma sekadar jasa service, kami adalah solusi IT lengkap
            untuk kamu. Dari perbaikan hardware hingga software, kami siap
            membantu kamu dengan cepat dan profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
