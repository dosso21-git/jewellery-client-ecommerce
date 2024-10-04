import React from 'react';
import Lottie from 'lottie-react';
import successAnimation from './couponSuccess.json'; // Replace with your animation file

const CouponPopup = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className=" p-6 rounded-lg shadow-lg text-center">
                <Lottie animationData={successAnimation} loop={false} style={{ width: 250, height: 250 }} />
                <h2 className="mt-4 text-lg font-semibold text-white">Coupon applied successfully!</h2>
            </div>
        </div>
    );
};

export default CouponPopup;
