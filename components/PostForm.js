
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = 'https://monegimlwfilwakcppdo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbmVnaW1sd2ZpbHdha2NwcGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MTQyMzcsImV4cCI6MjAzNDk5MDIzN30.mvi4yqoypCi2dL1yZGtBBBiZ2PEFbLkX1DUFEuzDZP0';
const supabase = createClient(URL, API_KEY);

export default function PostForm() {
    const [employee_name, setName] = useState('');
    const [date_of_event, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [event_name, setEName] = useState('');
    const [employee_id, setEID] = useState('');

    const handleAddPost = async (e) => {   
        e.preventDefault();

        try {
            const { data, error } = await supabase.from('posts').insert([
              { employee_name, date_of_event, description, employee_id, event_name }
            ]);

            console.log(data, "data added")
            setName('');
            setDate('');
            setDescription('');
            setEName('');
            setEID('');
            if (error) {
              throw error;
            }

            // Optionally, clear the form or redirect the user
        } catch (error) {
            console.error('Error adding post:', error.message);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h2 className="mb-0">Create Event</h2>
                        </div>
                        <div className="card-body p-4">
                            <form className="needs-validation" noValidate onSubmit={handleAddPost}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Name:</label>
                                        <input type="text" className="form-control" value={employee_name} onChange={(e) => setName(e.target.value)} required />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Employee ID:</label>
                                        <input type="text" className="form-control" value={employee_id} onChange={(e) => setEID(e.target.value)} required/>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Date of Event:</label>
                                        <input type="text" className="form-control" value={date_of_event} onChange={(e) => setDate(e.target.value)} required/>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Event Name:</label>
                                        <input type="text" className="form-control" value={event_name} onChange={(e) => setEName(e.target.value)} required/>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description:</label>
                                    <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <button className="btn btn-primary w-100" type="submit">Add Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
