import Button from "../components/Button";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";
import FeaturedProjectPlaceholder from "/FeaturedProjectPlaceholder.png";

export default function FeaturedProjectSection() {
  return (
    <section className="relative flex h-[750px] flex-col overflow-hidden pt-[166px] pb-17.5">
      <img
        src={FeaturedProjectPlaceholder}
        alt="Stanovanjski kompleks v Ljubljani"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0)_35.1%,rgba(0,0,0,0.6)_67.31%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative flex flex-col gap-9 px-20">
        <div className="flex flex-col gap-6">
          <div className="flex">
            <span
              className="
                inline-flex items-center justify-center
                h-[34px] rounded-[20px] bg-primary-blue px-5 py-0.5
                font-oxygen text-[14px] font-bold leading-[14px]
                uppercase text-primary-white
                backdrop-blur-[4px]
              "
            >
              Novogradnje
            </span>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h2 className="font-marcellus text-[56px] leading-[67.2px] text-primary-white">
              Hiša - Ljubljana  
              <br />
              mesto, Moste-Polje,
              <br />
              Zg. Zadobrova
            </h2>

            <p className="max-w-[560px] max-h-[80px] font-dm-sans text-base leading-[150%] text-primary-white overflow-hidden line-clamp-3">
              Posredujemo pri prodaji sodobne enostanovanjske hiše v mirni, arhitekturno dovršeni novozgrajeni soseski verižnih hiš. 
              Nepremičnina je idealna izbira za kakovostno bivanje v zelenem okolju, hkrati v bližini mestnega dogajanja. 
              Hiša obsega 149,2 m² površine, ima teraso in nadstrešek za dva avtomobila, pripada pa ji stavbno zemljišče v izmeri 562 m². 
              Objekt je v fazi gradnje, prevzem v 3.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[15px] pt-3.5">
          <Button>Izvedi več</Button>
          <Button variant="clear">Preveri vse novogradnje</Button>
        </div>
      </div>

      <div className="absolute bottom-13 right-20 flex items-center gap-5.5 rounded-[40px] px-2.5 pr-[5px] py-2.5">
        <span className="font-dm-sans text-[16px] leading-[150%] text-primary-white">
          1 / 10
        </span>

        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            aria-label="Previous slide"
            className="
              flex h-[50px] w-[50px] items-center justify-center rounded-full
              bg-primary-white/80 backdrop-blur-[30px] cursor-pointer
              transition-transform duration-200 active:scale-95
            "
          >
            <img src={LeftArrow} alt="" aria-hidden="true" className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="
              flex h-[50px] w-[50px] items-center justify-center rounded-full
              bg-white/80 backdrop-blur-[30px] cursor-pointer
              transition-transform duration-200 active:scale-95
            "
          >
            <img src={RightArrow} alt="" aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}