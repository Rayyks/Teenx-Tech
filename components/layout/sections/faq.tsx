import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa aja jenis perangkat yang bisa kami servis",
    answer:
      "Kami melayani perbaikan laptop, PC desktop, perangkat periferal (kayak keyboard, mouse, headset), dan perangkat lunak (software troubleshooting, install ulang, optimasi, dll).",
    value: "item-1",
  },
  {
    question: "Berapa lama waktu pengerjaannya?",
    answer:
      "Tergantung tingkat kerusakan dan antrian, tapi umumnya Servis ringan: bisa selesai dalam 1 hari, Servis sedang hingga berat: 2–5 hari\nKami juga punya opsi express service kalau lo butuh buru-buru.",
    value: "item-2",
  },
  {
    question: "Apa jaminannya setelah perangkat diperbaiki?",
    answer:
      "Setiap perangkat yang kami servis punya garansi pengerjaan hingga 30 hari. Kami juga selalu dokumentasikan hasil servis, jadi kalau ada kendala lanjutan, kita siap bantu tanpa ribet.",
    value: "item-3",
  },
  {
    question: "Apakah harus datang langsung untuk servis?",
    answer:
      "Nggak harus. Kami sedang kembangkan sistem booking online dan tracking order via web app. Untuk sekarang, lo bisa chat kami dulu buat atur penjemputan atau antar langsung.",
    value: "item-4",
  },
  {
    question: "Apakah TEENX juga jual produk atau cuma jasa servis aja?",
    answer:
      "Kami juga punya program reseller & affiliate untuk produk digital maupun hardware. Lo bisa gabung buat dapet komisi dari tiap penjualan, atau beli produk terpercaya lewat kami.",
    value: "item-5",
  },
  {
    question: "Kenapa harus pilih TEENX, bukan tempat servis lain?",
    answer:
      "Karena kami bukan sekadar perbaiki yang rusak. Kami cari akar masalahnya dan perbaiki dari dalam—biar gak balik rusak.Harganya juga pas buat kantong anak kuliahan, dan pelayanannya digital-friendly banget.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Pertanyaan Umum
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
