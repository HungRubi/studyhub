import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Nav() {
  return (
    <section className="relative bg-nav overflow-hidden bg-linear-to-br from-[#fff7f0] via-white to-[#fff3e6] h-[calc(100vh-80px)] flex items-center">
      
      <div className="absolute -top-32 -right-32 w-105 h-105 bg-orange-400/30 blur-[140px]" />
      <div className="absolute top-1/2 -left-32 w-90 h-90 bg-orange-300/20 blur-[120px]" />

      <div className="container mx-auto px-3 flex gap-10">
        
        <div className="w-1/2 flex items-center">
          <Wrapper>
            <div className="w-full">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-100 px-4 py-1 text-sm text-orange-600">
                  🚀 Study smarter. Learn faster.
              </span>

              <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
                  Welcome to{" "}
                  <span className="text-orange-500">StudyHub</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
                  Your premium platform for documentation, study materials and
                  cutting-edge knowledge. Learn deeply. Build confidently.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                  <button className="group inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400">
                  Get Started
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <button className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50">
                  Discover Insights ✨
                  </button>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="w-1/2">
          <Image
            alt="Banner"
            src={"/images/test-removebg-preview.png"}
            className="w-8/10 object-cover mx-auto"
            width={600}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
