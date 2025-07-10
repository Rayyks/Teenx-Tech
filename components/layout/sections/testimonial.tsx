"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Rafa Alamsyah",
    userName: "Mahasiswa IT",
    comment:
      "Gila sih TEENX TECH ini! Laptop gw yang udah lemot abis langsung kenceng lagi setelah dibenerin sama mereka. Service hardware-nya top banget, teknisinya juga ramah dan ngejelasin masalahnya dengan detail. Worth it banget deh!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sari Dewi",
    userName: "Content Creator",
    comment:
      "Butuh website portfolio buat nampung karya-karya gw, eh ternyata TEENX TECH bisa bikinin! Designnya kece abis dan responsive di semua device. Tim mereka bener-bener paham kebutuhan creator zaman now. Recommended!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Budi Santoso",
    userName: "Pemilik Startup",
    comment:
      "Company profile website yang dibikin TEENX TECH buat startup gw keren banget! Professional tapi tetep modern. Clients jadi lebih percaya sama bisnis gw. Harga juga masih masuk akal buat budget startup.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dina Pratiwi",
    userName: "Freelancer Designer",
    comment:
      "Software Adobe gw error terus, udah stress banget. Untung ada TEENX TECH yang bisa solve masalahnya dengan cepat. Sekarang software gw running smooth lagi. Pelayanannya fast response banget!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Kevin Wijaya",
    userName: "Online Shop Owner",
    comment:
      "Landing page yang dibikin TEENX TECH buat toko online gw bikin conversion rate naik drastis! Design-nya clean, loading-nya cepet, dan mobile-friendly. Tim mereka ngerti banget gimana bikin website yang convert!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Putri Maharani",
    userName: "Marketing Manager",
    comment:
      "PC kantor gw sering hang dan lemot, udah ganggu produktivitas banget. TEENX TECH dateng langsung upgrade RAM dan bersihin sistemnya. Sekarang PC gw kayak baru lagi! Service on-site mereka juga praktis banget.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Dengerin apa kata mereka tentang TEENX TECH
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
