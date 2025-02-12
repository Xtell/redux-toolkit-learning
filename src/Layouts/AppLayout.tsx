import { Outlet } from "react-router"

export const AppLayout = () => {
  return (
    <div className="text-3xl grid">
      <Outlet />
    </div>
  )
}