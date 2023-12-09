'use client'
import Link from 'next/link';
import Styles from "./logout.module.css"
import { Signout } from '../login/loginlogic';
const Logout = () => {
  return (
    <div className={Styles.Body}>
      <h2>Do you want to logout ?</h2>
      <div>
      <button onClick={async()=>{await Signout()}}>Yes</button>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Logout;