function Footer() {
  return (
    <footer className=" md:px-10 lg: py-14 bg-gray-200 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 ml-10  lg:grid-cols-5 xl:grid-cols-5 gap-y-10 mx-auto ">
        <div className="space-y-4 text-xs text-gray-800 w-full">
          <h5 className="font-bold text-lg">ABOUT</h5>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">How Airbnb works</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Newsroom</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Investors</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Airbnb Plus</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Airbnb Luxe</p>
          <div className="border-b border-gray-300 md:hidden pt-5 mr-5 "></div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-lg">HOST</h5>

          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Papa React</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Presents</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Investors</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Zero to Full Stack Hero</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Join Now</p>
          <div className="border-b border-gray-300 md:hidden pt-5 mr-5 "></div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-lg">COMMUNITY</h5>

          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Accessibility</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">This is not a real site</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">It's a pretty awesome clone</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Referrals accepted</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Papafam</p>
          <div className="border-b border-gray-300 md:hidden pt-5 mr-5 "></div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-lg">SUPPORT</h5>

          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Help center</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Trust & Safety</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Say Hi Youtube</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Easter Eggs</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">For the win</p>
          <div className="border-b border-gray-300 md:hidden pt-5 mr-5 "></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
