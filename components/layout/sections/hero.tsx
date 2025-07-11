"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CpuArchitecture } from "@/components/ui/cpu";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = "6287812514126"; // Nomor WhatsApp tanpa tanda hubung
    const message = "Halo Teen x, saya ingin booking service";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Order Jasa Sekarang! </span>
          </Badge>
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Solusi IT
              </span>
              Modern untuk Generasi Digital
            </h1>
          </div>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            TEENX TECH hadir sebagai partner IT Support masa kini—menyediakan
            layanan perbaikan hardware, software, hingga program reseller &
            afiliasi dengan pendekatan yang cepat, transparan, dan relevan buat
            anak muda.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              className="w-5/6 md:w-1/4 font-bold group/arrow"
              onClick={handleWhatsAppOrder}
            >
              <span className="flex shrink-0 items-center">
                Pesan Jasa
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="#benefits">Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
        {/* Responsive Device Mockup with Screen Glow */}
        <div className="relative group mt-14 md:mt-0 w-full max-w-4xl px-4">
          {/* Screen glow effect behind the device */}
          <div className="absolute inset-0 -inset-4 opacity-30 dark:opacity-25">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/15 via-slate-400/20 to-blue-500/15 dark:from-blue-400/20 dark:via-slate-300/25 dark:to-blue-400/20 blur-3xl animate-pulse"></div>
          </div>
          {/* Secondary glow layer for more depth */}
          <div className="absolute inset-0 -inset-2 opacity-20 dark:opacity-15">
            <div className="w-full h-full bg-gradient-to-br from-slate-400/20 via-blue-400/25 to-slate-400/20 dark:from-slate-300/25 dark:via-blue-300/30 dark:to-slate-300/25 blur-2xl"></div>
          </div>
          {/* Main device frame */}
          <div className="relative mx-auto border-black dark:border-black bg-black rounded-t-xl w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl aspect-[16/10] border-4 sm:border-6 md:border-8 shadow-2xl">
            {/* Inner screen glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-slate-400/40 to-blue-500/30 dark:from-blue-400/40 dark:via-slate-300/50 dark:to-blue-400/40 rounded-t-lg blur-sm opacity-50"></div>
            {/* Screen content area */}
            <div className="relative rounded-lg overflow-hidden h-full bg-white dark:bg-neutral-950 p-1 sm:p-2 shadow-inner">
              {/* Screen reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-lg"></div>
              {/* Content */}
              <div className="relative w-full h-full">
                <CpuArchitecture />
              </div>
              {/* Subtle screen scanlines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
            </div>
          </div>
          {/* Device base/stand */}
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl h-4 sm:h-5 md:h-6 lg:h-7 shadow-lg">
            {/* Device notch/camera */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl bg-gray-400 dark:bg-gray-900 w-12 sm:w-16 md:w-20 lg:w-24 h-1 sm:h-1.5 md:h-2 lg:h-2.5"></div>
          </div>
          {/* Enhanced gradient overlay with screen light influence */}
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-b from-background/0 via-background/30 to-background rounded-lg"></div>
          {/* Ambient light cast on the surface
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-blue-500/8 via-slate-400/12 to-blue-500/8 dark:from-blue-400/12 dark:via-slate-300/15 dark:to-blue-400/12 blur-xl opacity-40 rounded-full"></div> */}
        </div>
      </div>
    </section>
  );
};
