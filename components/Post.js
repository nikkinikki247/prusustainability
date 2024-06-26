
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useParams } from 'react-router-dom';
const inter = Inter({ subsets: ["latin"] });

export default function Post(props) {
  return (
    <>
   
      <main className={`${styles.main} ${inter.className}`}>
      <div className="card" style={{width: "18rem"}}>
  <img src="https://lh3.googleusercontent.com/proxy/zDJ5byXQNuaENPLVefEDfKAnFD8ROFjxWp_F7I1o0AZdt9p5gW5k4JOezi_dH_AsfjqhtI3OzySfDs5Onw7Gollf97CdNw0bO3hnUZZP9OTBEZi7nBA" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.event_name}</h5>
    <p className="card-text">{props.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Led by {props.employee_name}</li>
    <li className="list-group-item">{props.date_of_event}</li>
    <li className="list-group-item">PruPoints: 20</li>
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