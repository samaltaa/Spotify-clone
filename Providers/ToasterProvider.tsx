'use client';
import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
    return(
        <Toaster
            toastOptions={{
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }}
            reverseOrder={false}
        />
    )
};

export default ToasterProvider;