"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="bg-white border rounded-xl shadow-sm p-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1200);
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Gửi tin nhắn cho chúng tôi</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Họ và tên</label>
          <input
            type="text"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Nhập họ tên"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            placeholder="Nhập email"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Số điện thoại</label>
        <input
          type="text"
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
          placeholder="0123 456 789"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Nội dung</label>
        <textarea
          rows={5}
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
          placeholder="Bạn cần hỗ trợ vấn đề gì?"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
      >
        {loading ? "Đang gửi..." : "Gửi tin nhắn"}
      </button>
    </form>
  );
}
