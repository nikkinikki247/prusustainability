
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Post(props) {
  return (
    <>
   
      <main className={`${styles.main} ${inter.className}`}>
      <div className="card" style={{width: "30rem"}}>
  <img src="https://djcs-prod.s3.amazonaws.com/public/blogs/deloitte/blogs.dir/4/files/2021/12/Prudential-1000x666_5.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.event_name}</h5>
    <p className="card-text">{props.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Led by {props.employee_name}</li>
    <li className="list-group-item">{props.date_of_event}</li>
    <li className="list-group-item">PruPoints: 20</li>
    {/* <button type="button" class="btn btn-primary" className="list-group-item" id="interested"><u>RSVP ☑</u></button> */}
    <a href={props.rsvp_link} className="btn btn-primary list-group-item" target="_blank" rel="noopener noreferrer"><u>RSVP ☑</u></a>
  </ul>
  {/* <div className="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> */}
</div>
      </main>
    </>
  );
};

