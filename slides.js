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

    slide([
      h('#logo-container'),
    ]),

    slide([
      h('h1', `M E T A M A S K`),
      h('img', {
        src: './images/misc/disected-fox.png',
        style: {
          background: 'transparent',
          border: 'none',
          width: '600px',
          height: '400px',
        }
      }),
      h('h3', `( dissecting the fox )`),
    ]),

    markdownSlide(`
      # what is metamask
      - key mgmt / wallet
      - tx analysis
      - ethereum api provider
    `),

    markdownSlide(`
    key mgmt / wallet
    `),

    markdownSlide(`
    ![](./images/dweb/mm02.png)
    `),

    markdownSlide(`
    ![](./images/dweb/mm01.png)
    `),

    markdownSlide(`
    ![](./images/dweb/mm03.png)
    `),

    markdownSlide(`
    ![](./images/dweb/mm05.png)
    `),

    markdownSlide(`
    ![](./images/dweb/mm04.png)
    `),

    markdownSlide(`
    tx analysis
    `),

    markdownSlide(`
    ![](./images/ui-future/06.png)
    `),

    // markdownSlide(`
    // ![](./images/ui-future/07.png)
    // `),

    markdownSlide(`
    ![](./images/ui-future/08.png)
    `),

    markdownSlide(`
    ![](./images/ui-future/10.png)
    `),

    markdownSlide(`
    ![](./images/ui-future/09.png)
    `),

    // signatures


    // markdownSlide(`
    // ![](./images/ui-future/01.png)
    // `),


    // hardware


    markdownSlide(`
    key mgmt
    `),

    markdownSlide(`
    ### 12 word phrase

    oyster timber inner increase

    fan alley biology early

    maze cart lecture shiver
    `),
    //
    // markdownSlide(`
    // ![](./images/ui-future/02.png)
    // `),

    markdownSlide(`
    ![](./images/ui-future/03.png)
    `),
    //
    // markdownSlide(`
    // ![](./images/ui-future/04.png)
    // `),
    //
    // markdownSlide(`
    // ![](./images/ui-future/05.png)
    // `),
    //

    markdownSlide(`
    ![](./images/dapps-new/gnosis-safe.png)
    `),

    markdownSlide(`
    ![](./images/dapps-new/aragon.png)
    `),

    markdownSlide(`
    ethereum api provider
    `),

    markdownSlide(`
    ![](./images/dapps-new/cryptopunks.jpg)
    `),

    markdownSlide(`
    # crypto_kitties

    ![](./images/dapps-new/cryptokitties.jpg)
    `),

    markdownSlide(`
    # crypko.ai

    ![](./images/dapps-new/crypko-ai.png)
    `),

    markdownSlide(`
    # gitcoin

    ![](./images/screenos/gitcoin.png)
    `),

    markdownSlide(`
    # aragon

    ![](./images/dapps-new/aragon.png)
    `),

    markdownSlide(`
    # augur

    ![](./images/dapps-new/augur.jpg)
    `),

    markdownSlide(`
    # radar relay

    ![](./images/dapps-new/radar-relay.png)
    `),

    // markdownSlide(`
    // # ethlance
    //
    // ![](./images/screenos/ethlance.png)
    // `),

    // markdownSlide(`
    // # ether_delta
    //
    // ![](./images/screenos/ether_delta.png)
    // `),

    // markdownSlide(`
    // # New UI
    // ### ![generalScreens](./images/newui/supplementary-screens.gif)
    // `),
    //
    // markdownSlide(`
    // # Add Token
    // ### ![addToken](./images/newui/add-custom-token-cropped.gif)
    // `),
    //
    // markdownSlide(`
    // # Send Token
    // ### ![sendToken](./images/newui/send-token-custom-1-to-frankie.gif)
    // `),

    // markdownSlide(`
    // ##### Mobile + Desktop Form Factors
    // ### ![sendToken](./images/newui/MultipleFormFactors.png)
    // `),

    /*
     * eth_signTypedData
     */
    //
    // slide([
    //   h('p', [
    //     h('code',`eth_signTypedData`),
    //   ]),
    //   code(`
    //
    //     const msgParams = [
    //       {
    //         type: 'string',      // Any valid solidity type
    //         name: 'Message',     // Any string label you want
    //         value: 'Hi, Alice!'  // The value to sign
    //      },
    //      {
    //         type: 'uint32',
    //         name: 'A number',
    //         value: '1337'
    //       }
    //     ]
    //
    //     web3.currentProvider.sendAsync({
    //       method: 'eth_signTypedData',
    //       params: [msgParams, web3.eth.accounts[0]],
    //     }, callback)
    //   `),
    // ]),
    //
    // markdownSlide(`
    //   \`eth_signTypedData\`
    //
    //   ![](./images/screenos/signTypedData.png)
    // `),
    //
    // markdownSlide(`
    // coming soon:
    // - Hardware wallet support (Trezor, Ledger)
    // - Onchain Multisig support (Aragon, Gnosis Safe)
    // `),

    markdownSlide(`
    where to get it
    `),

    markdownSlide(`
    - Chrome
    - Firefox
    - Opera
    - Brave :)
    `),

    markdownSlide(`
    ![](./images/dweb/mm00.png)
    `),

    markdownSlide(`
    ### Brave browser integration!
    ![](./images/screenos/brave_screenshot.png)
    `),

    markdownSlide(`
    ![](./images/misc/mustekala.jpg)
    `),

    slide([
      h('video', {
        src: './images/screenos/ipfs_graph.m4v',
        controls: true,
      }),
    ]),

    markdownSlide(`
      kitsunet experiment
    `),

    slide([
      h('video', {
        src: './images/videos/graphs.mov',
        controls: true,
      }),
    ]),

    slide([
      h('video', {
        src: './images/videos/visualizer.mov',
        controls: true,
      }),
    ]),

    slide([
      h('video', {
        src: './images/screenos/ipfs_provider.m4v',
        controls: true,
      }),
    ]),

    markdownSlide(`
    Open source - your contributions are welcome
    ### github.com/MetaMask
    `),
    //
    // markdownSlide(`
    // GitCoin
    // ![](./images/screenos/gitcoin.png)
    // `),
    //
    // markdownSlide(`
    // GitToken
    // ![](./images/screenos/gittoken.png)
    // `),
    //
    // markdownSlide(`
    // We're hiring : )
    // `),
    //
    // markdownSlide(`
    //   # shout-outs!
    // `),

  // slide([
  //     // h('img', {
  //     //   src: './images/misc/ssb-icon.png',
  //     //   style: {
  //     //     background: 'transparent',
  //     //   }
  //     // }),
  //     // h('h2', {
  //     //   style: {
  //     //     color: '#42f4eb',
  //     //   }
  //     // }, 'beaker'),
  //
  //     h('.warpidy-wrap-wrap', {
  //       style: {
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         width: '60vw',
  //       }
  //     }, [
  //       h('img', {
  //         src: './images/misc/beaker.png',
  //         style: {
  //           width: '100%'
  //         }
  //       }),
  //     ])
  //   ]),

    // slide([
    //   // h('img', {
    //   //   src: './images/misc/ssb-icon.png',
    //   //   style: {
    //   //     background: 'none',
    //   //     position: 'absolute',
    //   //     top: '0',
    //   //     left: '0',
    //   //     border: 'none',
    //   //   }
    //   // }),
    //   h('h2', {
    //     style: {
    //       color: '#42f4eb',
    //     }
    //   }, 'PATCHWORK (SSB)'),
    //
    //   h('.warpidy-wrap-wrap', {
    //     style: {
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       width: '60vw',
    //     }
    //   }, [
    //     h('img', {
    //       src: './images/misc/patchwork.png',
    //       style: {
    //         width: '65%',
    //         height: '550px',
    //       }
    //     }),
    //   ])
    //
    // ]),

  ])
}

function markdown(text) {
  return (
    h('script', {
      'data-markdown': '',
      'attributes': {
        'type': 'text/template'
      }
    }, text)
  )
}

function code(text) {
  return (
    h('pre.highlight', {}, text)
  )
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
