import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import featuredProperties from "../mock/mockProperties.json";
import CarouselControls from "../components/CarouselControls";

export type Property = {
  id: string;
  location: string;
  property_type_text: string;
  num_bedroom: string;
  year_built: string | null;
  size_bruto: string | null;
  price_correct_text: string;
  offer_type_text: string;
  photo?: {
    original?: string;
  }[];
};

type PropertiesResponse = {
  data: Property[];
  meta: unknown;
  seo: unknown;
};

type PropertyCarouselProps = {
  title: string;
  buttonText: string;
  bgColor?: string;
};

const CARDS_PER_PAGE = 3;

export default function PropertyCarouselSection({
  title,
  buttonText,
  bgColor = "bg-white",
}: PropertyCarouselProps) {
  const response = featuredProperties as PropertiesResponse;
  const properties = response.data;

  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(properties.length / CARDS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = page * CARDS_PER_PAGE;
    return properties.slice(start, start + CARDS_PER_PAGE);
  }, [page, properties]);

  const goPrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`${bgColor} py-10`}>
      <div className="flex flex-col mx-auto max-w-[1440px] px-16 gap-6">
        <div className="pt-5">
          <h2 className="font-marcellus text-[40px] font-normal leading-[120%] tracking-[0.01em] text-primary-black">
            {title}
          </h2>
        </div>

        <div className="gap-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 px-1">
            {currentItems.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <CarouselControls
            buttonText={buttonText}
            page={page}
            totalPages={totalPages}
            goPrev={goPrev}
            goNext={goNext}
          />
        </div>
      </div>
    </section>
  );
}