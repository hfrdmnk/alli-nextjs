import FlashcardArea from '@/components/flashcardArea';
import Image from 'next/image';

import logo from '~/img/alli.png';

export default function Home() {
	return (
		<>
			<nav className="mb-6">
				<div className="container flex items-center gap-4 px-4 py-6 mx-auto">
					<Image src={logo} alt="Smiling cat emoji" className="w-8 h-8" />
					<h1 className="text-2xl font-semibold tracking-tight scroll-m-20 ">
						Alli
					</h1>
				</div>
			</nav>
			<main className="container max-w-3xl px-4 py-6 mx-auto">
				<div className="mb-12">
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
						Easily create flashcards
					</h2>
					<p>
						Just paste the relevant study materials below and let Alli work its
						magic 🪄
					</p>
				</div>
				<FlashcardArea />
			</main>
		</>
	);
}
