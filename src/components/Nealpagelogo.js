import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-web';

export default function Nealpagelogo() {

    const container = useRef(null)

    useEffect(() => {
        let npLogo = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: require('../img/nealpage.json')
        })

        npLogo.addEventListener('complete', () => console.log('animation is done'))
    }, [])
    return (
        <div className="container" ref={container}></div>
    )
}
