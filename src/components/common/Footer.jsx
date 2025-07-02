const Footer = () => (
  <footer className="bg-orange-400 text-black py-6 text-center text-sm md:text-lg shadow-inner border border-b border-orange-800">
    &copy; {new Date().getFullYear()} 🍽️{" "}
    <span className="font-bold">Mealiverse</span>. All rights reserved.
  </footer>
);

export default Footer;
