import Product from '../../models/Product';
import Imagetable from '../../models/Imagetable';
import User from '../../models/User';
import Variations from '../../models/Variations';

import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  // await User.insertMany(data.users);

  await Imagetable.deleteMany();
  await Imagetable.insertMany(data.imagetable);

  await Variations.deleteMany();
  await Variations.insertMany(data.variations);

  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
