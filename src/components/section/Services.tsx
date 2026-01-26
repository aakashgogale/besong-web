export default function Services() {
  return (
    <section className="w-full bg-white">

      {/* Top blue cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-blue-600 font-semibold mb-6">
          Seamless Solutions, Endless Possibilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Humble, collaborative and passionate
            </h3>
            <p className="text-sm mb-4">
              We don’t work from the outside looking in. At BESONG, we co-create
              solutions with our clients, ensuring strategies are aligned with
              their goals and operational realities.
            </p>
            <span className="text-orange-400 font-semibold text-sm cursor-pointer">
              LET’S CO-CREATE »
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Proactive, Innovative and Focused
            </h3>
            <p className="text-sm mb-4">
              We build global partnerships with industry leaders, driving
              success, innovation, and transforming sourcing strategies
              worldwide.
            </p>
            <span className="text-orange-400 font-semibold text-sm cursor-pointer">
              SPEAK TO AN EXPERT »
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Sustainable and Long-Term Value
            </h3>
            <p className="text-sm mb-4">
              Our transformation programs deliver lasting results. Focused on
              sustainability, we ensure your success meets today’s and
              tomorrow’s needs.
            </p>
            <span className="text-orange-400 font-semibold text-sm cursor-pointer">
              PARTNER FOR SUCCESS »
            </span>
          </div>
        </div>
      </div>

      {/* Strategy Heading */}
      <div className="bg-white py-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          ♟ Strategy And Transformation ♟
        </h2>

        <p className="max-w-4xl mx-auto text-gray-700">
          Save money and boost quality with direct sourcing from emerging
          markets. Our supply chain experts identify, qualify, and secure
          competitive, high-performing products tailored to your business needs.
          Discover cost-effective solutions that deliver top-tier results today.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#f2f8fc] py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h3 className="text-2xl font-bold mb-8">
            Global Sourcing & Supply Chain Services Worldwide
          </h3>

          <div className="flex justify-center border-b-4 border-blue-600 mb-6">
            <div className="px-6 py-3 font-semibold">
              Industry Leading Software
            </div>
            <div className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-t-lg">
              Strategy
            </div>
            <div className="px-6 py-3 font-semibold">
              Managed Services
            </div>
          </div>

          <p className="max-w-4xl mx-auto text-gray-700 mb-12">
            BESONG is transforming what procurement and supply chain teams can
            achieve. Our innovative strategies and fresh perspectives empower
            leading enterprises to enhance efficiency, accelerate growth, and
            create a measurable impact on the bottom line.
          </p>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-3">
                Build a Resilient Supply Chain
              </h4>
              <p className="text-gray-700 mb-4">
                At BESONG, we specialize in efficient procurement outsourcing.
                From sourcing to logistics, we streamline your supply chain for
                success.
              </p>
              <span className="text-orange-500 font-semibold cursor-pointer">
                OPTIMIZE YOUR SUPPLY CHAIN TODAY »
              </span>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-3">
                Your Trusted Partner in Procurement
              </h4>
              <p className="text-gray-700 mb-4">
                Discover tailored solutions with BESONG to streamline
                procurement and achieve unmatched efficiency. Optimize
                operations and drive results today.
              </p>
              <span className="text-orange-500 font-semibold cursor-pointer">
                BE READY FOR TOMORROW’S CHALLENGES TODAY »
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
