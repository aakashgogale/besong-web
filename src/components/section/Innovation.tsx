export default function Innovation() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Heading */}
        <div className="flex items-start gap-3 mb-10">
          <div className="text-blue-600 text-4xl">🌐</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Procurement, Strategy, Supply <br /> Chain & Logistics
            </h2>
            <p className="text-orange-500 font-semibold mt-1">
              Control Cost. Eliminate Risk. Execute.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="relative">
              <img
                src="/images/hero/strategic.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg p-4 flex flex-col justify-between">
                <p className="text-white text-sm">
                  Find the best suppliers, negotiate competitive terms, and
                  secure high-quality materials for your operations.
                </p>
                <span className="text-orange-400 font-semibold text-sm">
                  STRATEGIC SOURCING
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative">
              <img
                src="/images/hero/inventory-management.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg p-4 flex flex-col justify-between">
                <p className="text-white text-sm">
                  Keep track of your stock levels, avoid overages, and guarantee
                  just-in-time delivery.
                </p>
                <span className="text-orange-400 font-semibold text-sm">
                  INVENTORY MANAGEMENT
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative">
              <img
                src="/images/hero/supplier-relationship.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg p-4 flex flex-col justify-between">
                <p className="text-white text-sm">
                  Build and maintain strong supplier relationships to ensure
                  seamless collaboration.
                </p>
                <span className="text-orange-400 font-semibold text-sm">
                  SUPPLIER RELATIONSHIP MANAGEMENT
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative">
              <img
                src="/images/hero/risk-management.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg p-4 flex flex-col justify-between">
                <p className="text-white text-sm">
                  Mitigate supply chain disruptions with proactive risk
                  assessments and contingency planning.
                </p>
                <span className="text-orange-400 font-semibold text-sm">
                  RISK MANAGEMENT
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Big Illustration */}
          <div className="bg-blue-600 rounded-xl p-6 flex items-center justify-center">
            <img
              src="/images/hero/video.png"
              alt=""
              className="max-w-full"
            />
          </div>
        </div>

        {/* Middle Text */}
        <div className="text-center mt-14 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
            Unmatched Expertise and a Global Network in Sourcing and Supply Chain Solutions
          </h3>
          <p className="text-gray-700 mb-6">
            With over 26 years of proven experience and a powerful network, we
            deliver intelligent, efficient supply chain and sourcing solutions
            that redefine success. Spend less time worrying about procurement
            and more time scaling your business.
          </p>

          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">
            REIMAGINE YOUR BUSINESS WITH BESONG »
          </button>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

          <div className="bg-[#f2f8fc] p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">
              Why <span className="text-orange-500">BESONG?</span>
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              At BESONG, we transform more than supply chains—we redefine
              industries. Efficiency, precision, and exceptional outcomes—that’s
              the BESONG promise.
            </p>
            <span className="text-blue-600 font-semibold cursor-pointer">
              PARTNER WITH US TODAY »
            </span>
          </div>

          <div className="bg-[#f2f8fc] p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">
              What <span className="text-orange-500">We Do</span>
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              We specialize in procurement strategy and transformation, helping
              businesses streamline processes, drive efficiency, and uncover
              hidden value.
            </p>
            <span className="text-blue-600 font-semibold cursor-pointer">
              DISCOVER BESONG TODAY »
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
