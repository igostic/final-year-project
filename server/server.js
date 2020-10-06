import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://prakhar:<password>@cluster0.oubax.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

