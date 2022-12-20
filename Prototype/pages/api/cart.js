import { withIronSessionApiRoute } from "iron-session/next";



export default withIronSessionApiRoute(
    async function customer(req, res) {
      
     // get the variables that were sent over
     var appleQty = req.body.appleQty;
     var orangeQty = req.body.orangeQty;
     var bananaQty = req.body.bananaQty;
     var lemonQty = req.body.lemonQty;
     var grapeQty = req.body.grapeQty;
     var pomegranateQty = req.body.pomegranateQty;

     // add the items to the cart object.
      req.session.cart = {
        apple: appleQty,
        orange: orangeQty,
        banana: bananaQty,
        lemon: lemonQty,
        grape: grapeQty,
        pomegrante: pomegranateQty,

       
      };
      await req.session.save();

      // send back a message that it went to plan!
      res.status(200).json("updated cart");




    },
    {
      cookieName: "myapp_cookiename",
      password: "complex_password_at_least_32_characters_long",
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  );
