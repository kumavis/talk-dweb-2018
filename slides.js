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
      - key mgmt
      - tx analysis
      - ethereum api provider
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
    wallet / key mgmt
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
    # crypto_punks

    ![](./images/screenos/crypto_punks.png)
    `),

    markdownSlide(`
    # crypto_kitties

    ![](./images/screenos/crypto_kitties.png)
    `),

    markdownSlide(`
    # ether_delta

    ![](./images/screenos/ether_delta.png)
    `),

    markdownSlide(`
    # ethlance

    ![](./images/screenos/ethlance.png)
    `),

    markdownSlide(`
    # gitcoin

    ![](./images/screenos/gitcoin.png)
    `),

    markdownSlide(`
    # New UI
    ### ![generalScreens](./images/newui/supplementary-screens.gif)
    `),

    markdownSlide(`
    # Add Token
    ### ![addToken](./images/newui/add-custom-token-cropped.gif)
    `),

    markdownSlide(`
    # Send Token
    ### ![sendToken](./images/newui/send-token-custom-1-to-frankie.gif)
    `),

    markdownSlide(`
    ##### Mobile + Desktop Form Factors
    ### ![sendToken](./images/newui/MultipleFormFactors.png)
    `),

    /*
     * eth_signTypedData
     */
    markdownSlide(`
      Our first "new" method:

      \`eth_signTypedData\`

      - EIP 712 (Thanks Leonid Logvinov + Sergey Ukustov!)
      - Human readable
      - Structured data
      - Cheap to validate on-chain
      - Enables state channels
    `),

    slide([
      h('p', [
        h('code',`eth_signTypedData`),
      ]),
      code(`

        const msgParams = [
          {
            type: 'string',      // Any valid solidity type
            name: 'Message',     // Any string label you want
            value: 'Hi, Alice!'  // The value to sign
         },
         {
            type: 'uint32',
            name: 'A number',
            value: '1337'
          }
        ]

        web3.currentProvider.sendAsync({
          method: 'eth_signTypedData',
          params: [msgParams, web3.eth.accounts[0]],
        }, callback)
      `),
    ]),

    markdownSlide(`
      \`eth_signTypedData\`

      ![](./images/screenos/signTypedData.png)
    `),

    markdownSlide(`
    # internal organs
    ### key management
    `),

    markdownSlide(`
    ### Keyring-Controller
    and
    ### Hd-Keyring
    `),

    markdownSlide(`
    Wallet Developers: Use our modules
    `),

    markdownSlide(`
    we know you're waiting:

    - Hardware wallet support
    - Contract (proxy) account support
    - account abstraction support
    `),

    markdownSlide(`
    # internal organs
    ### blockchain data source
    `),

    markdownSlide(`
    # IPFS zero + light client
    `),

    markdownSlide(`
    ![](./images/screenos/eth-ipfs.png)
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
        src: './images/screenos/ipfs_provider.m4v',
        controls: true,
      }),
    ]),

    markdownSlide(`
    Open source - your contributions are welcome
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

    slide([
      // h('img', {
      //   src: './images/misc/ssb-icon.png',
      //   style: {
      //     background: 'none',
      //     position: 'absolute',
      //     top: '0',
      //     left: '0',
      //     border: 'none',
      //   }
      // }),
      h('h2', {
        style: {
          color: '#42f4eb',
        }
      }, 'PATCHWORK (SSB)'),

      h('.warpidy-wrap-wrap', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '60vw',
        }
      }, [
        h('img', {
          src: './images/misc/patchwork.png',
          style: {
            width: '65%',
            height: '550px',
          }
        }),
      ])
    ]),

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
