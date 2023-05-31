import Image from 'next/image';
import logo from '/public/img/alli.png';

export default function Home() {
	return (
		<>
			<nav className="mb-6">
				<div className="container flex items-center gap-4 px-4 py-6 mx-auto">
					<Image src={logo} alt="Smiling cat emoji" className="w-8 h-8" />
					<h1 className="text-2xl">Alli</h1>
				</div>
			</nav>
			<main className="container px-4 px-6 mx-auto">
				<h2 className="mb-2 text-4xl">Easily create flashcards</h2>
				<p>
					Just paste the relevant study materials below and let Alli work its
					magic 🪄
				</p>
			</main>
		</>
	);
}
