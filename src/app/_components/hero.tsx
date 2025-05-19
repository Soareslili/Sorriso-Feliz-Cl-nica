


export function Hero() {
    return (
        <>
            <header className="flex items-center justify-between h-[100px] bg-white shadow-md py-10">
                <h1 className="text-orange-500 text-2xl font-bold ml-10">
                    Sorriso Feliz <span className="text-lg text-gray-400">Clínica</span>
                </h1>
                <nav className="flex items-center gap-10 mr-10">
                    <a
                        className="font-medium text-gray-500 hover:text-orange-500 transition-colors duration-200"
                        href="" >Tratamentos</a>
                    <a
                        className="font-medium text-gray-500 hover:text-orange-500 transition-colors duration-200"
                        href=""> Depoimento</a>
                    <a
                        className="font-medium text-gray-500 hover:text-orange-500 transition-colors duration-200"
                        href=""> Localização</a>
                    <a
                        className="font-medium text-gray-500 hover:text-orange-500 transition-colors duration-200"
                        href="">Contato</a>

                    <button className="p-3 bg-orange-500 text-white rounded-2xl cursor-pointer 
  hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                        Agendar Consulta
                    </button>
                </nav>
            </header>


            <section>
                <div className="flex items-center justify-between h-[500px] px-20">

                    <div className="flex flex-col justify-center h-full mt-20">
                        <h2 className="text-5xl text-gray-700 font-bold w-[600px]">
                            Seu sorriso, <span className="text-orange-500">nossa prioridade</span>
                        </h2>
                        <p className="text-lg text-gray-500 mt-4 w-[500px]">
                            Cuidamos do seu sorriso com tratamentos modernos, equipe especializada e ambiente acolhedor para toda família.
                        </p>
                        <button className="mt-6 w-50 gap-2 p-3 bg-orange-500 text-white rounded-2xl cursor-pointer hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                            Agendar Consulta
                        </button>


                        <div className="flex items-center gap-2 mt-6">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="/tutor2.jpg"
                                alt="cliente"
                            />
                            <img
                                className="w-10 h-10 rounded-full "
                                src="/depoimento2.jpg" alt="homem-depoimento" />

                            <p className="text-gray-500">+1000 sorrisos transformados</p>


                        </div>

                    </div>


                    <div>
                        <img className="h-[400px] mt-20 object-contain rounded-2xl" src="/Dentista.png" alt="Dentista" />
                    </div>
                </div>
            </section>


        </>
    );
}