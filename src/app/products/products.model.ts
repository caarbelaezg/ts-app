import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
    title: string;
    image: string;
    descriptcion: string;
    stock: number;
    color: string;
    price: number;
    isNew: boolean;
    tags: Array<string>;
    size?: Sizes;
    category: Category;
};
