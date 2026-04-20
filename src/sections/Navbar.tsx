import Button from "../components/Button";
import Logo from "../assets/bcaktivlogo.png"
import Call from "../assets/call.svg"
import ArrowDown from "../assets/ArrowDown.svg"
import Slovenia from "../assets/Slovenia.svg"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-2 bg-gradient-to-b from-primary-black/30 to-transparent">

      <div className="flex items-center gap-10">
        <img src={Logo} alt="Logo" className="h-[56px] w-auto" />

        <nav className="hidden md:flex items-center gap-6 font-dm-sans text-[15px] font-medium leading-[150%] text-primary-white">
          <a href="#">Nepremičnine</a>
          <a href="#">Novogradnje</a>
          <a href="#">O nas</a>
          <a href="#">Storitve</a>
          <a href="#">Novosti in nasveti</a>
          <a href="#">Reference</a>
          <a href="#">Kontakt</a>
        </nav>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <div className="hidden md:flex items-center gap-1.5 font-dm-sans text-[15px] font-medium leading-[150%] text-primary-white">
          <img src={Call} alt="Call" className="h-5 w-auto" />
          <span>041 318 642</span>
        </div>

        <Button variant="navbar">
          Brezplačen posvet
        </Button>

        <div className="flex items-center">
          <img src={Slovenia} alt="Slovenia" className="h-6 w-auto" />
          <img src={ArrowDown} alt="Arrow" className="h-6 w-auto" />
        </div>
      </div>

    </header>
  );
}