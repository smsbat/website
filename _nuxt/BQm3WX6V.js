import{_ as L}from"./Cfk_eTse.js";import B from"./CI4VBrJH.js";import M from"./ujckxv0h.js";import{e as w,y as A,r as y,z as S,c as h,o as u,A as N,l as R,g as o,w as d,b as l,d as b,t as s,B as U,h as V,u as x,a as t,i as m,F as E,j as T,n as j,_ as D}from"./C58vgCEy.js";import"./CuRXyeHv.js";import"./DuTsWfpA.js";import"./BdMmjIqd.js";import"./BXWYDMVT.js";import"./DZnElDBH.js";import"./CwsxW-kc.js";import"./BqeBHk-X.js";import"./Yq3tVrqg.js";import"./CfD0exZj.js";import"./CRtPSga3.js";import"./BWxzcz86.js";import"./DoDBd8zE.js";import"./DJEtL7-T.js";import"./CHtXNMDj.js";import"./RgBR2gqa.js";import"./CKzNozxQ.js";import"./CDz8XiPp.js";import"./CGnOm-em.js";import"./K9BkmlhG.js";import"./D8cpcGjY.js";import"./BzjptLbo.js";import"./CAIHVMN9.js";import"./CnPPQiKr.js";import"./BFn47tHu.js";import"./ChH3xtWi.js";import"./CqsXJu0A.js";const I=w({__name:"ViberCarouselRatesTable",async setup(k){let n,_;const C=A().public.baseURL;let i=y([]);try{[n,_]=S(()=>$fetch(`${C}/rate/default`,{onResponse({response:r}){i.value=r._data}})),await n,_()}catch{console.log("API not available, using mock data")}return(r,c)=>{const p=B,e=M;return u(),h("div",null,[o(i)?(u(),N(e,{key:0,value:o(i),contextMenu:"",class:"rates-table mx-auto w-full max-w-[50rem]",tableStyle:{width:"100%"}},{default:d(()=>[l(p,{class:"rates-table__column",field:"country",header:r.$t("global.country")},null,8,["header"]),l(p,{class:"rates-table__column",field:"promoRate",header:r.$t("components.bmDefaultRates.promo")},{body:d(({data:a})=>[b(s(a.promoRate.toFixed(4))+" € ",1)]),_:1},8,["header"]),l(p,{class:"rates-table__column",field:"promoInternationalRate",header:r.$t("components.bmDefaultRates.promoInternationalRate")},{body:d(({data:a})=>[b(s(a.promoInternationalRate.toFixed(4))+" € ",1)]),_:1},8,["header"])]),_:1},8,["value"])):R("",!0)])}}}),P=U("/images/viber_carousel-preview.png"),z={class:"viber-carousel-page"},H={class:"main-banner"},F={class:"container"},K={class:"banner-content"},O={class:"banner-carousel-text"},Z={class:"banner-title"},G={class:"banner-description"},J={class:"banner-description-secondary"},W={class:"banner-action"},X={class:"page-section bg-gray-50"},Y={class:"container"},q={class:"section-head"},Q={class:"section-head-title"},tt={class:"section-head-description"},et={class:"section-content"},st={class:"stats-grid"},at={class:"stat-item"},ot={class:"stat-label"},it={class:"stat-item"},nt={class:"stat-label"},rt={class:"stat-item"},lt={class:"stat-label"},ct={class:"stat-item"},dt={class:"stat-label"},pt={class:"top-countries"},ut={class:"countries-grid"},vt={class:"country-group"},mt={class:"country-group"},ht={class:"country-group"},bt={class:"page-section"},_t={class:"container"},gt={class:"section-head"},yt={class:"section-head-title"},Ct={class:"section-head-description"},ft={class:"section-content"},wt={class:"features-grid"},kt={class:"feature-item"},$t={class:"feature-item"},Lt={class:"feature-item"},Bt={class:"feature-item"},Mt={class:"page-section bg-gray-50",id:"api"},At={class:"container"},St={class:"section-head"},Nt={class:"section-head-title"},Rt={class:"section-head-description"},Ut={class:"section-content"},Vt={class:"api-examples"},xt={class:"api-tabs"},Et=["onClick"],Tt={class:"api-content"},jt={class:"api-description"},Dt={class:"code-block"},It={class:"code-header"},Pt={class:"code-language"},zt={class:"page-section",id:"pricing"},Ht={class:"container"},Ft={class:"section-head"},Kt={class:"section-head-title"},Ot={class:"section-head-description"},Zt={class:"section-content"},Gt={class:"pricing-table-container"},Jt={class:"page-section bg-gradient bottom-banner"},Wt={class:"container"},Xt={class:"section-head"},Yt={class:"section-head-title"},qt={class:"section-head-description text-gray-600"},Qt={class:"section-content"},te={class:"banner-action flex flex-wrap items-center justify-center gap-4"},ee=w({__name:"index",setup(k){const{t:n,tm:_,rt:C}=V(),i=y(0),r=()=>{const e=document.getElementById("pricing");e&&e.scrollIntoView({behavior:"smooth"})},c=y([{title:n("viberCarousel.api.restful.title"),description:n("viberCarousel.api.restful.description"),language:"JSON",code:`{
  "messages": [
    {
      "from": "ALPHANAME",
      "to": "380936670003",
      "type": "viber_promo",
      "text": "Text for Viber",
      "ttl": 300,
      "messageData": {
        "carousel": {
          "items": [
            {
              "title": "50% Off on All Shoes!",
              "imageUrl": "https://cdn-web.smsbat.com/help/carusel.png",
              "primaryButton": {
                "label": "Shop Now",
                "actionUrl": "https://help.noetikos.org"
              },
              "secondaryButton": {
                "label": "View Details",
                "actionUrl": "https://omni.noetikos.org"
              }
            },
            {
              "title": "New Arrivals: Summer Collection",
              "imageUrl": "https://cdn-web.smsbat.com/help/carusel.png",
              "primaryButton": {
                "label": "Explore",
                "actionUrl": "https://help.noetikos.org"
              },
              "secondaryButton": {
                "label": "Learn More",
                "actionUrl": "https://omni.noetikos.org"
              }
            }
          ]
        }
      }
    }
  ]
}`},{title:n("viberCarousel.api.cascade.title"),description:n("viberCarousel.api.cascade.description"),language:"JSON",code:`curl --location 'http://api.counterbat.com/api/CascadeMessage/send_message/' \\
--header 'X-Viber-Auth-Token: <Viber-Bot-API-Key>' \\
--header 'X-Authorization-Key: <API-Key>' \\
--header 'Content-Type: application/json' \\
--data '[
  {
    "id": "11111112",
    "fromName": "ALPHANAME",
    "toPhone": "380669227498",
    "messageType": "viber_carousel",
    "ttl": 80,
    "viberMessage": {
      "ttl": 60,
      "text": "Hello world!",
      "carousel": {
        "items": [
          {
            "title": "50% Off on All Shoes!",
            "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2023/7/323356025/UR/EQ/WS/192140499/safeimagekit-resized-img-3--500x500.png",
            "primaryButton": {
              "label": "Shop Now",
              "actionUrl": "https://example.com/shoes-sale"
            },
            "secondaryButton": {
              "label": "View Details",
              "actionUrl": "https://example.com/shoes"
            }
          },
          {
            "title": "New Arrivals: Summer Collection",
            "imageUrl": "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
            "primaryButton": {
              "label": "Explore",
              "actionUrl": "https://example.com/summer"
            },
            "secondaryButton": {
              "label": "Learn More",
              "actionUrl": "https://example.com/summer-info"
            }
          }
        ]
      }
    },
    "customerData": {
      "type": "data"
    }
  }
]'`}]),p=e=>{navigator.clipboard.writeText(e)};return x({title:n("viberCarousel.seo.title"),meta:[{name:"description",content:n("viberCarousel.seo.description")},{name:"keywords",content:n("viberCarousel.seo.keywords")}]}),(e,a)=>{const v=L,$=I;return u(),h("div",z,[t("div",H,[t("div",F,[t("div",K,[t("div",O,[t("h1",Z,s(e.$t("viberCarousel.hero.title")),1),t("p",G,s(e.$t("viberCarousel.hero.subtitle")),1),t("p",J,s(e.$t("viberCarousel.hero.description")),1),t("div",W,[l(v,{to:"https://omni.smsbat.com/register-ca",external:"",target:"_blank",class:"nav-link button filled whitespace-nowrap"},{default:d(()=>[b(s(e.$t("viberCarousel.hero.getStarted")),1)]),_:1}),l(v,{onClick:r,class:"button outlined cursor-pointer",external:""},{default:d(()=>[b(s(e.$t("viberCarousel.hero.viewPricing")),1)]),_:1})])]),a[1]||(a[1]=t("div",{class:"banner-image-container"},[t("img",{src:P,class:"mt-20"})],-1))])])]),t("div",X,[t("div",Y,[t("div",q,[t("div",Q,s(e.$t("viberCarousel.stats.title")),1),t("div",tt,s(e.$t("viberCarousel.stats.subtitle")),1)]),t("div",et,[t("div",st,[t("div",at,[a[2]||(a[2]=t("div",{class:"stat-number"},"63%",-1)),t("div",ot,s(e.$t("viberCarousel.stats.primeActivity")),1)]),t("div",it,[a[3]||(a[3]=t("div",{class:"stat-number"},"47%",-1)),t("div",nt,s(e.$t("viberCarousel.stats.women")),1)]),t("div",rt,[a[4]||(a[4]=t("div",{class:"stat-number"},"53%",-1)),t("div",lt,s(e.$t("viberCarousel.stats.men")),1)]),t("div",ct,[a[5]||(a[5]=t("div",{class:"stat-number"},"78%",-1)),t("div",dt,s(e.$t("viberCarousel.stats.mobile")),1)])]),t("div",pt,[t("h3",null,s(e.$t("viberCarousel.stats.topCountries.title")),1),t("div",ut,[t("div",vt,[t("h4",null,s(e.$t("viberCarousel.stats.topCountries.cee")),1),a[6]||(a[6]=m('<div class="country-list" data-v-64a952d8><span class="country-item" data-v-64a952d8>Albania 80%</span><span class="country-item" data-v-64a952d8>Bosnia &amp; Herzegovina 98%</span><span class="country-item" data-v-64a952d8>Bulgaria 94%</span><span class="country-item" data-v-64a952d8>Croatia 78%</span><span class="country-item" data-v-64a952d8>Georgia 71%</span><span class="country-item" data-v-64a952d8>Greece 91%</span><span class="country-item" data-v-64a952d8>Hungary 68%</span><span class="country-item" data-v-64a952d8>Macedonia 85%</span><span class="country-item" data-v-64a952d8>Montenegro 96%</span><span class="country-item" data-v-64a952d8>Serbia 97%</span><span class="country-item" data-v-64a952d8>Slovakia 40%</span><span class="country-item" data-v-64a952d8>Slovenia 88%</span><span class="country-item" data-v-64a952d8>Ukraine 98%</span></div>',1))]),t("div",mt,[t("h4",null,s(e.$t("viberCarousel.stats.topCountries.cis")),1),a[7]||(a[7]=t("div",{class:"country-list"},[t("span",{class:"country-item"},"Armenia 93%"),t("span",{class:"country-item"},"Belarus 86%"),t("span",{class:"country-item"},"Moldova 82%")],-1))]),t("div",ht,[t("h4",null,s(e.$t("viberCarousel.stats.topCountries.sea")),1),a[8]||(a[8]=m('<div class="country-list" data-v-64a952d8><span class="country-item" data-v-64a952d8>Maldives 76%</span><span class="country-item" data-v-64a952d8>Myanmar 67%</span><span class="country-item" data-v-64a952d8>Nepal 36%</span><span class="country-item" data-v-64a952d8>Philippines 71%</span><span class="country-item" data-v-64a952d8>Sri Lanka 24%</span><span class="country-item" data-v-64a952d8>Vietnam 26%</span></div>',1))])])])])])]),t("div",bt,[t("div",_t,[t("div",gt,[t("div",yt,s(e.$t("viberCarousel.features.title")),1),t("div",Ct,s(e.$t("viberCarousel.features.subtitle")),1)]),t("div",ft,[t("div",wt,[t("div",kt,[a[9]||(a[9]=m('<div class="feature-icon" data-v-64a952d8><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-64a952d8><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3070b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-64a952d8></path><path d="M2 17L12 22L22 17" stroke="#3070b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-64a952d8></path><path d="M2 12L12 17L22 12" stroke="#3070b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-64a952d8></path></svg></div>',1)),t("h3",null,s(e.$t("viberCarousel.features.interactive.title")),1),t("p",null,s(e.$t("viberCarousel.features.interactive.description")),1)]),t("div",$t,[a[10]||(a[10]=t("div",{class:"feature-icon"},[t("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M4 16L8 12L12 16L20 8",stroke:"#3070b6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#3070b6","stroke-width":"2"})])],-1)),t("h3",null,s(e.$t("viberCarousel.features.engagement.title")),1),t("p",null,s(e.$t("viberCarousel.features.engagement.description")),1)]),t("div",Lt,[a[11]||(a[11]=m('<div class="feature-icon" data-v-64a952d8><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-64a952d8><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#3070b6" stroke-width="2" data-v-64a952d8></rect><circle cx="8.5" cy="8.5" r="1.5" fill="#3070b6" data-v-64a952d8></circle><path d="M21 15L16 10L5 21" stroke="#3070b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-64a952d8></path></svg></div>',1)),t("h3",null,s(e.$t("viberCarousel.features.visual.title")),1),t("p",null,s(e.$t("viberCarousel.features.visual.description")),1)]),t("div",Bt,[a[12]||(a[12]=t("div",{class:"feature-icon"},[t("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9 12L11 14L15 10",stroke:"#3070b6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"#3070b6","stroke-width":"2"})])],-1)),t("h3",null,s(e.$t("viberCarousel.features.easy.title")),1),t("p",null,s(e.$t("viberCarousel.features.easy.description")),1)])])])])]),t("div",Mt,[t("div",At,[t("div",St,[t("div",Nt,s(e.$t("viberCarousel.api.title")),1),t("div",Rt,s(e.$t("viberCarousel.api.subtitle")),1)]),t("div",Ut,[t("div",Vt,[t("div",xt,[(u(!0),h(E,null,T(o(c),(f,g)=>(u(),h("button",{key:g,class:j(["api-tab",{active:o(i)===g}]),onClick:se=>i.value=g},s(f.title),11,Et))),128))]),t("div",Tt,[t("div",jt,[t("h4",null,s(o(c)[o(i)].title),1),t("p",null,s(o(c)[o(i)].description),1)]),t("div",Dt,[t("div",It,[t("span",Pt,s(o(c)[o(i)].language),1),t("button",{class:"copy-button",onClick:a[0]||(a[0]=f=>p(o(c)[o(i)].code))}," Copy ")]),t("pre",null,[t("code",null,s(o(c)[o(i)].code),1)])])])])])])]),t("div",zt,[t("div",Ht,[t("div",Ft,[t("div",Kt,s(e.$t("viberCarousel.pricing.title")),1),t("div",Ot,s(e.$t("viberCarousel.pricing.subtitle")),1)]),t("div",Zt,[t("div",Gt,[l($)])])])]),t("div",Jt,[t("div",Wt,[t("div",Xt,[t("div",Yt,s(e.$t("viberCarousel.cta.title")),1),t("div",qt,s(e.$t("viberCarousel.cta.description")),1)]),t("div",Qt,[t("div",te,[l(v,{to:"https://omni.smsbat.com/register-ca",external:"",target:"_blank",class:"nav-link button filled"},{default:d(()=>[t("p",null,s(e.$t("viberCarousel.cta.getStarted")),1)]),_:1}),l(v,{to:"https://help.smsbat.com/uk/hc/1780048863/1/api?category_id=3#viber_carousel",external:"",target:"_blank",class:"button outlined"},{default:d(()=>[t("p",null,s(e.$t("viberCarousel.cta.viewDocs")),1)]),_:1})])])])])])}}}),Ve=D(ee,[["__scopeId","data-v-64a952d8"]]);export{Ve as default};
