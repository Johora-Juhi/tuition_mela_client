import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  return (
    <div className="">
            <RouterProvider router={router} />
    </div>
  );
}

export default App;
