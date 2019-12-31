/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9435f0b156e3708036efa03e527dc891"
  },
  {
    "url": "assets/css/0.styles.a4840a8a.css",
    "revision": "9e3f5c6c03a6188f407455c11bc6d94a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.88341d10.js",
    "revision": "e930ead97850ef5c5115ee5fc8745b58"
  },
  {
    "url": "assets/js/11.eb4306d3.js",
    "revision": "59b3249c8b92cd8baf6c42ebad7cf022"
  },
  {
    "url": "assets/js/12.f53b15f6.js",
    "revision": "8491e582c354e21b20f94d25d07c197d"
  },
  {
    "url": "assets/js/13.027f67e5.js",
    "revision": "ac824eba64e2ca1f6273c397e5268918"
  },
  {
    "url": "assets/js/14.6fd7fcd0.js",
    "revision": "c56269e8389e1c811a623069f8550741"
  },
  {
    "url": "assets/js/15.0a441337.js",
    "revision": "546070ca33df8f95f8393f9f4e27992b"
  },
  {
    "url": "assets/js/16.ca0e36e7.js",
    "revision": "c0bde429d538dfa3516c218b981584b1"
  },
  {
    "url": "assets/js/17.f392a12d.js",
    "revision": "f68cf19170a4379b22c7a68ff3dca515"
  },
  {
    "url": "assets/js/18.23e83825.js",
    "revision": "4afe025da267904db8234db077384829"
  },
  {
    "url": "assets/js/19.e08c1e58.js",
    "revision": "740162ba0894d0459280396205110c9d"
  },
  {
    "url": "assets/js/2.fd23447d.js",
    "revision": "b8215b1664c176d6017bfca68467a1f5"
  },
  {
    "url": "assets/js/20.599c5050.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.7edca617.js",
    "revision": "2a86544f323b56680321b4259c6be511"
  },
  {
    "url": "assets/js/4.d46f85ad.js",
    "revision": "968295c5aedc68278c82c72073aef8e6"
  },
  {
    "url": "assets/js/5.042673d6.js",
    "revision": "41fe2c251ce100c39250bb44baada1ec"
  },
  {
    "url": "assets/js/6.d0365b48.js",
    "revision": "dbf05f1d81f819b995d4e410105564d6"
  },
  {
    "url": "assets/js/7.0a4ce3f4.js",
    "revision": "8f926ad287ab1f56e9e46f2c63704474"
  },
  {
    "url": "assets/js/8.29940eda.js",
    "revision": "4a7bff8f87bdff79074ea48af024a63e"
  },
  {
    "url": "assets/js/9.52d4c430.js",
    "revision": "b185e377476ca0bc89c47700e2821388"
  },
  {
    "url": "assets/js/app.a797e652.js",
    "revision": "eed49d43ad27db523281d1ceb8d06bcb"
  },
  {
    "url": "assets/lab1output.png",
    "revision": "cf1096b9b18cfc04ec6491270dc9daa0"
  },
  {
    "url": "assets/laravel-vue-and-spas-3x.png",
    "revision": "fcf0fe44f503754a98940fdfcf7f46ba"
  },
  {
    "url": "assets/phpLogo.png",
    "revision": "e37a61d3b80ce05264ec66d01847fb23"
  },
  {
    "url": "assignments/index.html",
    "revision": "edf7eb804febe8321f528504cc5e87ac"
  },
  {
    "url": "assignments/lab1.html",
    "revision": "853cea08a4fca329f63f21d5ae1f31f7"
  },
  {
    "url": "assignments/lab2.html",
    "revision": "83134b3ad55731d1e13df50b55a3049a"
  },
  {
    "url": "assignments/lab3.html",
    "revision": "e5bab711dc8b3edf1dac9b432c664340"
  },
  {
    "url": "assignments/lab4.html",
    "revision": "e015f958bd237bee373d7a91e28a8c83"
  },
  {
    "url": "assignments/lab5.html",
    "revision": "cd52050573c0b50ae2b39d44f058c6e1"
  },
  {
    "url": "assignments/lab6.html",
    "revision": "82e7f5b70d12c472580d4aa10c328f05"
  },
  {
    "url": "assignments/lab7.html",
    "revision": "ba38652cbd95d6bde8897d58d8fee5b3"
  },
  {
    "url": "dcicon.png",
    "revision": "8b489a062efd70587f16ebebe048935c"
  },
  {
    "url": "index.html",
    "revision": "affeade8ac8e305e5b161638f9f3f03c"
  },
  {
    "url": "softwares/apache.html",
    "revision": "752e4559395be7cbf055b1137ae64600"
  },
  {
    "url": "softwares/index.html",
    "revision": "f269d634efa4dabb6c56c386538b2904"
  },
  {
    "url": "softwares/php.html",
    "revision": "d6d58216088746b934e04efdb09b960b"
  },
  {
    "url": "softwares/videos.html",
    "revision": "c0383b2b4c3a1e10463520c8ccc292b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
