import React, { lazy } from 'react'
import { Routes,Route,useNavigate } from 'react-router-dom';

const Home = lazy(()=> import("../../pages/Home"))
const Layout = lazy(()=> import("../../layout"))
const Router: React.FC= () => {
  return (
    <Routes>
        <Route path={""} element={<Layout />}>
            <Route path={"/"} element={<Home />} />
        </Route>
    </Routes>
  )
}

export default Router