export default function Doctor({
	params,
}: Readonly<{ params: { id: string } }>) {
	return <h1>Doctor {params.id}</h1>;
}
