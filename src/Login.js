import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import axios from 'axios';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = async () => {
    try {
      // Send mobile number to server to receive OTP
      await axios.post('http://localhost:5000/send-otp', { mobile });
      message.success('OTP sent successfully');
    } catch (error) {
      console.error(error);
      message.error('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      // Verify OTP with the server
      await axios.post('http://localhost:5000/verify-otp', { mobile, otp });
      message.success('OTP verification successful');
    } catch (error) {
      console.error(error);
      message.error('Invalid OTP');
    }
  };

  return (
    <div>
      <Input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <Button onClick={handleSendOtp}>Send OTP</Button>
      <Input placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <Button onClick={handleVerifyOtp}>Password</Button>
    </div>
  );
};

export default Login;
