import { z } from 'zod';

const Stores = z.object({
    store: z.string(),
});

const widgetsSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    soldout: z.enum(['SOLDOUT', 'ONSALE']),
    inventory: z.number(),
    stores: z.array(Stores),
});

export { widgetsSchema };
