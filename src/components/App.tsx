import { useRoutes } from "react-router-dom";

import Vehicle from "./dashboard/Vehicle";
import VehicleDashboard from "./dashboard/VehicleDashboard";
import NotFound from "./errorPage/NotFound";

const App: React.FC = (): JSX.Element => {
  const route = useRoutes([
    { path: "/", element: <VehicleDashboard /> },
    { path: "/vehicle", element: <Vehicle /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <>{route}</>;
};

export default App;
