import React, { useState } from 'react';
import axios from 'axios'

function Createfile(props) {
    const [Note, setNote] = useState({ note: ''})


    const handleChange = e => {
        setNote({[e.target.name]: e.target.value })
    }
    const uploadfiles = async (e) => {
        e.preventDefault();
        axios.post('https://note-crud-app-itcenterskills.herokuapp.com/notes/', Note)
            .then(async function (res) {
                // history.push(`/OneUserProfile/${res.data.name_id}`)

            })
            .catch(err => {
                console.log(err, 'failed')
            })

    }
    return (
        // <div className = 'd-flex d-flex-row justify-content-center align-content-center'>


        // </div>
        // <form>
        //     <div className='d-flex justify-content-center'>
        //         <div className="d-flex flex-column ">

        //             <input type='text' />
        //             <button  >submit</button>
                 
        //         </div>
        //     </div>
        // </form>
        <div class="container">
            <div class="row">
                <form role="form" id="contact-form" class="contact-form">
                    <div class="row">
                      
                            
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <textarea class="form-control textarea" rows="3" name="Message" id="Message" placeholder="Post a Note" onChange={e => setNote({ title: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                <button type="submit" onClick={uploadfiles} class="btn main-btn pull-right">Post a Note</button>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Createfile;