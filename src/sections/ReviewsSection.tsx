import Button from "../components/Button";
import mockReviews from "../mock/mockReviews.json";
import ReviewCard, { type Review } from "../components/ReviewCard";

type MockReviewsData = {
  reviews: Review[];
};

export default function ReviewsSection() {
  const reviews = (mockReviews as MockReviewsData).reviews;

  return (
    <section className="bg-gradient-to-b from-[#F4EFE7] to-white py-25">
      <div className="flex flex-col items-center gap-15">
        <h2 className="text-center font-marcellus text-[40px] leading-[120%] tracking-[0.01em] text-black">
          Mnenja naših strank
        </h2>

        <div className="flex justify-center w-full pb-[30px] -mb-[30px] overflow-hidden gap-5">
          {reviews.slice(0, 5).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <Button>Ocenite nas na Googlu</Button>
      </div>
    </section>
  );
}
