export function Contact() {
  return (
    <section className="py-16 px-4 bg-[#414770]">
      <div className="max-w-7xl mx-auto text-white flex flex-col items-center">
        <h2 id="contato" className="text-4xl font-semibold mb-4 text-center">Nosso Contato</h2>
        <p className="text-gray-400 mb-12 text-center">
          Estamos em um local de fácil acesso, com ambiente acolhedor e toda infraestrutura para seu conforto.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 w-full">
        
          <div className="flex flex-col gap-6 flex-1 text-left">
            <h3 className="text-2xl font-semibold">Venha nos Visitar</h3>

            <div className="flex gap-3 items-start">
              <svg className="text-orange-400 min-w-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              </svg>
              <p>Av. Paulista, 1000, Bela Vista <br />São Paulo - SP, 01310-100</p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="text-orange-400 min-w-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="12" x2="12" y2="8" />
                <line x1="12" y1="12" x2="16" y2="12" />
              </svg>
              <p>
                Segunda a Sexta: 8h às 14h <br />
                Sábado: 8h às 12h <br />
                Domingo: Fechado
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="text-orange-400 min-w-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.29a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.06.35 2.16.59 3.29.72A2 2 0 0 1 22 16.92z" />
              </svg>
              <p>
                (11) 5555-5555 <br />
                (11) 99999-9999
              </p>
            </div>

            <div>
              <p className="font-medium">Como chegar</p>
              <ul className="list-disc ml-5 text-gray-200 text-sm mt-1 space-y-1">
                <li>Estacionamento próprio</li>
                <li>Próximo à estação de metrô Trianon-Masp</li>
                <li>Várias linhas de ônibus na região</li>
              </ul>
            </div>
          </div>

         
          <div className="flex-1 w-full h-[300px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0790151430906!2d-46.995628914363515!3d-22.98412172557128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd7784e93c8d%3A0xaa9803c0a9513311!2sAv.%20Paulista%2C%201000%20-%20Jardim%20Paulista%2C%20Valinhos%20-%20SP%2C%2013276-340!5e0!3m2!1spt-BR!2sbr!4v1748442967181!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-lg shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
