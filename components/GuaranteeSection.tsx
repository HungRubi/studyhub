// components/GuaranteeSection.tsx
import { CheckCircle } from "lucide-react";

const items = [
  "Tài liệu đúng nội dung",
  "Không copy từ internet",
  "Đầy đủ code + báo cáo nếu có",
  "Hoàn tiền 100% nếu tài liệu lỗi",
  "Hỗ trợ giải đáp trong 24h",
];

export default function GuaranteeSection() {
  return (
    <section className="w-full py-16 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Cam Kết Chất Lượng
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="w-7 h-7 text-green-600 shrink-0" />
              <p className="text-lg font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
