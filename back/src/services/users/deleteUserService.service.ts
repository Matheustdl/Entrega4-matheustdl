import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/users.entities';

const deleteUsersService = async (userId: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (user) {
        await userRepository.softRemove(user);
    } else {
        throw new Error('User not found');
    }
};

export default deleteUsersService;
