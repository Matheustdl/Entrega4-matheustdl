import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import {
    TUpdateUserRequest,
    TUserResponse,
} from '../../interfaces/users.interfaces';
import { User } from '../../entities/users.entities';
import { userResponseSchema } from '../../schemas/users.schema';

const updateUserService = async (
    userData: TUpdateUserRequest,
    userId: number
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData: User | null = await userRepository.findOneBy({
        id: userId,
    });

    if (!oldUserData) {
        throw new Error(`User with ID ${userId} not found.`);
    }

    const newUserData: User = userRepository.create({
        ...oldUserData,
        ...userData,
    });

    await userRepository.save(newUserData);

    return userResponseSchema.parse(newUserData);
};

export default updateUserService;
