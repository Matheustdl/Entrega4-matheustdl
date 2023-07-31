import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import Contact from '../../entities/contacts.entities';

const listContactsByIdUserService = async (
    userId: number
): Promise<Contact[] | null> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const contacts: Contact[] | null = await contactRepository.find({
        where: {
            user: { id: userId },
        },
        relations: ['user'],
    });

    return contacts;
};

export default listContactsByIdUserService;
