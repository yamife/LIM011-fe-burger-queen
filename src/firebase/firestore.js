import db from './controller';

<<<<<<< HEAD
const getProducts = (category) => {
  console.log('getProducts')
  return db.collection('products').where('category', '==', category).get()
  .then((response) => {
    const arr = [];
    response.docs.forEach(doc => {
      const obj = {
        id: doc.id,
        ...doc.data()
      };
      arr.push(obj);
      console.log('estamos aqui');
    });
    return arr;
  })
};
export default getProducts;
=======
>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84

const getProducts = (category) => {
  return db.collection('products').where('category', '==', category).get()
  .then((response) => {
    const arr = [];

    response.docs.forEach(doc => {
      const obj = {
        id: doc.id,
        ...doc.data()
      };
      
      arr.push(obj);
    });
<<<<<<< HEAD
} */
=======

    return arr;
  })
};


export default getProducts;
>>>>>>> fd0574830bb69875fdd28a4b13ea9aadff782a84
