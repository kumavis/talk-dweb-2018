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
      # Ethereum on IPFS

      github: @kumavis

      twitter: @kumavis_
    `),

    slide(img('./images/eth_ipfs.png')),

    // browser dapp compat table

    slide([      
      h('div',{
        style: {
          fontWeight: 'bold',
          fontSize: '48px',
        },
      },'blockchain is...'),

      table([''],
      [
        ['p2p network'],
        ['consensus algo'],
        ['historical log (hash linked)'],
        ['state (hash linked)'],
      ])
    ]),

    slide(img('./images/merkle01.png')),


    slide([      
      h('div',{
        style: {
          fontWeight: 'bold',
          fontSize: '48px',
        },
      },'IPFS is...'),

      table([''],
      [
        ['p2p network'],
        ['hash linked data'],
      ])
    ]),

    slide([      
      h('div',{
        style: {
          fontWeight: 'bold',
          fontSize: '48px',
        },
      },'Ethereum on IPFS'),

      table([''],
      [
        ['p2p network'],
        ['hash linked data'],
        ['consensus layer on top'],
      ])
    ]),

    markdownSlide(`
      ### IPLD Resolvers
    `),

    markdownSlide(`
      ### IPFS history
      * hash -> data
    `),

    markdownSlide(`
      ### IPFS history
      * hash -> data
      * any hash -> data
    `),

    markdownSlide(`
      ### IPFS history
      * hash -> data
      * any hash -> data
      * any hash -> many data formats
    `),

    markdownSlide(`
      ### IPLD Path Resolution
      [block_cid]/number
    `),

    markdownSlide(`
      ### IPLD Path Resolution
      [block_cid]/state/[address]/balance
    `),

    markdownSlide(`
      ### IPLD Path Resolution
      [block_cid]/state/[address]/storage/[key]
    `),

    markdownSlide(`
      ### IPLD Path Resolution
      [some_app_data]/block/state/[address]/storage/[key]
    `),

    markdownSlide(`
      ### IPLD Path Resolution
      auto-generate merkle proofs

      without needing ethereum semantics
    `),

    markdownSlide(`
      ### Network Actions?
    `),

    markdownSlide(`
      ### Libp2p Global PubSub
      
      globally subscribe to and publish data
    `),

    markdownSlide(`
      ### Libp2p Global PubSub
      as client...

      subscribe to incomming blocks

      publish signed transactions
    `),

    markdownSlide(`
      ### Libp2p Global PubSub
      as miner...

      subscribe to incomming blocks
      
      subscribe to signed transaction

      publish mined blocks
    `),

    markdownSlide(`
      ### IPNS

      publish your latest block

      IoT can follow what you publish
    `),

    markdownSlide(`
      ### Why?
    `),

    markdownSlide(`
      ### general

      more mixing of technologies
    `),

    markdownSlide(`
      ### MetaMask

      default:

      trusted RPC service
    `),

    markdownSlide(`
      ### MetaMask

      trust agility!

      can change your data source
    `),

    markdownSlide(`
      ### MetaMask

      no tcp/udp in browser
    `),

    markdownSlide(`
      ### MetaMask

      2nd network

      on webrtc

      via libp2p

      and bridge nodes
    `),

    markdownSlide(`
      ### thanks :)
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