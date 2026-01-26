import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f252b] text-white relative">
  <div className="max-w-7xl mx-auto px-6 pt-14 pb-20">

    {/* 🔹 TOP: LOGO ONLY */}
    <div className="mb-10">
      <h2 className="text-3xl font-bold">
        <span className="text-orange-500">BE</span>
        <span className="text-blue-500">SONG</span>
      </h2>
    </div>

    {/* 🔹 MAIN FOOTER GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-12">

      {/* Procurement */}
      <div>
        <h4 className="font-semibold mb-4">Procurement Consulting</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Sourcing & Procurement</li>
          <li>Procurement Consulting</li>
          <li className="bg-orange-500 text-white px-3 py-1 rounded w-fit">
            Demand & Supply Planning
          </li>
          <li>Strategic Sourcing & Category Management</li>
          <li>Cost of Goods Sold Transformation</li>
          <li>Business Process Outsourcing</li>
          <li>Procurement Transformation</li>
          <li>Opportunity Assessment</li>
          <li>M & A Services</li>
          <li>Procurement Risk Management</li>
        </ul>
      </div>

      {/* Supply Chain */}
      <div>
        <h4 className="font-semibold mb-4">Supply Chain Consulting</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Sustainability and Resilience</li>
          <li>Supply Chain Strategy</li>
          <li>Supply Chain Diagnostics</li>
          <li>Inventory Optimization</li>
          <li>Network Optimization</li>
          <li>Collaborative Planning</li>
          <li>Inventory Strategy & Management</li>
          <li>Operations & Manufacturing Excellence</li>
          <li>Network Strategy & Optimization</li>
          <li>Warehousing & Transportation Management</li>
        </ul>
      </div>

      {/* iPROCURE */}
      <div>
        <h4 className="font-semibold mb-4">iPROCURE</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Direct Procurement</li>
          <li>Indirect Procurement</li>
          <li>Sourcing Support Services</li>
          <li>Unified Source-to-Pay</li>
          <li>Source-to-Contract</li>
          <li>Procure-to-Pay</li>
          <li>Midsize & High Growth Enterprises</li>
          <li>Category Management</li>
          <li>Contract Lifecycle Management</li>
          <li>Supplier Lifecycle Management</li>
          <li>Third-Party Risk Management</li>
          <li>Intelligent Category Management</li>
        </ul>
      </div>

      {/* iFREIGHT + iSUPPLY */}
      <div>
        <h4 className="font-semibold mb-4">iFREIGHT</h4>
        <ul className="space-y-2 text-sm text-gray-300 mb-6">
          <li>Freight Shipping Services</li>
          <li>Logistics Services</li>
          <li>Transportation Solutions</li>
          <li>Modes</li>
        </ul>

        <h4 className="font-semibold mb-4">iSUPPLY</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Supply Chain Visibility & Execution</li>
          <li>Supply Chain Planning</li>
          <li>Supply Chain Collaboration</li>
          <li>Supply Chain Network Optimization</li>
          <li>Should Cost Modeling</li>
          <li>Inventory & Warehouse Management</li>
        </ul>
      </div>

      {/* Managed Services */}
      <div>
        <h4 className="font-semibold mb-4">Managed Services</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Procurement Outsourcing</li>
          <li>Strategic Sourcing</li>
          <li>Tail-Spend Management</li>
          <li>Category Management</li>
          <li>Procurement Support Services</li>
          <li>Supply Chain Outsourcing</li>
          <li>Supply Chain Planning & Forecasting</li>
          <li>Inventory Management</li>
          <li>Logistics Management</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-gray-300 mb-8">
          <li>About Us</li>
          <li>Leadership</li>
          <li>Sustainability</li>
          <li>Careers</li>
          <li>Partners</li>
          <li>Contact Us</li>
        </ul>

        {/* Stay Connected */}
        <h4 className="font-semibold mb-3">Stay Connected</h4>
        <div className="flex gap-4 mt-3">
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:scale-105 transition">
          <FaYoutube className="text-white text-lg" />
          </a>

          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-105 transition">
          <FaFacebookF className="text-white text-lg" />
          </a>

          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:scale-105 transition">
          <FaInstagram className="text-white text-lg" />
          </a>

          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:scale-105 transition">
          <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div>

      </div>
          
    </div>
  </div>
  {/* COPYRIGHT */}
    <div className="w-full border-t border-white/20 py-4 text-center">
      <p className="text-sm text-gray-300">
         © 2026 BESONG, Incorporated. All rights reserved.
      </p>
    </div>
</footer>

  );
}
