import { ActionButton } from "components/Buttons/ActionButton";

export const HomePage = () => {
	return (
		<section className="w-app bg-white h-auto shadow-md mx-auto rounded-3xl relative">
			<div className="h-[140px] bg-[url('/public/cover.jpg')] bg-cover bg-center w-full rounded-t-3xl "></div>

			<div className="w-full px-28 pb-14">
				<section className="mt-[-88px] flex flex-col justify-center items-center gap-4">
					<img
						src="https://avatars.githubusercontent.com/u/7607620?v=4"
						className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
					/>

					<div className="flex flex-col justify-center items-center gap-1">
						<h2 className="text-2xl font-bold text-neutral-800">
							Patrick Gratão
						</h2>
						<span className="text-base text-neutral-600 text-center">
							Com uma paixão por tecnologia e pessoas, sou um
							desenvolvedor front-end comprometido em criar
							produtos incríveis.
						</span>
					</div>
				</section>

				<section className="mt-7 flex flex-col gap-3">
					<ActionButton emoji={"👨🏼‍💻"}>
						Visit my porfolio
					</ActionButton>

					<ActionButton emoji="📝">Read my articles</ActionButton>

					<ActionButton emoji="🎙️">Listen my podcast</ActionButton>

					<ActionButton emoji="🛍️">Visit my store</ActionButton>

					<ActionButton emoji="🎥">
						Subscribe to my channel
					</ActionButton>
				</section>
			</div>
		</section>
	);
};
