import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseScreen from "./screens/BaseScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";

const ConnectionScreen = lazy(() => import('./screens/ConnectionScreen'));

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
          <Route path='/connection' element={
            <Suspense fallback={<LoadingScreen />}>
              <ConnectionScreen />
            </Suspense>
          }/>
          <Route path='/cart' element={
            <Suspense fallback={<LoadingScreen />}>
              <CartScreen />
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;