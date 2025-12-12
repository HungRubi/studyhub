export default function FAQ() {
  const faqs = [
    {
      q: "Bạn nhận làm những công nghệ nào?",
      a: "React, Next.js, Node.js, Python, Java, C#, Flutter, MongoDB, MySQL, AI, Machine Learning...",
    },
    {
      q: "Có cam kết deadline không?",
      a: "Có, và nếu trễ bạn sẽ được hoàn tiền 100%.",
    },
    {
      q: "Có hỗ trợ chỉnh sửa sau khi bàn giao không?",
      a: "Hỗ trợ miễn phí trong 7 ngày.",
    },
    {
      q: "Có làm theo yêu cầu giảng viên không?",
      a: "Có, bạn chỉ cần gửi mô tả hoặc tài liệu yêu cầu.",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">❓ Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white p-5 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">{f.q}</h3>
            <p className="text-gray-600 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
