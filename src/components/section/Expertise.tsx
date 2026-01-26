export default function Expertise() {
  return (
        <section className="w-full bg-[#f4faff] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-10">
          Innovating Procurement And Supply Chains Boosts Efficiency, Resilience,
          And Scalability Through Improved Collaboration And Control.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT SIDE – 3 IMAGE + TEXT (NO CARD UI) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ITEM 1 */}
            <div>
              <p className="text-sm font-bold text-orange-500 mb-2">
                INCREASED PROFITABILITY
              </p>
              <div className="h-55 mb-2 bg-gray-200 flex items-center justify-center">
                <img  src="/images/hero/assist-strategy.png" alt=""
                className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-gray-700 mb-9">
                Reduce costs associated with planning and executing supply chain
                processes, leading to greater profitability.
              </p>
              <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded">
                REQUEST A FREE CONSULTATION »
              </button>
            </div>

            {/* ITEM 2 */}
            <div>
              <p className="text-sm font-bold text-orange-500 mb-2">
                IMPROVED CASH FLOW
              </p>
              <div className="h-55 mb-2 bg-gray-200 flex items-center justify-center">
               <img
                  src="images/hero/work-plan.png"
                  alt="section image"
                  className="w-full h-full object-cover"
                  />

              </div>
              <p className="text-sm text-gray-700 mb-4">
                Gain a better understanding of demand and timing to optimize
                production planning and maintain minimal inventory levels.
              </p>
              <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded">
                LEARN BESONG iPROCURE »
              </button>
            </div>

            {/* ITEM 3 */}
            <div>
              <p className="text-sm font-bold text-orange-500 mb-2">
                PROACTIVE MANAGEMENT
              </p>
              <div className="h-55 mb-2 bg-gray-200 flex items-center justify-center">
                <img className="w-full h-full object-cover" src="images/hero/plan-create.png" alt="" />
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Leverage predictive analytics and scenario planning to identify
                potential risks and develop the best response strategies.
              </p>
              <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded">
                DISCOVER BESONG STRATEGY »
              </button>
            </div>

          </div>

          {/* RIGHT SIDE – BLUE CARD (AS IS) */}
          <div className="bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between h-full">

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                24/7 Personal Assistance
              </h3>

              <p className="text-sm mb-6 leading-relaxed">
                At BESONG, we’re revolutionizing procurement and supply chain
                management. Our solutions enhance efficiency, strengthen
                resilience, and drive collaboration.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white text-blue-600 p-4 rounded-md text-sm">
                  Outsource your procurement needs with BESONG. Our experts handle
                  sourcing, supplier relations, and strategies so your team can
                  focus on growth.
                </div>

                <div className="bg-white text-blue-600 p-4 rounded-md text-sm">
                  BESONG helps you manage and optimize your global supply chain
                  from supplier to customer with seamless logistics solutions.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-6">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">
                GET STARTED WITH BESONG TODAY »
              </button>
              <button className="border border-white px-4 py-2 rounded-md">
                TRANSFORM YOUR SUPPLY CHAIN »
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
