import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  const infoList = [
    {
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      title: "Hotline",
      value: "0123 456 789",
    },
    {
      icon: <Mail className="w-5 h-5 text-orange-500" />,
      title: "Email",
      value: "support@studyhub.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      title: "Giờ làm việc",
      value: "08:00 – 22:00 (tất cả các ngày)",
    },
    {
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
      title: "Địa chỉ",
      value: "TP. Hồ Chí Minh, Việt Nam",
    },
  ];

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 space-y-6 h-fit">
      <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>

      {infoList.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          {item.icon}
          <div>
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-sm text-gray-600">{item.value}</p>
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
        <p className="font-medium text-orange-700">
          Bạn cần hỗ trợ làm đồ án/bài tập lớn IT?
        </p>
        <p className="text-sm text-orange-600">
          Hãy gửi yêu cầu – đội ngũ chuyên gia sẽ tư vấn ngay!
        </p>
      </div>
    </div>
  );
}
