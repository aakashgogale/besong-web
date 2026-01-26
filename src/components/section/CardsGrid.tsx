export default function CardsGrid() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-16 overflow-hidden">
      
      {/* BACKGROUND LINES (right side effect) */}
      <div className="absolute right-0 top-0 h-full w-40 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_100%]" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="flex items-center justify-center gap-3 mb-12 text-white">
          <i className="ri-customer-service-2-line text-2xl" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">
            TAKE THE NEXT STEP
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="relative border border-white/30 rounded-xl p-8 text-center text-white hover:border-white transition">
            <span className="absolute top-3 right-3 w-6 h-6 rounded-full border border-orange-400 text-orange-400 text-xs flex items-center justify-center">
              ↗
            </span>
            <i className="ri-question-mark text-4xl text-orange-400 mb-4" />
            <h4 className="font-semibold mb-2">Ask Us</h4>
            <p className="text-sm opacity-90">
              Send us your question(s)
            </p>
          </div>

          {/* CARD 2 */}
          <div className="relative border border-white/30 rounded-xl p-8 text-center text-white hover:border-white transition">
            <span className="absolute top-3 right-3 w-6 h-6 rounded-full border border-orange-400 text-orange-400 text-xs flex items-center justify-center">
              ↗
            </span>
            <i className="ri-file-edit-line text-4xl text-orange-400 mb-4" />
            <h4 className="font-semibold mb-2">RFP</h4>
            <p className="text-sm opacity-90">
              Request for a business proposal
            </p>
          </div>

          {/* CARD 3 */}
          <div className="relative border border-white/30 rounded-xl p-8 text-center text-white hover:border-white transition">
            <span className="absolute top-3 right-3 w-6 h-6 rounded-full border border-orange-400 text-orange-400 text-xs flex items-center justify-center">
              ↗
            </span>
            <i className="ri-chat-3-line text-4xl text-orange-400 mb-4" />
            <h4 className="font-semibold mb-2">Feedback</h4>
            <p className="text-sm opacity-90">
              Share your thoughts, comments and suggestions
            </p>
          </div>

          {/* CARD 4 */}
          <div className="relative border border-white/30 rounded-xl p-8 text-center text-white hover:border-white transition">
            <span className="absolute top-3 right-3 w-6 h-6 rounded-full border border-orange-400 text-orange-400 text-xs flex items-center justify-center">
              ↗
            </span>
            <i className="ri-customer-service-line text-4xl text-orange-400 mb-4" />
            <h4 className="font-semibold mb-2">Speak to an Expert</h4>
            <p className="text-sm opacity-90">
              Schedule a consult with a specialist
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
