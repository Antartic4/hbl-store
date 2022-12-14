import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('adminadmin'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@user.com',
      password: bcrypt.hashSync('useruser'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Long Sleeves Shirt 01',
      slug: 'long-sleeves-shirt-01',
      category: 'Shirts',
      image: '/images/lsshirt1.png',
      image2: '/images/lsshirt1_2.png',
      price: 70,
      color: [
        {
          colorName: 'white',
          colorLink: '/images/lsshirt1.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/lsshirt1_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/lsshirt1_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/lsshirt1_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/lsshirt1_g.png',
        },
      ],
      size: 'XS',
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Long Sleeves Shirt de Heart by Leon.',
    },
    {
      name: 'Long Sleeves Shirt 02',
      slug: 'long-sleeves-shirt-02',
      category: 'Shirts',
      image: '/images/lsshirt2.png',
      image2: '/images/lsshirt2_2.png',
      price: 70,
      brand: 'HeartByLeon',
      color: [
        {
          colorName: 'white',
          colorLink: '/images/lsshirt1.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/lsshirt1_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/lsshirt1_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/lsshirt1_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/lsshirt1_g.png',
        },
      ],
      size: 'M',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Long Sleeves Shirt de Heart by Leon.',
    },
    {
      name: 'Short Sleeves Shirt 01',
      slug: 'short-sleeves-shirt-01',
      category: 'Shirts',
      image: '/images/slshirt1.png',
      image2: '/images/slshirt1_2.png',
      price: 70,
      brand: 'HeartByLeon',
      color: [
        {
          colorName: 'white',
          colorLink: '/images/lsshirt1.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/lsshirt1_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/lsshirt1_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/lsshirt1_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/lsshirt1_g.png',
        },
      ],
      size: 'M',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Short Sleeves Shirt de Heart by Leon.',
    },
    {
      name: 'Short Sleeves Shirt 02',
      slug: 'short-sleeves-shirt-02',
      category: 'Shirts',
      image: '/images/slshirt2.png',
      image2: '/images/slshirt2_2.png',
      price: 70,
      brand: 'HeartByLeon',
      color: [
        {
          colorName: 'white',
          colorLink: '/images/slshirt2.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/slshirt2_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/slshirt2_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/slshirt2_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/slshirt2_g.png',
        },
      ],
      size: 'LG',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Short Sleeves Shirt de Heart by Leon.',
    },
    {
      name: 'Swag Shorts 01',
      slug: 'swag-shorts-01',
      category: 'Shorts',
      image: '/images/sshort1.png',
      image2: '/images/sshort1_2.png',
      price: 70,
      brand: 'HeartByLeon',
      color: [
        {
          colorName: 'white',
          colorLink: '/images/lsshirt1.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/lsshirt1_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/lsshirt1_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/lsshirt1_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/lsshirt1_g.png',
        },
      ],
      size: 'XL',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Shorts Heart by Leon.',
    },
    {
      name: 'OG Pants 01',
      slug: 'og-pants-01',
      category: 'Pants',
      image: '/images/pant1.png',
      image2: '/images/pant1_2.png',
      price: 70,
      brand: 'HeartByLeon',
      color: [
        {
          colorName: 'white',
          colorLink: '/images/lsshirt1.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/lsshirt1_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/lsshirt1_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/lsshirt1_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/lsshirt1_g.png',
        },
      ],
      size: 'XL',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Pants Heart by Leon.',
    },
    {
      name: 'OG Pants 02',
      slug: 'og-pants-02',
      category: 'Pants',
      image: '/images/pant2.png',
      image2: '/images/pant2_2.png',
      price: 70,
      brand: 'HeartByLeon',
      color: [
        {
          colorName: 'white',
          colorLink: '/images/lsshirt1.png',
        },
        {
          colorName: 'black',
          colorLink: '/images/lsshirt1_b.png',
        },
        {
          colorName: 'red',
          colorLink: '/images/lsshirt1_r.png',
        },
        {
          colorName: 'blue',
          colorLink: '/images/lsshirt1_blue.png',
        },
        {
          colorName: 'green',
          colorLink: '/images/lsshirt1_g.png',
        },
      ],
      size: 'XL',
      rating: 4.95,
      numReviews: 10,
      countInStock: 10,
      description: 'Pants Heart by Leon.',
    },
  ],
};
export default data;
