import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


function Homepage(props) {
    const [userdatas, setUserdata] = useState([])
    const [active, setActive] = useState('task')


    useEffect(() => {


        axios.get('https://note-crud-app-itcenterskills.herokuapp.com/notes/')
            .then(res => {
                // console.log(res.data)
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


                <div className='mt-5'>
                    <div className='dashboard'><p>Dashboard</p></div>
                        

                   
                    <div onClick={() => setActive('task')} className={(active === 'task') ? 'active' : ''}><p>My Tasks</p></div>
                    <div><p>Estate Management</p></div>
                        
                        <p>Services & incidents</p>
                        <p>Residents Billing</p>
                        <p>Inventory Management</p>
                        <p>Vehicles Management</p>
                        <p>Maintenance Management</p>
                        <p>Reports</p>
                        <p>Communication</p>
                        
                </div>
            </div>
            <div className='main-bar'>
                <div className='d-flex justify-content-between px-3 pt-3'>
                    <span>Dashboard</span>
                    <div className='d-flex'>
                        <div className='d-flex flex-column'>
                            <span>Welcome,</span>
                            <span>MORE JAMES . O</span>

                        </div>
                        <div className='image'>
                            <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' alt="profile" />
                        </div>

                    </div>



                </div>
                <div className='Notes-header mt-5'>
                    <h3>My Notes</h3>
                </div>


                <div className='note-button d-flex justify-content-around mt-3 '>
                   
                    <button ><a href='/createfile'>New Note</a></button>
                    <p>new per page</p>
                    <p>search page</p>
                </div>



                <div className='note-table d-flex justify-content-between px-3 mt-5'>
                    <h5>Note</h5>
                    <h5>Action</h5>
                </div>
                <div className='d-flex justify-content-between px-3 mt-3'>
                    <ul className='note-list w-100'>
                        {
                            userdatas.map(userdata =>
                                <li key={userdata.id} className='list-unstyled'>
                                    <div className='mt-2 d-flex justify-content-between'>


                                        <div>
                                            <p className='name-font'>{userdata.note}.</p>
                                        </div>
                                        <div className='d-flex justify-content-between actions'>
                                            <Link to={`/getfile/${userdata.id}`}>
                                                <div className='d-flex'><div className='eye'><i class="fa fa-eye" aria-hidden="true"></i></div><span>view</span></div>

                                            </Link>
                                            <Link to={`/editfile/${userdata.id}`}>
                                                <div className='d-flex'><div className='check'><i class="fa fa-check" aria-hidden="true"></i></div><span>edit</span></div>
                                                
                                            </Link>
                                            <div className='d-flex'><div className='times'><i class="fa fa-times" aria-hidden="true"></i></div><span>delete</span></div>

                                        </div>
                                    </div>

                                </li>
                            )
                        }
                    </ul>



                </div>

            </div>
        </div>
    );
}

export default Homepage;