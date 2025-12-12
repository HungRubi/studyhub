export default function ProcessSteps() {
  const steps = [
    { step: "1. Send requirements", desc: "Mô tả yêu cầu, công nghệ, deadline." },
    { step: "2. Get pricing", desc: "Báo giá dựa trên độ khó + deadline." },
    { step: "3. Start working", desc: "Tiến hành làm + cập nhật tiến độ." },
    { step: "4. Demo preview", desc: "Khách xem thử và yêu cầu chỉnh sửa." },
    { step: "5. Final delivery", desc: "Bàn giao source code, báo cáo, hướng dẫn." },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        🛠️ Working Process
      </h2>

      <div className="space-y-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-orange-600">{s.step}</h3>
            <p className="text-gray-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
