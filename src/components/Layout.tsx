import { Outlet, useNavigate } from 'react-router-dom';

export function Layout() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden px-8 py-6">
      <nav className="relative z-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-left text-lg font-semibold tracking-wide transition-colors hover:text-cyan-300"
        >
          Lidia Stepanova
        </button>

        <div className="flex gap-6 text-base text-white/85 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8 md:text-lg">
          <button
            type="button"
            onClick={() => navigate('/?section=about')}
            className="hover:text-white"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="hover:text-white"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => navigate('/?section=contact')}
            className="hover:text-white"
          >
            Contact
          </button>
        </div>
      </nav>

      <Outlet />
    </section>
  );
}
