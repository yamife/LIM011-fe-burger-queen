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

const getOffer = (category) => {
  return db.collection('offers').where('category', '==', category).get()
  .then((response) => {
    const arrayOffers = [];

    response.docs.forEach(doc => {
      const offer = {
        id: doc.id,
        ...doc.data()
      };

      arrayOffers.push(offer);
    });

    return arrayOffers;
  })
};


export default {getProducts, getOffer};
