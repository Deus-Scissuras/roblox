<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="robots" content="noindex,nofollow,noarchive"/>
        <link rel="preload" as="script" href="https://www.googletagservices.com/tag/js/gpt.js"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.now.gg/apps-content/common/img/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="192x192" href="https://cdn.now.gg/apps-content/common/img/favicon.ico"/>
        <script>
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
            });
        </script>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-PRM8BWR"></script>
        <script>
            !function() {
                var e = document.createElement("script")
                  , t = document.getElementsByTagName("script")[0]
                  , a = "https://cmp.quantcast.com".concat("/choice/", "mw9xJtqPQGFbC", "/", "now.gg", "/choice.js?tag_version=V2")
                  , n = 0;
                e.async = !0,
                e.type = "text/javascript",
                e.src = a,
                t.parentNode.insertBefore(e, t),
                function() {
                    for (var e, t = "__tcfapiLocator", a = [], n = window; n; ) {
                        try {
                            if (n.frames.__tcfapiLocator) {
                                e = n;
                                break
                            }
                        } catch (e) {}
                        if (n === window.top)
                            break;
                        n = n.parent
                    }
                    e || (!function e() {
                        var a = n.document
                          , i = !!n.frames.__tcfapiLocator;
                        if (!i)
                            if (a.body) {
                                var o = a.createElement("iframe");
                                o.style.cssText = "display:none",
                                o.name = t,
                                a.body.appendChild(o)
                            } else
                                setTimeout(e, 5);
                        return !i
                    }(),
                    n.__tcfapi = function() {
                        var e, t = arguments;
                        if (!t.length)
                            return a;
                        if ("setGdprApplies" === t[0])
                            t.length > 3 && 2 === t[2] && "boolean" == typeof t[3] && (e = t[3],
                            "function" == typeof t[2] && t[2]("set", !0));
                        else if ("ping" === t[0]) {
                            var n = {
                                gdprApplies: e,
                                cmpLoaded: !1,
                                cmpStatus: "stub"
                            };
                            "function" == typeof t[2] && t[2](n)
                        } else
                            "init" === t[0] && "object" == typeof t[3] && (t[3] = Object.assign(t[3], {
                                tag_version: "V2"
                            })),
                            a.push(t)
                    }
                    ,
                    n.addEventListener("message", (function(e) {
                        var t = "string" == typeof e.data
                          , a = {};
                        try {
                            a = t ? JSON.parse(e.data) : e.data
                        } catch (e) {}
                        var n = a.__tcfapiCall;
                        n && window.__tcfapi(n.command, n.version, (function(a, i) {
                            var o = {
                                __tcfapiReturn: {
                                    returnValue: a,
                                    success: i,
                                    callId: n.callId
                                }
                            };
                            t && (o = JSON.stringify(o)),
                            e && e.source && e.source.postMessage && e.source.postMessage(o, "*")
                        }
                        ), n.parameter)
                    }
                    ), !1))
                }();
                var i = function() {
                    var e = arguments;
                    typeof window.__uspapi !== i && setTimeout((function() {
                        void 0 !== window.__uspapi && window.__uspapi.apply(window.__uspapi, e)
                    }
                    ), 500)
                };
                if (void 0 === window.__uspapi) {
                    window.__uspapi = i;
                    var o = setInterval((function() {
                        n++,
                        window.__uspapi === i && n < 3 ? console.warn("USP is not accessible") : clearInterval(o)
                    }
                    ), 6e3)
                }
            }();
        </script>
        <script>
            window.__tcfapi('addEventListener', 2, function(tcData) {
                var _a;

                var eventStatus = tcData === null || tcData === void 0 ? void 0 : tcData.eventStatus;
                var consents = (_a = tcData === null || tcData === void 0 ? void 0 : tcData.vendor) === null || _a === void 0 ? void 0 : _a.consents;
                var gdprApplies = tcData === null || tcData === void 0 ? void 0 : tcData.gdprApplies;
                sessionStorage.setItem('gdprApplies', gdprApplies ? 'true' : 'false');

                if (eventStatus === 'useractioncomplete' || eventStatus === 'tcloaded' && gdprApplies) {
                    if (consents) {
                        var isConsentAvailable = !!Object.keys(consents).length;
                        sessionStorage.setItem('userConsent', isConsentAvailable ? 'true' : 'false');
                    }
                }
            });
        </script>
        <meta name="next-font-preconnect"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"/>
        <meta httpEquiv="Cache-control" content="no-cache, no-store, must-revalidate"/>
        <meta httpEquiv="Pragma" content="no-cache"/>
        <script>
            if (typeof window !== 'undefined') {
                (function() {
                    let random = bytes=>crypto.getRandomValues(new Uint8Array(bytes));
                    let customRandom = (alphabet,defaultSize,getRandom)=>{
                        let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1;
                        let step = -~((1.6 * mask * defaultSize) / alphabet.length);
                        return (size=defaultSize)=>{
                            let id = ''
                            while (true) {
                                let bytes = getRandom(step)
                                let j = step
                                while (j--) {
                                    id += alphabet[bytes[j] & mask] || ''
                                    if (id.length === size)
                                        return id
                                }
                            }
                        }
                    }
                    let customAlphabet = (alphabet,size=21)=>customRandom(alphabet, size, random)
                    const nanoid = customAlphabet('useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict', 21);
                    var Storage = {
                        valuesMap: new Map,
                        getItem(a) {
                            var b = String(a);
                            return this.valuesMap.has(a) ? String(this.valuesMap.get(b)) : null
                        },
                        setItem(a, b) {
                            this.valuesMap.set(String(a), String(b))
                        },
                        removeItem(a) {
                            this.valuesMap.delete(a)
                        },
                        clear() {
                            this.valuesMap.clear()
                        },
                        key(a) {
                            if (!a)
                                throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");
                            return this.valuesMap.get(a)
                        },
                        get length() {
                            return this.valuesMap.size
                        }
                    }
                    var isNewUser = false;
                    try {
                        localStorage.setItem("test", "test");
                        localStorage.removeItem("test");
                    } catch (e) {
                        Object.defineProperty(window, "localStorage", {
                            value: Object.assign({}, Storage),
                            configurable: !0,
                            enumerable: !0,
                            writable: !0
                        })
                    }

                    try {
                        sessionStorage.setItem("test", "test");
                        sessionStorage.removeItem("test");
                    } catch (e) {
                        Object.defineProperty(window, "sessionStorage", {
                            value: Object.assign({}, Storage),
                            configurable: !0,
                            enumerable: !0,
                            writable: !0
                        })
                    }

                    if (!localStorage.getItem("fe_uaId")) {
                        isNewUser = true;
                        sessionStorage.setItem("isNewUser", "true");
                        localStorage.setItem("fe_uaId", "ua-" + nanoid());
                    } else {
                        sessionStorage.removeItem("isNewUser");
                    }
                    if (!sessionStorage.getItem("fe_uaSessionId")) {
                        sessionStorage.setItem("fe_uaSessionId", "uasess-" + nanoid());
                    }

                    if (window && window.history && window.history.pushState && window.location.href.indexOf("?") > -1) {
                        let g = new URL(window.location.href);
                        a = new URLSearchParams(g.search);
                        c = a.get("utm_source");
                        c && sessionStorage.setItem("utm_source", c);
                        let d = a.get("utm_campaign");
                        d && sessionStorage.setItem("utm_campaign", d);
                        let e = a.get("utm_medium");
                        e && sessionStorage.setItem("utm_medium", e);
                        let f = a.get("deep_link");
                        f && sessionStorage.setItem("deep_link", f);
                        let h = a.get("access_code");
                        h && sessionStorage.setItem("access_code", h);
                        var final = window.location.href.split("?")[0];
                        if (final != window.location.href) {
                            window.history.pushState(null, document.title, final);
                        }
                    }

                    const getCookie = (cname)=>{
                        if (!navigator.cookieEnabled)
                            return '';
                        if (typeof document !== 'undefined') {
                            const name = cname + "=";
                            const ca = document.cookie.split(';');
                            for (let i = 0; i < ca.length; i += 1) {
                                let c = ca[i];
                                while (c.charAt(0) === ' ')
                                    c = c.substring(1);
                                if (c.indexOf(name) === 0)
                                    return c.substring(name.length, c.length);
                            }
                        }
                        return '';
                    }
                    window.gameInfo = {
                        id: "5349",
                        fsWidget: {
                            x: 40,
                            y: 15,
                        }
                    }
                    const deviceType = !!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) ? 'ipad' : '';
                    const payload = {
                        appId: "5349",
                        uaId: localStorage.getItem("fe_uaId") || "NA",
                        userType: "NA",
                        uaSessionId: sessionStorage.getItem("fe_uaSessionId") || "NA",
                        packageName: "com.roblox.client",
                        originTimestamp: new Date(),
                        eventName: "FeBootstrap",
                        extraData: isNewUser ? {
                            isNewUaId: true
                        } : {},
                        deviceType: deviceType || '',
                        utmSource: sessionStorage.getItem("utm_source") || getCookie('utm_source') || "NA",
                        utmMedium: sessionStorage.getItem("utm_medium") || getCookie('utm_medium') || "NA",
                        utmCampaign: sessionStorage.getItem("utm_campaign") || getCookie('utm_campaign') || "NA"
                    };
                    window.addEventListener('pageshow', (event)=>{
                        if (event.persisted) {
                            window.location.reload();
                        }
                    }
                    );
                    fetch("/1/api/play/v1/playReportEvent", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "x-ngg-fe-version": "berlin-v1.8.5.1"
                        },
                        body: JSON.stringify(payload)
                    }).then(response=>{
                        if (response.status === 205) {
                            window.location.reload();
                        }
                    }
                    ).catch(e=>{}
                    )
                    try {
                        ["start-url", "media", "now-gg-precache"].forEach(a=>{
                            caches.delete(a);
                        }
                        );
                    } catch (e) {}
                }
                )()
            }
        </script>
        <meta name="robots" content="noindex"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:title" content="Roblox"/>
        <meta property="og:description" content="Play instantly in browser with now.gg"/>
        <meta property="og:url" content="https://www.roblox.com/"/>
        <meta property="og:site_name" content="https://www.roblox.com/"/>
        <meta property="og:image:secure_url" itemProp="image" content="https://cdn.now.gg/apps-content/com.roblox.client/ogimage/roblox.jpg"/>
        <meta property="og:image:width" content="1482"/>
        <meta property="og:image:height" content="486"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Roblox"/>
        <meta name="twitter:description" content="Play instantly in browser with now.gg"/>
        <meta name="twitter:image" content="https://cdn.now.gg/apps-content/com.roblox.client/ogimage/roblox.jpg"/>
        <title>Play Roblox Online™</title>
        <meta name="apple-mobile-web-app-title" content="Roblox"/>
        <link rel="apple-touch-icon" href="https://cdn.now.gg/apps-content/com.roblox.client/pwa/Icon_192.png"/>
        <meta name="description" content="Play Roblox android game in the browser on your PC or mobile. No download required."/>
        <style data-type="ng-fonts" id="bm93Lmdn">
            @font-face {
                font-family: 'icomoon';
                src: url('/1/play/fonts/icomoon.eot?ow6spm');
                src: url('/1/play/fonts/icomoon.eot?ow6spm#iefix') format('embedded-opentype'), url('/1/play/fonts/icomoon.ttf?ow6spm') format('truetype'), url('/1/play/fonts/icomoon.woff?ow6spm') format('woff'), url('/1/play/fonts/icomoon.svg?ow6spm#icomoon') format('svg');
                font-weight: normal;
                font-style: normal;
                font-display: block;
            }
        </style>
        <meta name="next-head-count" content="24"/>
        <link rel="preload" href="/1/play/_next/static/css/a9c637291e4a50ef.css" as="style"/>
        <link rel="stylesheet" href="/1/play/_next/static/css/a9c637291e4a50ef.css" data-n-g/>
        <noscript data-n-css></noscript>
        <script defer noModule src="/1/play/_next/static/chunks/polyfills-5cd94c89d3acac5f.js"></script>
        <script src="/1/play/_next/static/chunks/webpack-8073317c1406399d.js" defer></script>
        <script src="/1/play/_next/static/chunks/framework-37f184a7445c0fca.js" defer></script>
        <script src="/1/play/_next/static/chunks/main-6115e9ec8ed9fa75.js" defer></script>
        <script src="/1/play/_next/static/chunks/pages/_app-3a1e61858fc33531.js" defer></script>
        <script src="/1/play/_next/static/chunks/675-1539a2a581a5ea1e.js" defer></script>
        <script src="/1/play/_next/static/chunks/661-be1f7fd94b6d9ad1.js" defer></script>
        <script src="/1/play/_next/static/chunks/333-6df97546fd7d6b78.js" defer></script>
        <script src="/1/play/_next/static/chunks/pages/index-3c3668938e77893f.js" defer></script>
        <script src="/1/play/_next/static/cm6tAjmRaujh1UiuEjGxl/_buildManifest.js" defer></script>
        <script src="/1/play/_next/static/cm6tAjmRaujh1UiuEjGxl/_ssgManifest.js" defer></script>
        <script src="/1/play/_next/static/cm6tAjmRaujh1UiuEjGxl/_middlewareManifest.js" defer></script>
        <style data-styled data-styled-version="5.3.3">
            .jWcAJa {
                width: 100%;
                height: calc(var(--vh,1vh) * 100);
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                pointer-events: none;
            }

            /*!sc*/
            .jWcAJa:after {
                content: '';
                background-color: rgba(0,0,0,0.7);
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }

            /*!sc*/
            data-styled.g5[id="sc-eCImPb"] {
                content: "jWcAJa,"
            }

            /*!sc*/
            .SBVec {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100vw;
                height: calc(var(--vh,1vh) * 100);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background-color: #0b0223;
            }

            /*!sc*/
            .SBVec .drag-react.--mobile {
                touch-action: none;
                padding: 8px;
                width: 56px;
                border-bottom-right-radius: 100px;
                border-bottom-left-radius: 100px;
            }

            /*!sc*/
            .SBVec .drag-react.--mobile.--show {
                background: #1F1637;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                pointer-events: all;
            }

            /*!sc*/
            .SBVec .drag-react.--mobile.--hide {
                min-height: 90px;
                background: rgba(0,0,0,0.7);
                border: 1px solid rgba(255,255,255,0.2);
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                gap: 16px;
            }

            /*!sc*/
            body.rotate-screen .sc-jRQBWg,body.portrait-mode .SBVec {
                width: 100%;
                height: 100%;
            }

            /*!sc*/
            data-styled.g6[id="sc-jRQBWg"] {
                content: "SBVec,"
            }

            /*!sc*/
            *,*::after,*::before {
                box-sizing: border-box;
            }

            /*!sc*/
            html {
                font-size: 10px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                accent-color: #FF42A5;
            }

            /*!sc*/
            body {
                margin: 0;
                padding: 0;
                font-family: Fredoka,sans-serif;
                -webkit-scrollbar-width: none;
                -moz-scrollbar-width: none;
                -ms-scrollbar-width: none;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }

            /*!sc*/
            h1,h2,h3,h4,h5,h6,p {
                margin: 0 0 0.5em 0;
            }

            /*!sc*/
            a {
                color: #fff;
            }

            /*!sc*/
            a:visited,a:hover,a:focused {
                color: #fff;
            }

            /*!sc*/
            ::-webkit-scrollbar {
                display: none;
                width: 0px;
            }

            /*!sc*/
            input[type="checkbox" i] {
                width: 16px;
                height: 16px;
                cursor: pointer;
                outline: 1px solid #FF42A5;
            }

            /*!sc*/
            label:focus-within {
                border: none;
                outline: 1px solid #FF42A5;
            }

            /*!sc*/
            body {
                overflow: hidden;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100vw;
                height: 100vh;
            }

            /*!sc*/
            @media only screen and (orientation: portrait) {
                body.rotate-screen {
                    display:-webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-transform: rotate(90deg);
                    -ms-transform: rotate(90deg);
                    transform: rotate(90deg);
                    -webkit-transform-origin: bottom left;
                    -ms-transform-origin: bottom left;
                    transform-origin: bottom left;
                    position: absolute;
                    top: -100vw;
                    height: 100vw;
                    width: 100vmax;
                    background: #000000;
                    overflow: hidden;
                }
            }

            /*!sc*/
            @media only screen and (orientation: landscape) and (max-height:575.98px) {
                body.portrait-mode {
                    -webkit-transform:rotate(-90deg);
                    -ms-transform: rotate(-90deg);
                    transform: rotate(-90deg);
                    -webkit-transform-origin: top right;
                    -ms-transform-origin: top right;
                    transform-origin: top right;
                    position: absolute;
                    top: 0;
                    right: 100vw;
                    height: 100vw;
                    width: 100vh;
                    background: black !important;
                    overflow: hidden;
                }
            }

            /*!sc*/
            body #__next {
                width: 100%;
                height: 100%;
            }

            /*!sc*/
            .overlayKey {
                position: absolute;
                min-width: 25px;
                text-align: center;
                -webkit-transition: left 0.1s ease-in-out,top 0.1s ease-in-out;
                transition: left 0.1s ease-in-out,top 0.1s ease-in-out;
                z-index: 1;
                opacity: 0.75;
                pointer-events: none;
            }

            /*!sc*/
            .overlayKey.MOBASkill .overlayKeyValue:not(.MobaText),.overlayKey.LBM .overlayKeyValue:not(.MobaText) {
                background: none;
                border: none;
            }

            /*!sc*/
            .overlayKey.MOBASkill .overlayKeyValue:not(.MobaText) img,.overlayKey.LBM .overlayKeyValue:not(.MobaText) img {
                width: 26px;
            }

            /*!sc*/
            .overlayKey.FreeLook.gamepad .overlayKeyValue {
                position: absolute;
            }

            /*!sc*/
            .overlayKey.Dpad > span {
                position: absolute;
            }

            /*!sc*/
            .overlayKey.Pan::before,.overlayKey.Pan::after {
                content: "";
            }

            /*!sc*/
            .overlayKey.Pan::before {
                height: 78px;
                width: 1px;
                position: absolute;
                background: white;
                -webkit-transform: translate3d(-20px,-37px,10px);
                -ms-transform: translate3d(-20px,-37px,10px);
                transform: translate3d(-20px,-37px,10px);
            }

            /*!sc*/
            .overlayKey.Pan::after {
                width: 78px;
                height: 1px;
                position: absolute;
                background: white;
                -webkit-transform: translate3d(-59px,-40px,10px);
                -ms-transform: translate3d(-59px,-40px,10px);
                transform: translate3d(-59px,-40px,10px);
            }

            /*!sc*/
            .overlayKey.Pan.gamepad::before,.overlayKey.Pan.gamepad::after {
                display: none;
            }

            /*!sc*/
            .overlayKey.Pan.gamepad .overlayKeyValue {
                width: auto;
                height: auto;
                padding: 10px;
            }

            /*!sc*/
            .overlayKey.Pan.gamepad .overlayKeyValue::before {
                display: none;
            }

            /*!sc*/
            .overlayKey.Pan .overlayKeyValue {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                position: relative;
                z-index: 1;
                -webkit-transition: box-shadow 0.3s ease-in-out;
                transition: box-shadow 0.3s ease-in-out;
            }

            /*!sc*/
            .overlayKey.Pan .overlayKeyValue::before {
                content: "";
                position: absolute;
                width: 52px;
                height: 52px;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                border: 1px solid white;
                border-radius: 50%;
                -webkit-transform: translate3d(-8px,-8px,10px);
                -ms-transform: translate3d(-8px,-8px,10px);
                transform: translate3d(-8px,-8px,10px);
            }

            /*!sc*/
            .overlayKeyValue {
                display: block;
                font-size: 12px;
                line-height: 1.1;
                border-radius: 9px;
                padding: 2px 6px;
                background-color: rgba(8,10,31,0.85);
                border: 1px solid #f7faff;
                position: relative;
                white-space: nowrap;
                -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
                color: #f7faff;
            }

            /*!sc*/
            .overlayKeyValue svg {
                width: 16px;
                height: 23px;
            }

            /*!sc*/
            .overlayKeyValue.DpadImage {
                background: none;
                border: none;
            }

            /*!sc*/
            .overlayKeyValue.DpadImage img {
                width: 26px;
            }

            /*!sc*/
            .simplebar-scrollbar:before {
                background-color: rgba(255,255,255,0.5);
                top: 30px;
                bottom: 20px;
                right: 5px;
            }

            /*!sc*/
            .Toastify__toast-container--top-center {
                top: 100px;
            }

            /*!sc*/
            .Toastify__toast-theme--colored.Toastify__toast--default {
                background-color: rgba(0,0,0,0.8);
                border: 1px solid rgba(255,255,255,0.2);
                -webkit-backdrop-filter: blur(24px);
                backdrop-filter: blur(24px);
                border-radius: 4px;
            }

            /*!sc*/
            .Toastify__toast-theme--colored.Toastify__toast--default .Toastify__toast-body {
                font-size: 16px;
                -webkit-letter-spacing: 0.5px;
                -moz-letter-spacing: 0.5px;
                -ms-letter-spacing: 0.5px;
                letter-spacing: 0.5px;
                line-height: 1.5em;
            }

            /*!sc*/
            .Toastify__toast-theme--colored.Toastify__toast--default .Toastify__toast-body div {
                text-align: center;
                color: #ffffff;
            }

            /*!sc*/
            .Toastify__toast-theme--colored.Toastify__toast--default .Toastify__toast-body div > kbd {
                color: #0B0223;
                background: #EEE3D9;
                padding: 6px 10px;
                border: 1px solid;
                margin: 0 2px;
                font-weight: 500;
                font-size: 14px;
                line-height: 19px;
                border-radius: 4px;
            }

            /*!sc*/
            .Toastify__toast-container.Toastify__toast-container--top-center {
                width: 420px;
            }

            /*!sc*/
            .Toastify__close-button--colored {
                display: none;
            }

            /*!sc*/
            .select-container {
                margin: 8px 0 0 0;
            }

            /*!sc*/
            .select-container .select__control {
                cursor: pointer;
                background: rgba(255,255,255,0.1);
                border: none;
            }

            /*!sc*/
            .select-container .select__indicator-separator {
                display: none;
            }

            /*!sc*/
            .select-container .select__placeholder,.select-container .select__single-value {
                color: rgba(255,255,255,0.6);
                font-size: 14px;
            }

            /*!sc*/
            .select-container .select__menu {
                color: rgba(255,255,255,0.6);
                background: #444;
            }

            /*!sc*/
            .select-container .select__option:hover {
                color: #aaa;
                background: rgba(0,0,0,.4);
                cursor: pointer;
            }

            /*!sc*/
            .icon-gamepad.null {
                position: relative;
            }

            /*!sc*/
            .icon-gamepad.null:after {
                content: '';
                border: 2px;
                height: 29px;
                width: 1.5px;
                background: currentColor;
                position: absolute;
                -webkit-transform: rotate(40deg);
                -ms-transform: rotate(40deg);
                transform: rotate(40deg);
                left: 10px;
                top: -4px;
            }

            /*!sc*/
            .hidden {
                display: none;
                visibility: hidden;
            }

            /*!sc*/
            .btn-bar {
                position: relative;
                font-family: Audiowide,sans-serif;
                width: 120px;
                height: 44px;
                text-transform: uppercase;
            }

            /*!sc*/
            .btn-bar:after,.btn-bar:before {
                content: '';
                position: absolute;
                background: white;
                top: 9%;
                height: 4px;
                border-radius: 3px;
            }

            /*!sc*/
            .btn-bar:after {
                width: 10%;
                right: 16%;
            }

            /*!sc*/
            .btn-bar:before {
                width: 20%;
                right: 30%;
            }

            /*!sc*/
            .portal-page .quarter-4,.portal-page .quarter-5 {
                position: static;
                width: 50%;
                height: auto;
                rotate: none;
                background: none;
            }

            /*!sc*/
            .portal-page .quarter-4 > li,.portal-page .quarter-5 > li {
                position: static;
                rotate: none;
            }

            /*!sc*/
            .portal-page .quarter-4 > li > div,.portal-page .quarter-5 > li > div {
                position: relative;
            }

            /*!sc*/
            .portal-page .quarter-4 > li > div > img,.portal-page .quarter-5 > li > div > img {
                position: static;
            }

            /*!sc*/
            div .fit-html {
                width: calc(100% - 352px);
                left: 176px;
                height: auto;
            }

            /*!sc*/
            data-styled.g7[id="sc-global-cBrlcu1"] {
                content: "sc-global-cBrlcu1,"
            }

            /*!sc*/
        </style>
        <style data-href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap">
            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 400;
                font-stretch: normal;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3O8SLMFQ.woff) format('woff')
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 500;
                font-stretch: normal;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OwyLMFQ.woff) format('woff')
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 600;
                font-stretch: normal;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OLyXMFQ.woff) format('woff')
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 700;
                font-stretch: normal;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OFiXMFQ.woff) format('woff')
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 400;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWs89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 400;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWg89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 400;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWu89XgHPyh.woff2) format('woff2');
                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 500;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWs89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 500;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWg89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 500;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWu89XgHPyh.woff2) format('woff2');
                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 600;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWs89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 600;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWg89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 600;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWu89XgHPyh.woff2) format('woff2');
                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 700;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWs89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 700;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWg89XgHPyhRMw.woff2) format('woff2');
                unicode-range: U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
            }

            @font-face {
                font-family: 'Fredoka';
                font-style: normal;
                font-weight: 700;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/fredoka/v14/X7n64b87HvSqjb_WIi2yDCRwoQ_k7367_DWu89XgHPyh.woff2) format('woff2');
                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }
        </style>
        <style data-href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap">
            @font-face {
                font-family: 'Audiowide';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/audiowide/v16/l7gdbjpo0cum0ckerWCtkg.woff) format('woff')
            }

            @font-face {
                font-family: 'Audiowide';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/audiowide/v16/l7gdbjpo0cum0ckerWCdmA_OMRlABolM.woff2) format('woff2');
                unicode-range: U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF
            }

            @font-face {
                font-family: 'Audiowide';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/audiowide/v16/l7gdbjpo0cum0ckerWCdlg_OMRlABg.woff2) format('woff2');
                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }
        </style>
    </head>
    <body>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRM8BWR" height="0" width="0" style="display: none; visibility: hidden;"></iframe>
        </noscript>
        <div id="__next">
            <div class="sc-jRQBWg SBVec landscape">
                <div class="sc-eCImPb jWcAJa">
                    <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;" class="d-desk"/>
                        <noscript>
                            <img sizes="100vw" srcSet="/1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=640&amp;q=80 640w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=750&amp;q=80 750w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=828&amp;q=80 828w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=1080&amp;q=80 1080w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=1200&amp;q=80 1200w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=1920&amp;q=80 1920w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=2048&amp;q=80 2048w, /1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=3840&amp;q=80 3840w" src="/1/_next/image?url=https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg&amp;w=3840&amp;q=80" decoding="async" data-nimg="fill" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;" loading="lazy" class="d-desk"/>
                        </noscript>
                    </span>
                </div>
                <noscript style="margin: auto; border-radius: 20px; padding: 20px; text-align: center; font-size: x-large; color: #ffffff; background: rgba(0, 0, 0, 0.8);">You need to enable JavaScript to run this app.</noscript>
                <span></span>
            </div>
        </div>
        <script id="__NEXT_DATA__" type="application/json">
            {"props":{"pageProps":{"appInfo":{"status":"Success","appId":"5349","appName":"Roblox","appSlug":"roblox","appType":"Android","appDeveloperInfo":{"name":"Roblox Corporation","developerSlug":"roblox-corporation"},"appGenre":"Adventure","appPageUrl":"https://now.gg/apps/roblox-corporation/5349/roblox.html","initialOrientation":"landscape","packageName":"com.roblox.client","media":{"desktop":{"banner":"https://cdn.now.gg/apps-content/com.roblox.client/banner/desktop/roblox.jpg","launchVideo":"https://cdn.now.gg/apps-content/com.roblox.client/launch-video/desktop/roblox.mp4"},"icon":"https://cdn.now.gg/apps-content/com.roblox.client/icon/roblox.png","tile":"https://cdn.now.gg/apps-content/com.roblox.client/game-tiles/roblox.jpg","mobile":{"banner":"https://cdn.now.gg/apps-content/com.roblox.client/banner/mobile/roblox.jpg","launchVideo":"https://cdn.now.gg/apps-content/com.roblox.client/launch-video/mobile/roblox.mp4"},"logo":"https://cdn.now.gg/apps-content/com.roblox.client/logo/roblox.png"},"metaTags":"\u003cmeta name=\"robots\" content=\"noindex\"/\u003e\u003cmeta property=\"og:locale\" content=\"en_US\" /\u003e\u003cmeta property=\"og:title\" content=\"Roblox\" /\u003e\u003cmeta property=\"og:description\" content=\"Play instantly in browser with now.gg\" /\u003e\u003cmeta property=\"og:url\" content=\"https://www.roblox.com/\" /\u003e\u003cmeta property=\"og:site_name\" content=\"https://www.roblox.com/\" /\u003e\u003cmeta property=\"og:image\" itemprop=\"image\" content=\"https://cdn.now.gg/apps-content/com.roblox.client/ogimage/roblox.jpg\" /\u003e\u003cmeta property=\"og:image:secure_url\" itemprop=\"image\" content=\"https://cdn.now.gg/apps-content/com.roblox.client/ogimage/roblox.jpg\" /\u003e\u003cmeta property=\"og:image:width\" content=\"1482\" /\u003e\u003cmeta property=\"og:image:height\" content=\"486\" /\u003e\u003cmeta property=\"og:image:type\" content=\"image/jpeg\" /\u003e\u003cmeta name=\"twitter:card\" content=\"summary_large_image\" /\u003e\u003cmeta name=\"twitter:title\" content=\"Roblox\" /\u003e\u003cmeta name=\"twitter:description\" content=\"Play instantly in browser with now.gg\" /\u003e\u003cmeta name=\"twitter:image\" content=\"https://cdn.now.gg/apps-content/com.roblox.client/ogimage/roblox.jpg\" /\u003e\u003ctitle\u003ePlay Roblox Online™\u003c/title\u003e\u003cmeta name=\"apple-mobile-web-app-title\" content=\"Roblox\"/\u003e\u003clink rel=\"apple-touch-icon\" href=\"https://cdn.now.gg/apps-content/com.roblox.client/pwa/Icon_192.png\"\u003e\u003cmeta name=\"description\" content=\"Play Roblox android game in the browser on your PC or mobile. No download required.\" /\u003e","widgets":{"mobileMenu":{"top":10,"left":8},"desktopFullScreen":{"top":15,"left":40}},"imapCfgHost":"cloud.bluestacks.com","alternateUrlForProxies":"https://educationbluesky.com/play/roblox-corporation/5349/roblox","playTokenServiceHost":"netv2.now.gg","authServiceHost":"now.gg","embeddedGameUrl":"","playDomain":"now.gg","pwaNudgeDelayMs":600000,"authClientId":"zBC1LCs7s7IuZzxQP9oO$$01FM9VYWMSWR6SP42Q4S46Z0SY","authUseThirdPartyFlow":false,"wasmChromeTrialToken":"AjWOyGY8dRjPhlX5vVAbE+aTqEBUv2ZGcjwlrWPBT0g5xpjjO2K8a1OjEHKJ8SBvaYn5UIxImIRJotPF3zFlNgUAAABweyJvcmlnaW4iOiJodHRwczovL25vdy5nZzo0NDMiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE2ODgwODMxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==","areAdsEnabled":true,"isBrowsePortalEnabled":true,"isOverlayPortalEnabled":true,"playFeatures":{"enableLiveChat":false,"ads":{"desktop":{"enableDisplayAds":true,"enablePrerollAds":true,"enableMidrollAds":true},"experimentTypes":[],"mobile":{"enableDisplayAds":false,"enablePrerollAds":true,"enableMidrollAds":true}},"enableHotjar":true,"requireAuth":false}},"features":{"nativeKeyboard":true,"nativeMouse":["com.roblox.client/.game.ActivityGame","com.roblox.client.ActivityProtocolLaunch"],"mouseLock":true,"disableImap":false,"nativeControlsList":[{"key":"Movement","value":[{"key":"Movement","value":"W A S D"},{"key":"Jump","value":"Spacebar"}]},{"key":"Camera","value":[{"key":"Rotate Camera","value":"Right Click (Hold)"},{"key":"Pan Left","value":"Left Arrow"},{"key":"Pan Right","value":"Right Arrow"},{"key":"Zoom In/Out","value":"Mouse Wheel"},{"key":"Zoom In","value":"I"},{"key":"Zoom Out","value":"O"}]},{"key":"Menu","value":[{"key":"Roblox Menu","value":"Esc"},{"key":"Playerlist","value":"Tab"},{"key":"Fullscreen","value":"F11"},{"key":"Dev Console","value":"F9"},{"key":"Performance Stats","value":"Ctrl + Shift + F7"}]}],"shiftLock":true,"enableAutoMouseLock":false,"ads":true,"requireAuth":false,"enableHotjar":true},"authServiceHost":"https://now.gg","prefix":"/1","authUseThirdPartyFlow":false,"authRedirectionUrl":"https://now.gg/accounts/auth/v1/identifier/?provider=$provider\u0026continue=$continueUrl","pwaIconHost":"https://cdn.now.gg/apps-content/com.roblox.client/pwa","pwaNudgeDelayMs":600000,"playDomain":"now.gg","adsConfigUrl":"https://net-v3.now.gg/static/ads-config"},"__N_SSP":true},"page":"/","query":{"path":["roblox-corporation","5349","roblox"]},"buildId":"cm6tAjmRaujh1UiuEjGxl","assetPrefix":"/1/play","runtimeConfig":{"NEXT_PUBLIC_ENVIRONMENT":"prod1-berlin","NEXT_PUBLIC_BUGSNAG_KEY":"5409ce593426cf95bd284a5b809c62c5","NEXT_PUBLIC_FE_VERSION":"berlin-v1.8.5.1"},"isFallback":false,"gssp":true,"customServer":true,"scriptLoader":[]}
        </script>
    </body>
</html>
