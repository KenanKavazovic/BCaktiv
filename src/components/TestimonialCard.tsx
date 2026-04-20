import PlayButton from "../assets/PlayButton.svg"

type CardProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function TestimonialCard({ title, subtitle, image }: CardProps) {
  const imgSrc = image || "/mockTestimonialImage.png";

  return (
    <div className="flex flex-col max-w-[390px] gap-4">
      <div className="relative rounded-[24px] bg-[#F4EFE7] p-4">
        <img
          src={imgSrc}
          alt=""
          className="h-[212px] w-full rounded-[16px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[18px] border border-white/40 bg-white/5 p-2 backdrop-blur-[30px]">
              <img
                src={PlayButton}
                alt="Play"
                className="h-[24px] w-[24px]"
              />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2 gap-2">
        <h3 className="font-marcellus text-[20px] leading-[140%] text-primary-black">
          {title}
        </h3>

        <p className="font-dm-sans text-[14px] leading-[150%] text-[#4D4D4D]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}