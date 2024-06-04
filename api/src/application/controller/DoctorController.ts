import { Request, Response } from 'express';

export default interface DoctorController {
	listDoctor(req: Request, res: Response): Promise<void>;
	getDoctorById(req: Request, res: Response): Promise<void>;
}
