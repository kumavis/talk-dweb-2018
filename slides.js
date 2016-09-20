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
      ### bridging browsers to blockchains
    `),

    markdownSlide(`ease of adoption is our core goal`),

    //
    // METAMASK TODAY
    //

    markdownSlide(`
      # MetaMask Today
      with @frankie and @kevin
    `),
    
    slide(img('./images/flow00a.png')),
    slide(img('./images/flow00b.png')),
    slide(img('./images/flow00c.png')),
    slide(img('./images/flow00d.png')),
    slide(img('./images/flow01.png')),
    slide(img('./images/flow02.png')),
    slide(img('./images/flow03.png')),
    slide(img('./images/flow04.png')),
    slide(img('./images/flow05.png')),
    slide(img('./images/flow05a.png')),
    slide(img('./images/flow06.png')),
    slide(img('./images/flow07.png')),
    slide(img('./images/flow08.png')),
    slide(img('./images/flow09.png')),
    slide(img('./images/flow10.png')),
    slide(img('./images/flow11.png')),
    
    markdownSlide(`
      ### status: Public Beta
    `),

    slide([
      img('./images/chrome-store.png'), h('br'),
      '44 releases since march (weekly!)', h('br'),
      '~2k users', h('br'),
      '~14 million RPC requests / day', h('br'),
      '( thanks infura! )', h('br'),
      '1 lil buterin name drop', h('br'),
    ]),

    // browser dapp compat table
    slide([`metamask extension compat`, h('br'),h('br'),h('br'),
      table([
        // 'browser', 'status',
      ],[
        [`chrome:`, `live!`],
        [`opera:`, `ready!`],
        [`edge:`, `ready!`],
        [`firefox:`, `ready!`],
        [`safari:`, `nope :(`],
        [`mobile:`, `nope :(`],
      ])
    ]),

    //
    // HOW IT WORKS
    //

    markdownSlide(`
      # How it works
           with @kumavis
    `),

    slide(`just throw an ethereum client in an extension?`),
    markdownSlide(`
      blocked on networking:

      no tcp/udp`),
    slide(`mandatory sync time: non-starter`),
    slide(`rpc against trusted node`),
    slide(`id mgmt? rpc interception`),
    
    slide(img('./images/nomnoml.png')),
    
    markdownSlide(`
      ### web3-provider-engine
      make your own web3 provider
      
      a stack of rpc-handling middleware
    `),

    markdownSlide(`
      ### middleware stack
      * cache layer
      * id mgmt
      * trusted rpc node
    `),
    
    markdownSlide(`a note on filters + load balancers`),

    markdownSlide(`
      different trust model

      100% RPC - bring your own node!

      lock-in devalues product
    `),

// Dan Presents
// CHALLENGES
//

markdownSlide(`# LESSONS
## From Developers
                with @danfinlay`),

markdownSlide(`### What's it like building a 3rd party Ethereum browser?
- We see cool Dapps being made!
- We handle developer problems!
`),

slide([
`Web3: Portal & Bottleneck`,
img('images/beingjohn.jpg')
]),

// Basic API limitations
//
/*
markdownSlide(`## Fork Intolerance
- Block lookups are by number not hash.
- No way to notify that a previous \`latest\` block is now an uncle.
- Hard to represent blockchain uncertainty.
`),
*/

markdownSlide(`## Callbacks & Promises Return Singular Truth
\`\`\`
myCoin.sendCoin(receiver, amount, {from: account})
.then(function() {
  // Must have happened!
  hubris()
})
\`\`\`
![](images/han.gif)
`),

markdownSlide(`## Representing Uncertainty With Event Emitters
Why not:
\`\`\`
myCoin.sendCoin(receiver, amount, {from: account})
.on('received', coinSent)
.on('confirmation', (data) => {
  // Maybe we have data.confirmations
  // or a reference to data.blockHash
  // so we can render current probability.
})
\`\`\`
![](images/infinite-improbability.gif)
`),

markdownSlide(`
### Querying Contracts is Not DB-like
### Consider Decentralized Twitter
\`\`\`
TwitterContract.getTweets.call({ from: account })
// Load all tweets of all time into local memory.
.then((tweets) => {
  var tweetsIFollow = tweets
                      .filter( byFollowed )
                      .sort( byDate )
                      .slice(0, 50)  // Just the latest 50

  render( tweetsIFollow )
})
\`\`\`
`),

markdownSlide(
`
## Possible Solutions:
### Sorting logic on contract
- Costs gas to construct.
- Inflexible logic.
- Still returns all results in one batch.
`),

markdownSlide(`## Possible solution: EIP 144
- Would allow client to submit compiled EVM code to server.
- Allows dynamic, client-specified queries of blockchain data.
`),

/*
markdownSlide(`
### Devs using Logs as Database

Pros:
  - Low gas costs!

Cons:
  - Not in state, so not available to contracts.
  - No cryptoeconomic incentive to store.
  - No dynamic query syntax, only topics (like tags).

Solution:
  - Archival nodes as a service?
  - Build new incentives.
`),
*/

markdownSlide(`
## Common Issue
"Why isn't MetaMask acting like Geth?"
- Geth vs. the Wiki: No Authoritative Spec
- The standards are largely de facto
  - If the wiki is wrong, check Geth for the truth.
`),

markdownSlide(`
### How about a web3 standards body?
- What's a decentralized standards body look like?
  - Definitive proposal list (currently EIPs)
  - Poll of support (weighted by Ether?)
  - Declared implementation by client maintainers.
- Hey, sounds like a Dapp!
`),

slide([
  'MDN: Some Inspiration',
  img('images/mdn.png'),
]),





    //
    // FUTURE
    //
    markdownSlide(`# Future`),

    slide(`Multiple Account types (uPort, remote key stores)`),
    
    slide(`
      Browser Light Client 
      via p2p network on webRTC
    `),

    slide('eth-tx-viz'),
    slide(img('./images/tx-viz.png')),

    slide(`Mascara MetaMask Polyfill`),
    slide(img('./images/add-script-tag.gif')),
    // slide(img('./images/mascara.gif')),

    // browser dapp compat table
    slide([`browser dapp compat`, h('br'),h('br'),h('br'),
      table([
        '', 'user has metamask', 'no metamask',
      ],[
        ['dapp has mascara', ':D', ':D'],
        ['no mascara', ':D', ':('],
      ])
    ]),

    slide(`private keys are safe, useable across dapps`),
    
    slide(`thanks`),
    
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