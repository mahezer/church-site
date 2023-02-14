import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App.js';
import App2 from './App2.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
    }, {
    path: '/2',
    element: <App2 />
    }
])

export default router;
