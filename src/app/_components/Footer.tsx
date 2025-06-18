import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <>
            <footer className="w-full text-white pt-16 pb-8 bg-[#100f3d]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="font-bold text-2xl mb-4 text-orange-500">
                                Sorriso Feliz <span className="text-gray-400">Clínica</span>
                            </h3>
                            <p className="text-gray-200 mb-4 max-w-sm">
                                Na nossa esmaltaria, cuidamos das suas mãos e pés com muito
                                carinho e dedicação, para que você se sinta linda(o) e confiante a cada visita.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" aria-label="Instagram">
                                    <svg className="text-white hover:text-pink-300 transition duration-300 hover:scale-110"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <svg className="text-white hover:text-pink-300 transition duration-300 hover:scale-110"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-white font-semibold text-xl mb-4">Horário de Funcionamento</h3>
                            <p>Segunda - Sexta: <span className="ml-2">9:00 - 19:00</span></p>
                            <p>Sábado: <span className="ml-2">9:00 - 18:00</span></p>
                            <p>Domingo: <span className="ml-2">Fechado</span></p>

                            <a href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20agendar%20um%20horário.!&type=phone_number&app_absent=0"
                                className="mt-4 inline-flex items-center bg-orange-500 hover:bg-orange-300 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                    <path d="M8 2v4" />
                                    <path d="M16 2v4" />
                                    <rect width="18" height="18" x="3" y="4" rx="2" />
                                    <path d="M3 10h18" />
                                    <path d="m9 16 2 2 4-4" />
                                </svg>
                                Agende seu horário
                            </a>
                        </div>


                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-white font-semibold text-xl mb-4">Contato</h3>
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-500">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2..." />
                                </svg>
                                <span>(11) 99999-8888</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-500">
                                    <path d="M22 4H2v16h20V4z" />
                                    <path d="M22 4l-10 7L2 4" />
                                </svg>
                                <span>contato@bellanails.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-500">
                                    <path d="M20 10c0 4.993-5.539 10.193..." />
                                </svg>
                                <span>Av. Paulista, 1000, São Paulo - SP</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto text-center mt-10 px-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Sorriso Feliz Clínica. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Desenvolvido por <a href="#" className="text-orange-500 hover:underline">Lidiane Santos - Desenvolvedora Front-End</a>
                    </p>
                </div>
            </footer>


            <a
                href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
                className="fixed bottom-4 right-4 z-[99] group"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="w-[50px] h-[50px] text-green-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute right-14 top-1 w-[140px] px-3 py-2 rounded-lg text-center text-sm font-medium bg-white text-green-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Conheça nossos Trabalho
                </span>
            </a>
        </>
    );
}
