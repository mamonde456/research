import SNS_DATA from "@/data/sns/sns_data";

export default function SNSComponent() {
  return (
    <section className="w-full h-[258px] bg-[#F5EBE1] pt-[70px] pb-[90px]">
      <div className="max-w-[1260px] flex justify-between  mx-auto">
        <div className="w-[616px] h-[98px]">
          <h2 className="w-full h-[42px] mb-[26px] text-center text-[2rem] font-[600] leading-[2.625rem] tracking-[-0.04rem]">
            야놀자리서치의 더 많은 소식을 SNS로 만나보세요.
          </h2>
          <ul className="w-full flex gap-[26px]">
            {SNS_DATA.map((item) => (
              <li key={item.company} className="w-full">
                <a className="w-[26px] h-[30px]">
                  <i
                    style={{
                      display: "block",
                      width: "26px",
                      height: "26px",
                      backgroundImage: `url(${item.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="w-[181px] h-[60px] flex justify-center items-center rounded-[50px] bg-[#F25430] text-white text-[16px] font-[500] leading-[20px] tracking-[-0.32px] ">
          구독신청하기
        </a>
      </div>
    </section>
  );
}
