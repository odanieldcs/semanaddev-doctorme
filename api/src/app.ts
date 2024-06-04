import Router from '@/infra/Router';
import DoctorController from '@/infra/controller/DoctorController';
import PatientController from '@/infra/controller/PatientController';

const doctorController = new DoctorController();
const patientController = new PatientController();

const app = new Router(doctorController, patientController);

export default app;
