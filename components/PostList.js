
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'

const URL = 'https://monegimlwfilwakcppdo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbmVnaW1sd2ZpbHdha2NwcGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MTQyMzcsImV4cCI6MjAzNDk5MDIzN30.mvi4yqoypCi2dL1yZGtBBBiZ2PEFbLkX1DUFEuzDZP0';
const supabase = createClient(URL, API_KEY);

import Post from "@/components/Post.js";

const inter = Inter({ subsets: ["latin"] });

export default function PostList() {//add Post parameter

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
    <>
{/*    
    <main className={`${styles.main} ${inter.className}`}> */}
 
    <div>
      <h2>Posts</h2>
        <div className="post-list">
        {posts.map((post) => (
        <div key={post.id}>
        <Post employee_name ={post.employee_name} date_of_event={post.date_of_event} description={post.description} event_name={post.event_name} />
        </div>
      ))}
        </div>
    </div>
      {/* </main> */}
    </>
  );
}