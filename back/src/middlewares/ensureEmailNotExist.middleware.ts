import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/users.entities';

const ensureEmailNotExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const validateEmail = req.body;
    req.body = validateEmail;
    const { email } = req.body;

    if (email) {
        const userRepository = AppDataSource.getRepository(User);
        const existingEmail = await userRepository.findOne({
            where: { email },
        });
        if (existingEmail) {
            return res.status(409).json({ message: 'Email already exists' });
        }
    }
    return next();
};
export default ensureEmailNotExistsMiddleware;
