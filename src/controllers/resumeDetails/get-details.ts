import { Request, Response } from "express";

const getResumeDetailsById = async (req: Request, res: Response) => {
    const { ID } = req.params;
    if (!parseInt(ID)) {
        return res.status(400).json({ message: "No resume details provided", errors: [] });
    }

    try {
        return res.status(200).json({ message: "Resume details fetched successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", errors: [error] });
    }
};

export { getResumeDetailsById };