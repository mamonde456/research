import logo from "@/assets/logo/logo.svg";

const MENU_LIST = ["Research", "Datalab", "Indexes", "About"];

export default function HeaderComponent() {
  return (
    <header className="w-full h-[97px] px-[40px] flex justify-between border-b border-[#D9D9D9]">
      <h1 className="w-[234px] h-full">
        <a
          href="/"
          className="w-[180px] xl:w-[260px] h-full flex justify-center items-center"
        >
          <img className="w-full" src={logo}></img>
        </a>
      </h1>
      <nav className="h-full">
        <ul className="h-full flex justify-around items-center text-[16px]">
          {MENU_LIST.map((item, index) => (
            <li key={index} className="w-[160px] h-[20px] text-center">
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="w-[234px] h-full flex justify-end tracking-[-0.32px]">
        <select className="text-[18px] pr-[20px] ">
          <option>KR</option>
          <option>EN</option>
        </select>
      </button>
    </header>
  );
}
