import Navbar from "./Navbar"
import Container from "../Container"
import { Outlet } from "react-router-dom"
import "../Layout/Layout.css"
function Layout() {
  return (
    <div id="layout">
        <Container >
          <Navbar />
        </Container>
           <Outlet />
    </div>
  )
}

export default Layout