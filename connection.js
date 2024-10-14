const mongoose = require('mongoose')

const connectionstring = process.env.DATABASE

mongoose.connect(connectionstring).then(()=>{
    console.log('mongodb connected successfully');
}).catch((err)=>{
    console.log(err);
})