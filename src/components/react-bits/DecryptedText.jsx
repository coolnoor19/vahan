import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

export const DecryptedText = ({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = "start",
    useOriginalCharsOnly = false,
    characters = letters,
    className = "",
    encryptedClassName = "",
    parentClassName = "",
    animateOn = "hover", // 'view' or 'hover'
    ...props
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const [revealedIndices, setRevealedIndices] = useState(new Set());
    const intervalRef = useRef(null);
    const stopTimeoutRef = useRef(null);

    useEffect(() => {
        let interval;
        if (isScrambling) {
            interval = setInterval(() => {
                setDisplayText((prevText) => {
                    if (sequential) {
                        if (revealedIndices.size < text.length) {
                            const nextIndex = getNextIndex(revealedIndices);
                            const newRevealed = new Set(revealedIndices);
                            newRevealed.add(nextIndex);
                            setRevealedIndices(newRevealed);
                            return shuffleText(
                                text,
                                newRevealed,
                                useOriginalCharsOnly,
                                characters
                            );
                        } else {
                            clearInterval(interval);
                            setIsScrambling(false);
                            return text;
                        }
                    } else {
                        return shuffleText(
                            text,
                            revealedIndices,
                            useOriginalCharsOnly,
                            characters
                        );
                    }
                });
            }, speed);
        }
        return () => clearInterval(interval);
    }, [
        isScrambling,
        revealedIndices,
        sequential,
        text,
        speed,
        useOriginalCharsOnly,
        characters,
    ]);

    useEffect(() => {
        if (animateOn === "view") {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !isScrambling) {
                            // Start a new cycle when it first comes into view.
                            setRevealedIndices(new Set());
                            setIsScrambling(true);

                            // In non-sequential mode, scrambling would run forever unless we stop it.
                            if (!sequential) {
                                if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
                                stopTimeoutRef.current = setTimeout(() => {
                                    setIsScrambling(false);
                                    setDisplayText(text);
                                }, maxIterations * speed);
                            }
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (intervalRef.current) observer.observe(intervalRef.current);

            return () => {
                if (intervalRef.current) observer.unobserve(intervalRef.current);
                if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
            };
        }
    }, [animateOn, isScrambling, maxIterations, sequential, speed, text]);

    const getNextIndex = (revealedSet) => {
        const textLength = text.length;
        switch (revealDirection) {
            case "start":
                return revealedSet.size;
            case "end":
                return textLength - 1 - revealedSet.size;
            case "center": {
                const middle = Math.floor(textLength / 2);
                const offset = Math.floor(revealedSet.size / 2);
                const nextIndex =
                    revealedSet.size % 2 === 0
                        ? middle + offset
                        : middle - offset - 1;

                if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                    return nextIndex;
                }

                for (let i = 0; i < textLength; i++) {
                    if (!revealedSet.has(i)) return i;
                }
                return 0;
            }
            default:
                return revealedSet.size;
        }
    };

    const shuffleText = (originalText, revealedSet, useOriginalChars, charSet) => {
        return originalText
            .split("")
            .map((char, i) => {
                if (char === " ") return " ";
                if (revealedSet.has(i)) return originalText[i];

                if (useOriginalChars) {
                    const possibleChars = originalText.split("").filter(c => c !== " ");
                    return possibleChars[Math.floor(Math.random() * possibleChars.length)];
                }

                return charSet[Math.floor(Math.random() * charSet.length)];
            })
            .join("");
    };

    const handleMouseEnter = () => {
        if (animateOn === "hover") {
            setIsScrambling(true);
            if (!sequential) {
                setTimeout(() => {
                    setIsScrambling(false);
                    setDisplayText(text);
                }, maxIterations * speed);
            }
            setRevealedIndices(new Set());
        }
    };

    return (
        <span
            ref={intervalRef}
            className={parentClassName}
            onMouseEnter={handleMouseEnter}
            {...props}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
};
