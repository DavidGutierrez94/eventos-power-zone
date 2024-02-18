import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Image from "next/image";

import Link from "next/link";
const images = [
  "https://dummyimage.com/500x500/aaa/fff.png&text=demo",
  "https://dummyimage.com/500x500/aaa/fff.png&text=demo",
  "https://dummyimage.com/500x500/aaa/fff.png&text=demo",
  "https://dummyimage.com/500x500/aaa/fff.png&text=demo",
  // Agrega más imágenes según sea necesario
];

export default function HomePage() {
  return (
    <main className="bg-primary">
      <Hero />
      <h1 className="text-center text-8xl font-bold text-base-100 py-16">
        Nosotros
      </h1>
      <div className="flex gap-4 items-center px-32">
        <div className=" flex-auto card w-96 h-96 bg-base-100 shadow-xl p-4">
          <div className="card-body text-justify text-base-content text-2xl">
            <h2 className="text-success font-bold text-4xl">Experiencia </h2>
            <p>
              Somos una empresa dedicada a la organización de eventos sociales y
              empresariales, con más de 6 años de experiencia en el mercado,
              ofreciendo un servicio de calidad y compromiso con nuestros
              clientes.
            </p>
          </div>
        </div>

        <div className="flex-auto card w-96 h-96 bg-base-100 shadow-xl p-4">
          <div className="card-body text-justify text-base-content text-2xl">
            <h2 className="text-success font-bold text-4xl">Servicio</h2>
            <p className="text-justify text-base-content ">
              Profesionales en la organización y planeación de eventos
              empresariales, sociales e institucionales, brindando un excelente
              y completo servicio, con calidad, innovación y de acuerdo al gusto
              del cliente, con seriedad, cumplimiento y garantizando una ocasion
              inolvidable.
            </p>
          </div>
        </div>
        <div className="flex-auto card w-96 h-96 bg-base-100 shadow-xl p-4">
          <div className="card-body text-justify text-base-content text-2xl">
            <h2 className="text-success font-bold text-4xl">Calidad</h2>
            <p className="text-justify text-base-content text-2xl">
              En nuestros más de 6 años de experiencia, hemos logrado entregar a nuestros clientes eventos de calidad, con un excelente servicio y atención, logrando que cada evento sea único e inolvidable.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-center text-8xl font-bold text-base-100 py-16">
        Eventos
      </h2>
      <Carousel images={images} />
    </main>
  );
}
