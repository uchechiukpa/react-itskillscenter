import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetOneFile({ match }) {
    const [note, setNote] = useState({})
    

    useEffect(() => {
        axios.get(`https://note-crud-app-itcenterskills.herokuapp.com/notes/${match.params.id}/`)
            .then(res => {

                setNote(res.data)

            })
            .catch(err => {
                console.log(err, "failed ");

            })
        
    }, []);
    return (
        <div>
            <h1>{note.note}</h1>
            
           

           

        </div>
    );
}

export default GetOneFile;