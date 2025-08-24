import { useEffect, useRef, useState } from "react"

const useInView = (options) => {
    const ref = useRef(null);
    const [isInView, setisInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry], obs) => {
            if(entry.isIntersecting){
                setisInView(true);
                obs.unobserve(entry.target)
            }
        }, options)

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        };
    }, [options])

    return [ref, isInView];

}

export default useInView;

// intersectionObserver ginagamit to