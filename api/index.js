const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = new Stripe(
  "sk_test_51IUxdTFDTtq4Q7pzsZzJySuV5iqN2Cx8QqKlMctiBfvubR2haqHPJRNahZpimNqvPu7tFHUmlp4InCz1ZuBSrh0Z00gOFb9Fd5",
  {}
);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/create-payment-intent", async (req, res, next) => {
  const { amount } = req.body;
  if(amount !==0){
  const newA = amount*100
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: newA,
      currency: "usd",
    
    });

    console.log(paymentIntent.client_secret);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
  }
}});

app.listen(3030, () => {
  console.log("SERVER RUNNING");
});
