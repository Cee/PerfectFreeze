"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/39-thank-you.html","9ade1291ac4f64276f15d6e1b25398c6"],["/404.html","1a61294d9200a64c1504f8fcb3df9f9e"],["/Apps-Inside-iPhone.html","13d6ec5e6d1ab79c12ed2672d7dadd79"],["/Apps-on-Tsukiko.html","7f5a6e16d949458429521df290b435b7"],["/Oh-My-2015.html","c0560dea633e24d3d2dfdbc6dee9b532"],["/Oh-My-2016.html","7f7c9fd78f9f48ac148cdb0074f8da71"],["/PFAvatar.html","3e8debe15cb4e22b3a9a92e703730c57"],["/PFNavigationDropdownMenu.html","542f48abdc222992644a22b382938c11"],["/PNJU-Workflow.html","8c4091c706036f696b40fb04784f9be1"],["/Pangu.objective-c.html","704b404d1625ff4e42bb5199f71ef2d3"],["/a-brief-introduction-to-grep-awk-and-sed.html","1c9c9fbd09c58f1934a9e18caa6ea7e5"],["/about-colormix-1.html","725da6a51080ae0b5bb81c5853296aff"],["/about-colormix-2.html","8448936250462702fa413d25efc520d7"],["/about-colormix-3.html","11074c1af3cdae72ce5e831a0f4ecc61"],["/about/index.html","bf749ddfa80c2d40b3fb9e6ace31e820"],["/after-my-first-hackathon.html","cec24adfdb7dbc53bd6ab2585d59f0e4"],["/apple-touch-icon.png","55a76d7d28f5e697d17cf19907652aa3"],["/articles/index.html","a4d0e9047d8b567358484d1ef73ef51a"],["/assets/themes/curtana/js/lightense.min.bc2f23b9.js","bc2f23b9e467a05c541304cfeb57eeb8"],["/bye-huohua.html","568f8f12cbf2be5b1acc7ab4d93b26ca"],["/casual-thinking.html","8adac22600b1272df03e6397e41d6753"],["/cisco-ipsec-vpn.html","650fd71005b789e958a728baaf03a874"],["/colorful-world.html","3825aa8d5c0bf50bffdb7c7825948b3b"],["/coolshell-puzzle-game-tong-guan-ji.html","514d5ea68878379cfd091be4cecfe301"],["/dear-assembly-1.html","4472964ab375f2897baafda4e329a484"],["/dear-assembly-2.html","9d06099409b4c31bbb1f4ee04758aa6b"],["/dear-assembly-3.html","4e9ee44c0941ea8b31680c42a80aa37b"],["/friends/index.html","e81bcdb9a82317590e6306241898cbd4"],["/funny-logic-questions.html","93a9ab046011f0a5636a2804a416e282"],["/girls.html","7ec029872012551d18bdead3f797d437"],["/gravity-reality.html","d070971aa0ed5e8acf6cbc3be763331b"],["/how-to-build-megadl-on-your-synology-ds215j.html","fc2564b88eac45187e70e855e2fa921b"],["/html-5-develop.html","84211593587e90856176666ee1aa34b7"],["/i-love.html","21514016c8ecdd39167956ba633375c7"],["/index.html","6a7f40fec6af1fe372cda87cb8da9ce5"],["/ios-integration.html","58b3db7708f83ec7cf65ba6e1dbd1312"],["/ios-ui-automating-test.html","629c28574b815babe7c7af5435af2879"],["/kin-you-bi-no-o-ha-you.html","e353d0c39bb1b7fa8d9d607cf9537ce1"],["/letter-to-2017.html","6b80d97b6ca70c45485addd023923fea"],["/live-in-beijing-month-one.html","170b090def91fe7d818e91c91923da60"],["/make-decisions-and-others.html","f0f9e3c7430d4f1d8058b2e9227712a0"],["/over-the-time-dance.html","4c939113899f8d446dd3c6f163eeef3e"],["/rebirth.html","55f272e9c20d79d3f4391a5160855213"],["/recap-monad.html","eea8c996745bb8eed9730357e4e96186"],["/secrets-that-a-programmer-should-know.html","535ae93ba9a4ead9f584be963395d313"],["/swift-3-kvo-and-cocoa-bindings.html","cb5f0839beaa860d3f3cabc7913996f7"],["/talking-from-binary-search.html","7eb8461d40422475893b990f9c71f020"],["/talking-from-bot.html","52bc75f9866d3449b004f8237504b82a"],["/touchbar-tutorial.html","bc8ba4bd26e614801b7ee69b79e2d970"],["/why-css-transform-doesnt-work-on-inline-elements.html","febbc3c6103a88f3627c6767bc96822c"],["/works/index.html","cf9f54bd6e90cfeef21795cd165ccf8c"],["/wwdc-15-session-104-learning-notes.html","c4e399f7a28b7eebc651084e00a44e7f"],["/wwdc-15-session-106-learning-notes.html","1bce2e96ac2cf21d8a98049dbd4f8ea2"],["/wwdc-15-session-107-learning-notes.html","2ae24a70889a11b21afe4d4beba35303"],["/ytk-intern-experience.html","06326597fb2d577a82bfba219ddb0689"]],cacheName="sw-precache-v2-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,b){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=b),c.toString()},createCacheKey=function(a,b,c,d){var e=new URL(a);return d&&e.toString().match(d)||(e.search+=(e.search?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(a,b){if(0===a.length)return!0;var c=new URL(b).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,b){var c=new URL(a);return c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return b.every(function(b){return!b.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var b=a[0],c=a[1],d=new URL(b,self.location),e=createCacheKey(d,hashParamName,c,!1);return[d.toString(),e]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(b){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!b.has(c))return a.add(new Request(c,{credentials:"same-origin",redirect:"follow"}))}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var b=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!b.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var b,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);b=urlsToCacheKeys.has(c);b||(c=addDirectoryIndex(c,"index.html"),b=urlsToCacheKeys.has(c));b&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(b){return fetch(a.request)}))}});