export interface ProductProps {
    name: String;
    description: String;
    price: Number;
    soldout: Soldout;
    inventory: Number;
    stores: StoreProps[];
}

export enum Soldout {
    SOLDOUT,
    ONSALE,
}

export interface StoreProps {
    store: String;
}
