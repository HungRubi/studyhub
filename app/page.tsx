import Header from "@/components/Header";
import Button from "@/components/Button";
import ListCategory from "@/components/ListCategory";
import SlideDocument from "@/components/SlideDocument";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import Footer from "@/components/Footer";
import BestSellingDocuments from "@/components/BestSellingDocument";
import ITServices from "@/components/ITServices";
import Reviews from "@/components/Reviews";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import GuaranteeSection from "@/components/GuaranteeSection";
import StatisticsSection from "@/components/StatisticsSection";
export default function Home() {
  return (
    <div className="w-full">
      <Header/>
      <nav className="min-h-100 py-20 flex flex-col items-center justify-center bg-[#eb8322] text-white">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">Welcome to StudyHub</h1>
        <p className="text-lg text-center max-w-2xl">
          Your ultimate resource for study materials and documentation. 
          Explore a wide range of topics and enhance your knowledge with 
          our comprehensive guides and resources.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Button text={"Get Started"} icons={<FaLongArrowAltRight className="text-[#ff7b00]"/>} />
          <Button text={"Discover Insights "} icons={<HiOutlineLightBulb className="text-[#ff7b00]"/>} />
        </div>
      </nav>
      <main className="w-full">
        <div className="container mx-auto py-10 px-3">
          <ListCategory />
          <SlideDocument />
          <BestSellingDocuments />
          <StatisticsSection />
          <ITServices />
          <GuaranteeSection />
          <Reviews />
          <ProcessSteps />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
