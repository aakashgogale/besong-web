export default function Navbar() {
  return (
    <>
      
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex gap-4">
            <i className="ri-search-line" />
            <i className="ri-phone-line" />
            <i className="ri-global-line" />
          </div>
          <div className="flex gap-4">
            <i className="ri-chat-3-line" />
            <i className="ri-user-line" />
          </div>
        </div>
      </div>

      {/* NAV WRAPPER */}
      <header className="bg-black text-white">

        {/* ROW 1 : LOGO + RIGHT MENU */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl font-bold text-orange-500">
              BESONG
            </h1>
            <span className="text-xs text-gray-400 leading-tight">
              RESHAPING <br />
              PROCUREMENT <br />
              THROUGH INNOVATION
            </span>
          </div>

          {/* RIGHT MENU */}
          <div className="hidden lg:flex gap-6 text-sm">
            <span>Company ▾</span>
            <span>Solutions ▾</span>
            <span>Industries ▾</span>
            <span>Careers ▾</span>
            <span>Partners ▾</span>
            <i className="ri-menu-line text-lg" />
          </div>

          {/* MOBILE */}
          <i className="ri-menu-line text-2xl lg:hidden" />
        </div>

        {/* ROW 2 : UNDER BESONG (THIS IS THE KEY FIX) */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-3 hidden lg:flex gap-10 text-sm font-medium text-blue-400">
            <span className="cursor-pointer">SOFTWARE ▾</span>
            <span className="cursor-pointer">PRODUCTS ▾</span>
            <span className="cursor-pointer">MANAGED SERVICES ▾</span>
          </div>
        </div>

      </header>
    </>
  );
}
