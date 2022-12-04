import {useRouter} from 'next/router'
import { withIronSessionApiRoute } from "iron-session/next";
import { Link, Navbar } from "@nextui-org/react";
import {  Image, Input, Button, Grid } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";





export default function Customer() {
  const router = useRouter()

  const listItem1= [
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },

    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
      
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
      
    },

    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },

    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    }];
    
    
    
  




 // Handle the submit for the form
  async function handleSubmit(event) {
    

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const cherryQty = document.querySelector('#cherryQty').value
       const orangeQty = document.querySelector('#orangeQty').value
       const bananaQty = document.querySelector('#bananaQty').value
       const lemonQty = document.querySelector('#lemonQty').value
       const watermelonQty = document.querySelector('#watermelonQty').value
      

        // Get data from the form.
        const data = {
          cherryQty: cherryQty,
          orangeQty: orangeQty,
          bananaQty: bananaQty,
          lemonQty: lemonQty,
          watermelonQty: watermelonQty,
          

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




    
  function moveToRegister(){router.push('http://localhost:3000/');}
  
  
  
  return (
   <>
   
   
   Customer page<p></p>
   <form onSubmit={handleSubmit}>

    

   
   
        <Navbar isBordered variant="sticky">
          <Navbar.Content>

         
          <Navbar.Item>
          <Button onClick={moveToRegister} color="secondary" auto>
          Main
          
        </Button>
            </Navbar.Item>
            
            
           

          </Navbar.Content>
        </Navbar>
      
    
  
    

    
  

    <Grid.Container gap={2} justify="flex-start">
      {listItem1.map((item, index) => (
        <Grid xs={6} sm={2.3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
            
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                 
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>

        
         
      ))}

     
    </Grid.Container>

    <Grid.Container gap={2} justify="flex-start">

      <Grid xs={6} sm={2.3} >
          Cherry Qty: <Input id="cherryQty"
          
          width={50}
          rounded
          bordered
          color="default" 
        ></Input>
      </Grid>

      <Grid xs={6} sm={2.3} >
      Orange Qty: <Input id="orangeQty"
          width={50}
          rounded
          bordered
          color="primary"
        ></Input>
      </Grid>

      <Grid xs={6} sm={2.3} >
      Bananas Qty: <Input id="bananaQty"
          width={50}
          rounded
          bordered
          color="secondary"
        ></Input>
      </Grid>

      <Grid xs={6} sm={2.3} >
      Lemons Qty: <Input id="lemonQty"
          width={50}
          rounded
          bordered
          color="secondary"
        ></Input>
      </Grid>

      <Grid xs={6} sm={2.3} >
        Watermelon Qty<Input id="watermelonQty"
          width={50}
          rounded
          bordered
          color="secondary"
        ></Input>
      </Grid>



      
    </Grid.Container>

    <Button type="submit">Add to Cart</Button>
   </form>

    <Link href="/checkout">
     <p><Button type="submit">Checkout</Button></p>
 </Link>

   

   

   
   </>
  );
}