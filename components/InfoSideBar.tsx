"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Tài liệu có đảm bảo chất lượng không?",
    answer:
      "Tất cả tài liệu đều được kiểm duyệt trước khi đăng tải. Đảm bảo nội dung đầy đủ, không thiếu trang, không mờ.",
  },
  {
    question: "Tôi nhận tài liệu bằng cách nào?",
    answer:
      "Sau khi thanh toán, bạn sẽ nhận link tải tài liệu ngay lập tức trong mục Lịch sử mua và email.",
  },
  {
    question: "Có hỗ trợ làm bài tập lớn, đồ án không?",
    answer:
      "Chúng tôi cung cấp dịch vụ làm bài tập lớn, đồ án, báo cáo và hướng dẫn demo cho sinh viên CNTT.",
  },
  {
    question: "Chính sách hoàn tiền thế nào?",
    answer:
      "Hoàn tiền 100% nếu tài liệu bị lỗi không đọc được hoặc sai mô tả.",
  },
];

export default function InfoSidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <aside className="w-full lg:w-75 bg-white border rounded-xl shadow-sm p-4 sticky top-20 mt-20">
      {/* Title */}
      <h3 className="text-lg font-bold mb-3">Thông tin & Hỗ trợ</h3>

      {/* Quick Info */}
      <div className="space-y-2 mb-5">
        <div className="p-3 bg-gray-50 rounded-lg border">
          <p className="text-sm">✔ Tài liệu chất lượng cao</p>
          <p className="text-sm">✔ Kiểm duyệt trước khi đăng</p>
          <p className="text-sm">✔ Thanh toán an toàn</p>
        </div>
        <div className="p-3 bg-blue-50 border rounded-lg">
          <p className="font-medium text-blue-700">
            Cần hỗ trợ làm bài tập lớn / đồ án?
          </p>
          <p className="text-sm text-blue-600 mb-2">
            Chat với đội ngũ kỹ thuật để được tư vấn ngay!
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Liên hệ ngay
          </button>
        </div>
      </div>

      {/* FAQ */}
      <h4 className="font-semibold mb-2">Câu hỏi thường gặp</h4>

      <div className="space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-3 text-left"
            >
              <span className="font-medium text-sm">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-3 pt-0 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
