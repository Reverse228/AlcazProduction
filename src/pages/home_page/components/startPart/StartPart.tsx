import * as React from 'react';
import Particles from 'react-tsparticles';
import AnimationText from './animationText/AnimationText';
import { loadFull } from "tsparticles";
import logoVideo from "../../../../environment/video/logoVideo.mp4"
import './style/style.css'

const StartPart = () => {
    const [pageLoad, setPageLoad] = React.useState(false)
    const [appearVideo, setAppearVideo] = React.useState(false)
    const [appearParticles, setAppearParticles] = React.useState(false)

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    React.useEffect(() => {
        if (pageLoad) {
            const appearVideoCheck = setTimeout(() => {
                setAppearVideo(true)
                setAppearParticles(true)
            }, 500)

            return () => clearTimeout(appearVideoCheck)
        }
    }, [pageLoad])

    return <div id='startPart'>
        <div id='content'>
            <div id='animationTextContainer' style={{ transform: `translate(${pageLoad ? 0 : 50}%, 25%)` }}>
                <AnimationText setPageLoad={setPageLoad} />
            </div>
            {appearVideo && <div id='videoContainer'>
               <video src={logoVideo} id="video" autoPlay controls ></video>
            </div>}
        </div>
        {appearParticles && <Particles id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: -1,
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 200,
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
        }

    </div>
}

export default StartPart