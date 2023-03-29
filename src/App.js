import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className="">
            <RouterProvider router={router} />
    </div>
  );
}

export default App;
