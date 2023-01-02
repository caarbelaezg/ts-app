import { Product } from './products.model';

export const products: Array<Product> = [];

export const addProduct = (data: Product) => {
    products.push(data);
};
