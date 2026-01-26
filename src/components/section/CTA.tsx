export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-16 text-white">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Take the Next Step
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-blue-700/60 p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">❓</div>
            <h3 className="font-semibold mb-2">Ask Us</h3>
            <p className="text-sm text-blue-100">
              Send us your questions
            </p>
          </div>

          <div className="bg-blue-700/60 p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="font-semibold mb-2">RFP</h3>
            <p className="text-sm text-blue-100">
              Request a business proposal
            </p>
          </div>

          <div className="bg-blue-700/60 p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-semibold mb-2">Feedback</h3>
            <p className="text-sm text-blue-100">
              Share your thoughts & suggestions
            </p>
          </div>

          <div className="bg-blue-700/60 p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">🎧</div>
            <h3 className="font-semibold mb-2">Speak to an Expert</h3>
            <p className="text-sm text-blue-100">
              Schedule a consultation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
