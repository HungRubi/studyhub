import { Code, Cpu, FileCode, Layers } from "lucide-react";

export default function ITServices() {
  const services = [
    { icon: <Code size={32} />, title: "Web Development Projects", desc: "HTML/CSS/JS, React, Next.js, Node.js, PHP..." },
    { icon: <FileCode size={32} />, title: "Mobile App Projects", desc: "Flutter, React Native, Android Java/Kotlin" },
    { icon: <Layers size={32} />, title: "AI / Machine Learning", desc: "Python, TensorFlow, OpenCV, ML models" },
    { icon: <Cpu size={32} />, title: "Database / Backend", desc: "MySQL, MongoDB, API, Architecture…" },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🚀 IT Project & Assignment Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm hover:shadow-lg p-6 transition"
          >
            <div className="text-orange-600">{s.icon}</div>
            <h3 className="font-semibold text-lg mt-4">{s.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
        Send Your Requirements
      </button>
    </section>
  );
}
