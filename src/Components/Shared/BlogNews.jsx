import React from "react";

const blogData = [
  {
    id: 1,
    date: "23.12.2023",
    title: "Home sales start to rise",
    description:
      "Nam eget habitasse semper turpis. Ultrices vitae tristique sem nulla ornare massa id in.",
    image: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    date: "23.12.2023",
    title: "Real estate and design trends",
    description:
      "Nam eget habitasse semper turpis. Ultrices vitae tristique sem nulla.",
    image: "https://st5.depositphotos.com/9999814/74036/i/450/depositphotos_740362898-stock-photo-blogging-concept-web-blog-social.jpg",
  },
  {
    id: 3,
    date: "23.12.2023",
    title: "Mortgage rates dip below 7%",
    description:
      "Ultrices vitae tristique sem nulla ornare massa id in. Ridiculus fringilla laoreet.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXW6H6fKAYJ0HpCAu-P5sqCjE9CMPHsP6MWU8rodtJMc6C9-8KBBi_rzIIdWLCvJk8Rk&usqp=CAU",
  },
];


const BlogNews = () => {
  return (
    <>
      <section className="w-full pb-16 bg-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-2">Blog news</h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl">
          Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {blogData.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-1">{item.date}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogNews;
