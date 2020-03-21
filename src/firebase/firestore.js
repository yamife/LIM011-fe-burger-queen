import db from './controller';


const getProducts = (category) => {
  return db.collection('products').where('category', '==', category).get()
  .then((response) => {
    const arrayProduct = [];

    response.docs.forEach(doc => {
      const product = {
        id: doc.id,
        ...doc.data()
      };

      arrayProduct.push(product);
    });

    return arrayProduct;
  })
};


export default getProducts;
