export function Treatment() {


    return (
        <section className=" flex flex-col items-center justify-between px-20 mt-20 mb-40 ">
            <div className="flex flex-col justify-center items-center h-full mt-20 text-center px-4">
                <h2 id="tratamentos" className="text-4xl text-gray-700 font-bold max-w-xl">
                    Nossos Tratamentos
                </h2>
                <p className="text-lg text-gray-500 mt-4 max-w-md">
                    Oferecemos uma ampla gama de tratamentos odontológicos para cuidar da saúde e da beleza do seu sorriso.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 p-8 items-stretch">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                    <img src="/clareamento.jpg" alt="Clareamento Dental" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Clareamento Dental</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Realce o brilho do seu sorriso com nosso tratamento de clareamento dental avançado e seguro.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mt-auto">
                            <li>Técnica profissional de consultório com resultados imediatos</li>
                            <li>Sistema caseiro supervisionado para manutenção</li>
                            <li>Tratamento personalizado conforme necessidades específicas</li>
                            <li>Procedimento indolor e com proteção de gengivas</li>
                            <li>Resultados duradouros com os cuidados adequados</li>
                        </ul>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                    <img src="/implante.avif" alt="Implantes Dentários" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Implantes Dentários</h4>
                        <p className="text-gray-600 text-sm mt-auto">
                            Recupere a função e a estética do seu sorriso com implantes que parecem dentes naturais.
                        </p>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                    <img src="/Ortodontia.avif" alt="Ortodontia" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5">
                        <h4 className="text-xl font-bold text-[#414770] mb-8">Ortodontia</h4>
                        <p className="text-gray-600 text-sm">
                            Alinhe seus dentes com aparelhos modernos, transparentes ou convencionais, para todas as idades.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                    <img src="/Endodotia.avif" alt="Endodotia" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5">
                        <h4 className="text-xl font-bold text-[#414770] mb-8">Endodontia</h4>
                        <p className="text-gray-600 text-sm">
                            Tratamento de canal especializado com tecnologia avançada e procedimentos que minimizam o desconforto.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                    <img src="/Estetica.avif" alt="Estetica" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5">
                        <h4 className="text-xl font-bold text-[#414770] mb-8">Estética Dental</h4>
                        <p className="text-gray-600 text-sm">
                            Transforme seu sorriso com facetas, lentes de contato dental e restaurações de alta qualidade.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <img src="/Odontopediatria.avif" alt="Odontopediatria" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5">
                        <h4 className="text-xl font-bold text-[#414770] mb-8">Odontopediatria</h4>
                        <p className="text-gray-600 text-sm">
                            Cuidados especiais para a saúde bucal das crianças em um ambiente lúdico e acolhedor.
                        </p>
                    </div>
                </div>


            </div>

        </section>
    );
}