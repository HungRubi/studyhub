"use client";
import { FC } from "react";
import { BookOpen, Download, FileText, Star } from "lucide-react";
import Image from "next/image";

type DetailDocsProps = {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  pages: number;
  downloads: number;
  rating: number;
};

const DetailDocs: FC<DetailDocsProps> = ({
  title,
  description,
  thumbnail,
  category,
  pages,
  downloads,
  rating,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Thumbnail */}
      <div className="w-full">
        <Image
          src={thumbnail}
          alt={title}
          className="rounded-2xl shadow-lg w-full object-cover"
          width={500}
          height={500}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">
            {category}
          </span>

          <span className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-400" />
            {rating}
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">{description}</p>

        {/* Stats */}
        <div className="flex gap-5 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{pages} pages</span>
          </div>

          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{downloads} downloads</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold transition">
            Tải xuống ngay
          </button>

          <button className="px-6 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 font-semibold transition flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Xem trước
          </button>
        </div>

        {/* Extra information */}
        <div className="mt-8 p-5 bg-gray-50 border rounded-xl">
          <h2 className="font-semibold text-lg mb-3">Thông tin thêm</h2>
          <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
            <li>File PDF chất lượng cao</li>
            <li>Hỗ trợ mọi thiết bị</li>
            <li>Không watermark</li>
            <li>Cập nhật phiên bản mới nếu có</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailDocs;
