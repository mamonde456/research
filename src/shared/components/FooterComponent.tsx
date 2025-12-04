import logo from "@/assets/logo/logo_white.svg";
import { cn } from "@/lib/utils";

export default function FooterComponent() {
  return (
    <footer className="w-full h-[311px] px-[88px] pt-[52px] pb-[95px] bg-[#161515] flex justify-between">
      <div className=" h-[164px] flex flex-col text-white">
        <div className="w-[178px] h-[17px]">
          <img src={logo} className="w-[143px] h-full" />
        </div>
        <p className="w-full h-[27.6px] leading-[-0.32px] text-[17.6px] opacity-[0.45] mt-[20px]">
          개인정보 처리방침
        </p>
        <div className="w-full h-[24px]  text-[14px] leading-[-0.32px] flex items-center flex-wrap opacity-[0.45]">
          <p className="py-[5px] pr-[18px] text-[0.875rem] font-[300] relative ">
            (주)야놀자리서치
          </p>
          <p className="py-[5px] pr-[18px] text-[0.875rem] font-[300] relative before:content-['']  before:absolute before:left-[-9px] before:top-[50%] before:-translate-y-1/2 before:w-[1px] before:h-[11px] before:bg-[#3E3E3E]">
            대표이사. 박성식
          </p>
          <p className="py-[5px] pr-[18px] text-[0.875rem] font-[300] relative before:content-['']  before:absolute before:left-[-9px] before:top-[50%] before:-translate-y-1/2 before:w-[1px] before:h-[11px] before:bg-[#3E3E3E]">
            사업자등록번호. 308-86-02788
          </p>
        </div>
        <div className="w-full h-[24px]  text-[14px] leading-[-0.32px] flex items-center flex-wrap opacity-[0.45]">
          <p className="py-[5px] pr-[18px] text-[0.875rem] text-[#ffd800] font-[300] relative ">
            <a className="w-full h-full">Y-Siren (Compliance/Whistleblowing)</a>
          </p>
          <p className="py-[5px] pr-[18px] text-[0.875rem] font-[300] relative before:content-['']  before:absolute before:left-[-9px] before:top-[50%] before:-translate-y-1/2 before:w-[1px] before:h-[11px] before:bg-[#3E3E3E]">
            E-mail. yanoljaresearch@yanolja.com
          </p>
          <p className="py-[5px] pr-[18px] text-[0.875rem] font-[300] relative before:content-['']  before:absolute before:left-[-9px] before:top-[50%] before:-translate-y-1/2 before:w-[1px] before:h-[11px] before:bg-[#3E3E3E]">
            서울특별시 강남구 테헤란로 108길 42 MDM타워 4층
          </p>
        </div>
        <p className="w-full h-[25px] mt-2.5 font-[300] opacity-[0.45] leading-[1.6] text-[1rem]">
          © YANOLJA RESEARCH. All rights reserved.
        </p>
      </div>

      <div
        className="w-[260px] h-[48px] relative inline-block 
                after:content-['+'] after:w-[10px] after:h-[25px] after:absolute after:right-[49px] after:top-[50%] 
                after:-translate-y-1/2 after:text-[#ffffff63] after:pointer-events-none"
      >
        <select
          className={cn(
            "w-[230px] h-full px-[24px] bg-[#ffffff14] rounded-[30px] opacity-[0.6] text-[0.875rem] text-white appearance-none ",
            ""
          )}
        >
          <option value={"none"}>Family site</option>
          <option value={"http://khta.khu.ac.kr/"}>
            경희대 H&T 애널리틱스 센터
          </option>
          <option
            value={"https://www.purdue.edu/hhs/htm/research/CHRIBA/index.html"}
          >
            Purdue CHRIBA
          </option>
          <option value={"https://www.yanolja.com/"}>야놀자</option>
          <option
            value={"https://business.yanolja.com/web/kr/solutions/solutions1"}
          >
            야놀자클라우드
          </option>
          <option value={"https://www.interpark.com/malls/index.html?gateTp=1"}>
            인터파크
          </option>
          <option value={"https://www.sanhait.co.kr/"}>산하정보기술</option>
          <option value={"https://triple.guide/"}>트리플</option>
          <option value={"https://www.dailyhotel.com/"}>데일리호텔</option>
          <option value={"https://dable.io/ko/"}>데이블</option>
          <option value={"https://www.ezeetechnosys.com/"}>
            eZee Technosys
          </option>
        </select>
      </div>
    </footer>
  );
}
