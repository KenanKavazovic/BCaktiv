import Button from "./Button";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

type CarouselControlsProps = {
  buttonText: string;
  page: number;
  totalPages: number;
  verticalPadding?: string;
  goPrev: () => void;
  goNext: () => void;
};

export default function CarouselControls({
  buttonText,
  page,
  totalPages,
  verticalPadding = "py-7",
  goPrev,
  goNext,
}: CarouselControlsProps) {
  return (
    <div className={`flex items-center justify-between px-1 ${verticalPadding}`}>
      <Button>{buttonText}</Button>

      <div className="flex items-center gap-8">
        <span className="font-oxygen text-[15.5px] leading-[24px] font-normal text-secondary-black">
          {page + 1} / {totalPages}
        </span>

        <div className="flex gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#00000026] bg-primary-white cursor-pointer shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-gray-arrow-btn-hover"
          >
            <img src={LeftArrow} alt="" aria-hidden="true" className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#00000026] bg-primary-white cursor-pointer shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition hover:bg-gray-arrow-btn-hover"
          >
            <img src={RightArrow} alt="" aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}