const NavbarReact = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home"
    },
    {
      id: 2,
      path: "/about",
      name: "About"
    },
    {
      id: 1,
      path: "/",
      name: "Home"
    }
  ];
  return (
    <div>
      <nav>
        <ul>
          {routes.map((route) => {
            <li>
              <a className="text-white" href={route.path}>
                {route.name}
              </a>
              ;
            </li>;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarReact;
