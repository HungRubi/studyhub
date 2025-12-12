import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";

export default function ContactPage() {
  return (
    <div className="w-full">
      <Header />
      <section className="w-full bg-orange-500 text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Liên hệ StudyHub</h1>
        <p className="mt-2 text-white/90">
          Nếu bạn cần hỗ trợ tài liệu, thanh toán hoặc thuê làm đồ án – hãy liên hệ ngay
        </p>
      </section>

      <div className="container mx-auto py-12 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ContactInfo />
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
      <ContactMap />
      <Footer />
    </div>
  );
}