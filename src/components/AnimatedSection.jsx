import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AnimatedWrapper = styled(Box)(({ theme, isVisible, direction = 'right' }) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible
        ? 'translate(0)'
        : direction === 'right'
            ? 'translateX(100px)'
            : direction === 'left'
                ? 'translateX(-100px)'
                : direction === 'center'
                    ? 'scale(0.8)'
                    : 'translateY(50px)',
    transition: 'all 1s ease-out',
}));

const AnimatedSection = ({ children, direction = 'right', threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: threshold,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [threshold]);

    return (
        <AnimatedWrapper ref={sectionRef} isVisible={isVisible} direction={direction}>
            {children}
        </AnimatedWrapper>
    );
};

export default AnimatedSection; 