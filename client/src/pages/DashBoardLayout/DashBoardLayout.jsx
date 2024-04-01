import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"

const DashBoardLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default DashBoardLayout