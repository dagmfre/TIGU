import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";
import { IRoute } from "../utils/types";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {routes.map((route: IRoute) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
          <Route path="*" element={<PageNotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
