import React from 'react';

export default function Marquee() {
  const items = [
    "SSC", "CBSE", "ICSE", "JEE", "NEET", "CLASS 6-12",
  ];

  return (
    <div className="bg-tertiary-fixed-dim py-3 overflow-hidden border-y border-tertiary/10">
      <div className="animate-marquee whitespace-nowrap flex">
        {/* Set 1 */}
        <div className="flex items-center px-6 min-w-fit flex-shrink-0">
          {items.map((item, idx) => (
            <React.Fragment key={`set1-${idx}`}>
              <span className="text-tertiary font-black text-lg sm:text-xl tracking-tighter mx-4 sm:mx-8 xl:mx-12">
                {item}
              </span>
              <span className="text-tertiary/30">•</span>
            </React.Fragment>
          ))}
        </div>
        {/* Set 2 - duplicate for seamless loop */}
        <div className="flex items-center px-6 min-w-fit flex-shrink-0">
          {items.map((item, idx) => (
            <React.Fragment key={`set2-${idx}`}>
              <span className="text-tertiary font-black text-lg sm:text-xl tracking-tighter mx-4 sm:mx-8 xl:mx-12">
                {item}
              </span>
              <span className="text-tertiary/30">•</span>
            </React.Fragment>
          ))}
        </div>
        {/* Set 3 - duplicate for safe seamless loop on ultra-wide screens */}
        <div className="flex items-center px-6 min-w-fit flex-shrink-0">
          {items.map((item, idx) => (
            <React.Fragment key={`set3-${idx}`}>
              <span className="text-tertiary font-black text-lg sm:text-xl tracking-tighter mx-4 sm:mx-8 xl:mx-12">
                {item}
              </span>
              <span className="text-tertiary/30">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
