import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('ya conectado');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('usar conexion previa');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('conexion nueva');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('no desconectada');
    }
  }
}

function convertDocToObj(doc) {
  //console.log(doc);
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}
function convertDocToObj2([doc2]) {
  const doc = [];
  doc2.forEach((element) => {
    doc.push.element;
    doc.push(element._id.toString());
    doc.push(element.createdAt.toString());
    doc.push(element.updatedAt.toString());
  });
  //console.log(doc);
  //doc2._id = doc2._id.toString();
  //doc2.createdAt = doc2.createdAt.toString();
  //doc2.updatedAt = doc2.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj, convertDocToObj2 };
export default db;
