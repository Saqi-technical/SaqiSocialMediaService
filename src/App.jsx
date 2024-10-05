import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import routes from "./routes/index.jsx";
import "./App.css";
import Loader from "./components/Loader.jsx";

function App() {
  useEffect(() => {
   localStorage.clear()
  }, [])
  
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes &&
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((child, index) => (
                    <Route
                      key={index}
                      path={child.path}
                      element={child.element}
                    />
                  ))}
              </Route>
            ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
