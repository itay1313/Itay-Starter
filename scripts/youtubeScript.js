export function youtubePlayerLoader() {
  const video = document.querySelector('iframe.video')
  const videoDataSrc = video.getAttribute('data-src')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('is entering')
        video.setAttribute('src', videoDataSrc)
      }
    })
  })
  observer.observe(video)
}
