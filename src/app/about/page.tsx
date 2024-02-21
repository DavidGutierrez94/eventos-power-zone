import React from 'react';

export default function Page(){
    return (
        <div id="about" className="md:min-h-[100vh] py-16 bg-primary">
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
    );
};

