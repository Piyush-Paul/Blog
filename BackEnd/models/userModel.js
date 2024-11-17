const connection = require ('../config/dbConnection.js') ;

const createUserTable =()=>{
  const createUserQuery = `CREATE TABLE IF NOT EXISTS users(
    id int AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR (50) UNIQUE NOT NULL, 
    email VARCHAR (100) UNIQUE NOT NULL, 
    password VARCHAR (255) NOT NULL ,
    role VARCHAR (50) NOT NULL
  );` ;
  
  connection.query ( createUserQuery , (err , result)=>{
    if ( err ) throw err ;
    console.log("Table Created in User in DataBase"+ result );
  }) ;
} ;

export {createUserTable};