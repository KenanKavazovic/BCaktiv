export default function HeroSearch() {
  return (
    <div className="flex h-[72px] w-full min-w-[200px] items-center gap-[10px] rounded-[40px] border border-white/25 bg-white/10 py-[10px] px-[10px] pl-6 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
      <div className="flex h-[50px] flex-1 items-center rounded-[36px] border-b border-b-[#E6E6E6] bg-white px-6">
        <input
          type="text"
          placeholder="Išči po vrsti nepremičnine / kraju / regiji..."
          className="w-full bg-transparent font-dm-sans text-[14px] font-normal leading-[150%] text-[#919191] outline-none placeholder:text-[#919191]"
        />
      </div>

      <button className="inline-flex h-[50px] items-center justify-center rounded-[30px] bg-primary-blue px-6 font-dm-sans text-[15px] font-normal leading-[20px] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-[#16357d] active:bg-[#122d69]">
        Iskanje
      </button>
    </div>
  );
}