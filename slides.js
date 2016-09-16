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
    slide(`Multiple Key-Ring types, e.g. uPort`),
    slide(`libp2p for webRTC p2p stuff`),
    slide(`Mascara iFrame library with gif walkthrough`),
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
      background: 'whitesmoke',
    },
  })
}
