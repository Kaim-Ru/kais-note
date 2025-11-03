import { formatDateWithTime } from '@/lib/date';
import { withBasePath } from '@/lib/getBasePath';
import { AboutType } from '@/types/about';

type Props = {
  about: AboutType;
};

export const About: React.VFC<Props> = ({ about }) => {
  const { title, date, authorName, authorImage, authorIntro } = about;

  return (
    <div className="relative bg-[#251f2e] rounded-[13px] shadow-[0px_0px_12.5px_6px_rgba(0,0,0,0.25)] min-h-screen w-full max-w-full overflow-hidden mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      {/* Title Section - Top Left */}
      <div className="w-full max-w-full sm:max-w-[246px] mb-8 sm:mb-10 md:mb-12">
        <h1
          className="text-[32px] font-bold text-[#9c8cb8] tracking-[-1.6px] leading-none break-words"
          style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
        >
          {title}
        </h1>
        <div
          className="text-[18px] text-[#5f5077] tracking-[-0.9px] h-[30px] flex items-center mt-2"
          style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
        >
          最終更新日: {formatDateWithTime(date)}
        </div>
      </div>

      {/* Author Section - Top Center */}
      <div className="flex flex-col items-center gap-[9px] w-full max-w-full sm:max-w-[466px] mx-auto mb-12 sm:mb-16 md:mb-20">
        <div className="w-[184px] h-[184px] rounded-full overflow-hidden flex-shrink-0">
          <img
            src={withBasePath(authorImage)}
            alt={authorName}
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="text-[20px] font-bold text-[#9c8cb8] text-center tracking-[-1px] leading-none w-full"
          style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
        >
          {authorName}
        </div>
        <div
          className="text-[24px] text-[#9c8cb8] text-center tracking-[-1.2px] whitespace-pre-line leading-normal w-full"
          style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
        >
          {authorIntro}
        </div>
      </div>

      {/* Content Section - Middle */}
      <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-full md:max-w-[1055px] mx-auto mb-12 sm:mb-16 md:mb-20">
        {/* Placeholder Image */}
        <div className="bg-[#d9d9d9] h-[320px] w-full md:w-[53%] md:max-w-[561px] shrink-0 min-w-0" />

        {/* Text Content */}
        <div className="flex-1 w-full md:w-[45%] min-w-0">
          <div
            className="text-[32px] sm:text-[40px] font-bold text-[#9c8cb8] tracking-[-2px] leading-none mb-4 break-words"
            style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
          >
            Title
          </div>
          <div
            className="text-[18px] sm:text-[24px] text-[#9c8cb8] tracking-[-1.2px] leading-normal w-full break-all"
            style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
          >
            TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
          </div>
        </div>
      </div>

      {/* Coming Soon Message - Center */}
      <div className="flex justify-center items-center w-full max-w-full sm:max-w-[289px] mx-auto">
        <div
          className="text-[32px] sm:text-[40px] font-bold text-[#9c8cb8] text-center tracking-[-2px] leading-none break-words"
          style={{ fontFamily: 'Gen Shin Gothic, sans-serif' }}
        >
          Coming Soon...
        </div>
      </div>
    </div>
  );
};
