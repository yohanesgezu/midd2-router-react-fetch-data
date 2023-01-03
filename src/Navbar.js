import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <CustomLink to="/student">Sudent</CustomLink>
        <CustomLink to="/employee">Employee</CustomLink>
        <CustomLink to="/teacher">Teacher</CustomLink>
      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <ul>
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    </ul>
  )
}
