import React from 'react';
import Link from 'next/link';

const Section1 = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="relative h-[18em] w-[80vw] border-2 border-[rgba(50,0,100,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(50,0,100,1)] via-purple-700/80 to-[rgba(50,0,100,0.2)] text-white font-nunito p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px]  transition-all duration-500 group/card ">
                <div className="absolute inset-0 bg-gradient-to-br from-[#320064]/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,0,100,0.1),transparent_60%)] group-hover/card:animate-pulse" />
                <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#320064]/50" />
                    <div className="w-2 h-2 rounded-full bg-[#320064]/30" />
                    <div className="w-2 h-2 rounded-full bg-[#320064]/10" />
                </div>
                <div className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3">
                    <h1 className="text-[2.2em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
                        Agreement Analyzer AI-Powered Contract Review
                    </h1>
                    <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light">
                        Simplify Your Agreements, Maximize Your Advantage
                        Upload your agreement PDFs and let our AI-powered analyzer break them down for you. Get clear insights, suggested additions, and an unbiased evaluation of the most advantageous party.
                    </p>
                </div>
                <Link href='/analyse'>
                    <button className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-[#320064]/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-[#320064]/50 hover:shadow-lg hover:shadow-[#320064]/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-[#320064]/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#320064]/40 via-fuchsia-500/40 to-[#320064]/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        <p className="relative z-10 font-medium tracking-wide">Explore Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </Link>
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#320064]/20 to-transparent blur-sm group-hover/card:animate-pulse" />
            </div>
        </div>
    );
}

export default Section1;
