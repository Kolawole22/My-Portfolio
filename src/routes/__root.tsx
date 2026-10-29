import { Outlet, createRootRoute } from '@tanstack/react-router'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Header />
        <Outlet />
      </MotionConfig>
    </LazyMotion>
  ),
})
