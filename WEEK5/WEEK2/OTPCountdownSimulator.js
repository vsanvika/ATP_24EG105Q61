/*OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
console.log("OTP Sent Successfully")
 let time=10
 let interval=setInterval(()=>{
    console.log("Resend available in "+time+"seconds");
    time--
     if(time==0){
        console.log("resend otp")
        clearInterval(interval)
     }
 },1000);
 