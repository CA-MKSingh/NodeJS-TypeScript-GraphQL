import { Request, Response } from 'express';

const graphQLDemo = async (_: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'This is GraphQL Demo Data' });
    } catch (error: any) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

export { graphQLDemo };
