import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseScreen from "./screens/BaseScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";

const ConnexionScreen = lazy(() => import('./screens/ConnexionScreen'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={
            <Suspense fallback={<LoadingScreen />}>
              <HomeScreen />
            </Suspense>
          }/>
          <Route path='/connexion' element={
            <Suspense fallback={<LoadingScreen />}>
              <ConnexionScreen />
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;