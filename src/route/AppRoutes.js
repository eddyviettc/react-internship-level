import Home from '../component/Home.js';
import Login from '../component/Login.js';
import { Routes, Route } from "react-router-dom"
import PrivateRoutes from './PrivateRoutes.js';
import TableUsers from '../component/TableUsers';
import NotFound from './NotFound';




const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path='/users'
                    element={
                        <PrivateRoutes>
                            <TableUsers />
                        </PrivateRoutes>
                    }


                />
                <Route path="*" element={<NotFound />} />

            </Routes>


        </>
    )
}

export default AppRoutes