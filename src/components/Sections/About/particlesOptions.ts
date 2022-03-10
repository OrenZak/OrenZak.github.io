import { ParticlesProps } from 'react-tsparticles';
const options: ParticlesProps['params'] = {
    fullScreen: {
        enable: false,
        zIndex: 0
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onDiv: {
                selectors: "#repulse-div",
                mode: "repulse"
            },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    force: 60
                }
            }
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            grab: {
                distance: 400
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: {
                value: "#000"
            },
            distance: 150,
            opacity: 0.4
        },
        move: {
            attract: {
                rotate: {
                    x: 600,
                    y: 1200
                }
            },
            enable: true,
            outModes: 'out'
        },
        number: {
            density: {
                enable: true
            },
            value: 20
        },
        opacity: {
            random: {
                enable: true,
                minimumValue: 0.5
            },
            value: {
                min: 0.1,
                max: 1
            },
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.2
            }
        },
        rotate: {
            random: {
                enable: true,
                minimumValue: 0.5
            },
            animation: {
                enable: true,
                speed: 5
            },
            direction: "random"
        },
        shape: {
            options: {
                character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400"
                },
                char: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400"
                },
                polygon: {
                    sides: 10
                },
                star: {
                    sides: 10
                },
                image: [
                    {
                        src: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-healthy-information-5.png",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://seeklogo.com/images/K/kotlin-logo-30C1970B05-seeklogo.com.png",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                        width: 32,
                        height: 32
                    }
                    ,
                    {
                        src: "https://cdn-icons.flaticon.com/png/512/2542/premium/2542638.png?token=exp=1644504737~hmac=762fa277ce703967e72a40e0e9c9769e",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://www.vectorlogo.zone/logos/java/java-vertical.svg",
                        width: 32,
                        height: 51
                    }
                ],
                images: [
                    {
                        src: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-healthy-information-5.png",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://seeklogo.com/images/K/kotlin-logo-30C1970B05-seeklogo.com.png",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                        width: 32,
                        height: 32
                    },
                    {
                        src: "https://cdn-icons.flaticon.com/png/512/2542/premium/2542638.png?token=exp=1644504737~hmac=762fa277ce703967e72a40e0e9c9769e",
                        width: 32,
                        height: 32
                    }
                    ,
                    {
                        src: "https://www.vectorlogo.zone/logos/java/java-vertical.svg",
                        width: 32,
                        height: 51
                    }
                ]
            },
            type: "image"
        },
        size: {
            value: 16,
            animation: {
                speed: 40,
                minimumValue: 0.1
            }
        },
        stroke: {
            color: {
                value: "#000000",
                animation: {
                    h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true
                    },
                    s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true
                    },
                    l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        sync: true
                    }
                }
            }
        }
    }
}
export default options;