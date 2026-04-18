import { testimonials } from "../mock/mockTestimonials.json";
import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-2.5 py-25">
      <div className="mx-auto flex w-[1240px] flex-col gap-10">
        
        <div className="flex flex-col items-center gap-3.5 px-6 text-center">
          <span className="font-oxygen text-[16px] uppercase leading-[24px] text-primary-gold">
            MNENJA NAŠIH STRANK
          </span>

          <h2 className="font-marcellus text-[40px] leading-[120%] tracking-[0.01em] text-[#111111]">
            Agencija vredna zaupanja
          </h2>

          <p className="px-[4.89px] py-4 font-dm-sans text-[16px] text-base leading-[150%] text-primary-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
            {testimonials.slice(0, 4).map((item) => (
                <TestimonialCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
}