import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/users.entities';
import { TUserResponse } from '../../interfaces/users.interfaces';
import { userResponseSchema } from '../../schemas/users.schema';

const retrieveUserService = async (userId: number): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    const returnUser: TUserResponse = userResponseSchema.parse(user);

    return returnUser;
};

export default retrieveUserService;
