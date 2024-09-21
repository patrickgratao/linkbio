export const HomePage = () => {
	return (
		<section className="w-app bg-white h-screen border border-black shadow-md mx-auto rounded-3xl relative">
			<div className="h-[140px] bg-[url('/public/cover.jpg')] bg-cover bg-center w-full rounded-t-3xl "></div>

			<div className="w-full px-28">
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
			</div>
		</section>
	);
};
