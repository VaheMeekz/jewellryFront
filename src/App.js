import React from 'react';
import RouteBuilder from "./Config/routeBuilder";

//style
import css from "./Components/Home/home.module.css";

// particle
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";



function App() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };
    return (

        <>
            <Particles
                className={css.particles}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 80,

                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: false,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 300,
                                duration: 0.8,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#AE8625",
                        },
                        links: {
                            color: "#AE8625",
                            distance: 250,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            "value": 0.4,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        shape: {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        size: {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false,
                            },
                        },
                        detectRetina: true,
                    }}}
            />

        <div className={css.all}>
            <RouteBuilder/>
        </div>
        </>
    );
}

export default App;
