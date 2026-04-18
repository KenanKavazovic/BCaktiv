import type { Property } from "../sections/PropertyCarouselSection";
import Favorite from "../assets/favorite.svg"

type PropertyCardProps = {
  property: Property;
};

function formatBedrooms(value: string) {
  return `${value}-bedroom`;
}

function formatArea(value: string | null) {
  if (!value) return "";
  return `${value} m`;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const image =
    property.photo?.[0]?.thumbnail?.grid ||
    property.photo?.[0]?.original ||
    "/mockPropertyImage.png";

  const details = [
    property.property_type_text,
    property.num_bedroom ? formatBedrooms(property.num_bedroom) : "",
    property.year_built || "",
    formatArea(property.size_bruto),
  ].filter(Boolean);

  return (
    <article className="w-full">
      <div className="relative mb-3 h-[220px] overflow-hidden rounded-[16px] bg-white/[0.004] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <img
          src={image}
          alt={property.location}
          className="h-full w-full rounded-[16px] object-cover"
        />

        <button
          className="group absolute right-4 top-4 flex h-[30px] w-[30px] items-center justify-center
          transition-transform duration-200
          hover:-translate-y-[2px]
          active:translate-y-0"
        >
          <img
            src={Favorite}
            alt="Favorite"
            className="h-[30px] w-[30px] transition-transform duration-200 group-hover:scale-110 group-active:scale-[0.88]"
          />
        </button>

        <span className="absolute bottom-4 left-4 inline-flex h-[26px] items-center justify-center rounded-[16px] bg-primary-blue px-2 font-montserrat text-[14px] font-normal leading-[20px] text-white">
          {property.offer_type_text}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 px-4 py-4 pt-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-dm-sans text-[18px] font-semibold leading-[24px] text-secondary-black">
            {property.location}
          </h3>

          <p className="font-montserrat text-[15.9px] font-light leading-[24px] text-secondary-black">
            {details.join(" | ")}
          </p>
        </div>

        <p className="font-montserrat text-[18px] font-semibold leading-[28px] text-secondary-black">
          {property.price_correct_text}
        </p>
      </div>
    </article>
  );
}