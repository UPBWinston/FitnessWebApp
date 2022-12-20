
import { withIronSessionApiRoute } from "iron-session/next";
import { Link, Navbar } from "@nextui-org/react";
import {  Image, Input, Button, Grid } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
//import { Layout } from "./Layout.js";




export default function Customer() {


 // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const appleQty = document.querySelector('#appleQty').value
       const orangeQty = document.querySelector('#orangeQty').value
       const bananaQty = document.querySelector('#bananaQty').value
       const lemonQty = document.querySelector('#lemonQty').value
       const grapeQty = document.querySelector('#grapeQty').value
       const pomegranateQty = document.querySelector('#pomegranateQty').value

        // Get data from the form.
        const data = {
          appleQty: appleQty,
          orangeQty: orangeQty,
          bananaQty: bananaQty,
          lemonQty: lemonQty,
          grapeQty: grapeQty,
          pomegranateQty: pomegranateQty, 

        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/cart'


    
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


    
  }
  
  
  
  return (
   <>
   
   Customer page<p></p>
   <form onSubmit={handleSubmit}>

    

   
      <Navbar>
        <Navbar.Content>

        <Navbar.Item>
           <Button type="submit">Add to Cart</Button>
        </Navbar.Item>

        </Navbar.Content>
      </Navbar>
    

    </form>
  


   <Grid.Container gap={3}>

      <Grid>
          Apples Qty: <Input id="appleQty"
          width={50}
          rounded
          bordered
          color="default" 
        ></Input>
      </Grid>

      <Grid>
      Oranges Qty: <Input id="orangeQty"
          width={50}
          rounded
          bordered
          color="primary"
        ></Input>
      </Grid>

      <Grid>
      Bananas Qty: <Input id="bananaQty"
          width={50}
          rounded
          bordered
          color="secondary"
        ></Input>
      </Grid>

      <Grid>
      Lemons Qty: <Input id="lemonQty"
          width={50}
          rounded
          bordered
          color="secondary"
        ></Input>
      </Grid>

      <Grid>
      Grapes Qty: <Input id="grapeQty"
          width={50}
          rounded
          bordered
          color="secondary"
        ></Input>
      </Grid>
    
      <Grid>
      Pomegranates Qty: <Input id="pomegranateQty"
          width={50}
          rounded
          bordered
          color="warning"
        ></Input>
      </Grid>

      
    </Grid.Container>

  


   
   
   

   <Link href="/checkout">
     <Button type="submit">Checkout</Button>

   </Link>
   </>
  );
}