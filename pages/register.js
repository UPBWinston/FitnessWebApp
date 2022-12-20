import Link from 'next/link'

import {useRouter} from 'next/router'
import { Layout } from "./Layout.js";


export default function Home({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const name = document.querySelector('#username').value

       console.log("username is " + name);

       const pass = document.querySelector('#password').value

       console.log("password is " + pass);





        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/register'


    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }

        
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`server result: ${result}`)

        // redirect based on the result
      if(result.includes("ok")){
 
        router.push("/customer");
      }
    
  }
  
  
  return (
    <>
    zz


    
    <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>

            <form onSubmit={handleSubmit}>
               
                  username:
                  <input type="text" id="username" name="username" />
                  
               
                <p></p>
                password:
                  <input type="text" id="password" name="password"/>

                  <p></p>
                address:
                  <input type="text" id="address" name="address"/>
                  
                  <p></p>
                telephone:
                  <input type="text" id="telephone" name="telephone"/>
          
                <p></p>
                e-mail:
                  <input type="email" id="email" name="email" placeholder="alex@example.com"  size="20" />

                <br></br>
                  <input type="submit" value="Submit" />
              </form>

      </div>


    </>
  )
}