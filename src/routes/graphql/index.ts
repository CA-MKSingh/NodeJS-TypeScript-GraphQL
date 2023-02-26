import { Router } from 'express';
import { graphQLDemo } from '@models/graphql';

const router = Router();

router.use('/', graphQLDemo);

export default router;
