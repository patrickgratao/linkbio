type AppLayout = {
	children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayout) => {
	return (
		<main className="min-h-screen font-default bg-neutral-200 py-12 my-auto">
			{children}
			<footer className="my-6 flex justify-center">
				Criado com amor por 💗
				<a
					href="https://www.linkedin.com/in/patrickgratao/"
					target="_blank"
					className="mx-1 text-primary-500 hover:text-indigo-400"
				>
					{" "}
					Patrick Gratão.
				</a>
			</footer>
		</main>
	);
};
