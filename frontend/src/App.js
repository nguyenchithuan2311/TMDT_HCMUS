import { Login } from './page/login';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ManageProduct} from './page/ManageProduct';
import { Order } from './page/Order';
import { Revenue } from './page/Revenue';
import { User } from './page/User';
import { Managepointadmin } from './page/Managepointadmin';
import { Managepointuser } from './page/Managepointuser';
import { Managecustomer } from './page/Managecustomer';
import { Detailsproduct } from './page/Detailsproduct';
import { Editaddproduct } from './page/Editaddproduct';
function App() {
  
  return (
    <div className="App">
        <Editaddproduct />
    </div>
  );
}
export default App;

 { <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Profile" element={<Revenue />} />
        <Route path="Shop" element={<Managepointuser />}>
          <Route index element={<ManageProduct />} />
          <Route path="User" element={<User />} />
          <Route path="Admin" element={<Managepointadmin />} />
          <Route path="Revenue" element={<Revenue />} />          
        </Route>
      </Routes>
    </BrowserRouter> }