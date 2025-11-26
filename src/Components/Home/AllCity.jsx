import React from "react";

export default function AllCity() {
  const cities = [
    {
      name: "New York",
      properties: 28,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
      size: "large",
    },
    {
      name: "Boston",
      properties: 12,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
      size: "medium",
    },
    {
      name: "Washington",
      properties: 18,
      image:
        "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=800&q=80",
      size: "small",
    },
    {
      name: "Miami",
      properties: 32,
      image:
        "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80",
      size: "large-wide",
    },
    {
      name: "Chicago",
      properties: 37,
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
      size: "medium",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What city will you live in?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus. Porttitor fermentum eu urna eget
          </p>
        </div>

        <div className="flex justify-between gap-6 flex-col lg:flex-row">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-4 lg:gap-6">
            <div className="lg:col-span-6 relative group cursor-pointer overflow-hidden rounded-2xl h-64 md:h-80">
              <img
                src={cities[0].image}
                alt={cities[0].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-1">{cities[0].name}</h3>
                <p className="text-sm text-gray-200">
                  {cities[0].properties} properties
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 relative group cursor-pointer overflow-hidden rounded-2xl h-64 md:h-80">
              <img
                src={cities[1].image}
                alt={cities[1].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-1">{cities[1].name}</h3>
                <p className="text-sm text-gray-200">
                  {cities[1].properties} properties
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 relative group cursor-pointer overflow-hidden rounded-2xl h-64 md:h-80">
              <img
                src={cities[3].image}
                alt={cities[3].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-1">{cities[3].name}</h3>
                <p className="text-sm text-gray-200">
                  {cities[3].properties} properties
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative group cursor-pointer overflow-hidden rounded-2xl h-64 md:h-80">
              <img
                src={cities[4].image}
                alt={cities[4].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-1">{cities[4].name}</h3>
                <p className="text-sm text-gray-200">
                  {cities[4].properties} properties
                </p>
              </div>
            </div>
          </div>
          <div >
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl h-full">
              <img
                src={cities[2].image}
                alt={cities[2].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-1">{cities[2].name}</h3>
                <p className="text-sm text-gray-200">
                  {cities[2].properties} properties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
