import { getSession } from 'next-auth/react';
import Imagetable from '../../../../../models/Imagetable';
import db from '../../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin requerido');
  }

  const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Metodo no permitido' });
  }
};

const getHandler = async (req, res) => {
  await db.connect();
  const img = await Imagetable.findById(req.query.id);
  await db.disconnect();
  res.send(img);
};

const putHandler = async (req, res) => {
  await db.connect();
  const img = await Imagetable.findById(req.query.id);
  if (img) {
    img.idimage = req.body.idimage;
    img.idprod = req.body.idprod;
    img.color = req.body.color;
    img.image3 = req.body.image3;

    await img.save();
    await db.disconnect();
    res.send({ message: 'Producto actualizado exitosamente' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Producto no encontrado' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const img = await Imagetable.findById(req.query.id);
  if (img) {
    await img.remove();
    await db.disconnect();
    res.send({ message: 'Producto eliminado satisfactoriamente' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Producto no encontrado' });
  }
};
export default handler;
