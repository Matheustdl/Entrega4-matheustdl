import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { TLoginRequest } from '../../interfaces/login.interface';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/users.entities';
import { AppError } from '../../errors/AppError';
import { TUserResponse } from '../../interfaces/users.interfaces';

const createTokenService = async (
    loginData: TLoginRequest
): Promise<{ token: string; user: TUserResponse }> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            email: loginData.email,
        },
    });
    if (!user) {
        throw new AppError('Invalid credentials', 401);
    }

    const passwordMatch = await bcrypt.compare(
        loginData.password,
        user.password
    );

    if (!passwordMatch) {
        throw new AppError('Invalid credentials', 401);
    }

    const token = jwt.sign({}, process.env.SECRET_KEY!, {
        expiresIn: '24h',
        subject: String(user.id),
    });
    const userData: TUserResponse = {
        name: user.name,
        email: user.email,
        id: user.id,
        phone: user.phone,
        createdAt: user.createdAt,
    };

    return { token, user: userData };
};

export default createTokenService;
