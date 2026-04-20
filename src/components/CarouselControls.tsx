import Button from "./Button";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

type CarouselControlsProps = {
  buttonText: string;
  page: number;
  totalPages: number;
  goPrev: () => void;
  goNext: () => void;
};

export default function CarouselControls({
  buttonText,
  page,
  totalPages,
  goPrev,
  goNext,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between px-1 py-6">
      <Button>{buttonText}</Button>

      <div className="flex items-center gap-8">
        <span className="font-oxygen text-[15.5px] leading-[24px] font-normal text-primary-black">
          {page + 1} / {totalPages}
        </span>

        <div className="flex gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#00000026] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-[#e5e5e5]"
          >
            <img src={LeftArrow} alt="" aria-hidden="true" className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#00000026] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-[#e5e5e5]"
          >
            <img src={RightArrow} alt="" aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}