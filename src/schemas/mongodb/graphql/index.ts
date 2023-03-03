import { Soldout } from '@interfaces/products/index';
import mongoose from 'mongoose';

const WidgetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    soldout: {
        type: String,
        enum: Object.values(Soldout),
        required: true,
    },
    inventory: {
        type: Number,
        required: true,
        trim: true,
    },
    stores: {
        type: Array,
        items: {
            type: { store: String },
        },
        required: true,
        trim: true,
    },
});

const Widgets = mongoose.model('widgets', WidgetsSchema);
export default Widgets;
