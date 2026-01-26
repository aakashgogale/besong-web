export default function Assistance() {
  return (
    <section className="w-full bg-[#f2f8fc] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* LET'S CREATE */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4 text-blue-600 text-4xl">
            🏅
          </div>
          <h2 className="text-3xl font-bold text-blue-600 mb-3">
            Let’s Create
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Simplify your supply chain today with our tailored outsourcing
            solutions. Whether you’re looking to save time, cut costs, or improve
            your supplier relationships, we’ve got you covered.
          </p>
        </div>

        {/* 4 PRODUCT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          {[
            {
              title: "BESONG STRATEGY",
              desc:
                "Transform your business with BESONG. We cut costs, improve efficiency, and drive growth through workflows and collaboration.",
              btn: "EXPLORE BESONG STRATEGY",
              img: "/images/hero/strategy.png",
            },
            {
              title: "BESONG iPROCURE",
              desc:
                "Your trusted sourcing partner for seamless, sustainable, and agile solutions to keep your operations efficient and competitive.",
              btn: "PARTNER WITH US TODAY",
              img: "/images/hero/iprocuree.png",
            },
            {
              title: "BESONG iSUPPLY",
              desc:
                "Integrated ocean, air, ground freight, and LCL shipping solutions to simplify logistics and grow your business.",
              btn: "CONTACT US",
              img: "/images/hero/isupply.png",
            },
            {
              title: "BESONG iFREIGHT",
              desc:
                "Simplify your supply chain with BESONG. Streamline operations, gain visibility, and integrate seamlessly into global logistics.",
              btn: "DISCOVER BESONG TODAY",
              img: "/images/hero/ifreight.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={item.img}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {item.desc}
                  </p>
                </div>
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  {item.btn} »
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ONE PARTNER SECTION */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">
            Simplify Your Business With One Partner
          </h3>
          <p className="max-w-4xl mx-auto text-gray-700">
            Manage your entire procurement, freight, distribution, and supply
            chain with a single, integrated system. From Ecommerce and Financials
            to Inventory Management and CRM, our platform is designed to
            streamline operations, boost efficiency, and drive growth.
          </p>
        </div>

        {/* 5 FEATURE BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {[
            ["Order", "Capture orders anywhere — online, phone, or EDI."],
            ["Warehouse", "Real-time inventory updates and workflows."],
            ["Source", "Full visibility into suppliers and purchasing."],
            ["Fulfill", "Fast delivery with streamlined fulfillment."],
            ["Procurement", "Refine procurement strategies efficiently."],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm"
            >
              <h4 className="font-bold text-blue-600 mb-2">
                {item[0]}
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                {item[1]}
              </p>
              <span className="text-orange-500 text-sm font-semibold cursor-pointer">
                LEARN MORE
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        
      </div>
    </section>
  );
}
