import { useState, useEffect } from 'react'

export const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)

  useEffect(() => {
    if (!imageUrls.length) {
      setImagesLoaded(true)
      return
    }

    let loadedImages = 0
    const totalImages = imageUrls.length

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          loadedImages++
          setLoadedCount(loadedImages)
          resolve(url)
        }
        img.onerror = () => reject(url)
        img.src = url
      })
    }

    Promise.allSettled(imageUrls.map(preloadImage))
      .then(() => {
        setImagesLoaded(true)
      })

  }, [imageUrls])

  return { imagesLoaded, loadedCount, totalImages: imageUrls.length }
}