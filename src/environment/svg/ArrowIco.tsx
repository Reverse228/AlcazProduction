import React from 'react'

type Props = {
    ac?: boolean
    type?: boolean
}

const ArrowIco: React.FC<Props> = ({ ac , type}) => {
    return <div className={ac ? `arrowSvg ${type ? "acComplex" : "acSimple"}`: `arrowSvg`}>
        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M10.295 10.2142C10.9662 9.54295 10.9662 8.45599 10.295 7.78654L2.95723 0.502765C2.27878 -0.168488 1.18194 -0.166688 0.503439 0.502765C-0.167813 1.17402 -0.167813 2.26 0.503439 2.93141L6.6221 9.0007L0.503439 15.0679C-0.167813 15.7392 -0.167813 16.8252 0.503439 17.4966C1.18189 18.167 2.27872 18.167 2.95723 17.4966L10.295 10.2142Z" fill="white" />
        </svg>
    </div>


}

export default ArrowIco