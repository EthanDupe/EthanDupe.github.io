(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(e,t,o){"use strict";var n=o(18),r=(o(15),o(34),o(47),{install:function(e,t){var o=[],r=[],l=[],c=[];e.mixin({beforeDestroy:function(){o.forEach((function(e){return window.clearTimeout(e)})),r.forEach((function(e){return window.clearInterval(e)})),l.forEach((function(e){var t=Object(n.a)(e,2),o=t[0],r=t[1];return window.removeEventListener(o,r)})),c.forEach((function(e){return window.cancelAnimationFrame(e.id)})),o=[],r=[],l=[],c=[]}}),e.prototype.$setInterval=function(e,t){r.push(window.setInterval(e,t))},e.prototype.$setTimeout=function(e,t){o.push(window.setTimeout(e,t))},e.prototype.$requestAnimationFrame=function(e){var t={id:null};requestAnimationFrame((function o(time){e(time),t.id=requestAnimationFrame(o)})),c.push(t)},e.prototype.$addEventListener=function(e,t,o){l.push([e,t]),window.addEventListener(e,t,o)}}});o(1).default.use(r)},136:function(e,t,o){"use strict";var n=o(1),r=o(195);n.default.use(r.a,{config:{id:"G-L7MJCSDHKV",params:{send_page_view:!0}}})},190:function(e,t,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(108).default)("2ccdeb7a",content,!0,{sourceMap:!1})},191:function(e,t,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(108).default)("14659720",content,!0,{sourceMap:!1})},198:function(e,t,o){"use strict";var n={mounted:function(){document.body.style.background="white"},head:function(){return this.$store.getters.getMeta(this.$route.path)}},r=(o(268),o(28)),component=Object(r.a)(n,(function(){var e=this._self._c;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},199:function(e,t,o){"use strict";var n={},r=(o(272),o(28)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",[e("iframe",{staticClass:"old-frame",attrs:{src:"http://old.neal.fun.s3-website-us-east-1.amazonaws.com/draw-your-island/"}})])}],!1,null,"167fb083",null);t.a=component.exports},220:function(e,t,o){o(221),e.exports=o(222)},268:function(e,t,o){"use strict";o(190)},269:function(e,t,o){var n=o(107),r=o(200),l=o(270),c=o(271),d=n(!1),h=r(l),f=r(c);d.push([e.i,"@font-face{font-family:Roboto;src:url("+h+")}@font-face{font-family:Roboto;font-weight:700;src:url("+f+")}html{font-size:16px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#000;font-family:Roboto,sans-serif;background:#fff}*,:after,:before{box-sizing:border-box;margin:0}.simple-page{background:#f1f2f6}.pw_report_ad_container{display:none!important}",""]),e.exports=d},270:function(e,t,o){e.exports=o.p+"fonts/Roboto-Medium.70ace38.woff2"},271:function(e,t,o){e.exports=o.p+"fonts/Roboto-Bold.002079d.woff2"},272:function(e,t,o){"use strict";o(191)},273:function(e,t,o){var n=o(107)(!1);n.push([e.i,".old-frame[data-v-167fb083]{position:fixed;top:0;left:0;width:100%;height:100%;border:none}",""]),e.exports=n},274:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return n})),o.d(t,"getters",(function(){return r}));o(208),o(15);var n=function(){return{homeMeta:{title:"Neal.fun",link:[{rel:"canonical",href:"https://neal.fun"},{rel:"icon",type:"image/png",href:"/favicons/home.png"}],meta:[{name:"title",content:"Neal.fun"},{name:"description",content:"Games, visualizations, interactives and other weird stuff."}]},posts:[{title:"Infinite Craft",socialDesc:"An endless crafting game",desc:"A crafting game where you can make anything. No really it's pretty much endless I think.",path:"infinite-craft",preload:!0},{title:"Internet Artifacts",socialDesc:"Browse through the old internet",desc:"",path:"internet-artifacts",preload:!1},{title:"The Password Game",socialDesc:"Please choose a password",desc:"Please choose a password",path:"password-game",preload:!1},{title:"Space Elevator",socialDesc:"Take a trip to space!",desc:"Take a trip to space and explore the atmosphere in the world's only space elevator.",path:"space-elevator",preload:!0},{title:"Asteroid Launcher",socialDesc:"Design your own asteroid and launch it at Earth!",desc:"An asteroid simulator that lets you design your own asteroid and launch it at Earth. Simulate the effects of an asteroid impact on Earth's population.",path:"asteroid-launcher",preload:!1},{title:"Draw a Perfect Circle ⭕️💯",socialDesc:"How good are your circle drawing skills?",desc:"A game that tests your circle drawing skills. Try to draw a perfect circle and see how close you can get.",path:"perfect-circle",preload:!0},{title:"Wonders of Street View",socialDesc:"Explore the weird and wonderful things on Google Street View",desc:"Explore the weird and wonderful things on Google Street View. Funny-looking buildings, strange costumes, and much more.",path:"wonders-of-street-view",preload:!0},{title:"Days Since Incident",socialDesc:"Tracking natural disasters on Earth",desc:"Tracking natural disasters on Earth. See how many days have passed since the last earthquake, volcanic eruption, hurricane & more.",path:"days-since-incident",preload:!0},{title:"Design the next iPhone",socialDesc:"Apple is running out of ideas and needs your help.",desc:"Design your dream iPhone with this interactive 3D builder. Tim Cook needs your help to make Apple's next masterpiece.",path:"design-the-next-iphone",preload:!1},{title:"Absurd Trolley Problems",socialDesc:"Every problem is the trolley problem.",desc:"A game that gives you increasingly absurd trolley problems. Help humanity solve philosophy by solving all the trolley problems.",path:"absurd-trolley-problems",preload:!0},{title:"Earth Reviews",socialDesc:"Help improve the simulation.",desc:"A review site for Earth itself. Review things on Earth to help improve the simulation.",path:"earth-reviews",preload:!0},{title:"Privacy Policy",socialDesc:"",desc:"",path:"privacy-policy",hidden:!0},{title:"Let's Settle This",socialDesc:"It's time to settle the endless internet debates.",desc:"Help the internet solve age-old debates so we can finally move on. How do you pronounce GIF? Chunky or smooth peanut butter? Is cereal a soup?",path:"lets-settle-this",preload:!0},{title:"Ambient Chaos",socialDesc:"Ambient music gone a little too far...",desc:"An ambient sound maker that goes a little too far. Sleep to rain mixed in with construction sounds and arguing couples.",path:"ambient-chaos",preload:!0},{title:"Ten Years Ago",socialDesc:"What did the internet look like ten years ago?",desc:"See what the internet looked like exactly ten years ago today.",path:"ten-years-ago",preload:!0,hidden:!0},{title:"Rocks",socialDesc:"Stack rocks I guess",desc:"A peaceful rock stacking game.",path:"rocks",preload:!1},{title:"Sell! Sell! Sell!",socialDesc:"Visualizing the products that won capitalism.",desc:"A visualization of the most sold products around the world. See how many Big Mac's are sold every second.",path:"sell-sell-sell",preload:!0},{title:"Universe Forecast",socialDesc:"What does the future look like?",desc:"See what the future of the universe will look like. Scroll past as the sun explodes and Andromeda collides with the Milky Way.",path:"universe-forecast",preload:!0},{title:"The Auction Game",socialDesc:"Can you guess the price of these paintings?",desc:"A game where you have to guess the prices of paintings sold at auction.",path:"auction-game",preload:!0},{title:"Printing Money",socialDesc:"Visualize the flow of money",desc:"A visualization of salaries and company profits. See how your salary compares to CEOs.",path:"printing-money",preload:!0},{title:"Life Stats",socialDesc:"Find out what's happened in your lifetime.",desc:"Find out what has happened in your lifetime. How many times have you blinked? How much has the stock market gone up?",path:"life-stats",preload:!0},{title:"The Deep Sea",socialDesc:"Scroll down the deep sea in this interactive page.",desc:"An interactive page that lets you scroll down the ocean. Visit the great depths of the Mariana Trench and discover all the sea creatures hidden beneath.",path:"deep-sea",preload:!0},{title:"The Size of Space",socialDesc:"Explore the scale of the universe",desc:"An interactive visualization of the enormous objects in our universe. See how the Earth compares to the Sun, black holes and the Milky Way.",path:"size-of-space",preload:!1},{title:"Share This Page",socialDesc:"There are so many ways to share this page",desc:"There are so many ways to share this page.",path:"share-this-page",preload:!0},{title:"Dark Patterns",socialDesc:"See how companies use dark patterns to influence your behavior",desc:"See how companies use dark patterns to influence your behavior.",path:"dark-patterns",hideInRecommended:!0,preload:!0},{title:"Who Was Alive?",socialDesc:"View history in a new way",desc:"See which historical figures were alive at the same time.",path:"who-was-alive",preload:!1},{title:"Where does the day go?",socialDesc:"Why does it often feel like you have no time?",desc:"An interactive article about why days can feel so short.",path:"where-does-the-day-go",hideInRecommended:!0},{title:"Life Checklist",socialDesc:"How many items have you completed?",desc:"A checklist for the average human life. How many items have you completed?",path:"life-checklist",preload:!0},{title:"Speed",socialDesc:"See how fast you're moving right now!",desc:"See how fast you're moving right now in the universe.",path:"speed",hideInRecommended:!0,preload:!0},{title:"Paper",socialDesc:"What happens if you keep folding a piece of paper?",desc:"An interactive visualization of what happens if you keep folding a piece of paper.",path:"paper",preload:!0},{title:"Draw Logos From Memory",socialDesc:"How well can you draw famous logos?",desc:"Try your best to draw famous logos from your memory. How well do you remember them?",path:"logos-from-memory",preload:!0},{title:"Progress",socialDesc:"Visualizing the world with progress bars",desc:"Visualizing the world with progress bars. How long until the next minute? Christmas? Death of the universe?",path:"progress",preload:!1},{title:"Spend Bill Gates' Money",socialDesc:"What would you do with 100 billion dollars?",desc:"An interactive game that lets you spend Bill Gates' money. What would you do with 100 billion dollars?",path:"spend",preload:!0},{title:"Baby Map",socialDesc:"Where are babies being born?",desc:"A map visualization of where babies are being born.",path:"baby-map",preload:!1},{title:"Draw Your Island",socialDesc:"What would you island have?",desc:"",path:"draw-your-island",hidden:!0},{title:"Macaroni Draw",socialDesc:"Make your masterpiece",desc:"",path:"macaroni-draw",hidden:!0},{title:"Conquer the World",socialDesc:"How many countries have you visited?",desc:"",path:"conquer-the-world",hidden:!0}]}},r={getMeta:function(e){return function(path){if("/"===path)return e.homeMeta;var t=e.posts.find((function(e){return"/".concat(e.path,"/")===path}));if(!t)return{link:[],meta:[],title:""};var o="https://neal.fun",n="".concat(o,"/").concat(t.path,"/"),r="".concat(o,"/share-cards/").concat(t.path,".png");"absurd-trolley-problems"===t.path&&(r="".concat(o,"/share-cards/").concat(t.path,"2.png")),"asteroid-launcher"===t.path&&(r="".concat(o,"/share-cards/").concat(t.path,"2.png")),"password-game"===t.path&&(r="".concat(o,"/share-cards/").concat(t.path,".png?v=2"));var l="/favicons/".concat(t.path,".png");return{title:t.title,link:[{rel:"canonical",href:n},{rel:"icon",type:"image/png",href:l}],meta:[{name:"title",content:t.title},{name:"description",content:t.desc},{property:"og:type",content:"website"},{property:"og:url",content:n},{property:"og:title",content:t.title},{property:"og:description",content:t.socialDesc},{property:"og:image",content:r},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:n},{property:"twitter:image",content:r},{property:"twitter:title",content:t.title},{property:"twitter:description",content:t.socialDesc}]}}}}},38:function(e,t,o){"use strict";var n={mounted:function(){}},r=o(28),component=Object(r.a)(n,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.a=component.exports}},[[220,53,9,54]]]);