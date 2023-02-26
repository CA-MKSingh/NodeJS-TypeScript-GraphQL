import crypto from 'crypto';
import { ProductProps, Soldout, StoreProps } from '@interfaces/graphql';

class Product {
    id: String;
    name: String;
    description: String;
    price: Number;
    soldout: Soldout;
    inventory: Number;
    stores: StoreProps[];

    constructor(
        id: String,
        { name, description, price, soldout, inventory, stores }: ProductProps,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.inventory = inventory;
        this.stores = stores;
    }
}

const productDatabase: { [key: string]: ProductProps } = {};

const resolvers = {
    createProduct: (data: { input: ProductProps }) => {
        const id = crypto.randomBytes(10).toString('hex');
        productDatabase[id] = data.input;
        return new Product(id, data.input);
    },

    getProducts: (data: { id: string }) => {
        return new Product(data.id, productDatabase[data.id]);
    },
};

export default resolvers;
