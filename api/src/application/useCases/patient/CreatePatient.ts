import DatabaseService from '@/infra/DatabaseService';
import { BussinesError } from '@/infra/helpers/Errors';
import { hashPassword } from '@/infra/helpers/SecurityHelper';

export default class CreatePatientUseCase {
	constructor(readonly database: DatabaseService) {}

	async execute(name: string, phone: string, password: string) {
		// verifica se o paciente já existe com este telefone
		const patient = await this.database.getPatientByPhone(phone);

		if (patient) {
			throw new BussinesError('Patient already exists with this phone number');
		}

		// gera um hash seguro para a senha ser armazenada no banco de dados
		const hashedPassword = hashPassword(password);

		// adiciona um novo usuário com este telefone
		const user = await this.database.createUser(phone, hashedPassword);

		// adiciona o paciente com o nome, telefone e id de usuario criado
		const newPatient = await this.database.createPatient(name, phone, user.id);

		// retorna o paciente criado
		return newPatient;
	}
}
