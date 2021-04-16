window.addEventListener('load', () => {
  let checkValidator = setInterval(() => {
    if (typeof jQuery.validator === 'function') {
      const mysource = '/webapp-signup/resources/js/additional-methods.js'
      const script = document.createElement('script')
      clearInterval(checkValidator)
      script.src = mysource
      document.head.appendChild(script)
    }
  }, 100)
})
