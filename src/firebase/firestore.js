import db from './controller';

export const getProducts = (category) => {
    const docProducts = db.collection('products');
    const query = docProducts.where('category', '==', category);

    query.get().then((snapShots) => {
      snapShots.forEach((element) => {
        console.log(element.data().nameProduct);
      });
    });
}