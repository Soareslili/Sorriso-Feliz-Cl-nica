"use client";

import { useState } from "react";



export function Hero() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        
            <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[80px]">
                <div className="flex w-full max-w-7xl mx-auto items-center justify-between h-full px-4">

                    {/* Logo */}
                    <a className="text-orange-500 text-2xl font-bold" href="#inicio">
                        Sorriso Feliz <span className="text-lg text-gray-400">Clínica</span>
                    </a>

                    {/* Botão menu mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-3xl text-[#FF3385] focus:outline-none"
                        aria-label="Abrir menu"
                    >
                        &#9776;
                    </button>

                    {/* Menu Desktop */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <a className="text-gray-500 hover:text-orange-500 transition-colors duration-200" href="#tratamentos">Tratamentos</a>
                        <a className="text-gray-500 hover:text-orange-500 transition-colors duration-200" href="#depoimento">Depoimento</a>
                        <a className="text-gray-500 hover:text-orange-500 transition-colors duration-200" href="#contato">Contato</a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20doces&type=phone_number&app_absent=0"
                            className="p-2 bg-orange-500 text-white rounded-2xl cursor-pointer hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        >
                            Agendar Consulta
                        </a>
                    </nav>
                </div>

                {/* Menu Mobile */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 absolute w-full z-40 top-[80px] left-0">
                        <a onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500" href="#tratamentos">Tratamentos</a>
                        <a onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500" href="#depoimento">Depoimento</a>
                        <a onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500" href="#contato">Contato</a>
                        <a
                            onClick={() => setMenuOpen(false)}
                            href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20doces&type=phone_number&app_absent=0"
                            className="block bg-orange-500 text-white text-center py-2 rounded-2xl hover:bg-orange-600 transition-all duration-300 ease-in-out"
                        >
                            Agendar Consulta
                        </a>
                    </div>
                )}
            </header>
            );



            <section>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 mt-40 md:px-12">

                    <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
                        <h2
                            id="inicio"
                            className="text-5xl text-gray-700 font-bold max-w-xl md:text-5xl"
                        >
                            Seu sorriso, <span className="text-orange-500">nossa prioridade</span>
                        </h2>
                        <p className="text-lg text-gray-500 mt-4 max-w-md mx-auto md:mx-0">
                            Cuidamos do seu sorriso com tratamentos modernos, equipe especializada e ambiente acolhedor para toda família.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20doces&type=phone_number&app_absent=0"
                            className="mt-6 w-40 p-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 ease-in-out mx-auto md:mx-0"
                        >
                            Agendar Consulta
                        </a>

                        <div className="flex items-center gap-2 mt-6 justify-center md:justify-start">
                            <img className="w-10 h-10 rounded-full" src="/tutor2.jpg" alt="cliente" />
                            <img className="w-10 h-10 rounded-full" src="/depoimento2.jpg" alt="homem-depoimento" />
                            <p className="text-gray-500">+1000 sorrisos transformados</p>
                        </div>
                    </div>


                    <div className="flex justify-center hidden md:block md:w-1/2">
                        <img
                            className="h-[400px] object-contain rounded-2xl"
                            src="/Dentista.png"
                            alt="Dentista"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
