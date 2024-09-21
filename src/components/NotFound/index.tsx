import { Button } from "react-daisyui";
import { BsArrowLeft, BsHouseDoor } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import image from "../../assets/unplugged.png";

export const NotFound = () => {
	const history = useHistory();

	return (
		<>
			<section className="flex flex-col">
				<div className="my-auto flex flex-col items-center gap-4">
					<img src={image} alt="Página não encontrada" width="40%" />
					<h3 className="lg:mt-3 lg:text-2xl lg:font-semibold">
						Página não encontrada
					</h3>
					<span className="lg:text-lg ">
						Tente novamente ou clique no botão abaixo para voltar.
					</span>
					<section className="flex gap-8">
						<Button
							onClick={() => history.goBack()}
							color="primary"
							className="mt-2 rounded-full"
						>
							<BsArrowLeft size={22} />
							Voltar página
						</Button>

						<Button
							onClick={() => history.push("/")}
							className="mt-2 rounded-full"
						>
							<BsHouseDoor size={22} />
							Voltar ao Início
						</Button>
					</section>
				</div>
			</section>
		</>
	);
};
