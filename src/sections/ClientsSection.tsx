import ClientsDruzine from "../assets/ClientsDruzine.png"
import ClientsPari from "../assets/ClientsPari.png"
import ClientsSamski from "../assets/ClientsSamski.png"
import ClientsUpokojenci from "../assets/ClientsUpokojenci.png"
import ArrowRight from "../assets/ArrowRightLong.svg"

type ClientsCard = {
  title: string;
  image: string;
};

const clientsCards: ClientsCard[] = [
  { title: "Družine", image: ClientsDruzine },
  { title: "Pari", image: ClientsPari },
  { title: "Samski", image: ClientsSamski },
  { title: "Upokojenci", image: ClientsUpokojenci },
];

export default function ClientsSection() {
  return (
    <section className="flex flex-col bg-white py-15">
      <div className="flex flex-col items-center gap-4 py-10">
        <h2 className="text-center font-[Marcellus] text-[40px] leading-[120%] tracking-[0.01em] text-black">
          Vaše življenje. Vaša nepremičnina.
        </h2>

        <p className="px-[9.5px] text-center font-symbol text-[15.8px] leading-6 text-black">
          Pomagamo vam poiskati najboljšo nepremičnino za vaš življenjski slog.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-16 pb-15">
        {clientsCards.map((card) => (
          <button
            key={card.title}
            className="flex items-center justify-between rounded-[24px] gap-5 overflow-hidden bg-[#F4EFE7] transition-transform duration-200 hover:-translate-y-[2px]"
          >
            <div className="flex items-center gap-5">
              <img
                src={card.image}
                alt={card.title}
                className="h-[70px] w-[70px] shrink-0 object-cover"
              />

              <span className="px-5 font-[Marcellus] text-[28px] leading-none text-black">
                {card.title}
              </span>
            </div>

            <div className="pr-5">
              <div className="flex justify-center items-center h-[48px] w-[48px] rounded-[14px] p-2 bg-white">
                <img src={ArrowRight} alt="" aria-hidden="true" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}