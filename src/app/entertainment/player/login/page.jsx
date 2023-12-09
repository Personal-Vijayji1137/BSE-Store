'use client'
import { useState } from 'react';
import Styles from "../[...video]/page.module.css";
import { Loginwithnewemailid,Loginold,LoginWithGithub,LoginWithGoogle,LoginWithLinkkedin } from './loginlogic';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn,btntext] = useState('Login');
  const [dontaccount,dontaccountvalue] = useState("Don't have account...");
  const [mess,message] = useState('OR Login with');
  const handleLogin = async(e) => {
    e.preventDefault();
    if(btn=='Login'){
        const messages = await Loginold(email,password);
        message(messages);
        const currentPath = window.location.pathname;
        if(currentPath == '/entertainment/player/login'){
          location.href="/entertainment"
        }
    }else{
        const messages = await Loginwithnewemailid(email,password);
        message(messages);
    }
  };
  const loginWithSocial = (provider) => {
    console.log(`Logging in with ${provider}`);
  };
  return (
    <div className={Styles.Body}>
      <h2>Please {btn} To Continue</h2>
      <form onSubmit={handleLogin} className={Styles.Form}>
        <label htmlFor="email">Email:</label>
        <input className={Styles.Input} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input className={Styles.Input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button className={Styles.Button} type="submit">{btn}</button>
        <div onClick={()=>{if(btn=='Login'){btntext('Sign-in');dontaccountvalue('Login')}else{btntext('Login');dontaccountvalue("Don't have account...")}}}>{dontaccount}</div>
      </form>

      <div className={Styles.socialbuttons}>
        <h3>{mess}</h3>
        <div>
            <button onClick={() => loginWithSocial('Google')}>Google</button>
            <button onClick={() => LoginWithGithub()}>GitHub</button>
            <button onClick={() => loginWithSocial('LinkedIn')}>LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default Login;