"use client"

import {useState, useEffect} from 'react'

export default function Home() {
  // the states for inputfield so we can check upon database
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");


  // gets "database". for now fetches a dummy json
  function GetUserList(e) {
    e.preventDefault() // removes form default action
    try {
      fetch("/TestData/user.json") // fetches api/data
      .then(res => res.json())
      .then(data => data.forEach((e) => checkUser(e.email, e.password, e.isAdmin))) // sends usable info too be checked, runs through whole json. (need better solution for speed. this logic will end up in backend)
    } catch (err) {
      console.error(err) // catches errors
    }
  }

  // puts inputted mail and pass against dummy object too see if matches
  function checkUser(mail, password, admin) {
    if (email === mail && pass === password) {
      console.log("matched: " + mail+ ", " + password +  ", " + admin) // just for testing purpouses
    } else {
      console.log("couldnt match: " + mail +" " + email +", " + password +" " + pass + ", " + admin) // testing testing 1 2 3
    }
  }


  return (
    <main>
      <section>
          <form onSubmit={GetUserList}> {/* makes sure on submit starts function. a button with no direction auto submits */}
            <label htmlFor="email">
              Email:
              <input type="email" name="email" id="Email" placeholder="bruker@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
            </label>
            <label htmlFor="password">
              Passord:
              <input type="password" name="password" id="password" placeholder="*****" value={pass} onChange={(e) => setpass(e.target.value)} required/>
            </label>
            <button>logg inn</button>
          </form>

      </section>
    </main>
  );
}
