import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./layouts/NotFound";
import Places from "./places/Places";
import PlaceAdd from "./places/Create";
import PlaceEdit from "./places/Edit";
import PlacesMap from "./map/placesMap";

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Dashboard /> },
        { path: 'places', element: <Places /> },
        { path: 'places/add', element: <PlaceAdd /> },
        { path: 'places/edit/:id', element: <PlaceEdit /> },
        { path: 'map', element: <PlacesMap /> },
      ]
    },
    {path: '/404', element: <NotFound/>},
    {path:'*', element: <Navigate to="/404" replace/>}
  ])
}

export default Routes;