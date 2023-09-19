import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth === true && authRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={<Component />} /> // exact = путь должен точно совпадать
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={<Component />} />
            )} 
            {/* <Navigate to={SHOP_ROUTE} replace/> // при дефолтном пути должен перебрасывать на корзину*/} 
        </Routes>
    )
}

export default AppRouter;