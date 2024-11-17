const dotenv = require('dotenv') ;
const app = require('./app.js') ;
dotenv.config() ;


app.listen( process.env.PORT , (err)=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});