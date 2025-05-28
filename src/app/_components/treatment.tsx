export function Treatment() {


    return (
        <section className="flex flex-col items-center justify-between px-4 mt-20 mb-40 md:px-20">
            <div className="flex flex-col justify-center items-center h-full mt-20 text-center px-4">
                <h2 id="tratamentos" className="text-4xl text-gray-700 font-bold max-w-xl">
                    Nossos Tratamentos
                </h2>
                <p className="text-lg text-gray-500 mt-4 max-w-md">
                    Oferecemos uma ampla gama de tratamentos odontológicos para cuidar da saúde e da beleza do seu sorriso.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 w-full max-w-7xl">
             
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
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

               
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                    <img src="/implante.avif" alt="Implantes Dentários" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Implantes Dentários</h4>
                        <p className="text-gray-600 text-sm mt-auto">
                            Recupere a função e a estética do seu sorriso com implantes que parecem dentes naturais.
                        </p>
                    </div>
                </div>

             
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                    <img src="/Ortodontia.avif" alt="Ortodontia" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Ortodontia</h4>
                        <p className="text-gray-600 text-sm mt-auto">
                            Alinhe seus dentes com aparelhos modernos, transparentes ou convencionais, para todas as idades.
                        </p>
                    </div>
                </div>

              
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                    <img src="/Endodotia.avif" alt="Endodontia" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Endodontia</h4>
                        <p className="text-gray-600 text-sm mt-auto">
                            Tratamento de canal especializado com tecnologia avançada e procedimentos que minimizam o desconforto.
                        </p>
                    </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                    <img src="/Estetica.avif" alt="Estética Dental" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Estética Dental</h4>
                        <p className="text-gray-600 text-sm mt-auto">
                            Transforme seu sorriso com facetas, lentes de contato dental e restaurações de alta qualidade.
                        </p>
                    </div>
                </div>

             
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                    <img src="/Odontopediatria.avif" alt="Odontopediatria" className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-[#414770] mb-4">Odontopediatria</h4>
                        <p className="text-gray-600 text-sm mt-auto">
                            Cuidados especiais para a saúde bucal das crianças em um ambiente lúdico e acolhedor.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}