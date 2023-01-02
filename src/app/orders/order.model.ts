import { BaseModel } from "../base.model";
import { Product } from "../products/products.model";
import { User } from "../users/user.model";

export interface Order extends BaseModel {
    user: User;
};
