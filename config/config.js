const config = require('mongodb').MongoClient;
const uri = "mongodb+srv://prakhar:hum77hai%40online@cluster0.oubax.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

export default config
