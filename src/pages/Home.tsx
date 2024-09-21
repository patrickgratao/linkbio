import { useState } from "react";
import { Button } from "react-daisyui";

// import logo from "../assets/logo.png";

export const HomePage = () => {
  const randoms = [
    [1, 2],
    [3, 4, 5],
    [6, 7],
  ];

  const [counter, setCounter] = useState(0);

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">{/* <img src={logo} /> */}</div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Bem vindo!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Este boilerplate foi criado utilizando Vite, React 18, TypeScript,
              Vitest, Testing Library, TailwindCSS 3, Styled Components e Biome
              Linter.
            </p>
          </div>
          <div>
            <div className="my-10 flex items-center gap-4 max-w-[30%]">
              <Button onClick={() => setCounter(counter + 1)} color="primary">
                Adicionar
              </Button>
              <Button onClick={() => setCounter(counter - 1)} color="primary">
                Diminuir
              </Button>
              <span className="text-xl text-gray-800">Contador: {counter}</span>
              <div
                aria-hidden="true"
                className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {randoms.map((random, number) => (
                      <div
                        key={`random-${random[number]}`}
                        className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        {random.map((number) => (
                          <div
                            key={`random-${number}`}
                            className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                          >
                            <img
                              src={`https://picsum.photos/600?random=${number}`}
                              alt=""
                              className="h-full w-full bg-indigo-100 object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
