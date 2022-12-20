
import Link from 'next/link'
import { withIronSessionApiRoute } from "iron-session/next";
import { withIronSessionSsr } from "iron-session/next";


export default function Checkout({data}) {
  return (
    <>
    Hello there!
  
   
   <br></br>
   Thanks for the order!
    
   <br></br>
        {JSON.stringify(data)}

    </>
  )
}







// make a call to the API to get the cart data
// before the page loads



export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
  
  console.log("getting data from session..");
  console.log(req.session.cart);


    
  // put in db..............

    const cart = req.session.cart;


    // Get data from the form
    const data = {
      cart: cart
    }


 // Send the data to the server in JSON format.
 const JSONdata = JSON.stringify(data)
    
 // API endpoint where we send form data.
 const endpoint = 'http://localhost:3000/api/savecart'



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






    return {
      props: {
        data: req.session.cart,
      },
    };
  }, // -------------------- All boilerplate code for sessions ------------------------------------
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);