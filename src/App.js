import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Chat from "./Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>

);

function App() {

  const [name,setName] = useState('');


  // const handleSubmit = () => {
  // const url = 'http://localhost/test/formsubmit.php';
  // let fData = new FormData();
  // fData.append('name', name);
  // axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
  // }

  return (
  <div className="vh-100 gradient-custom">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-9 col-md-9 col-lg-7 col-xl-6">
              <div className="carda">
                <div className="card-body p-3">
                  <h3 className="text-center mb-4 ">Enter you name to start chat</h3>
                  <form>
                    <div className=" form-outline mb-4">
                      <input type="text" className="some2 " name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="some d-flex justify-content-center">
                      <input type="button" className="some-btn" name="submit" id="submit" value="Continue" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-l">
                © russek66@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;