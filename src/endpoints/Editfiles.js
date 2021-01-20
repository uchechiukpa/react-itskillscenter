import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useHistory } from "react-router-dom";

function Editfile({ match }) {
    let history = useHistory();

    const [note, setNote] = useState({ note: ''})
    useEffect(() => {
        axios.get(`https://note-crud-app-itcenterskills.herokuapp.com/notes/${match.params.id}/`)
            .then(res => {
                setNote(res.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    const handleEdit = async (e) => {
        e.preventDefault();
        await axios.put(`https://note-crud-app-itcenterskills.herokuapp.com/notes/${match.params.id}/`, note)
            .then(res => {
                console.log(res.data)
                history.push(`/getfile/${res.data.id}`)
            })
            .catch(err => {
                console.log(err, "failed");
            })
    }

    return (
        // <div>
        //     <input type='text' value={note.note} onChange={e => setNote({note: e.target.value })} />
        //     <button onClick={handleEdit} >submit</button>
        // </div>
        <div class="container">
            <div class="row">
                <form role="form" id="contact-form" class="contact-form">
                    <div class="row">


                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea class="form-control textarea" rows="3" name="Message" id="Message" placeholder="Edit your Note" value={note.note} onChange={e => setNote({ note: e.target.value })}></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button type="submit" onClick={handleEdit} class="btn main-btn pull-right">Done</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editfile;