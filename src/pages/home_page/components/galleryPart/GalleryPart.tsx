import * as React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "./style/style.css"

const GalleryPart = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return <div id='galleryPart'>
        <Particles id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: -1,
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 400,
                    },
                    size: {
                        anim: {
                            enable: true,
                            speed: 1,
                            size_min: 0.3,
                        },
                        value: 3,
                        random: true,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 0.3,
                            opacity_min: 0.1,
                        },
                        value: 0.6,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 0.2,
                    },
                },
                detectRetina: true,
            }} />
    </div>
}

export default GalleryPart