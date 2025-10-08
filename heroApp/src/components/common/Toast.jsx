import React, { useEffect } from 'react';

const Toast = ({ message, show, onDismiss, type = 'success' }) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onDismiss();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onDismiss]);

    return (
        <div className={`fixed top-5 right-5 transition-transform duration-300 ${show ? 'translate-x-0' : 'translate-x-full'} ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`}>
            {message}
        </div>
    );
};

export default Toast;