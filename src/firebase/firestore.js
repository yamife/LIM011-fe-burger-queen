import db from './controller';

<<<<<<< HEAD
export const getProducts = (category) => {
=======
const getProducts = (category) => {
>>>>>>> 5d10c1cbb3f7d20578026c194ec7b1004fa80341
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
<<<<<<< HEAD
    });
    return arr;
  })

};
=======
      console.log('estamos aqui');
    });
    return arr;
  })
};
export default getProducts;
>>>>>>> 5d10c1cbb3f7d20578026c194ec7b1004fa80341

/* export const getProducts = (category) => {
    const docProducts = db.collection('products');
    const query = docProducts.where('category', '==', category);
    query.get().then((snapShots) => {
      const array = [];
      snapShots.forEach((element) => {
        array.push({
          Producto: element.data().nameProduct,
          Precio: element.data().price,
        })
      });
      return array;
      
    });
} */
