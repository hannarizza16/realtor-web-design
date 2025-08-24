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

// this handles the useEffect or effect of animation ease in and out when scrolled down and when the target element is visible in the screen 
// by using thresh0ld 0 or  1 
// 1 being the 100% of the element and 0 is like 0.01px of the element is visible run the effect