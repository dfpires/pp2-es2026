import { NavLink, Outlet } from "react-router";

const links = [
  { to: "/tarefas", rotulo: "Tarefas" },
  { to: "/categorias", rotulo: "Categorias" },
];

function Layout() {
  return (
    <div className="p-6 space-y-4">
      <nav className="flex gap-2">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `px-3 py-1 rounded ${
                isActive ? "bg-teal-600 text-white" : "bg-slate-200"
              }`
            }
          >
            {l.rotulo}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
