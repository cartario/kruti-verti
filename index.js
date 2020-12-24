const express = require('express');
const app = express();
const path = require('path');

app.use(express.json({extended: true}));

app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = 3001;

async function start (){
  try {
    
    app.listen(PORT, ()=>{
      console.log(`server started on ${PORT} port`)
    });
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}

start();
