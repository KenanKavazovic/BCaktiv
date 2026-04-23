import PlayButton from "../assets/PlayButton.svg";

type Props = {
  image: string;
  title: string;
};

export default function VideoAdviceCard({ image, title }: Props) {
  return (
    <div className="flex w-full max-w-[390px] flex-col gap-4">
      <div className="rounded-[24px] bg-eggshell-bgr p-4">
        <div className="relative overflow-hidden rounded-[16px]">
          <img
            src={image}
            alt={title}
            className="h-[444px] w-full rounded-[16px] object-cover"
          />

          <button
            className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-primary-white/50 rounded-full bg-primary-white/4 backdrop-blur-[30px]"
          >
            <img src={PlayButton} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <p className="font-marcellus text-[20px] leading-[140%] text-secondary-black px-2">
        {title}
      </p>
    </div>
  );
}