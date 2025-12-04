import INSIGHT_DATA from "@/data/insight/insight_data";
import TRAND_DATA from "@/data/insight/trand_data";

export default function InsightComponent() {
  return (
    <section className="w-full max-w-[1290px] h-[432px] mt-[52px] mb-[80px] flex gap-[80px]">
      <article className="w-full max-w-[930px] overflow-hidden">
        <h3 className="w-full h-8 mb-5 text-[1.75rem] font-[600] leading-[2rem] tracking-[-0.035rem]">
          인사이트 / 브리프 {">"}
        </h3>
        <ul className="w-full flex gap-[30px]">
          {INSIGHT_DATA.map((item, index) => (
            <li key={index} className="w-[270px] h-[310px] shrink-0">
              <a className="w-full h-full flex flex-col">
                <div className="w-full h-[180px] mb-[18px]">
                  <img
                    className="w-full rounded-[20px]"
                    src={item.src}
                    width={270}
                    height={180}
                  />
                </div>

                <p className="h-[24px] mb-1 text-[#F54B1E] text-[14px]">
                  {item.category}
                </p>
                <h5 className="h-[56px] mb-1.5 text-[20px] line-clamp-2">
                  {item.title}
                </h5>
                <small className="h-[22px] text-[14px] text-[#999999]">
                  {item.date}
                </small>
              </a>
            </li>
          ))}
        </ul>
      </article>
      <article className="w-[249px] h-[432px]">
        <h3 className="w-full h-8 mb-5 text-[1.75rem] font-[600] leading-[2rem] tracking-[-0.035rem]">
          동향보고서 {">"}
        </h3>
        <div className="flex flex-col items-center">
          <ul className="w-full h-[350px] mb-[30px]">
            {TRAND_DATA.map((item, index) => (
              <li
                key={index}
                className="w-[250px] h-[350px] absolute rounded-[16px] px-[28px] py-[30px]"
                style={{
                  backgroundImage: `  linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)),
                url('${item.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a className="w-full h-full ">
                  <div className="w-full h-full flex flex-col justify-end gap-[16px] text-white">
                    <h5 className="w-full h-[56px] text-[20px] font-[500] leading-[28px] tracking-[-0.4px]">
                      {item.title}
                    </h5>
                    <small className="w-full h-[22px] text-[0.875rem] font-[500] leading-[22px] tracking-[-0.00875rem]">
                      {item.date}
                    </small>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <ul className="w-[120px] h-[10px] flex items-center gap-3 ">
            {Array(5)
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
        </div>
      </article>
    </section>
  );
}
