export default function Reviews() {
  const reviews = [
    {
      name: "Nguyen Van A",
      review: "Làm đồ án React rất đúng yêu cầu, giao đúng deadline. Rất hài lòng!",
      rating: 5,
    },
    {
      name: "Tran Thi B",
      review: "Tài liệu Python cực kỳ chi tiết, dễ hiểu.",
      rating: 5,
    },
    {
      name: "Le Quang C",
      review: "Thuê làm bài lớn Node.js 2 ngày là xong, hỗ trợ chỉnh sửa nhiệt tình.",
      rating: 4,
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">⭐ Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white border rounded-xl shadow p-6">
            <p className="text-gray-700">&quot;{r.review}&quot;</p>
            <p className="mt-4 font-semibold text-gray-800">{r.name}</p>
            <p className="text-orange-600 mt-1">{"⭐".repeat(r.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
