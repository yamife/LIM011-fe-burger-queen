import db from './controller';

export const getProducts = (category) => {
    const docProducts = db.collection('products');
    const query = docProducts.where('category', '==', category).get();

    return query;
}