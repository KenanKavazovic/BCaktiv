import { useMemo, useState } from "react";
import NewsCard from "../components/NewsCard";
import CarouselControls from "../components/CarouselControls";
import newsData from "../mock/mockNews.json";

type NewsArticle = {
  id: number;
  image: string;
  type: string;
  title: string;
  text: string;
  date: string;
};

type NewsResponse = {
  articles: NewsArticle[];
};

const CARDS_PER_PAGE = 4;

export default function NewsSection() {
  const response = newsData as NewsResponse;
  const articles = response.articles;

  const [page, setPage] = useState(0);

  const maxIndex = articles.length - CARDS_PER_PAGE;

  const currentItems = useMemo(() => {
    return articles.slice(page, page + CARDS_PER_PAGE);
  }, [articles, page]);

  const goPrev = () => {
    setPage((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setPage((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const totalSteps = articles.length - CARDS_PER_PAGE + 1;

  return (
    <section className="bg-primary-white py-15 pl-16">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1440px]">
          <div className="px-4 py-6">
            <h2 className="font-marcellus text-[56px] leading-[67.2px] text-primary-black">
              Novice
            </h2>
          </div>

          <div className="flex gap-6 pb-1 overflow-hidden">
            {currentItems.map((item) => (
              <NewsCard
                key={item.id}
                type={item.type}
                title={item.title}
                text={item.text}
                date={item.date}
                image={item.image}
              />
            ))}
          </div>
          
          <div className="py-6 pr-16 pl-1">
            <CarouselControls
              buttonText="Preveri več"
              page={page}
              totalPages={totalSteps}
              goPrev={goPrev}
              goNext={goNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}