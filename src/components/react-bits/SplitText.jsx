import { useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const SplitText = ({
    children,
    className = "",
    delay = 100,
    animationFrom = { opacity: 0, scale: 0.5, y: 50 },
    animationTo = { opacity: 1, scale: 1, y: 0 },
    easing = "easeOut",
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    onLetterAnimationComplete,
}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef();

    // Safeguard: Ensure children is a string
    const textContent = typeof children === 'string' ? children : String(children || "");
    const words = textContent.split(" ").map((word) => word.split(""));

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

    return (
        <div ref={ref} className={`split-parent overflow-hidden inline-block ${className}`} style={{ textAlign }}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                    {word.map((letter, letterIndex) => {
                        const index = words
                            .slice(0, wordIndex)
                            .reduce((acc, w) => acc + w.length, 0) + letterIndex;

                        return (
                            <motion.span
                                key={index}
                                initial={animationFrom}
                                animate={inView ? animationTo : animationFrom}
                                transition={{
                                    duration: 0.5,
                                    delay: (delay + index * 30) / 1000,
                                    ease: easing,
                                }}
                                onAnimationComplete={() => {
                                    if (index === words.flat().length - 1 && onLetterAnimationComplete) {
                                        onLetterAnimationComplete();
                                    }
                                }}
                                style={{ display: "inline-block", willChange: "transform, opacity" }}
                            >
                                {letter}
                            </motion.span>
                        );
                    })}
                    <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>
                </span>
            ))}
        </div>
    );
};
