// Type declarations for modules without type definitions
// Framer Motion type declarations
import type * as React from 'react'

declare module 'react/jsx-runtime'

declare module 'framer-motion' {
  export interface HTMLMotionProps<T extends HTMLElement>
    extends React.HTMLAttributes<T> {
    initial?: any
    animate?: any
    exit?: any
    variants?: any
    transition?: any
    whileHover?: any
    whileTap?: any
    whileFocus?: any
    whileInView?: any
    whileDrag?: any
    viewport?: any
    drag?: any
    dragConstraints?: any
    dragElastic?: any
    dragMomentum?: any
    dragTransition?: any
    dragControls?: any
    dragListener?: boolean
    onDrag?: any
    onDragStart?: any
    onDragEnd?: any
    onUpdate?: any
    onAnimationStart?: any
    onAnimationComplete?: any
    style?: any
  }

  export interface MotionProps {
    initial?: any
    animate?: any
    exit?: any
    variants?: any
    transition?: any
    whileHover?: any
    whileTap?: any
    whileFocus?: any
    whileInView?: any
    whileDrag?: any
    viewport?: any
    style?: any
  }

  type Motion = {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      HTMLMotionProps<HTMLElementTagNameMap[K]> &
        React.RefAttributes<HTMLElementTagNameMap[K]>
    >
  }

  export const motion: Motion
}

// Declare image file types
declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}
