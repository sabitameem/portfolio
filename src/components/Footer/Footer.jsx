

const Footer = () => {
    return (
        <footer className="bg-cyan-950 mt-28 py-[80px] h-[200px]">
        <div className="container mx-auto text-center text-white my-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sabita Binte Hoque Meem. All rights reserved.
          </p>
          <p className="text-sm">
            Built with <span className="text-white-500">❤</span> using React and Tailwind CSS
          </p>
        </div>
      </footer>
    );
};

export default Footer;