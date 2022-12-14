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
  imagetable: [
    {
      idimage: 1,
      idprod: 1,
      color: 'white',
      image3: '/images/lsshirt1.png',
    },
    {
      idimage: 2,
      idprod: 1,
      color: 'black',
      image3: '/images/lsshirt1_b.png',
    },
    {
      idimage: 3,
      idprod: 1,
      color: 'red',
      image3: '/images/lsshirt1_r.png',
    },
    {
      idimage: 4,
      idprod: 1,
      color: 'blue',
      image3: '/images/lsshirt1_blue.png',
    },
    {
      idimage: 5,
      idprod: 1,
      color: 'green',
      image3: '/images/lsshirt1_g.png',
    },
    {
      idimage: 6,
      idprod: 2,
      color: 'white',
      image3: '/images/lsshirt1.png',
    },
    {
      idimage: 7,
      idprod: 2,
      color: 'black',
      image3: '/images/lsshirt1_b.png',
    },
    {
      idimage: 8,
      idprod: 2,
      color: 'red',
      image3: '/images/lsshirt1_r.png',
    },
    {
      idimage: 9,
      idprod: 2,
      color: 'blue',
      image3: '/images/lsshirt1_blue.png',
    },
    {
      idimage: 10,
      idprod: 2,
      color: 'green',
      image3: '/images/lsshirt1_g.png',
    },
    {
      idimage: 11,
      idprod: 3,
      color: 'white',
      image3: '/images/lsshirt1.png',
    },
    {
      idimage: 12,
      idprod: 3,
      color: 'black',
      image3: '/images/lsshirt1_b.png',
    },
    {
      idimage: 13,
      idprod: 3,
      color: 'red',
      image3: '/images/lsshirt1_r.png',
    },
    {
      idimage: 14,
      idprod: 3,
      color: 'blue',
      image3: '/images/lsshirt1_blue.png',
    },
    {
      idimage: 15,
      idprod: 3,
      color: 'green',
      image3: '/images/lsshirt1_g.png',
    },
    {
      idimage: 16,
      idprod: 4,
      color: 'white',
      image3: '/images/slshirt2.png',
    },
    {
      idimage: 17,
      idprod: 4,
      color: 'black',
      image3: '/images/slshirt2_b.png',
    },
    {
      idimage: 18,
      idprod: 4,
      color: 'red',
      image3: '/images/slshirt2_r.png',
    },
    {
      idimage: 19,
      idprod: 4,
      color: 'blue',
      image3: '/images/slshirt2_blue.png',
    },
    {
      idimage: 20,
      idprod: 4,
      color: 'green',
      image3: '/images/slshirt2_g.png',
    },
    {
      idimage: 21,
      idprod: 5,
      color: 'white',
      image3: '/images/lsshirt1.png',
    },
    {
      idimage: 22,
      idprod: 5,
      color: 'black',
      image3: '/images/lsshirt1_b.png',
    },
    {
      idimage: 23,
      idprod: 5,
      color: 'red',
      image3: '/images/lsshirt1_r.png',
    },
    {
      idimage: 24,
      idprod: 5,
      color: 'blue',
      image3: '/images/lsshirt1_blue.png',
    },
    {
      idimage: 25,
      idprod: 5,
      color: 'green',
      image3: '/images/lsshirt1_g.png',
    },
    {
      idimage: 26,
      idprod: 6,
      color: 'white',
      image3: '/images/lsshirt1.png',
    },
    {
      idimage: 27,
      idprod: 6,
      color: 'black',
      image3: '/images/lsshirt1_b.png',
    },
    {
      idimage: 28,
      idprod: 6,
      color: 'red',
      image3: '/images/lsshirt1_r.png',
    },
    {
      idimage: 29,
      idprod: 6,
      color: 'blue',
      image3: '/images/lsshirt1_blue.png',
    },
    {
      idimage: 30,
      idprod: 6,
      color: 'green',
      image3: '/images/lsshirt1_g.png',
    },
    {
      idimage: 31,
      idprod: 7,
      color: 'white',
      image3: '/images/lsshirt1.png',
    },
    {
      idimage: 32,
      idprod: 7,
      color: 'black',
      image3: '/images/lsshirt1_b.png',
    },
    {
      idimage: 33,
      idprod: 7,
      color: 'red',
      image3: '/images/lsshirt1_r.png',
    },
    {
      idimage: 34,
      idprod: 7,
      color: 'blue',
      image3: '/images/lsshirt1_blue.png',
    },
    {
      idimage: 35,
      idprod: 7,
      color: 'green',
      image3: '/images/lsshirt1_g.png',
    },
  ],
  products: [
    {
      idprod: 1,
      name: 'Long Sleeves Shirt 01',
      slug: 'long-sleeves-shirt-01',
      category: 'Shirts',
      image: '/images/lsshirt1.png',
      image2: '/images/lsshirt1_2.png',
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      description: 'Long Sleeves Shirt de Heart by Leon.',
    },
    {
      idprod: 2,
      name: 'Long Sleeves Shirt 02',
      slug: 'long-sleeves-shirt-02',
      category: 'Shirts',
      image: '/images/lsshirt2.png',
      image2: '/images/lsshirt2_2.png',
      brand: 'HeartByLeon',
      price: 70,
      rating: 4.95,
      numReviews: 10,
      description: 'Long Sleeves Shirt de Heart by Leon.',
    },
    {
      idprod: 3,
      name: 'Short Sleeves Shirt 01',
      slug: 'short-sleeves-shirt-01',
      category: 'Shirts',
      image: '/images/slshirt1.png',
      image2: '/images/slshirt1_2.png',
      price: 70,
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      description: 'Short Sleeves Shirt de Heart by Leon.',
    },
    {
      idprod: 4,
      name: 'Short Sleeves Shirt 02',
      slug: 'short-sleeves-shirt-02',
      category: 'Shirts',
      image: '/images/slshirt2.png',
      image2: '/images/slshirt2_2.png',
      price: 70,
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      description: 'Short Sleeves Shirt de Heart by Leon.',
    },
    {
      idprod: 5,
      name: 'Swag Shorts 01',
      slug: 'swag-shorts-01',
      category: 'Shorts',
      image: '/images/sshort1.png',
      image2: '/images/sshort1_2.png',
      price: 70,
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      description: 'Shorts Heart by Leon.',
    },
    {
      idprod: 6,
      name: 'OG Pants 01',
      slug: 'og-pants-01',
      category: 'Pants',
      image: '/images/pant1.png',
      image2: '/images/pant1_2.png',
      price: 70,
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      description: 'Pants Heart by Leon.',
    },
    {
      idprod: 7,
      name: 'OG Pants 02',
      slug: 'og-pants-02',
      category: 'Pants',
      image: '/images/pant2.png',
      image2: '/images/pant2_2.png',
      price: 70,
      brand: 'HeartByLeon',
      rating: 4.95,
      numReviews: 10,
      description: 'Pants Heart by Leon.',
    },
  ],
  variations: [
    {
      idvar: 1,
      idprod: 1,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 2,
      idprod: 1,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 3,
      idprod: 1,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 4,
      idprod: 1,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 5,
      idprod: 1,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 6,
      idprod: 1,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 7,
      idprod: 1,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 8,
      idprod: 1,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 9,
      idprod: 1,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 10,
      idprod: 1,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 11,
      idprod: 1,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 12,
      idprod: 1,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 13,
      idprod: 1,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 14,
      idprod: 1,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 15,
      idprod: 1,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 16,
      idprod: 1,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 17,
      idprod: 1,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 18,
      idprod: 1,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 19,
      idprod: 1,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 20,
      idprod: 1,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 21,
      idprod: 1,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 22,
      idprod: 1,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 23,
      idprod: 1,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 24,
      idprod: 1,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 25,
      idprod: 1,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 26,
      idprod: 1,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 27,
      idprod: 1,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 28,
      idprod: 1,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 29,
      idprod: 1,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 30,
      idprod: 1,
      size: '2xl',
      color: 'green',
      count: 6,
    },
    {
      idvar: 31,
      idprod: 2,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 32,
      idprod: 2,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 33,
      idprod: 2,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 34,
      idprod: 2,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 35,
      idprod: 2,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 36,
      idprod: 2,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 37,
      idprod: 2,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 38,
      idprod: 2,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 39,
      idprod: 2,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 40,
      idprod: 2,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 41,
      idprod: 2,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 42,
      idprod: 2,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 43,
      idprod: 2,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 44,
      idprod: 2,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 45,
      idprod: 2,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 46,
      idprod: 2,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 47,
      idprod: 2,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 48,
      idprod: 2,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 49,
      idprod: 2,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 50,
      idprod: 2,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 51,
      idprod: 2,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 52,
      idprod: 2,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 53,
      idprod: 2,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 54,
      idprod: 2,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 55,
      idprod: 2,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 56,
      idprod: 2,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 57,
      idprod: 2,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 58,
      idprod: 2,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 59,
      idprod: 2,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 60,
      idprod: 2,
      size: '2xl',
      color: 'green',
      count: 6,
    },
    {
      idvar: 61,
      idprod: 3,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 62,
      idprod: 3,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 63,
      idprod: 3,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 64,
      idprod: 3,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 65,
      idprod: 3,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 66,
      idprod: 3,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 67,
      idprod: 3,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 68,
      idprod: 3,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 69,
      idprod: 3,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 70,
      idprod: 3,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 71,
      idprod: 3,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 72,
      idprod: 3,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 73,
      idprod: 3,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 74,
      idprod: 3,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 75,
      idprod: 3,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 76,
      idprod: 3,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 77,
      idprod: 3,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 78,
      idprod: 3,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 79,
      idprod: 3,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 80,
      idprod: 3,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 81,
      idprod: 3,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 82,
      idprod: 3,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 83,
      idprod: 3,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 84,
      idprod: 3,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 85,
      idprod: 3,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 86,
      idprod: 3,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 87,
      idprod: 3,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 88,
      idprod: 3,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 89,
      idprod: 3,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 90,
      idprod: 3,
      size: '2xl',
      color: 'green',
      count: 6,
    },
    {
      idvar: 91,
      idprod: 4,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 92,
      idprod: 4,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 93,
      idprod: 4,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 94,
      idprod: 4,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 95,
      idprod: 4,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 96,
      idprod: 4,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 97,
      idprod: 4,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 98,
      idprod: 4,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 99,
      idprod: 4,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 100,
      idprod: 4,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 101,
      idprod: 4,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 102,
      idprod: 4,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 103,
      idprod: 4,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 104,
      idprod: 4,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 105,
      idprod: 4,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 106,
      idprod: 4,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 107,
      idprod: 4,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 108,
      idprod: 4,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 109,
      idprod: 4,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 110,
      idprod: 4,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 111,
      idprod: 4,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 112,
      idprod: 4,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 113,
      idprod: 4,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 114,
      idprod: 4,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 115,
      idprod: 4,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 116,
      idprod: 4,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 117,
      idprod: 4,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 118,
      idprod: 4,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 119,
      idprod: 4,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 120,
      idprod: 4,
      size: '2xl',
      color: 'green',
      count: 6,
    },
    {
      idvar: 121,
      idprod: 5,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 122,
      idprod: 5,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 123,
      idprod: 5,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 124,
      idprod: 5,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 125,
      idprod: 5,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 126,
      idprod: 5,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 127,
      idprod: 5,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 128,
      idprod: 5,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 129,
      idprod: 5,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 130,
      idprod: 5,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 131,
      idprod: 5,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 132,
      idprod: 5,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 133,
      idprod: 5,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 134,
      idprod: 5,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 135,
      idprod: 5,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 136,
      idprod: 5,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 137,
      idprod: 5,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 138,
      idprod: 5,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 139,
      idprod: 5,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 140,
      idprod: 5,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 141,
      idprod: 5,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 142,
      idprod: 5,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 143,
      idprod: 5,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 144,
      idprod: 5,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 145,
      idprod: 5,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 146,
      idprod: 5,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 147,
      idprod: 5,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 148,
      idprod: 5,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 149,
      idprod: 5,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 150,
      idprod: 5,
      size: '2xl',
      color: 'green',
      count: 6,
    },
    {
      idvar: 151,
      idprod: 6,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 152,
      idprod: 6,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 153,
      idprod: 6,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 154,
      idprod: 6,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 155,
      idprod: 6,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 156,
      idprod: 6,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 157,
      idprod: 6,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 158,
      idprod: 6,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 159,
      idprod: 6,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 160,
      idprod: 6,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 161,
      idprod: 6,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 162,
      idprod: 6,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 163,
      idprod: 6,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 164,
      idprod: 6,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 165,
      idprod: 6,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 166,
      idprod: 6,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 167,
      idprod: 6,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 168,
      idprod: 6,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 169,
      idprod: 6,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 170,
      idprod: 6,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 171,
      idprod: 6,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 172,
      idprod: 6,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 173,
      idprod: 6,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 174,
      idprod: 6,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 175,
      idprod: 6,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 176,
      idprod: 6,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 177,
      idprod: 6,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 178,
      idprod: 6,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 179,
      idprod: 6,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 180,
      idprod: 6,
      size: '2xl',
      color: 'green',
      count: 6,
    },
    {
      idvar: 181,
      idprod: 7,
      size: 'xs',
      color: 'white',
      count: 12,
    },
    {
      idvar: 182,
      idprod: 7,
      size: 's',
      color: 'white',
      count: 6,
    },
    {
      idvar: 183,
      idprod: 7,
      size: 'm',
      color: 'white',
      count: 4,
    },
    {
      idvar: 184,
      idprod: 7,
      size: 'l',
      color: 'white',
      count: 8,
    },
    {
      idvar: 185,
      idprod: 7,
      size: 'xl',
      color: 'white',
      count: 9,
    },
    {
      idvar: 186,
      idprod: 7,
      size: '2xl',
      color: 'white',
      count: 47,
    },
    {
      idvar: 187,
      idprod: 7,
      size: 'xs',
      color: 'black',
      count: 9,
    },
    {
      idvar: 188,
      idprod: 7,
      size: 's',
      color: 'black',
      count: 7,
    },
    {
      idvar: 189,
      idprod: 7,
      size: 'm',
      color: 'black',
      count: 9,
    },
    {
      idvar: 190,
      idprod: 7,
      size: 'l',
      color: 'black',
      count: 6,
    },
    {
      idvar: 191,
      idprod: 7,
      size: 'xl',
      color: 'black',
      count: 12,
    },
    {
      idvar: 192,
      idprod: 7,
      size: '2xl',
      color: 'black',
      count: 6,
    },
    {
      idvar: 193,
      idprod: 7,
      size: 'xs',
      color: 'red',
      count: 4,
    },
    {
      idvar: 194,
      idprod: 7,
      size: 's',
      color: 'red',
      count: 8,
    },
    {
      idvar: 195,
      idprod: 7,
      size: 'm',
      color: 'red',
      count: 9,
    },
    {
      idvar: 196,
      idprod: 7,
      size: 'l',
      color: 'red',
      count: 47,
    },
    {
      idvar: 197,
      idprod: 7,
      size: 'xl',
      color: 'red',
      count: 9,
    },
    {
      idvar: 198,
      idprod: 7,
      size: '2xl',
      color: 'red',
      count: 7,
    },
    {
      idvar: 199,
      idprod: 7,
      size: 'xs',
      color: 'blue',
      count: 9,
    },
    {
      idvar: 200,
      idprod: 7,
      size: 's',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 201,
      idprod: 7,
      size: 'm',
      color: 'blue',
      count: 12,
    },
    {
      idvar: 202,
      idprod: 7,
      size: 'l',
      color: 'blue',
      count: 6,
    },
    {
      idvar: 203,
      idprod: 7,
      size: 'xl',
      color: 'blue',
      count: 4,
    },
    {
      idvar: 204,
      idprod: 7,
      size: '2xl',
      color: 'blue',
      count: 8,
    },
    {
      idvar: 205,
      idprod: 7,
      size: 'xs',
      color: 'green',
      count: 9,
    },
    {
      idvar: 206,
      idprod: 7,
      size: 's',
      color: 'green',
      count: 47,
    },
    {
      idvar: 207,
      idprod: 7,
      size: 'm',
      color: 'green',
      count: 9,
    },
    {
      idvar: 208,
      idprod: 7,
      size: 'l',
      color: 'green',
      count: 7,
    },
    {
      idvar: 209,
      idprod: 7,
      size: 'xl',
      color: 'green',
      count: 9,
    },
    {
      idvar: 210,
      idprod: 7,
      size: '2xl',
      color: 'green',
      count: 6,
    },
  ],
};
export default data;
