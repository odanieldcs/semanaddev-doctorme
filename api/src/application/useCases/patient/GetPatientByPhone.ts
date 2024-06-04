import DatabaseService from '@/infra/DatabaseService';
import { NotFoundError } from '@/infra/helpers/Errors';

export default class GetPatientByPhoneUseCase {
	constructor(readonly database: DatabaseService) {}

	async execute(phone: string) {
		// lógica de negócio
		const INCLUDE_APPOINTMENT = true;
		const INCLUDE_DOCTOR = true;
		const patient = await this.database.getPatientByPhone(
			phone,
			INCLUDE_APPOINTMENT,
			INCLUDE_DOCTOR
		);

		if (!patient) {
			throw new NotFoundError('No patient found');
		}

		return patient;
	}
}
