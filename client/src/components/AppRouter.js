import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)

    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={<Component />} /> // exact = путь должен точно совпадать
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={<Component />} />
            )} 
            {/* <Navigate to={SHOP_ROUTE} replace/> // при дефолтном пути должен перебрасывать на главную*/} 
        </Routes>
    )
}

export default AppRouter;