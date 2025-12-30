import Header from "@/components/Header";
import ListCategory from "@/components/ListCategory";
import SlideDocument from "@/components/SlideDocument";
import Nav from "@/components/Nav";
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
      <Nav/>
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
