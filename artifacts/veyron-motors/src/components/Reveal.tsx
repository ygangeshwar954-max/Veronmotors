import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  /** Apply perspective wrapper for 3D tilt effect */
  tilt?: boolean;
  /** Stagger children instead of animating as one block */
  stagger?: boolean;
  threshold?: number;
}

function getInitial(direction: Direction, distance: number) {
  return {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    rotateX: direction === 'up' || direction === 'down' ? 10 : 0,
    scale: 0.96,
  };
}

const visible = {
  opacity: 1,
  y: 0,
  x: 0,
  rotateX: 0,
  scale: 1,
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 52,
  className,
  tilt = true,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: '0px 0px -40px 0px',
  });

  return (
    <div
      ref={ref}
      className={className}
      style={tilt ? { perspective: '1100px', perspectiveOrigin: '50% 60%' } : undefined}
    >
      <motion.div
        initial={getInitial(direction, distance)}
        animate={inView ? visible : getInitial(direction, distance)}
        transition={{ duration, delay, ease: EASE }}
        style={tilt ? { transformStyle: 'preserve-3d' } : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Reveal each child with a staggered 3D entrance */
export function StaggerReveal({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.75,
  direction = 'up',
  distance = 44,
  className,
  threshold = 0.08,
}: Omit<RevealProps, 'tilt' | 'stagger'> & { staggerDelay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold, margin: '0px 0px -40px 0px' });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
  };

  const item = {
    hidden: getInitial(direction, distance),
    visible: { ...visible, transition: { duration, ease: EASE } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={{ perspective: '1100px', perspectiveOrigin: '50% 60%' }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item} style={{ transformStyle: 'preserve-3d' }}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item} style={{ transformStyle: 'preserve-3d' }}>{children}</motion.div>}
    </motion.div>
  );
}
