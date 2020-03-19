import db from './controller';


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

    return arr;
  })
};


export default getProducts;
