async function init() {
  // import all your functions/code there
  console.log('Itay')
}

if (document.readyState === 'complete') {
  init()
} else {
  window.addEventListener('load', init)
}
