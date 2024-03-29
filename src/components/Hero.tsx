import React from 'react'


export default function Hero() {
    return (
        
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
        >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-center hero-content ">
                <div className="max-w-full">

                    <h1 className="mb-5 text-3xl font-bold sm:text-8xl">
                    Déjanos ayudarte a crear un evento inolvidable. {' '}
                    </h1>

                    <p className="mb-5 text-3xl text-info">
                    Alquileres, Eventos, Decoración y más...
                    </p>
                    <button className="btn btn-primary">Contactanos</button>
                </div>
            </div>
        </div>
    )
}
