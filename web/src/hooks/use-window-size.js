// reference: https://usehooks.com/useWindowSize/

import {useState} from 'react'

import {useMount} from './use-mount'

export const useWindowSize = () => {
  const isClient = typeof window === 'object'
  const [windowSize, setWindowSize] = useState(getSize)

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  useMount(() => {
    if (!isClient) return false

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return windowSize
}
