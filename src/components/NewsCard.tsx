type NewsCardProps = {
  type: string;
  title: string;
  text: string;
  date: string;
  image: string;
};

export default function NewsCard({
  type,
  title,
  text,
  date,
  image,
}: NewsCardProps) {
  const imgSrc = image;

  return (
    <article className="flex w-[368px] h-[500px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="h-[207px] w-full object-cover"
        />

        <div className="absolute left-3 top-[163px]">
          <span className="inline-flex rounded-[20px] bg-primary-blue px-2.5 py-1 font-dm-sans text-[14px] font-bold leading-6 tracking-[0.04em] text-white">
            {type}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 min-h-0">
        <h3 className="line-clamp-3 font-marcellus text-[28px] leading-[140%] text-primary-black">
          {title}
        </h3>

        <p className="overflow-hidden line-clamp-3 pb-4 font-symbol text-[16px] leading-6 text-primary-black/50">
          {text}
        </p>

        <span className="font-symbol text-[16px] leading-6 text-primary-black/50">
          {date}
        </span>
      </div>
    </article>
  );
}