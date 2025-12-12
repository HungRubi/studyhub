import DetailDocs from "@/components/DetailDocs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DocDetailsPage = () => {
    return (
        <div className="w-full">
            <Header />
            <div className="container px-3 mx-auto">
                <DetailDocs 
                    title="Giáo Trình Cấu Trúc Dữ Liệu & Giải Thuật"
                    description="Tài liệu giúp bạn nắm vững cấu trúc dữ liệu, thuật toán, đầy đủ ví dụ, bài tập nâng cao."
                    thumbnail="/images/computer_version.jpg"
                    category="Khoa học máy tính"
                    pages={240}
                    downloads={1280}
                    rating={4.8}
                />
            </div>
            <Footer />
        </div>
    )
}

export default DocDetailsPage;