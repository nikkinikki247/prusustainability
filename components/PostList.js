

// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const URL = 'https://monegimlwfilwakcppdo.supabase.co';
// const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbmVnaW1sd2ZpbHdha2NwcGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MTQyMzcsImV4cCI6MjAzNDk5MDIzN30.mvi4yqoypCi2dL1yZGtBBBiZ2PEFbLkX1DUFEuzDZP0';
// const supabase = createClient(URL, API_KEY);

// import Post from "@/components/Post.js";

// const inter = Inter({ subsets: ["latin"] });

// export default function PostList() {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const { data } = await supabase.from('posts').select();
//                 setPosts(data);
//             } catch (error) {
//                 console.error('Error fetching posts:', error.message);
//             }
//         };

//         fetchPosts();
//     }, []);

//     return (
//         <>
//             <div className={`${styles.main} ${inter.className}`}>
//                 <div className="container mt-3">
//                     <h2 className="mb-3">Upcoming Events</h2>
//                     <div className="row g-3">
//                         {posts.map((post) => (
//                             <div key={post.id} className="col-md-4">
//                                 <div className="p-2 border rounded">
//                                     <Post 
//                                         employee_name={post.employee_name} 
//                                         date_of_event={post.date_of_event} 
//                                         description={post.description} 
//                                         event_name={post.event_name}
//                                         rsvp_link = {post.rsvp_link} 
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = 'https://monegimlwfilwakcppdo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbmVnaW1sd2ZpbHdha2NwcGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MTQyMzcsImV4cCI6MjAzNDk5MDIzN30.mvi4yqoypCi2dL1yZGtBBBiZ2PEFbLkX1DUFEuzDZP0';
const supabase = createClient(URL, API_KEY);

import Post from "@/components/Post.js";

const inter = Inter({ subsets: ["latin"] });

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await supabase.from('posts').select();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className={`${styles.main} ${inter.className}`}>
            <div className="container mt-3">
                <h2 className="mb-3">Upcoming Events</h2>
                {posts.map((post) => (
                    <div key={post.id} className="row mb-4">
                        <div className="col">
                            <div className="p-3 border rounded">
                                <Post 
                                    employee_name={post.employee_name} 
                                    date_of_event={post.date_of_event} 
                                    description={post.description} 
                                    event_name={post.event_name}
                                    rsvp_link={post.rsvp_link} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
