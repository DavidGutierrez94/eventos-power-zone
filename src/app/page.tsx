import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Image from "next/image";

import Link from "next/link";
const images = [
  "/images/633167.jpg",
  "/images/633168.jpg",
  "/images/632884.jpg",
  "/images/633045.jpg",
];
const images_deco = [
  "/images/633049.jpg",
  "/images/633076.jpg",
  "/images/633046.jpg",
  "/images/632899.jpg",
];

export default function HomePage() {
  return (
    <main className="bg-primary grid col-auto ">
      <Hero />
      <div id="about" className="md:min-h-[100vh] py-16">
        <h1 className="text-center text-4xl font-bold text-base-100 pb-16 sm:text-8xl">
          Nosotros
        </h1>
        <div className="flex flex-wrap gap-4 items-center px-8 sm:px-32">
          <div className=" flex-1 card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/633044.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>
            <div className="card-body text-justify text-base-content py-4">
              <h2 className="text-success font-bold text-4xl"> Experiencia </h2>
              <p className="text-sm sm:text-xl">
                Somos una empresa dedicada a la organización de eventos sociales
                y empresariales, con más de 6 años de experiencia en el mercado,
                ofreciendo un servicio de calidad y compromiso con nuestros
                clientes.
              </p>
            </div>
          </div>

          <div className="flex-1 card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/632900.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>
            <div className="card-body text-justify text-base-content py-4">
              <h2 className="text-success font-bold text-4xl">Servicio</h2>
              <p className="text-sm sm:text-xl ">
                Profesionales en la organización y planeación de eventos
                empresariales, sociales e institucionales, brindando un
                excelente y completo servicio, con calidad, innovación y de
                acuerdo al gusto del cliente, con seriedad, cumplimiento y
                garantizando una ocasion inolvidable.
              </p>
            </div>
          </div>
          <div className="flex-1 card bg-base-100 shadow-xl ">
            <figure>
              <img
                src="/images/633160.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>

            <div className="card-body text-justify text-base-content py-4">
              <h2 className="text-success font-bold text-4xl">Calidad</h2>
              <p className="text-sm sm:text-xl ">
                En nuestros más de 6 años de experiencia, hemos logrado entregar
                a nuestros clientes eventos de calidad, con un excelente
                servicio y atención, logrando que cada evento sea un recuedo
                memorable tanto para nuestros clientes como sus invitados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="events" className="md:min-h-[100vh]">
        <h2 className="text-center text-4xl font-bold text-base-100 pb-32 sm:text-8xl">
          Eventos
        </h2>
        <Carousel images={images} />
      </div>
      <div id="alquiler" className="md:min-h-[100vh]">
        <h2 className="text-center text-4xl font-bold text-base-100 py-16 sm:text-8xl">
          Alquileres
        </h2>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-2 card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/633162.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-success font-bold text-4xl">Inflables</h2>
              <p className="text-sm sm:text-xl">
                Inflables de diferentes tamaños y estilos para eventos
                infantiles, sociales y empresariales.
              </p>
            </div>
          </div>
          <div className="col-start-4 col-span-2 card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/632899.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-success font-bold text-4xl">
                Sillas y mesas
              </h2>
              <p className="text-sm sm:text-xl">
                Sillas y mesas de diferentes estilos y tamaños para eventos
                sociales y empresariales.
              </p>
            </div>
          </div>
          <div className="col-start-2 col-span-2 card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/632876.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-success font-bold text-4xl">Carpas</h2>
              <p className="text-sm sm:text-xl">
                Carpas de diferentes tamaños y estilos para eventos sociales y
                empresariales.
              </p>
            </div>
          </div>
          <div className="col-start-4 col-span-2 card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/633205.jpg"
                alt="Event"
                className="h-96 w-full object-cover"
              ></img>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-success font-bold text-4xl">Estaciones de Cafe</h2>
              <p className="text-sm sm:text-xl">
                Estaciones de café para eventos sociales y empresariales.
       
              </p>
            </div>
          </div>
        </div>

      </div>
      <div id="decoration" className="md:min-h-[100vh]">
        <h2 className="text-center text-4xl font-bold text-base-100 py-16 sm:text-8xl">
          Decoración
        </h2>
        <Carousel images={images_deco} />
      </div>
    </main>
  );
}
