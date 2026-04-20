import Logo from "../assets/bcaktivlogo.png";
import FacebookIcon from "../assets/Facebook.svg";
import InstagramIcon from "../assets/Instagram.svg";
import YoutubeIcon from "../assets/Youtube.svg";
import Slovenia from "../assets/Slovenia.svg";
import ArrowDown from "../assets/ArrowDownGray.svg";

type FooterLink = {
  label: string;
  href: string;
};

const services: FooterLink[] = [
  { label: "Nepremičninsko posredovanje", href: "#" },
  { label: "Ocena tržne vrednosti", href: "#" },
  { label: "Pridobivanje gradbene dokumentacije", href: "#" },
  { label: "Vodenje upravnih postopkov", href: "#" },
  { label: "Pridobivanje energetskih izkaznic", href: "#" },
  { label: "Sodelovanje v geodetskih postopkih", href: "#" },
  { label: "Pomoč pri pridobivanju kredita", href: "#" },
  { label: "Zavarovanje", href: "#" },
  { label: "Ostale storitve", href: "#" },
];

const links: FooterLink[] = [
  { label: "Nepremičnine", href: "#" },
  { label: "Novogradnje", href: "#" },
  { label: "Nasveti nepremičninskega posrednika", href: "#" },
  { label: "O nas", href: "#" },
  { label: "Reference", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FAF8F5] to-white px-16 pt-15 pb-6">
      <div className="flex flex-col gap-15">
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="BCAKTIV"
            className="h-[120px] w-[120px]"
          />
        </div>
        <div className="flex justify-center gap-15">
          <div className="flex w-full max-w-[1440px] items-start gap-15">
            <div className="flex w-[247px] shrink-0 flex-col gap-7.5">
              <div className="flex flex-col gap-2.5">
                <h3 className="font-dm-sans text-[14px] font-bold leading-6 tracking-[0.04em] text-black">
                  Sedež podjetja
                </h3>

                <div className="font-poppins text-[16px] font-light leading-[160%] tracking-[0.04em] text-black">
                  <p>BCAKTIV d.o.o.</p>
                  <p>Ljubljanska cesta 82</p>
                  <p>1230 Domžale</p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="font-dm-sans text-[14px] font-bold leading-6 tracking-[0.04em] text-black">
                  Kontakt
                </h3>

                <div className="flex flex-col gap-[6px]">
                  <a
                    href="tel:+386041318642"
                    className="font-poppins text-[16px] font-light leading-[160%] tracking-[0.04em] text-black underline"
                  >
                    +386 041 318 642
                  </a>

                  <a
                    href="mailto:info@bcaktiv.si"
                    className="font-poppins text-[16px] font-light leading-[160%] tracking-[0.04em] text-black underline"
                  >
                    info@bcaktiv.si
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="font-dm-sans text-[14px] font-bold leading-6 tracking-[0.04em] text-black">
                  Sedež podjetja
                </h3>

                <div className="flex flex-col gap-1 font-poppins text-[16px] font-light leading-[160%] tracking-[0.04em] text-black">
                  <p>Sp. Prapreče 4d</p>
                  <p>1225 Lukovica</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2.5">
                <a href="https://www.facebook.com/BCAktivagencija/" aria-label="Facebook">
                  <img src={FacebookIcon} alt="" aria-hidden="true" className="h-6 w-6" />
                </a>

                <a href="https://www.instagram.com/bcaktiv_nepremicnine/" aria-label="Instagram">
                  <img src={InstagramIcon} alt="" aria-hidden="true" className="h-6 w-6" />
                </a>

                <a href="https://www.youtube.com/@BCAKTIV" aria-label="YouTube">
                  <img src={YoutubeIcon} alt="" aria-hidden="true" className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="h-[414px] w-px shrink-0 bg-[#EBEBEB]" />

            <div className="flex items-start gap-25">
              <div className="flex flex-col gap-4">
                <span className="font-dm-sans text-[16px] leading-6 text-black/75">
                  Storitve
                </span>

                {services.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-dm-sans text-[16px] leading-6 text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-dm-sans text-[16px] leading-6 text-black/75">
                  Povezave
                </span>

                {links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-dm-sans text-[16px] leading-6 text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="mx-auto max-w-[1440px] h-px w-full bg-[#EBEBEB]" />

          <div className="flex justify-center">
            <div className="flex w-full max-w-[1440px] items-center justify-between">
              <p className="font-poppins text-[15px] font-light leading-[160%] tracking-[0.04em] text-black">
                © 2025 BCaktiv d.o.o. All rights reserved.
              </p>

              <a
                href="https://100m2.si"
                className="font-poppins text-[14px] font-light leading-[14px] text-black/50 underline"
              >
                Website by 100kvadratov
              </a>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="font-dm-sans text-[16px] leading-6 text-black/50"
                  >
                    Splošni pogoji
                  </a>

                  <a
                    href="#"
                    className="font-dm-sans text-[16px] leading-6 text-black/50"
                  >
                    Politika zasebnosti
                  </a>
                </div>

                <div className="flex items-center">
                  <img src={Slovenia} alt="Slovenia" className="h-6 w-auto" />
                  <img src={ArrowDown} alt="" aria-hidden="true" className="h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}