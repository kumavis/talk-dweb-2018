const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/virtual-hyperscript')

module.exports = render


function render(){
  return createElement(root())
}

function root(){
  return slideshowWrapper([

    //
    // METAMASK TODAY
    //

    markdownSlide(`
      # M e t a M a s k
      ### ( disecting the fox )
    `),

    markdownSlide(`
    - 170k users!

    ![](https://i.imgur.com/PBA4oVx.png)

    - Team grown from 4 → 10 (including contractors).

    - metamask team
        + james with a big heart
    - kyokan team

    `),


    markdownSlide(`
    - So many cool Ðapps!

    ![](https://i.imgur.com/DvNljyr.png)

    `),


    markdownSlide(`
    EtherDelta


    Ethlance


    GitCoin, GitToken


    Etherplay


    Leeroy.io


    Hellosugoi (ticketing)
    https://tickets.hellosugoi.com/event/0x3d51005fa4defbc5fc9b35ffd06bc2f90208e7f3

    Top 10 tx receiving contracts of the last year?

    `),


    markdownSlide(`
    IPFS light client

    `),


    markdownSlide(`
    Web3 Evolution:

    `),


    markdownSlide(`
    State Channel Suppport: We've added our first “first” method:
    `),


    markdownSlide(`    signTypedData

    `),


    markdownSlide(`
    Extracted the Soul of MetaMask (core) Platform agnosticism is the way of the future!!

    `),


    markdownSlide(`
    Platforms being developed:
    iOS
    Brave
    Android
    Mascara

    `),


    markdownSlide(`

    # New UI

    `),


    markdownSlide(`
    (kyo-dans slides here)

    `),


    markdownSlide(`
    What does the future hold?

    `),


    markdownSlide(`
    Hardware wallet support

    Contract account support

    `),


    markdownSlide(`
    Ability to submit transactions with updated gas prices.

    Support for the wealth of scaling strategies that are coming out.

    `),


    markdownSlide(`
    Increasingly decentralized.

    Increasingly easy to contribute to.

    `),


    markdownSlide(`
    ### **call to action: **How to work/collaborate with us****

    `),


    markdownSlide(`
    how to communicate with us?

    `),


    markdownSlide(`
    **If you're doing a token sale, how to reach out to us?**

    `),


    markdownSlide(`

    frankies extra slides for mascara

    `),


    markdownSlide(`
    MetaMascara(mascara) brings metamask when metamask is not installed.

    `),


    markdownSlide(`
    ## How does it work and how to use it:

    `),


    markdownSlide(`
    Mascara is an iframe that acts as a proxy between your dapp and metamask core.
    The metamask core is the global context housed in a service worker, it does the
    key management for every dapp the user visits.

    `),


    markdownSlide(`
    ![nomnom](https://raw.githubusercontent.com/MetaMask/mascara/master/images/nomnoml.png)

    `),


    markdownSlide(`
    ## In The Past

    `),


    markdownSlide(`

    window.addEventListener('load', function() {

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
      } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      }

      // Now you can start your app & access web3 freely:
      startApp()

    so much... toooo much

    `),


    markdownSlide(`
    to use as a CDN put this script tag in the \`<head>\` of your html file:

    `),


    markdownSlide(`

    // <script src="https://zero.metamask.io/mascara.js"></script>

    // npm i --save metamascara


    or bring your own:


    const metamask = require('metamascara')
    const EthJs = require('ethjs')

    // mascara will use the environmental provider if the user brings one
    // in the form of metamask extension, mist or parity
    // other wise it will make one for you :}

    const ethereumProvider = metamask.createDefaultProvider()

    const eth = new EthJs(ethereumProvider)

    // do stuff...

    `),


    markdownSlide(`
    ## Developing:

    `),


    markdownSlide(`
    For development with metamask-extension/mascara to point the iframe at localhost just do:
    \`\`\`js
    const metamask = require('metamascara')
    const ethereumProvider = metamask.createDefaultProvider({
        host: 'http://localhost:9001'
      }) // or what ever port you use
    \`\`\`

    `),


    markdownSlide(`
    # THE FUTURE?!

    `),


    markdownSlide(`
    - platform agnostic

    `),


    markdownSlide(`
    metamask in all the things!

    `),


    markdownSlide(`
    - client side services

    `),


    markdownSlide(`
    push the pattern as a temporary solution to a decetralized future and the module system of the web

    all are things as service workers?

    `),

  ])
}

function markdown(text) {
  return h('script', {
    'data-markdown': '',
    'attributes': {
      'type': 'text/template'
    }
  }, text)
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
      maxWidth: '660px',
      maxHeight: '700px',
      background: 'whitesmoke',
    },
  })
}

function table(headers, rows){
  return h('table', [
    h('thead', headers.map(label => h('td', label))),
    h('tbody', rows.map(row => h('tr', row.map( datum => h('td', datum) )))),
  ])
}