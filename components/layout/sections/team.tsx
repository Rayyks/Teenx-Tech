import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:
        "https://i.pinimg.com/736x/33/ec/b5/33ecb543491e50a5b215510a9b6a0131.jpg",
      firstName: "Carlo",
      lastName: "Rossy",
      positions: [" Marketing & Management ", "Affiliate Program Manager"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/carlo-rossy-110421256/",
        },
        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/d9/19/0a/d9190adcdc6b71d9e11ee63f24f79837.jpg",
      firstName: "Tri",
      lastName: "Emandany",
      positions: ["Hardware Specialist", "PC Repair Expert"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/triemandany",
        },
        {
          name: "Github",
          url: "https://github.com/triemandany",
        },
        {
          name: "X",
          url: "https://x.com/triemandany",
        },
      ],
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/d1/03/0d/d1030d322d6c980cd90f6f338f912cd1.jpg",
      firstName: "Rayyand",
      lastName: "Kananda",
      positions: ["Web Developer", "Software Specialist"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/rayyand-kananda/",
        },
        {
          name: "Github",
          url: "https://github.com/Rayyks",
        },
        {
          name: "X",
          url: "https://x.com/rayy__and",
        },
      ],
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/bc/38/9a/bc389aea0978b039f923054485688917.jpg",
      firstName: "Nak join ?",
      lastName: "PM ajah",
      positions: ["Web Developer", "Web Designer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/",
        },
        {
          name: "Github",
          url: "https://github.com/",
        },
        {
          name: "X",
          url: "https://x.com/",
        },
      ],
    },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
