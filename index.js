//Author: Abdilkadir Mohammed abmo475@gmail.com
const express=require('express');
const app=express();
const mailer=require('nodemailer')
const fs=require('fs')
app.listen(4002,(req,res)=>{
    console.log('App running on port 5000')

})
app.get('/',(req,res)=>{
    res.status(200).json({message:'Hello world'});
})
const transporter=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'abmo475@gmail.com',
        pass:'eaexknddhisowbfi'
    },
    tls:{
        rejectUnauthorized:false,
    }
     
})
const mailoption={
    to:'dachosen2023@gmail.com',
    from:'abmo475@gmail.com',
    subject:'Html mesage',
    html:'<html><body><h1>This is H1 message</h1></body></html>',
    
}
transporter.sendMail(mailoption,(err,success)=>{
    if(err){
        console.log(err)
    }else{
        console.log('message sent')
    }
})
 //the end 