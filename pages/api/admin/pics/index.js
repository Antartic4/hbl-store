import { getSession } from 'next-auth/react';
import Imagetable from '../../../../models/Imagetable';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin requerido');
  }
  if (req.method === 'GET') {
    await db.connect();
    const pics = await Imagetable.find({}).populate('idimage', 'idprod');
    await db.disconnect();

    res.send(pics);
  } else {
    return res.status(400).send({ message: 'Metodo no es permitido' });
  }
};

export default handler;
