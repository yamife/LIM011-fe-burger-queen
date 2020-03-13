import db from './controller';

export const getProducts = (category) => {
  const docProducts = db.collection('products');
  const query = docProducts.where('category', '==', category);
  return query.get();
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
