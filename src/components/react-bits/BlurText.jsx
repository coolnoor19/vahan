import { useRef, useState, useEffect } from "react";
import { useSpring, motion } from "framer-motion";

export const BlurText = ({
    text = "",
    delay = 200,
    className = "",
    animateBy = "words", // 'words' or 'letters'
    direction = "top", // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = "-50px",
    animationFrom,
    animationTo,
    easing = "easeOut",
    onAnimationComplete,
}) => {
    // Safeguard: Ensure text is valid string
    const validText = typeof text === 'string' ? text : String(text || "");
    const elements = animateBy === "words" ? validText.split(" ") : validText.split("");
    const [inView, setInView] = useState(false);
    const ref = useRef();

    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
        direction === "top"
            ? { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,-50px,0)" }
            : { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,50px,0)" };

    const defaultTo = [
        {
            filter: "blur(5px)",
            opacity: 0.5,
            transform: direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
        },
        { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springTransition = (index) => ({
        duration: 0.8, // Simplified duration
        delay: (delay + index * 100) / 1000,
        ease: easing
    });

    return (
        <p ref={ref} className={`flex flex-wrap ${className}`}>
            {elements.map((element, index) => (
                <motion.span
                    key={index}
                    initial={animationFrom || defaultFrom}
                    animate={inView ? (animationTo || defaultTo) : (animationFrom || defaultFrom)}
                    transition={springTransition(index)}
                    onAnimationComplete={() => {
                        animatedCount.current += 1;
                        if (animatedCount.current === elements.length && onAnimationComplete) {
                            onAnimationComplete();
                        }
                    }}
                    className={`inline-block ${animateBy === "words" ? "mr-1.5" : ""}`} // spacing for words
                >
                    {element === " " ? "\u00A0" : element}
                </motion.span>
            ))}
        </p>
    );
};
