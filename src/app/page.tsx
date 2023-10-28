import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import Image from 'next/image'

import Link from 'next/link'
const images = [
    'https://dummyimage.com/500x500/aaa/fff.png&text=demo',
    'https://dummyimage.com/500x500/aaa/fff.png&text=demo',
    'https://dummyimage.com/500x500/aaa/fff.png&text=demo',
    'https://dummyimage.com/500x500/aaa/fff.png&text=demo',
    // Agrega más imágenes según sea necesario
]

export default function HomePage() {
    return (
        <main className="bg-secondary">
            <Hero />
            <h1 className="text-center text-4xl font-bold text-primary p-8">
                Nosotros
            </h1>
            <div className="lg:grid grid-rows-4 grid-flow-col gap-4 sm:col-auto">
                <div className="row-span-2 col-start-2 row-start-2 card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-justify text-base-content text-2xl">
                        <h2 className="text-success">Experiencia </h2>
                        <p>
                            Somos una empresa dedicada a la organización de
                            eventos sociales y empresariales, con más de 6 años
                            de experiencia en el mercado, ofreciendo un servicio
                            de calidad y compromiso con nuestros clientes.
                        </p>
                    </div>
                </div>

                <div className="ml-36 row-span-2 card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-justify text-base-content text-2xl">
                        <h2 className="text-success">Servicio</h2>
                        <p className="text-justify text-base-content text-2xl">
                            Profesionales en la organización y planeación de
                            eventos empresariales, sociales e institucionales,
                            brindando un excelente y completo servicio, con
                            calidad, innovación y de acuerdo al gusto del
                            cliente, con seriedad, cumplimiento y garantizando
                            una ocasion inolvidable.
                        </p>
                    </div>
                </div>
                <div className="relative row-span-4 artboard phone-4">
                    <Image
                        src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="logo"
                        placeholder="blur"
                        blurDataURL="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        fill
                        style={{
                            borderRadius: '1rem',
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </div>

            <h2 className="text-center text-4xl font-bold text-primary p2">
                Eventos
            </h2>
            <Carousel images={images} />
        </main>
    )
}
