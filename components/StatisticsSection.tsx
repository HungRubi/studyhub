"use client"

import { Counter } from "./Counter";
import { motion } from "framer-motion";

export default function StatisticsSection() {
  type Stat = {
    value: number;
    suffix: string;
    label: string;
  };

  const stats: Stat[] = [
    { value: 1200, suffix: "+", label: "Tài liệu IT" },
    { value: 800, suffix: "+", label: "Bài tập lớn đã làm" },
    { value: 1500, suffix: "+", label: "Khách hàng" },
    { value: 98, suffix: "%", label: "Đánh giá 5 sao" },
  ];


  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Thống Kê Nhanh
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 5, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl font-extrabold text-orange-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-gray-600 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
