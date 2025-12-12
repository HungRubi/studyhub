import Image from "next/image";
import Link from "next/link";

export default function BestSellingDocuments() {
  const items = [
    {
      id: 1,
      title: "Full ReactJS Roadmap Notes",
      price: "120.000đ",
      img: "/sample/react-doc.jpg",
    },
    {
      id: 2,
      title: "Node.js Backend Architecture",
      price: "150.000đ",
      img: "/sample/node-doc.jpg",
    },
    {
      id: 3,
      title: "Database MySQL CheatSheet",
      price: "80.000đ",
      img: "/sample/db-doc.jpg",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🔥 Best-Selling IT Documents
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-4"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="rounded-lg"
            />

            <h3 className="font-semibold text-lg mt-4">{item.title}</h3>
            <p className="text-orange-600 font-bold mt-2">{item.price}</p>

            <Link
              href={`/docs/computer-version`}
              className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              View Document
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
