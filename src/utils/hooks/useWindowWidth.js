import {useLayoutEffect, useState} from "react";

export function useWindowWidth() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', function () {
            setTimeout(() => {
                updateSize()
            }, 1000)
        });
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}