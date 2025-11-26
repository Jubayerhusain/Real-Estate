import React from "react";
const locations = [
  {
    id: 1,
    title: "Smoky Hollow",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80",
    address: "9514 Smoky Hollow St. Sulphur, LA 70663",
    phone: "(736) 267-8659",
    email: "rsmartin@gmail.com",
  },
  {
    id: 2,
    title: "North Road",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80",
    address: "19 North Road Piscataway, NJ 08854",
    phone: "(736) 267-8659",
    email: "rsmartin@gmail.com",
  },
  {
    id: 3,
    title: "Rockville Ave",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80",
    address: "8460 Rockville Ave. Greenville, NC 27834",
    phone: "(736) 267-8659",
    email: "rsmartin@gmail.com",
  },
];

const OurOffices = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="font-bold text-[40px] text-gray-900">Our Offices</h1>
        <p className="text-black mt-4 text-md">
          Pretium interdum risus risus facilisis cras pellentesque ipsum
          suspendisse
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 px-4 sm:px-0">
        {locations.map((item) => (
          <div key={item.id} className="rounded-t-xl overflow-hidden ">
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="mt-3">
              <h2 className="text-[20px] font-bold">{item.title}</h2>

              <p className="text-[15px] text-gray-600 mt-1">{item.address}</p>

              <p className="text-[15px] text-gray-700 mt-2">
                <span className="font-semibold">Phone:</span> {item.phone}
              </p>

              <p className="text-[15px] text-gray-700">
                <span className="font-semibold">Email:</span> {item.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffices;
