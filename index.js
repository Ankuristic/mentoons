require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const twilioRouter = require('./Routes/twilio-sms')
const app = express ()


const url= "mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority";
console.log("url",url);
mongoose.connect(url,{useNewUrlParser: true});

const con= mongoose.connection;
const {PORT}= process.env;
const port = 8080 || PORT;
const jsonParser =bodyParser.json();


app.use(jsonParser);
app.use('/hello',twilioRouter);


app.get('/',()=>{
  console.log("App Demo")
})



app.listen(port,()=>{
  console.log(`server started at ${port}`)
})


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const twilio = require('twilio');
// require('dotenv').config();


// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a user schema and model (assuming you have a User model with a mobile field)
// const User = mongoose.model('User', {
//   mobile: String,
//   otp: String,
//   countryCode:String
// });

// // Twilio configuration (replace with your Twilio credentials)

// const accountSid = 'ACb986f4bd874fe54ef2329380fde021a2';
// const authToken = 'da5efabbfbc3d3ccbedc38fff09e7ad8';
// const client = new twilio(accountSid, authToken);

// // Generate OTP function
// function generateOTP() {
//   return Math.floor(1000 + Math.random() * 9000).toString();
// }

// // API endpoint for sending OTP
// app.post('/send-otp', async (req, res) => {
//   const { countryCode,mobile } = req.body;
//   const otp = generateOTP();

//   try {
//     // Save OTP to the database
//     await User.updateOne({ mobile }, { otp }, { upsert: true });

//     // Send OTP via Twilio (replace with your Twilio phone number)
//     await client.messages.create({
//       // body: `Your OTP is: ${otp}`,
//       // from: 'your_twilio_phone_number',
//       to: `${countryCode}${mobile}`,
//     }).then()

//     res.json({ success: true, message: 'OTP sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to send OTP' });
//   }
// });

// // API endpoint for verifying OTP
// app.post('/verify-otp', async (req, res) => {
//   const { mobile, otp } = req.body;

//   try {
//     // Verify OTP
//     const user = await User.findOne({ mobile, otp });

//     if (user) {
//       res.json({ success: true, message: 'OTP verification successful' });
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid OTP' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to verify OTP' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
