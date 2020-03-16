import db from './controller';

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
