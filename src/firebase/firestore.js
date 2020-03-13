import db from './controller';

export const getProducts = (category) => {
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
