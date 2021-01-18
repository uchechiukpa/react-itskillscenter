import './App.css';
import React, { Fragment, useState, useEffect } from 'react';

function App() {
  const [userdatas, setUserdata] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/notes/')
      .then(res => {

        setUserdata(res.data)

      })
      .catch(err => {
        console.log(err, "failed");

      })
  }, []);
  return (
    <div className="App d-flex">


      <div className='side-bar pt-5'>
        <h5>Kit & Kin Estate</h5>
        <h5>EST57202</h5>


        <div>
          <ul className='list-unstyled'>
            <li>Dashboard</li>
            <li>My Taska</li>
            <li>Estate Management</li>
            <li>Services & incidents</li>
            <li>Resident Billing</li>
            <li>Resident Billing</li>
            <li>Resident Billing</li>
            <li>Resident Billing</li>
          </ul>
        </div>
      </div>
      <div className='main-bar'>
        <div className='d-flex justify-content-between px-5 pt-3'>
          <span>Dashboard</span>
          <div className='d-flex'>
            <div className='d-flex flex-column'>
              <span>Welcome,</span>
              <span>MORE JAMES . O</span>

            </div>
            <div className='image'>
              <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'/>
            </div>
         
          </div>
        


        </div>
        <div className='Notes-header'>
          <h3>My Notes</h3>
        </div>

        
        <div className='note-button d-flex justify-content-around'>
          <button >New Note</button>
          <p>new per page</p>
          <p>search page</p>
        </div>
        


        <div className='note-table d-flex justify-content-between px-3'>
          <h5>Note</h5>
          <h5>Action</h5>
        </div>
        <div className='d-flex justify-content-between px-3'>
          <ul>
            {
              userdatas.map(userdata => <li key={userdata.id} className='list-unstyled'>
                <div className='mt-5'>

                
                  <div className='mt-4 col-8'>
                    <p className='name-font'>{userdata.note}.</p>
                  </div>
                </div>
                  
              </li>
              )
            }
          </ul>


          <div className='d-flex justify-content-between'>
            <div className='pl-3'><i class="fa fa-eye" aria-hidden="true"></i><span>view</span></div>
            <div><i class="fa fa-eye" aria-hidden="true"></i><span>edit</span></div>
            <div><i class="fa fa-eye" aria-hidden="true"></i><span>delete</span></div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
