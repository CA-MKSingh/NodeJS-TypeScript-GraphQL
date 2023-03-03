import { Router } from 'express';
import { graphQLDemo } from '@models/products';

const router = Router();

router.use('/', graphQLDemo);

export default router;
