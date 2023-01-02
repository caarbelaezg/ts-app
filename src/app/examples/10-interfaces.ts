type Sizes = 'S' | 'M' | 'L' | 'XL';

// TYPE: is used to define privitive data types as string or number

// type Product = {
//     id : string | number;
//     title: string;
//     createdAt: Date;
//     stock: number;
//     size: Sizes;
// };

// INTERFACES: are used for a set of values, usually with a body in it
// also, interfaces are extensibles, types don't

interface Product {
    id : string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
};

const products: Product[] = [];

products.push({
    id: '1',
    title: 'p1',
    createdAt: new Date(),
    stock: 90,
    size: 'S'
})
