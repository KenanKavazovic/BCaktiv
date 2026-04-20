import DefaultAvatar from "/mockReviewAvatar.jpg";
import GoogleIcon from "../assets/GoogleIcon.svg";
import StarFull from "../assets/StarFull.svg";
import StarEmpty from "../assets/StarEmpty.svg";

export type Review = {
  id: number;
  image: string;
  name: string;
  date: string;
  stars: number;
  text: string;
};

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const avatarSrc = review.image || DefaultAvatar;
  const clampedStars = Math.max(1, Math.min(5, review.stars));

  return (
    <article
      className="
        flex w-[370px] shrink-0 flex-col gap-4 rounded-[16px] border border-[#D9D9D9]
        bg-primary-white p-6
        shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_16px_9px_0px_rgba(0,0,0,0.05),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_43px_12px_0px_rgba(0,0,0,0)]
      "
    >
      <div className="flex items-start gap-4">
        <img
          src={avatarSrc}
          alt={review.name}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />

        <div className="flex min-w-0 flex-1 items-start justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-inter text-[16px] font-semibold leading-5 text-black-review-text">
              {review.name}
            </p>

            <p className="font-inter text-[12px] leading-[15px] text-primary-black/50">
              {review.date}
            </p>
          </div>

          <img
            src={GoogleIcon}
            alt="Google"
            className="h-6 w-6 shrink-0 object-contain"
          />
        </div>
      </div>

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={index < clampedStars ? StarFull : StarEmpty}
            alt=""
            aria-hidden="true"
            className="h-6 w-6 shrink-0"
          />
        ))}
      </div>

      <p className="font-inter text-[16px] leading-5 text-black-review-text">
        {review.text}
      </p>
    </article>
  );
}