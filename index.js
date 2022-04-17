import { youtubePlayerLoader } from './scripts/youtubeScript'

async function init() {
  // import all your functions/code there

  youtubePlayerLoader()
}

if (document.readyState === 'complete') {
  init()
} else {
  window.addEventListener('load', init)
}
