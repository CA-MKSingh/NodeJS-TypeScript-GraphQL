import { Router } from 'express';
import GraphQLRoutes from '@routes/graphql';

const router = Router();

router.use('/graphql', GraphQLRoutes);

export default router;
