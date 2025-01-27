"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
  description: string;
}

const clients: Client[] = [
  { name: "TechCorp", logo: "/clients/tech.svg", description: "Digital Display Solutions" },
  { name: "RetailGiant", logo: "/clients/retail.svg", description: "Store Signage" },
  { name: "HospitalityPro", logo: "/clients/hospitality.svg", description: "Wayfinding Systems" },
  { name: "EducationFirst", logo: "/clients/education.svg", description: "Campus Signage" },
  { name: "TransportHub", logo: "/clients/transport.svg", description: "Transit Displays" },
  { name: "EntertainmentMax", logo: "/clients/entertainment.svg", description: "LED Screens" },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
        api.scrollTo(0);
        setCurrent(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, current]);

  // Double the clients array for continuous scrolling effect
  const displayClients = [...clients, ...clients];

  return (
    <div className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Partnering with leading businesses to deliver exceptional signage solutions
            </p>
          </div>
          
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {displayClients.map((client, index) => (
                <CarouselItem 
                  key={`${client.name}-${index}`}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
                >
                  <div className="rounded-lg bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm p-6 h-full border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors shadow-lg hover:shadow-xl">
                    <div className="aspect-square relative mb-4 bg-slate-100 dark:bg-slate-700/50 rounded-md overflow-hidden">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{client.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{client.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
