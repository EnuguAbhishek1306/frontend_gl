const Footer = () => {
    return (
      <footer className="mt-12 bg-gray-900 text-white py-8 px-4 text-center">
        <div className="w-full mx-auto">
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-gray-400">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  