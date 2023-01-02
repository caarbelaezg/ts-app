import { Product } from './products.model';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './products.dto';
import { faker } from '@faker-js/faker';

export const products: Array<Product> = [];

export const addProduct = (data: CreateProductDto) => {

    // this is made for  a database:
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        },
    };

    products.push(newProduct);
    return newProduct;
};

export const updatedProducts = (id: Product['id'], changes: UpdateProductDto): Product => {
    const index = products.findIndex(item=> item.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes
    };

    return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
    return products;
};
