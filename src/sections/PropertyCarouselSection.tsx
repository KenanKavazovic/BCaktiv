import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import featuredProperties from "../mock/mockProperties.json";
import Button from "../components/Button";
import LeftArrow from "../assets/LeftArrow.svg"
import RightArrow from "../assets/RightArrow.svg"

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
    thumbnail?: {
      grid?: string;
    };
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

          <div className="flex items-center justify-between py-6 px-1">
            <Button>
              {buttonText}
            </Button>

            <div className="flex items-center gap-8">
              <span className="font-oxygen text-[15.5px] font-normal leading-[24px] text-primary-black">
                {page + 1} / {totalPages}
              </span>

              <div className="gap-4 flex">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={goPrev}
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#00000026] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-[#e5e5e5]"
                >
                  <img src={LeftArrow} alt="Previous" className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  aria-label="Next"
                  onClick={goNext}
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#00000026] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-[#e5e5e5]"
                >
                  <img src={RightArrow} alt="Next" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}