import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="container px-3 mx-auto">
        <main className="bg-white text-gray-800">
          <section className="w-full bg-linear-to-r from-orange-500 to-orange-400 py-20 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-extrabold mb-4">About StudyHub</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Nền tảng chia sẻ tài liệu IT & hỗ trợ làm đồ án dành riêng cho sinh viên Việt Nam.
              </p>
            </div>
          </section>

          <section className="py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed">
                StudyHub được tạo ra với mục tiêu trở thành nơi cung cấp tài liệu học tập chất lượng 
                và hỗ trợ sinh viên hoàn thành bài tập lớn, đồ án một cách nhanh chóng – chuẩn yêu cầu – đúng deadline.
                Chúng tôi tập trung vào các tài liệu công nghệ thông tin (IT) với độ chính xác cao.
              </p>
              <p className="mt-4 text-gray-700">
                Với hàng trăm tài liệu từ cơ bản đến nâng cao, cùng dịch vụ làm bài theo yêu cầu, 
                StudyHub hướng đến việc giúp sinh viên tiết kiệm thời gian và học hiệu quả hơn.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/images/about-hero.jpg"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
                alt="About StudyHub"
              />
            </div>
          </section>

          <section className="py-16 bg-orange-50">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

              <div className="p-6 bg-white rounded-xl shadow-md border">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Tầm Nhìn</h3>
                <p className="text-gray-700">
                  Trở thành thư viện tài liệu IT số 1 Việt Nam dành cho sinh viên, 
                  nơi ai cũng có thể tìm thấy tài liệu phù hợp để phát triển kỹ năng.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md border">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Sứ Mệnh</h3>
                <p className="text-gray-700">
                  Cung cấp tài liệu chất lượng, đúng kiến thức thực tế, 
                  cùng dịch vụ hỗ trợ đồ án chuyên nghiệp – giá sinh viên.
                </p>
              </div>

            </div>
          </section>

          <section className="py-16 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
              Hành Trình Phát Triển
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <Image
                  src="/images/about-history.jpg"
                  width={500}
                  height={350}
                  alt="StudyHub timeline"
                  className="rounded-xl shadow"
                />
              </div>

              <div>
                <ul className="space-y-4 text-gray-700">
                  <li>📘 2022 — Bắt đầu xây dựng kho tài liệu IT đầu tiên</li>
                  <li>🚀 2023 — Ra mắt dịch vụ làm đồ án thuê cho sinh viên</li>
                  <li>🔥 2024 — Hơn 1.200 tài liệu & hơn 800 bài tập lớn đã hoàn thành</li>
                  <li>🌎 2025 — Phát triển nền tảng StudyHub phiên bản mới</li>
                </ul>
              </div>

            </div>
          </section>

          <section className="py-16 bg-orange-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">Đội Ngũ</h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

                <div className="border bg-white rounded-xl shadow-md text-center p-5">
                  <Image
                    src="/images/team-1.jpg"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                    alt="team member"
                  />
                  <h3 className="font-bold text-lg">Huy Hùng</h3>
                  <p className="text-gray-600 text-sm">Founder & Developer</p>
                </div>

                <div className="border bg-white rounded-xl shadow-md text-center p-5">
                  <Image
                    src="/images/team-2.jpg"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                    alt="team member"
                  />
                  <h3 className="font-bold text-lg">Nguyễn Minh</h3>
                  <p className="text-gray-600 text-sm">Document Reviewer</p>
                </div>

                <div className="border bg-white rounded-xl shadow-md text-center p-5">
                  <Image
                    src="/images/team-3.jpg"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                    alt="team member"
                  />
                  <h3 className="font-bold text-lg">Trần Anh</h3>
                  <p className="text-gray-600 text-sm">Project Specialist</p>
                </div>

              </div>
            </div>
          </section>

          <section className="py-16 max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-orange-600 mb-10">Thống Kê Nhanh</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>
                <p className="text-4xl font-bold text-orange-500">1200+</p>
                <p className="text-gray-700">Tài liệu IT</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-orange-500">800+</p>
                <p className="text-gray-700">Đồ án đã hoàn thành</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-orange-500">1500+</p>
                <p className="text-gray-700">Khách hàng</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-orange-500">98%</p>
                <p className="text-gray-700">Đánh giá hài lòng</p>
              </div>

            </div>
          </section>

          <section className="py-16 bg-linear-to-r from-orange-500 to-orange-400 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Explore Documents?</h3>
              <p className="mb-6">Hàng trăm tài liệu và bài tập lớn đang chờ bạn!</p>
              <a
                href="/store"
                className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl shadow hover:opacity-90 transition"
              >
                Khám phá ngay
              </a>
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
}