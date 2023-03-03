// import crypto from 'crypto';
import { ProductProps } from '@interfaces/products/index';
import Widgets from '@schemas/mongodb/graphql';

const resolvers = {
    getProducts: async ({ id }: { id: string }) => {
        try {
            const res = await Widgets.findById({ _id: id });
            if (!res) {
                throw new Error('Product not found');
            } else {
                return res;
            }
        } catch (err) {
            throw new Error(err);
        }
    },

    getAllProducts: async () => {
        try {
            const res = await Widgets.find({});
            if (!res) {
                throw new Error(
                    'Something went wrong, unable to get products!',
                );
            } else {
                return res;
            }
        } catch (err) {
            throw new Error(err);
        }
    },

    createProduct: async ({ input }: { input: ProductProps }) => {
        try {
            const newWidget = new Widgets({
                name: input.name,
                description: input.description,
                price: input.price,
                soldout: input.soldout,
                inventory: input.inventory,
                stores: input.stores,
            });

            newWidget.id = newWidget._id;
            const res = await newWidget.save();
            if (!res) {
                throw new Error('Product not saved!');
            } else {
                return res;
            }
        } catch (err) {
            throw new Error(err);
        }
    },

    updateProduct: async ({ input }: { input: ProductProps }) => {
        try {
            const res = await Widgets.findOneAndUpdate(
                { _id: input.id },
                input,
                { new: true },
            );

            if (!res) {
                throw new Error(
                    'Something went wrong, unable to update the product!',
                );
            } else {
                return res;
            }
        } catch (err) {
            throw new Error(err);
        }
    },

    deleteProduct: async ({ id }: { id: string }) => {
        try {
            const res = await Widgets.findByIdAndDelete({ _id: id });
            if (!res) {
                throw new Error(
                    'Something went wrong, unable to delete the product!',
                );
            } else {
                return 'Product deleted successfully!';
            }
        } catch (err) {
            throw new Error(err);
        }
    },
};

export default resolvers;
