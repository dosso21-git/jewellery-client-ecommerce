import React, { useState } from 'react';

const ProductMagnifier = ({ yourphoto }) => {
    const magnifierHeight = 200;
    const magnifierWidth = 200;
    const zoomLevel = 2.5;
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);

    return (
        <div className='container mx-auto px-10 lg:px-0 py-10'>
            <div className="relative h-full w-full">
                <img
                    src={yourphoto}
                    className="h-[400px] w-[400px] object-cover"
                    onMouseEnter={(e) => {
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setImgWidth(width);
                        setImgHeight(height);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                        setShowMagnifier(false);
                    }}
                    alt="Product"
                />

                {showMagnifier && (
                    <div
                        className="absolute pointer-events-none border border-gray-200 bg-white"
                        style={{
                            height: `${magnifierHeight}px`,
                            width: `${magnifierWidth}px`,
                            top: `${y - magnifierHeight / 2}px`,
                            left: `${x - magnifierWidth / 2}px`,
                            backgroundImage: `url('${yourphoto}')`,
                            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductMagnifier;





// import React, { useState } from 'react';

// const ProductMagnifier = ({ yourphoto }) => {
//     const magnifierHeight = 200;
//     const magnifierWidth = 200;
//     const zoomLevel = 2.5;
//     const [imgWidth, setImgWidth] = useState(0);
//     const [imgHeight, setImgHeight] = useState(0);
//     const [showMagnifier, setShowMagnifier] = useState(false);
//     const [[x, y], setXY] = useState([0, 0]);

//     return (
//         <div
//         style={{ width: "100%", height: "100%" }}
//         className='container mx-auto px-10 lg:px-0 py-10 flex'>
//             <div className="relative">
//                 <img
//                     src={yourphoto}
//                     className="h-full w-full object-cover"
//                     onMouseEnter={(e) => {
//                         const elem = e.currentTarget;
//                         const { width, height } = elem.getBoundingClientRect();
//                         setImgWidth(width);
//                         setImgHeight(height);
//                         setShowMagnifier(true);
//                     }}
//                     onMouseMove={(e) => {
//                         const elem = e.currentTarget;
//                         const { top, left } = elem.getBoundingClientRect();
//                         const x = e.pageX - left - window.pageXOffset;
//                         const y = e.pageY - top - window.pageYOffset;
//                         setXY([x, y]);
//                     }}
//                     onMouseLeave={() => {
//                         setShowMagnifier(false);
//                     }}
//                     alt="Product"
//                 />
//             </div>

//             {showMagnifier && (
//                 <div
//                     className="absolute pointer-events-none border border-gray-200 bg-white"
//                     style={{
//                         height: `${magnifierHeight}px`,
//                         width: `${magnifierWidth}px`,
//                         marginLeft: '20px', // Space between the image and magnifier
//                         top: `${y - magnifierHeight / 2}px`,
//                         backgroundImage: `url('${yourphoto}')`,
//                         backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
//                         backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
//                         backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// export default ProductMagnifier;
