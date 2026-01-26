export default function Strategy() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-4">
          Procurement And Supply Chain Is Our Game
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At BESONG, we transform supply chains with resilience, agility, and sustainability. Our strategies deliver efficiency, results, and lasting impact for businesses globally. Upgrade your operations with future-ready solutions.
          Upgrade your operations with future-ready solutions.
        </p>

        {/* 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white  rounded-xl p-2 border shadow-sm overflow-hidden">
            <img src="/images/hero/strategy-1.png" className="w-full h-52 object-cover" />
            <div className="p-5">
              <h4 className="text-orange-500 font-bold mb-2">WHO IS BESONG?</h4>
              <p className="text-sm text-gray-700 mb-4">
                BESONG builds partnerships to drive ROI and long-term growth.
              </p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                UNLOCK YOUR BUSINESS’S FULL POTENTIAL »
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl border p-2 shadow-sm overflow-hidden">
            <img src="/images/hero/strategy-2.png" className="w-full h-52 object-cover" />
            <div className="p-5">
              <h4 className="text-orange-500 font-bold mb-2">PROVEN EXPERTISE</h4>
              <p className="text-sm text-gray-700 mb-4">
                Our passionate team averages 26 years of experience.
              </p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                DISCOVER HOW WE ADD VALUE »
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-2 border shadow-sm overflow-hidden">
            <img src="/images/hero/strategy-3.png" className="w-full h-52 object-cover" />
            <div className="p-5">
              <h4 className="text-orange-500 font-bold mb-2">TOP SUPPLIER SOURCING</h4>
              <p className="text-sm text-gray-700 mb-4">
                Find suppliers, source materials, and cut costs globally.
              </p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">
                PARTNER WITH US TODAY »
              </button>
            </div>
          </div>

        </div>

        {/* CENTER CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
            CONNECT WITH BESONG TODAY »
          </button>
        </div>

      </div>
    </section>
  );
}
