import { cn } from "@/lib/utils";

import MAIN_IMG_LIST from "@/data/main_image_data";
import BRAND_DATA from "@/data/main_brand_data";
// @ts-expect-error -- vite-plugin-svgr query import
import Play from "@/assets/icons/icon_play.svg?react";
// @ts-expect-error -- vite-plugin-svgr query import
import Pause from "@/assets/icons/icon_pause.svg?react";
// @ts-expect-error -- vite-plugin-svgr query import
import ArrowRight from "@/assets/icons/arrow_right.svg?react";

export default function VisualComponents() {
  return (
    <section
      className="max-w-[1260px] h-[436px] flex gap-20 items-center"
      //   style={{ margin: "0 auto" }}
    >
      {/* visual */}
      <div className="w-[1080px] h-full flex justify-center relative">
        <ul className="w-full h-full max-w-[930px] relative flex flex-col justify-center rounded-[30px]">
          {MAIN_IMG_LIST.map((item, index) => (
            <li
              key={index}
              className={cn(
                "w-full min-h-[350px] absolute flex rounded-[30px] bg-no-repeat bg-cover bg-position-[center_bottom_-60px]",
                "flex justify-center items-center"
              )}
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="w-[810px] h-[270px] flex flex-col justify-between text-white">
                <h6 className="w-full f-[22px] list-disc text-[16px]">
                  {item.category}
                </h6>
                <h3 className="w-full h-[104px] text-[44px] text-[2.75rem] tracking-[-0.055rem] leading-[3.25rem] font-[600]">
                  {item.title}
                </h3>
                <button className="w-[167px] h-[60px] bg-[#121111] rounded-[50px] text-[16px] font-[500] leading-[20px] tracking-[-0.32px]">
                  {item.button_text}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-[258px] h-[14px] flex items-center absolute bottom-[0px]">
          <button className="mr-[22px]">{"<"}</button>
          <ul className="w-[120px] h-[10px] flex items-center gap-3">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className="w-[10px] h-full rounded-full flex items-center"
                >
                  <button
                    className="w-full h-full rounded-full bg-black"
                    aria-label={`${index}번 이미지 보기`}
                  ></button>
                </li>
              ))}
          </ul>
          <button className="w-[14px] h-[14px] ml-[22px] flex justify-center items-center">
            <Play />
          </button>
          <button className="w-[14px] h-[14px] ml-[16px] flex justify-center items-center">
            <Pause />
          </button>
          <button className="ml-[22px]">{">"}</button>
        </div>
      </div>
      <article>
        <nav>
          <ul className="flex flex-col gap-[16px] text-white">
            {BRAND_DATA.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "w-full min-w-[250px] h-[106px] rounded-2xl flex flex-col gap-[10px] p-[24px]",
                  `bg-no-repeat bg-cover`
                )}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "90px auto",
                  backgroundPosition: "bottom right",
                  backgroundColor: item.bg,
                }}
              >
                <p className="min-h-[28px] font-[1.25rem] leading-[1.4] font-[600] text-[20px]">
                  {item.text}
                </p>
                <a className="min-h-[20px] text-[14px] opacity-[0.6] flex items-center">
                  {item.button_text}
                  <ArrowRight className="w-[12px] h-[12px] " />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </section>
  );
}
