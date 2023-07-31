import { AppDataSource } from '../../data-source';
import Contact from '../../entities/contacts.entities';
import { User } from '../../entities/users.entities';
import { AppError } from '../../errors/AppError';

import { TContactResponse } from '../../interfaces/contact.interfaces';
import { contactSchemaArr } from '../../schemas/contactSchema.schema';

const listContactService = async (
    userId: number
): Promise<TContactResponse[]> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    if (!user) {
        throw new AppError('user not found', 404);
    }

    const contacts = await contactRepository.find({
        where: {
            user: { id: userId },
        },
    });

    return contactSchemaArr.parse(contacts);
};

export default listContactService;
