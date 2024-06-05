import type { Metadata } from 'next';
import { PreloadResources } from './preload-resources';
import { Roboto, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	subsets: ['latin'],
	style: 'normal',
	weight: ['400', '500', '700'],
	variable: '--font-roboto',
});

const sourceSans3 = Source_Sans_3({
	subsets: ['latin'],
	style: 'normal',
	weight: ['400', '600', '700'],
	variable: '--font-source-sans-3',
});

export const metadata: Metadata = {
	title: 'DoctorMe',
	description: 'Assistente pessoal para agendar consultas',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<PreloadResources />
			<body
				className={`${roboto.variable} ${sourceSans3.variable} bg-slate-200`}
			>
				<div className="w-full m-auto max-w-[382px] mt-10 bg-white py-10 px-7 rounded-3xl shadow-md">
					{children}
				</div>
			</body>
		</html>
	);
}
