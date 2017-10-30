const ModelViewer = require('metamask-logo')
const Reveal = require('./js/reveal.js')
const render = require('./slides.js')

document.body.appendChild(render())


// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    // { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() {
      [].forEach.call( document.querySelectorAll( '.highlight' ), function( v, i) {
        hljs.highlightBlock(v);
      });
    } }
  ]
});

setTimeout(function(){
  // To render with fixed dimensions:
  const viewer = ModelViewer({

    // Dictates whether width & height are px or multiplied
    pxNotRatio: true,
    width: 500,
    height: 400,
    // pxNotRatio: false,
    // width: 0.9,
    // height: 0.9,

    // To make the face follow the mouse.
    followMouse: true,

    // head should slowly drift (overrides lookAt)
    // slowDrift: true,

  })

  // add viewer to DOM
  const container = document.getElementById('logo-container')
  container.appendChild(viewer.container)
}, 200)