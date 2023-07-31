import { AppDataSource } from '../../data-source';
import Contact from '../../entities/contacts.entities';
import { User } from '../../entities/users.entities';
import { AppError } from '../../errors/AppError';
import {
    TContactRequest,
    TContactResponse,
} from '../../interfaces/contact.interfaces';
import { contactSchema } from '../../schemas/contactSchema.schema';

const createContactService = async (
    data: TContactRequest,
    userId: number
): Promise<TContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    if (!user) {
        throw new AppError('User not found', 404);
    }

    const existingContact = await contactRepository.findOne({
        where: [{ email: data.email }, { telephone: data.telephone }],
        relations: ['user'],
    });

    if (existingContact) {
        throw new AppError('Email or telephone already in use', 409);
    }

    const contact = contactRepository.create({
        ...data,
        user,
    });

    await contactRepository.save(contact);

    return contactSchema.parse(contact);
};

export { createContactService };
