import {
  createBrowserRouter,
} from "react-router-dom";

import Home from './pages/Home.js';
import App2 from './pages/App2.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    }, {
    path: '/2',
    element: <App2 />
    }
])

export default router;
