const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/virtual-hyperscript')

module.exports = render


function render(){
  return createElement(root())
}

function root(){
  return slideshowWrapper([

    markdownSlide(`
      # MetaMask
      ### connecting browsers to blockchains
    `),
    
    //
    // METAMASK TODAY
    //

    markdownSlide(`# MetaMask Today`),
    markdownSlide(`### GIF walkthrough`),
    slide([
      `usage stats`,
      slide([
        '~2k users', h('br'),
        img('./images/chrome-store.png'),
      ]),
      slide([
        '~14 million RPC requests / day', h('br'),
        '( thanks infura! )'
      ]),
    ]),
    
    slide([
      `browsers - a few`,
      slide(`chrome - live!`),
      slide(`opera - ready!`),
      slide(`edge - ready!`),
      slide(`firefox - pending!`),
      slide(`safari - nope.`),
      slide(`mobile - nope.`),
    ]),

    slide([
      `some neato dapps`,
      slide(`etherisc - flight insurance`),
      slide(`blockparty - party-RSVP-commit`),
    ]),
    
    //
    // HOW IT WORKS
    //

    slide([
      markdownSlide(`# How it works`),
      slide(img('./images/nomnoml.png')),
      markdownSlide(`
        ### provider engine
        a stack of rpc-handling middleware
      `),
      markdownSlide(`a note on filters + load balancers`),
    ]),

    //
    // CHALLENGES
    //

    markdownSlide(`# Challenges`),
    slide([
      slide(`What is it like building an Ethereum browser from outside of the foundation?`),
      slide(`We get a lot of developers coming to us for help.`),
    ]),
    slide([
      slide(`No definitive rpc spec.`),
      slide(`We really could use a web3 standards body.`),
      slide(`Block lookups are by number not hash`),
    ]),
    

    //
    // FUTURE
    //

    markdownSlide(`# Future`),
    slide(`Multiple Key-Ring types, e.g. uPort`),
    slide(`libp2p for webRTC p2p stuff`),
    slide(`Mascara iFrame library with gif walkthrough`),

  ])
}

function markdownSlide(text){
  return (

    h('section', {
      'attributes': {
        'data-markdown': '',
      }
    }, [
      h('script', {
        'attributes': {
          'type': 'text/template'
        }
      }, text)
    ])

  )
}

function slide(content){
  return (

    h('section', content)

  )
}

function slideshowWrapper(content){
  return (

    h('.reveal', [ h('.slides', content) ])

  )
}

function img(src) {
  return h('img', {
    src: src,
    style: {
      background: 'whitesmoke',
    },
  })
}