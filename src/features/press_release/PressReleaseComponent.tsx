import PRESS_DATA from "@/data/press_release/press";
// @ts-expect-error -- vite-plugin-svgr query import
import MailIcon from "@/assets/icons/icon_mail.svg?react";

export default function PressReleaseComponent() {
  return (
    <section className="w-full max-w-[1260px] h-[330px] my-[80px] flex gap-[80px]">
      <article className="w-[905px] h-full">
        <div className="w-full h-8 mb-[30px] flex justify-between font-[600] leading-[2rem] tracking-[-0.035rem]">
          <ul className="flex items-center gap-[40px]">
            <li className=" text-[1.75rem] ">
              <button>
                <h4>언론보도</h4>
              </button>
            </li>
            <li className=" text-[1.75rem] ">
              <button>
                <h4>보도자료</h4>
              </button>
            </li>
          </ul>
          <a className="w-[56px] text-[16px]">더보기 {">"}</a>
        </div>
        <ul className="flex flex-col gap-[12px]">
          {PRESS_DATA.map((item, index) => (
            <li className="w-full h-[30px] mb-[8px] text-[16px]">
              <a className="flex justify-between">
                <span>
                  [{item.company}] {item.title}
                </span>
                <small className="text-[0.875rem] text-[#999999] font-[500] leading-[22px] tracking-[-0.00875rem] ">
                  {item.date}
                </small>
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article className="w-[275px]">
        <h4 className="w-full h-8 mb-5 text-[1.75rem] font-[600] leading-[2rem] tracking-[-0.035rem]">
          데이터 {">"}
        </h4>
        <div className="w-full h-[280px] bg-[#C8B9FF] rounded-[16px] flex flex-col items-center justify-center gap-[28px]">
          <div>
            <MailIcon />
          </div>
          <p className="h-[48px] px-[30px] text-center text-[16px] font-[600] leading-[24px] tracking-[-0.32px] text-white">
            야놀자리서치가 활용한 데이터를 <br />
            편하게 사용해보세요!
          </p>
        </div>
      </article>
    </section>
  );
}
