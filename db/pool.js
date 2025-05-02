const {Pool}=require('pg');

const pool = new Pool(
    {
        host: "localhost", 
        user: String(process.env.DB_USERNAME),
        database: "message_board",
        password: String(process.env.DB_PASSWORD),
        port: 5432 
      }
)

module.exports=pool;