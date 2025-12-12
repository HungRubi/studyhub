import BestSellingDocuments from "@/components/BestSellingDocument";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSidebar from "@/components/InfoSideBar";
import Link from "next/link";

export default function DocsPage() {
  const itSubjects = [
    "Lập Trình Cơ Bản",
    "Cấu Trúc Dữ Liệu & Giải Thuật",
    "Lập Trình Hướng Đối Tượng (OOP)",
    "Cơ Sở Dữ Liệu (Database)",
    "Mạng Máy Tính",
    "Hệ Điều Hành",
    "Lập Trình Web Frontend",
    "Lập Trình Web Backend",
    "Phát Triển Mobile",
    "Trí Tuệ Nhân Tạo (AI)",
    "Machine Learning",
    "Deep Learning",
    "Khoa Học Dữ Liệu (Data Science)",
    "Khai Phá Dữ Liệu (Data Mining)",
    "An Toàn Thông Tin & Mật Mã",
    "Điện Toán Đám Mây (Cloud Computing)",
    "Kiểm Thử Phần Mềm (Software Testing)",
    "Phân Tích Thiết Kế Hệ Thống (UML)",
    "DevOps & CI/CD",
    "Internet of Things (IoT)"
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="container px-3 mx-auto mt-15">
        <nav className="flex items-center gap-5 flex-wrap">
          <Link 
              href={"/object/slug"}
              className="px-4 py-2 bg-white text-gray-700 shadow-md rounded-md text-sm font-medium 
              hover:bg-[#ff7b00] hover:text-white duration-300 truncate"
            >
              All
            </Link>
          {itSubjects.map((item, index) => (
            <Link 
              href={"/object/slug"}
              key={index}
              className="px-4 py-2 bg-white text-gray-700 shadow-md rounded-md text-sm font-medium 
              hover:bg-[#ff7b00] hover:text-white duration-300 truncate"
            >
                {item}
            </Link>
          ))}
        </nav>
        <main>
          <div className="flex gap-8">
            <InfoSidebar />
            <BestSellingDocuments />
          </div>
          <BestSellingDocuments />
        </main>
      </div>
      <Footer />
    </div>
  );
}