if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,r,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return c;case"module":return a;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./service-worker.js",["./workbox-b4c2a21b"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"6923be74c78b66f77bd20c157af0611e"},{url:"/LICENSE",revision:"e62637ea8a114355b985fd86c9ffbd6e"},{url:"/assets/css/404.css",revision:"b293da6d060d1e3e684412b211719cb6"},{url:"/assets/css/iconfont.css",revision:"b25a47c3709932d694bd0f11f99ca45f"},{url:"/assets/css/onlinewebfonts.css",revision:"5fdd9ffa29ef2f2c56da910688040625"},{url:"/assets/css/vno.css",revision:"e152795f2a1ac91adbe400f2024204e5"},{url:"/assets/js/jquery.min.js",revision:"378087a64e1394fc51f300bb9c11878c"},{url:"/assets/js/main.js",revision:"0fd6baad13df879812877a3da85932fd"},{url:"/css/Discovery.28dfb622.css",revision:"d6ccdb3aa8d6c6a9ee638cd17d3a8c04"},{url:"/css/Mv.fad850d5.css",revision:"b40f9bea7b0d2808fb345dcd2d35d269"},{url:"/css/Mvs.81583490.css",revision:"e29a0f6cc6210bd5d7dc41d2e332d698"},{url:"/css/PlaylistDetail.e5c0ad93.css",revision:"47b1abf2280e379c7dee8dac03f84340"},{url:"/css/Playlists.d57dbcf4.css",revision:"acd4b1f5546a35bce2e7b580268f43c3"},{url:"/css/Search.1f275ae2.css",revision:"b065fd3b862f2fedea17b48b5c12b3b2"},{url:"/css/SearchMvs.d944f820.css",revision:"b477992fc51de6bfeca8207cc99dab5e"},{url:"/css/SearchPlaylists.ac7d41bb.css",revision:"4069ac7297280988ce9b775552901592"},{url:"/css/SearchSongs.b3177a33.css",revision:"c8e26c0abf989b8f2ddd6f0bb07e3dac"},{url:"/css/Songs.767cc30c.css",revision:"d1ce4363d73f7e4c6883d953e1e031d5"},{url:"/css/app.289065ac.css",revision:"e1630ca4b82137283d9eb8dc440df5da"},{url:"/css/chunk-vendors.73beaac3.css",revision:"af0f0b1614c3e12bf17bc57f6b4cd16f"},{url:"/favicon.ico",revision:"75f9a23a5161789181984cd3684d9abe"},{url:"/fonts/element-icons.535877f5.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"/fonts/element-icons.732389de.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"/icon/144.png",revision:"e1fdc29aee6ccdb61fd04813e78cef26"},{url:"/icon/192.png",revision:"81b116805b250c29621536f21a8d5daf"},{url:"/icon/256.png",revision:"587d9138dc9eefb999b5b0dfa3563947"},{url:"/icon/48.png",revision:"1358458d7ad8b7bca3256ef281685d47"},{url:"/icon/512.png",revision:"c6a242bc5a4fffa3c1da8d83db78becc"},{url:"/icon/72.png",revision:"e59a39466a3a4a038153b801819942fc"},{url:"/icon/96.png",revision:"680842f44984c0649dc0ff26d64e2022"},{url:"/img/play-bar.e5a7a142.png",revision:"e5a7a1420384639f27927dd0b5e64edb"},{url:"/index.html",revision:"4849890d17560ec9172116252555b857"},{url:"/js/Discovery.63144fbd.js",revision:"f9e7f0c96b4cd425e6ffc823e7c44e05"},{url:"/js/Mv.2ab70c2a.js",revision:"55fbed73b32e8ff3becc137302346679"},{url:"/js/Mvs.64c43bcb.js",revision:"9b7e7df98c0146662173555deefcd9db"},{url:"/js/PlaylistDetail.e5f5629a.js",revision:"a984a4c97d998c4fac9e8cae7111eda8"},{url:"/js/Playlists.af0387e2.js",revision:"96fe625117489c48e26df6ebd6b51abe"},{url:"/js/Search.1aeab22f.js",revision:"83a8ad9e015c84e31722d13e333a692b"},{url:"/js/SearchMvs.604af638.js",revision:"a8891965e9f4227b57e8a33275adb47b"},{url:"/js/SearchPlaylists.f5167424.js",revision:"251e76d5a6eb65e4aecf9fa87ae4093a"},{url:"/js/SearchSongs.22c0f406.js",revision:"4a0e1f2ceafda9dc1a6dac43b0b6f62b"},{url:"/js/Songs.67127f5f.js",revision:"98496097640b2ac3576e1507bf520df2"},{url:"/js/app.eb54ff88.js",revision:"9cf5e6edf23978c93c24c2843e4494fb"},{url:"/js/chunk-vendors.68d2ab0b.js",revision:"be697923cebe97248548edd86e20da03"},{url:"/manifest.json",revision:"db146e79e5a76c0e938c7d3ff45e8fe1"}],{})}));
