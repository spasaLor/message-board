const {Client}=require('pg');

const SQL= "insert into messages (username,message,date) values ($1,$2,$3)";
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

async function main(){
    const client = new Client({
        connectionString: "postgresql://postgres:root@localhost:5432/message_board",
      });
    await client.connect();
    for(msg of messages){
        await client.query(SQL,[msg.user,msg.text,msg.added]);
    }   
   await client.end();
}
main();