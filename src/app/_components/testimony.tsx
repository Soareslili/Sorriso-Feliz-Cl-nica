
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaRegCommentDots } from 'react-icons/fa';



type Testimonial = {
  name: string;
  specialty: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Maria Silva',
    specialty: 'Ortodontia',
    message:
      'Sempre tive medo de dentistas, mas a equipe da Sorriso Feliz me deixou super à vontade. Meu tratamento ortodôntico foi tranquilo e o resultado final superou minhas expectativas!',
  },
  {
    name: 'João Oliveira',
    specialty: 'Clareamento Dental',
    message:
      'Fiz um clareamento dental e o resultado foi incrível! Atendimento impecável, profissionais atenciosos e ambiente super acolhedor. Recomendo a todos!',
  },
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
  }
];

export function Testimony() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#414770]">Depoimentos</h2>
        <p className="text-gray-600 mt-2">
          Veja o que nossos pacientes estão dizendo sobre suas experiências na Sorriso Feliz Clínica.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 shadow-md border h-full flex flex-col justify-between">
                <FaRegCommentDots className="text-[#F46036] text-3xl mb-4" />
                <p className="italic text-gray-700 mb-6">"{testimonial.message}"</p>
                <div>
                  <h4 className="text-[#414770] font-semibold">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.specialty}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
