import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-fiddle-accent border-opacity-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <span className="block mb-6 text-fiddle-gray text-sm">
              Scritch-scratch
            </span>
          </div>

          <div className="flex flex-col space-y-4">
            <Link to="/work" className="text-fiddle-gray hover:text-fiddle-light transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-fiddle-gray hover:text-fiddle-light transition-colors">
              About
            </Link>
            <Link to="/connect" className="text-fiddle-gray hover:text-fiddle-light transition-colors">
              Let's talk
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="https://www.awwwards.com/Fiddle.Digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fiddle-gray hover:text-fiddle-light transition-colors"
            >
              Awwwards
            </a>
            <a
              href="https://www.instagram.com/fiddle.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fiddle-gray hover:text-fiddle-light transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com/FiddleDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fiddle-gray hover:text-fiddle-light transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://www.behance.net/fiddledigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fiddle-gray hover:text-fiddle-light transition-colors"
            >
              Behance
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-fiddle-accent border-opacity-10">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button
              className="text-fiddle-gray hover:text-fiddle-light transition-colors text-sm"
              onClick={() => {
                localStorage.removeItem('cookiesAccepted');
                window.location.reload();
              }}
            >
              Cookie preferences
            </button>
            <span className="text-fiddle-gray text-sm">
              Fiddle.Digital {year}
            </span>
            <Link to="/404" className="text-fiddle-gray hover:text-fiddle-light transition-colors text-sm">
              p. 4 04
            </Link>
          </div>

          <Link to="/" className="flex items-center">
            <span className="text-fiddle-gray text-sm">
              Fiddle.Digital
            </span>
            <span className="mx-2 text-fiddle-gray text-sm">
              Design agency
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
