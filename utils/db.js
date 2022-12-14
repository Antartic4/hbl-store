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
  doc._id = doc._id.toString();
  //doc.color = doc.color.forEach((doc) => {
  //doc.color = doc.color.colorName.toString();
  //});
  doc.color = Object.assign(
    {},
    ...doc.color.map((item) => ({ [item.colorName]: item.colorLink }))
  );
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
