import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";

const agentsData = [
  {
    id: 1,
    name: "Terrell Norman",
    title: "Real estate agent",
    office: "(358) 707-4989",
    mobile: "(822) 622-2842",
    email: "shrapnull@yahoo.ca",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Terrell Norman",
    title: "Real estate agent",
    office: "(358) 707-4989",
    mobile: "(822) 622-2842",
    email: "shrapnull@yahoo.ca",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Terrell Norman",
    title: "Real estate agent",
    office: "(358) 707-4989",
    mobile: "(822) 622-2842",
    email: "shrapnull@yahoo.ca",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Terrell Norman",
    title: "Real estate agent",
    office: "(358) 707-4989",
    mobile: "(822) 622-2842",
    email: "shrapnull@yahoo.ca",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  }
];

const AgentCard = ({ image, name, title, office, mobile, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full h-auto sm:w-[220px] sm:h-[235px] flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-0.5">{name}</h3>
          <p className="text-xs text-gray-500 mb-3 pb-3 border-b border-gray-200">{title}</p>
          
          <div className="space-y-1.5 mb-3">
            <div className="flex text-xs justify-between">
              <span className="font-semibold text-gray-900 w-14">Office</span>
              <span className="text-gray-600">{office}</span>
            </div>

            <div className='border-t border-gray-200'></div>

            <div className="flex text-xs justify-between">
              <span className="font-semibold text-gray-900 w-14">Mobile</span>
              <span className="text-gray-600">{mobile}</span>
            </div>
            
            <div className='border-t border-gray-200'></div>

            <div className="flex text-xs justify-between">
              <span className="font-semibold text-gray-900 w-14">Email</span>
              <span className="text-blue-600">{email}</span>
            </div>

            <div className='border-t border-gray-200'></div>

          </div>
          
          <div className="flex gap-1.5">
            <div className="w-8 h-8 rounded-full text-white bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <BiLogoFacebook />
            </div>
            <div className="w-8 h-8 rounded-full text-white bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FaInstagram />
            </div>
            <div className="w-8 h-8 rounded-full text-white bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FaXTwitter />
            </div>
            <div className="w-8 h-8 rounded-full text-white bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FaYoutube />
            </div>
            <div className="w-8 h-8 rounded-full text-white bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AgentsSection() {
  return (
    <div className="pt-10 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our professional agents</h1>
          <p className="text-gray-500 text-sm">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {agentsData.map((agent) => (
            <AgentCard
              key={agent.id}
              image={agent.image}
              name={agent.name}
              title={agent.title}
              office={agent.office}
              mobile={agent.mobile}
              email={agent.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
}