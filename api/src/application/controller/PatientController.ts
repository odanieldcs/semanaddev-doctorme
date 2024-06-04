import { Request, Response } from 'express';

export default interface PatientController {
	createPatient(req: Request, res: Response): Promise<void>;
	createAppointment(req: Request, res: Response): Promise<void>;
	authenticate(req: Request, res: Response): Promise<void>;
	getPatientByPhone(req: Request, res: Response): Promise<void>;
}
