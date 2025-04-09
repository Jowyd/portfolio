import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';

const NotFoundPage = () => {
  useEffect(() => {
    // Animation for 404 page
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    tl.fromTo(
      '.not-found-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      '.not-found-description',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.5'
    );

    tl.fromTo(
      '.not-found-link',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.3'
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12">
      <div className="text-center">
        <h1 className="not-found-title text-6xl md:text-8xl font-khteka text-fiddle-light mb-8">
          404
        </h1>
        <p className="not-found-description text-xl md:text-2xl text-fiddle-gray mb-10">
          The page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="not-found-link inline-block px-8 py-4 bg-fiddle-light text-fiddle-dark font-khteka-mono hover:bg-opacity-90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
