const{TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN}= process.env;

const client = require('twilio')(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,{
    lazyLoading:true
})




// /**
//  * SEND OTP
//  * @param {*} req
//  * @param {*} res
//  * @param {*} next
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */





    const sendOTP =async(req,res,next) =>{
    const {countryCode, phoneNumber} = req.body;


    try {
        const otpResponse = await client.verify
        .services(TWILIO_SERVICE_SID)
        .verifications.create({
            to:`${countryCode}${phoneNumber}`,
            channel:"sms"
        })
        res.status(200).send(`OTP SEND SUCCESSFULLY :${JSON.stringify(otpResponse)}`);
    } catch(error){
        res.status(error?.status || 400).send(error ?. message || `Something Went wrong`)
    }

    
}







   const verifyOTP =async(req,res,next)=>{
    const {countryCode,phoneNumber,otp} = req.body;

    try {
        const verifiedResponse =await client.verify
        .services(TWILIO_SERVICES_SID)
        .verificationChecks.create({
            to:`+${countryCode}${phoneNumber}`,
            code:otp,
        })

        res.status(200).send(`OTP VERIFIED successfully|: ${JSON.stringify(verifiedResponse)}`);

    }catch(error){
        res.status(error?.status || 400 ).send(error?.message || `SOMETHIG WENT Wrong`)
    }

}



module.exports = { sendOTP, verifyOTP };