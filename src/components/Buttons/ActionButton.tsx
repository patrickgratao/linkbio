import { MdArrowOutward } from "react-icons/md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	emoji: string;
}

export const ActionButton = ({ children, emoji, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="group bg-neutral-100 hover:bg-neutral-800 text-neutral-800 hover:text-neutral-100 border border-neutral-300 h-16 w-full flex justify-between items-center pl-6 pr-2 rounded-full transition-all duration-300"
		>
			<section className="text-base font-bold flex gap-3 items-center">
				<span className="text-xl">{emoji}</span>
				{children}
			</section>
			<section className="w-12 h-12 bg-neutral-300 group-hover:bg-neutral-100 flex items-center justify-center rounded-full">
				<MdArrowOutward size={30} className="text-neutral-800" />
			</section>
		</button>
	);
};
