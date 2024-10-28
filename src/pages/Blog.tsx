import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import articlesList from '../articlesList.json'

export default function Blog() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`${articlesList[0].path}`)
  }, [navigate])

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-full flex flex-row p-5">
      <div id="leftSection" className="p-5 w-1/4">
        <ul className="flex flex-col">
          {articlesList?.map((article, key) => (
            <NavLink
              key={key}
              to={`/blog/${article.path}`}
              className={({ isActive }) => {
                return isActive ? 'font-bold' : ''
              }}
            >
              {article.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div id="rightContent" className="p-5 w-3/4">
        <Outlet />
      </div>
    </div>
  )
}
