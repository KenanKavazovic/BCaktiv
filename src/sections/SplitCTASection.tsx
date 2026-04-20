import Button from "../components/Button";

type SplitCTAPanel = {
  title: string;
  buttonText: string;
  onClick?: () => void;
};

type SplitCTASectionProps = {
  backgroundImage: string;
  left: SplitCTAPanel;
  right: SplitCTAPanel;
  className?: string;
};

export default function SplitCTASection({
  backgroundImage,
  left,
  right,
  className = "",
}: SplitCTASectionProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-primary-black/60" />
        <div className="absolute left-1/2 top-0 z-10 h-full w-1 -translate-x-1/2 bg-primary-white" />

        <div className="relative z-10 grid h-full grid-cols-2">
          <SplitCTAContent
            title={left.title}
            buttonText={left.buttonText}
            onClick={left.onClick}
          />

          <SplitCTAContent
            title={right.title}
            buttonText={right.buttonText}
            onClick={right.onClick}
          />
        </div>
      </div>
    </section>
  );
}

type SplitCTAContentProps = {
  title: string;
  buttonText: string;
  onClick?: () => void;
};

function SplitCTAContent({
  title,
  buttonText,
  onClick,
}: SplitCTAContentProps) {

  return (
    <div className="flex h-full items-center justify-center px-16 py-16 pt-15 gap-5">
      <div className="flex w-full flex-col items-center gap-5 px-7.5 py-10 text-center">
        <h2 className="whitespace-pre-line font-marcellus text-[40px] leading-[120%] tracking-[0.01em] text-primary-white">
          {title}
        </h2>

        <div className="pt-4">
          <Button
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}