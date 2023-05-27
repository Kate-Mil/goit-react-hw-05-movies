import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
