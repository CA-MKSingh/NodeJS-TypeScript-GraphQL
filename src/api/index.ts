import { Router } from 'express';
import GraphQLRoutes from '@routes/products/index';

const router = Router();

router.use('/products', GraphQLRoutes);

export default router;
