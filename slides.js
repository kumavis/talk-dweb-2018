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
      h('h3', `( disecting the fox )`),
    ]),

    markdownSlide(`
      # what is metamask
      - eyes & brain
      - skin & fur
      - howl & gait
      - internal organs
    `),

    markdownSlide(`
      # eyes, brain
      ### what we see and know
    `),

    markdownSlide(`
    ![](./images/charts/user_count.png)

    180k users and climbing!
    `),

    markdownSlide(`
    - Chrome
    - Firefox
    - Opera
    - no Safari :(
    `),

    markdownSlide(`
    ### Brave browser support!
    `),

    markdownSlide(`
    - So many cool Ðapps!

    ![](./images/charts/dapps.png)
    `),

    markdownSlide(`
    ![](./images/charts/rpc_hits.png)

    Dapps by rpc requests
    `),

    // markdownSlide(`
    // # crypto_kitties

    // ![](./images/screenos/crypto_kitties.png)
    // `),

    // markdownSlide(`
    // # crypto_punks

    // ![](./images/screenos/crypto_punks.png)
    // `),

    // markdownSlide(`
    // # ether_delta

    // ![](./images/screenos/ether_delta.png)
    // `),

    // markdownSlide(`
    // # etherplay

    // ![](./images/screenos/etherplay.png)
    // `),

    // markdownSlide(`
    // # ethlance

    // ![](./images/screenos/ethlance.png)
    // `),

    // markdownSlide(`
    // # gitcoin

    // ![](./images/screenos/gitcoin.png)
    // `),

    // markdownSlide(`
    // # gittoken

    // ![](./images/screenos/gittoken.png)
    // `),

    // markdownSlide(`
    // # leeroy

    // ![](./images/screenos/leeroy.png)
    // `),

    // markdownSlide(`
    // # sugoi

    // ![](./images/screenos/sugoi.png)
    // `),


    markdownSlide(`
    - Team grown from 4 → 10 (including contractors).

    - metamask team
      - including our savior james
    - kyokan team
    `),

    //
    // Kyo dan
    //

    markdownSlide(`
    # Fur and Skin
    ### Look and feel
    `),

    markdownSlide(`
    ###### with kyo-dan
    ## ![](./images/newui/Kyokan_teal_grey.png)
    kyokan.io
    `),

    markdownSlide(`
    - New UI!
    - Add Token
    - Send Token
    `),

    markdownSlide(`
    # New UI!
    ### ![](./images/newui/supplementary-screens.gif)
    `),

    markdownSlide(`
    # Add Token
    ### ![](./images/newui/add-custom-token-cropped.gif)
    `),

    markdownSlide(`
    # Send Token
    ### ![](./images/newui/send-token-custom-1-to-frankie.gif)
    `),

    //
    // frankie
    //

    markdownSlide(`
    # building dapps

    ### with metamask
    `),

    slide([
      code(`
  window.addEventListener('load', function() {
    \/\/ Checking if Web3 has been injected
    \/\/ by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      \/\/ Use Mist/MetaMask's provider
      window.web3 = new Web3(web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!')
      \/\/ fallback - use your fallback strategy
      \/\/ (local node / hosted node + in-dapp id mgmt / fail)
      const provider = new Web3.providers.HttpProvider("http://localhost:8545")
      window.web3 = new Web3(provider);
    }

    \/\/ Now you can start your app & access web3 freely:
    startApp()
  }
      `),
    ]),


    markdownSlide(`
    we can do better

    `),

    slide([
      code(`
      <script src="https://wallet.metamask.io/mascara.js"></script>
      <script>
        const ethereumProvider = metamask.createDefaultProvider()
      </script>
      `),
      code(`
      const metamask = require('metamascara')

      const ethereumProvider = metamask.createDefaultProvider()
      `),
    ]),

    markdownSlide(`
    MetaMascara(mascara) selects the environmental web3 provider for you.

    `),


    markdownSlide(`
    MetaMascara(mascara) brings metamask when metamask is not installed.

    `),


    markdownSlide(`
    ## How does it work and how to use it:

    `),

    markdownSlide(`
    ![nomnom](images/mascara/mascara-nom.png)
    `),

    // markdownSlide(`
    // Mascara is an iframe that acts as a proxy between your dapp and metamask core.
    // The metamask core is the global context housed in a service worker, it does the
    // key management for every dapp the user visits.
    // `),

    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-00.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-01.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-02.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-03.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-04.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-05.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-07.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-06.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-08.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-09.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-10.png)
    `),
    markdownSlide(`
    ![nomnom](images/mascara/mascara-first-time-11.png)
    `),


    markdownSlide(`
      ### Mascara is in DEVElOPER ALAPHA
    `),

    //
    // kumavis
    //

    markdownSlide(`
    # Evolution
    `),

    markdownSlide(`
      \`debug_traceTransaction\`

![](./images/screenos/trace.png)
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

    markdownSlide([`\`eth_signTypedData\``,
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

        web3.currentProvider.sendAsync({ //
          method: 'eth_signTypedData',
          params: [msgParams, web3.eth.accounts[0]],
          from: from,
        }, callback)
      `),
    ]),

    markdownSlide([`\`eth_signTypedData\`

![](./images/screenos/signTypedData.png)
      `,
    ]),

    markdownSlide(`
    # internal organs
    ### key management
    `),

    markdownSlide(`
    ### KeyringController
    and
    ### HdKeyring
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

    // markdownSlide(`
    // ![](./images/screenos/eth-ipfs.png)
    // `),

    slide([
      h('video', {
        src: './images/screenos/ipfs_provider.m4v',
        controls: true,
      }),
    ]),

    slide([
      h('video', {
        src: './images/screenos/ipfs_graph.m4v',
        controls: true,
      }),
    ]),

    // markdownSlide(`
    // (( slide recycle bin: ))
    // `),


    // markdownSlide(`
    // Ability to submit transactions with updated gas prices.

    // Support for the wealth of scaling strategies that are coming out.

    // `),

    // markdownSlide(`
    // Increasingly decentralized.

    // Increasingly easy to contribute to.

    // `),

    markdownSlide(`
    ### **call to action: **How to work/collaborate with us****

    `),

    markdownSlide(`
    # howl
    ### how to collaborate with us?
    `),

    markdownSlide(`
    **If you're doing a token sale, how to reach out to us?**
    `),

    markdownSlide(`
    # howl
    ### how to contribute
    `),

    markdownSlide(`
    Open source - your contributions are welcome
    `),

    markdownSlide(`
    starting incentives with GitToken/GitCoin
    `),

    markdownSlide(`
    We're hiring : )
    `),

    markdownSlide(`
    Wallet Developer: Use our modules
    `),


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
