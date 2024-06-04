import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const specialities = [
	'Cardiologista',
	'Endocrinologista',
	'Clinico Geral',
	'Pediatra',
	'Urologista',
];

// gerar médicos
function createDoctor() {
	// retornar um objeto contendo os dados do médico
	const speciality =
		specialities[Math.floor(Math.random() * specialities.length)];
	const experience = `${Math.floor(Math.random() * 5)} anos de experiência`;

	const doctor = {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		city: faker.location.city(),
		state: faker.location.state(),
		speciality,
		bio: `Dr formado em ${speciality} com ${experience}`,
		picture: `photo-${Math.floor(Math.random() * 9)}.jpg`,
		price: Number(faker.commerce.price({ min: 100, max: 500 })),
		availability: 'Segunda à Sexta das 10:00 às 16:00',
		experience,
		attendances: Math.floor(Math.random() * 10),
		address: faker.location.streetAddress(),
	};

	return doctor;
}

// gerar horários para a agenda do médico
function generateAgenda(quantity) {
	// Retornar uma lista com
	const dates = [
		'2024-06-03 19:00:00',
		'2024-06-04 19:00:00',
		'2024-06-05 19:00:00',
		'2024-06-06 19:00:00',
		'2024-06-07 19:00:00',
	];

	return dates.splice(0, quantity);
}

// criar a função de adicionar médicos no database
async function main() {
	console.log(`Seed está iniciando... 🌱`);
	const ROWS_QUANTITY = 10;

	for (let index = 0; index < ROWS_QUANTITY; index++) {
		// quantidade de médicos para serem inseridos
		const ITEMS_AGENDA = Math.floor(Math.random() * 5);

		const doctor = createDoctor();
		const agenda = generateAgenda(ITEMS_AGENDA);

		await prisma.doctor.create({
			data: {
				...doctor,
				agenda: {
					createMany: {
						data: agenda.map((item) => ({
							date: new Date(item).toISOString(),
						})),
					},
				},
			},
		});
	}
	console.log(`Seed concluído com sucesso... 🎉`);
}

main();
