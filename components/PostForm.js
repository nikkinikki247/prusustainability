import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'

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
        // eslint-disable-next-line no-unused-vars
        const { data, error } = await supabase.from('posts').insert([
          { employee_name: employee_name, date_of_event: date_of_event, description: description, employee_id: employee_id, event_name: event_name }
        ]);
  
        console.log(data, "data added")

        if (error) {
          throw error;
        }
  
        //window.location = "/";
      } catch (error) {
        console.error('Error adding post:', error.message);
      }
    }

  return (
    <>
    <div>
      <h2>Create Event </h2>
      <form onSubmit={handleAddPost}>
        <label>Name:</label>
        <input type="text" value={employee_name} onChange={(e) => setName(e.target.value)} />
        <label>Employee ID:</label>
        <input type="text" value={employee_id} onChange={(e) => setEID(e.target.value)} />
        <label>Date of Event:</label>
        <input type="text" value={date_of_event} onChange={(e) => setDate(e.target.value)} />
        <label>Event Name:</label>
        <input type="text" value={event_name} onChange={(e) => setEName(e.target.value)} />
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">Add Event</button>
      </form>
    </div>
    </>
  );
}