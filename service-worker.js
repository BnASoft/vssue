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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "444b7cda7a624d5d9c9e552627c81b80"
  },
  {
    "url": "assets/css/0.styles.aa2e1a41.css",
    "revision": "609189c98ff8a799e4707c26d8743dc5"
  },
  {
    "url": "assets/img/oauth-app-github-01.png",
    "revision": "b230da47f5b38638ec6abf553d82035f"
  },
  {
    "url": "assets/img/oauth-app-github-02.png",
    "revision": "b99a2e857496c04c22e7df539994d4d9"
  },
  {
    "url": "assets/img/oauth-app-github-03.png",
    "revision": "94c83f124d252f1c37a2b124c2bbdc0c"
  },
  {
    "url": "assets/img/oauth-app-github-04.png",
    "revision": "5374318990b0f727e7f299e4c72d5d56"
  },
  {
    "url": "assets/img/oauth-app-github-05.png",
    "revision": "3be9b5c35e2ba851200d51c2c36df057"
  },
  {
    "url": "assets/img/oauth-app-github-06.png",
    "revision": "fdb89ea0189656eae03bde61734c5463"
  },
  {
    "url": "assets/img/oauth-app-github-07.png",
    "revision": "953564d04d90eeee7d0c2122c08768e6"
  },
  {
    "url": "assets/img/oauth-app-github-08.png",
    "revision": "02e81e28e30713265f2fd7995b02568f"
  },
  {
    "url": "assets/img/oauth-app-github-09.png",
    "revision": "90295ceb88265faa5b3ce78f75b9b997"
  },
  {
    "url": "assets/img/oauth-app-github-10.png",
    "revision": "4dbc4b1f4c4bc72bb3f8fdbe1433f035"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.961c5105.js",
    "revision": "60c67144e75eb439a0ff48975ea331b8"
  },
  {
    "url": "assets/js/11.98d4ab6c.js",
    "revision": "cc91851827c03dbf7d9c7ecb33571a29"
  },
  {
    "url": "assets/js/12.72461704.js",
    "revision": "867ceec86108506caa69f74b3feba8b3"
  },
  {
    "url": "assets/js/13.d0afee59.js",
    "revision": "c8c0ddf9b852e1dae20389c7ca76bc4a"
  },
  {
    "url": "assets/js/14.b4b8bfab.js",
    "revision": "f7afb2b5bb0677977d423f8bfdf9bb63"
  },
  {
    "url": "assets/js/15.975835cd.js",
    "revision": "e6733a108ae8c9c1948e4520db963cb4"
  },
  {
    "url": "assets/js/16.390b2188.js",
    "revision": "a06f8cf34f420c632f42350707876a62"
  },
  {
    "url": "assets/js/17.9c38efb7.js",
    "revision": "f22dd0cf06c3fd106d0cacb7d4fbb2f1"
  },
  {
    "url": "assets/js/18.f496a72f.js",
    "revision": "4819fd0626c36ab74b9ce020837d457d"
  },
  {
    "url": "assets/js/19.05795427.js",
    "revision": "1dd1705f1db7d6d48e92ffd1c4cb3406"
  },
  {
    "url": "assets/js/2.1c319f92.js",
    "revision": "11e3b443ac615cd45b66b33ba9f2a0ed"
  },
  {
    "url": "assets/js/20.e90c754a.js",
    "revision": "7dbd008072b8a7b89072f7863dbdddc1"
  },
  {
    "url": "assets/js/21.78f1f6d8.js",
    "revision": "26defabefada41966dc36a900e503dd7"
  },
  {
    "url": "assets/js/22.b3e57e8a.js",
    "revision": "de88fbc0f4010c9f9da22b212a0d4e50"
  },
  {
    "url": "assets/js/23.09460080.js",
    "revision": "8786173a9c929549e4177d693a043cc7"
  },
  {
    "url": "assets/js/24.abf07644.js",
    "revision": "bfed0aeae6bd5c5022e88a3eca4947aa"
  },
  {
    "url": "assets/js/25.784b66fb.js",
    "revision": "6ffdb924739e13267c8e976b21e1a232"
  },
  {
    "url": "assets/js/3.cd1529d0.js",
    "revision": "989526a58685ac7118505943de040c4e"
  },
  {
    "url": "assets/js/4.86d5c6e3.js",
    "revision": "8670bbeaf42561ceb62cb5b6a933c695"
  },
  {
    "url": "assets/js/5.58157a4e.js",
    "revision": "4a963a09ed83c52e1f31cc01303f9f4e"
  },
  {
    "url": "assets/js/6.fa59f578.js",
    "revision": "72189fa45dd6ff16bf786eafae120b37"
  },
  {
    "url": "assets/js/7.6ebb9db2.js",
    "revision": "bf815375d690ddc45ecb32a2863d0e8f"
  },
  {
    "url": "assets/js/8.b962bd88.js",
    "revision": "b45794fe576314a961d8448112b50b56"
  },
  {
    "url": "assets/js/9.9b43e14d.js",
    "revision": "6c7238c3e522e1c941abbbbcefd18b09"
  },
  {
    "url": "assets/js/app.b3ad6a3a.js",
    "revision": "9bda5d13bf89c14b054ce3e5947b3ede"
  },
  {
    "url": "guide/bitbucket.html",
    "revision": "3a4bfeba72eefa172fc008f45e4f40ee"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a1984e9e60f35b0bf3f86dbb794b0246"
  },
  {
    "url": "guide/github.html",
    "revision": "ceb9a16da0f4683215986c1d3f07f344"
  },
  {
    "url": "guide/gitlab.html",
    "revision": "2149d329343a59956e774454f351ed28"
  },
  {
    "url": "guide/index.html",
    "revision": "6501a6ff86398b7e003cbb226cd0c0fd"
  },
  {
    "url": "guide/integration-with-vuepress.html",
    "revision": "b0ccf587b8c2e7b776ff651d94abe9b3"
  },
  {
    "url": "guide/supported-platforms.html",
    "revision": "65939cb40354ce8bb2d9ccc1bd3fa817"
  },
  {
    "url": "index.html",
    "revision": "e20a5f93958a902f2a5eb4a1fab3273b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "options/index.html",
    "revision": "c5d21fd3b02ec5c6d35398f61954649e"
  },
  {
    "url": "zh/guide/bitbucket.html",
    "revision": "cbeb4d8f05a481fde1f6e9c4530a7c61"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7e617951612268bd20e6bca29f90d0bf"
  },
  {
    "url": "zh/guide/github.html",
    "revision": "b14c51b27c61a9f209762f91fa55a116"
  },
  {
    "url": "zh/guide/gitlab.html",
    "revision": "547ee8d1524d75744d5182ff7539dadf"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "207e777ca3ba2ec0a98d52a810d5d5bd"
  },
  {
    "url": "zh/guide/integration-with-vuepress.html",
    "revision": "676c736172f8e13810176f8d1b4feb2d"
  },
  {
    "url": "zh/guide/supported-platforms.html",
    "revision": "da7ae5a2a2fe23a2d1ffe9fc1b732514"
  },
  {
    "url": "zh/index.html",
    "revision": "9a4a69641f5d9098394f5dcb456282ac"
  },
  {
    "url": "zh/options/index.html",
    "revision": "e10f2d4191cd332ca1576e80134bf2f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
