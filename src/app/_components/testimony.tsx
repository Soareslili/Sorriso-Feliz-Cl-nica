
'use client';

import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaRegCommentDots } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  name: string;
  specialty: string;
  message: string;
};

const testimonials: Testimonial[] = [
 
  
  {
    name: 'Ana Carolina',
    specialty: 'Implantes',
    message:
      'Coloquei implantes dentários e recuperei não só meus dentes, mas minha autoestima. Toda a equipe é muito competente e o doutor é um verdadeiro artista!',
  },
  {
    name: 'Paulo Mendes',
    specialty: 'Odontopediatria',
    message:
      'Meu filho sempre teve medo de dentista, mas após a primeira consulta na Sorriso Feliz, ele pede para voltar! Ambiente incrível para crianças e profissionais super pacientes.',
  },
  {
    name: 'Fernanda Costa',
    specialty: 'Estética Dental',
    message:
      'Fiz facetas de porcelana e estou apaixonada pelo meu sorriso! Atendimento excelente e resultados incríveis. A Sorriso Feliz é realmente uma clínica diferenciada.',
  },
  {
    name: 'Ricardo Almeida',
    specialty: 'Ortodontia',
    message:
      'Minha experiência com o tratamento ortodôntico foi excepcional. Profissionais dedicados e sempre prontos para esclarecer minhas dúvidas. Meu sorriso nunca esteve tão bonito!',
  },
  {
    name: 'Mariana Silva',
    specialty: 'Tratamento de Canal',
    message:
      'Tinha muito medo de fazer um tratamento de canal, mas a equipe da Sorriso Feliz me deixou super confortável. O procedimento foi rápido e indolor. Super recomendo!',
  },
  {
    name: 'Lucas Pereira',
    specialty: 'Limpeza Dental',
    message:
      'A limpeza dental foi feita com muito cuidado e atenção. Senti uma diferença enorme na saúde dos meus dentes e gengivas. Profissionais muito competentes!',
  },
  {
    name: 'Juliana Santos',
    specialty: 'Próteses Dentárias',
    message:
      'Coloquei próteses dentárias e estou muito satisfeita com o resultado. A equipe é super atenciosa e o ambiente é muito agradável. Recomendo a todos!',
  },
];

export function Testimony() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id='depoimento' className=" bg-white mb-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#414770]">Depoimentos</h2>
        <p className="text-gray-600 mt-2">
          Veja o que nossos pacientes estão dizendo sobre suas experiências na Sorriso Feliz Clínica.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
      
        <button
          className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-2 top-1/2 -translate-y-1/2 z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          className="cursor-pointer bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-2 top-1/2 -translate-y-1/2 z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

       
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] bg-white rounded-xl p-6 shadow-md border flex flex-col justify-between"
                key={index}
              >
                <FaRegCommentDots className="text-[#F46036] text-3xl mb-4" />
                <p className="italic text-gray-700 mb-6">"{testimonial.message}"</p>
                <div>
                  <h4 className="text-[#414770] font-semibold">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}