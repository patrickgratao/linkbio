type AppLayout = {
	children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayout) => {
	return (
		<main className="font-default bg-neutral-200 py-12">{children}</main>
	);
};