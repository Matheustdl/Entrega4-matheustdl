import { hash } from 'bcrypt';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/users.entities';
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces';
import { Repository } from 'typeorm';
import { userResponseSchema } from '../../schemas/users.schema';

const createUserServices = async (
    data: TUserRequest
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const hashedPassword = await hash(data.password, 10);

    const newUser: User = userRepository.create({
        ...data,
        password: hashedPassword,
    });

    const savedUser: User = await userRepository.save(newUser);

    const returnUser: TUserResponse = userResponseSchema.parse(savedUser);

    return returnUser;
};

export default createUserServices;
