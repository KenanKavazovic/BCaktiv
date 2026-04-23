import Button from "../components/Button";
import VideoAdviceCard from "../components/VideoAdviceCard";
import data from "../mock/mockVideoContent.json";

export default function VideoAdviceSection() {
  const videos = data.articles.slice(0, 4);

  return (
    <section className="bg-primary-white px-2.5 py-[98px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10">        
        <div className="flex max-w-[800px] flex-col items-center gap-3.5 px-6 text-center">
          <p className="font-oxygen text-[16px] uppercase text-primary-gold">
            Video nasveti
          </p>

          <h3 className="font-marcellus text-[40px] tracking-[0.4px] leading-[120%] text-black-testimonial-title">
            Nasveti nepremičninskega posrednika
          </h3>
        </div>

        <div className="grid w-full grid-cols-4 justify-items-center gap-6">
          {videos.map((item) => (
            <VideoAdviceCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-2.5 ">
        <Button>Vsi video nasveti</Button>
      </div>
    </section>
  );
}