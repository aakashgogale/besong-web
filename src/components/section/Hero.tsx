export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">

      {/* Background stars */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/space-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Global Impact, <br /> Expertly Delivered
            </h1>

            <div className="h-1 w-40 bg-green-500 mb-6"></div>

            <p className="text-gray-300 mb-8 max-w-xl">
              Fresh perspective to consistently innovate
            </p>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold rounded">
                CONTACT OUR EXPERTS
              </button>
              <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
                BOOK A MEETING
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block">
            <img
              src="/images/hero/globe-hand.png"
              alt="Globe"
              className=" absolute scale-x-[-1]
right-[-130px]
    top-1/2
    -translate-y-1/3

    w-[900px]
    max-w-none

    lg:w-[900px]
    xl:w-[900px]

    drop-shadow-[0_0_80px_rgba(0,180,255,0.4)]
  "
/>
    
          </div>

        </div>
      </div>
    </section>
  );
}
