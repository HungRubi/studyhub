export default function StatisticsSection() {
  const stats = [
    { value: "1.200+", label: "Tài liệu IT" },
    { value: "800+", label: "Bài tập lớn đã làm" },
    { value: "1.500+", label: "Khách hàng" },
    { value: "98%", label: "Đánh giá 5 sao" },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Thống Kê Nhanh
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl font-extrabold text-orange-500">{stat.value}</div>
              <div className="mt-2 text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
