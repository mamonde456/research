import REPORT_DATA from "@/data/report/report_data";

export default function ReportComponent() {
  return (
    <section className="w-full h-[647px] bg-[#F5EBE1] flex justify-center items-center">
      <div className="w-full max-w-[1290px]  mb-[50px]">
        <h4 className="w-full h-8 mb-5 text-[1.75rem] font-[600] leading-[2rem] tracking-[-0.035rem]">
          연구보고서 {">"}
        </h4>
        <ul className="w-[1260px] h-[387px] flex gap-[40px] overflow-hidden ">
          {REPORT_DATA.map((item, index) => (
            <li key={index} className="w-[248px] shrink-0">
              <a>
                <div className="w-full h-[349px] mb-[16px]">
                  <img src={item.src} alt={item.alt} width={248} height={349} />
                </div>
                <small className="h-[22px] text-[14px] text-[#999999]">
                  {item.date}
                </small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
