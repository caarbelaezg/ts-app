import { faker } from '@faker-js/faker';
import { addProduct } from './products/products.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    descriptcion: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    price: parseInt(faker.commerce.price(), 10),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}
