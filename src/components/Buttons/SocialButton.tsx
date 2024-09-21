import { twMerge } from "tailwind-merge";

interface SocialButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	socialIcon: React.ReactNode;
}

export const SocialButton = ({
	socialIcon,
	onClick,
	className,
}: SocialButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={twMerge(
				"w-8 h-8 shadow-sm rounded-full text-white flex justify-center items-center hover:opacity-85",
				className,
			)}
		>
			{socialIcon}
		</button>
	);
};
