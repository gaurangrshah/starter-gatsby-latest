import { useState, useEffect, useRef } from "react"

// Hook
export function useOnScreen(ref, rootMargin = "0px", root = null) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = useRef(null)
  console.log("🐞 ref", ref)
  useEffect(() => {
    if (observer.current) observer.current.unobserve(ref.current)
    console.log("🐞 observer.current", observer.current)
    // if (isIntersecting) return
    observer.current = new IntersectionObserver(
      // Update our state when observer callback fires
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        // Intersection Observer api Options
        root,
        rootMargin,
        // threshold,
      }
    )
    // grab reference to actual current observer instance
    const { current: currentObserver } = observer
    console.log("🐞 currentObserver", currentObserver)
    if (ref.current && !observer.current) {
      // observe dom node
      currentObserver.observe(ref.current)
    }
    return () => {
      // stop observing dom node
      currentObserver.disconnect()
    }
  }, [ref, rootMargin]) // Empty array ensures that effect is only run on mount and unmount

  useEffect(() => {
    // extract a reference to the current property to ensure most current instance of the observer
    // const { current: currentObserver } = observer
    // if (ref.current && currentObserver && isIntersecting)
    //   currentObserver.unobserve(ref.current)
    // return () => null
    ref.current && console.log("isIntersecting", isIntersecting)
  }, [isIntersecting])

  return isIntersecting
}
