import{_ as F}from"./o4bifOjr.js";import{e as V,f as z,h as O,r as u,u as J,k as K,c as n,a as e,l as $,t as s,g as a,n as y,d as W,F as p,j as _,m as G,v as Y,p as Q,q as X,b as Z,w as ee,s as te,x as se,o as i,_ as oe}from"./DxTVTiTZ.js";const ae={class:"md:mt-[100px]"},ne={class:"main-banner"},ie={class:"main-banner-content"},ce={class:"banner-text"},le={class:"banner-title"},de={class:"banner-description"},he={class:"banner-description mt-4"},re={class:"banner-action"},ue=["disabled"],me={key:0},ge={key:1},pe={class:"banner-image-container p-4"},_e={class:"chat-demo"},be={class:"chat-header"},ve={class:"message-content"},ye={class:"message-text"},we={class:"message-time"},fe={class:"chat-input"},Se=["placeholder","disabled"],ke=["disabled"],Ce={class:"page-section"},Te={class:"container"},Me={class:"section-head"},$e={class:"section-head-title"},De={class:"section-content"},Ie={class:"text-content mb-8"},Le={class:"features-grid"},Oe={class:"feature-icon"},Re=["src","alt"],Ee={class:"feature-title"},xe={class:"feature-description"},Ae={class:"page-section bg-gray-50"},je={class:"container"},Ne={class:"section-head"},Ue={class:"section-head-title"},Pe={class:"section-content"},Be={class:"text-content mb-8"},He={class:"sources-grid"},qe={class:"source-icon"},Fe=["src","alt"],Ve={class:"source-name"},ze={class:"source-status"},Je={key:0,class:"status-badge coming-soon"},Ke={key:1,class:"status-badge available"},We={class:"page-section"},Ge={class:"container"},Ye={class:"section-head"},Qe={class:"section-head-title"},Xe={class:"section-content"},Ze={class:"text-content mb-8"},et={class:"api-examples"},tt={class:"api-tabs"},st=["onClick"],ot={class:"api-content"},at={class:"api-description"},nt={class:"code-block"},it={class:"code-header"},ct={class:"code-language"},lt={class:"api-actions"},dt={class:"page-section"},ht={class:"container"},rt={class:"section-head"},ut={class:"section-head-title"},mt={class:"section-content"},gt={class:"integration-steps"},pt={class:"step-number"},_t={class:"step-content"},bt={class:"step-title"},vt={class:"step-description"},yt={key:0,class:"step-code"},wt={class:"page-section bg-gray-50"},ft={class:"container"},St={class:"section-head"},kt={class:"section-head-title"},Ct={class:"section-head-description text-center"},Tt={class:"section-content"},Mt={class:"pricing-grid"},$t={key:0,class:"popular-badge"},Dt={class:"plan-header"},It={class:"plan-name"},Lt={class:"plan-price"},Ot={class:"price"},Rt={class:"period"},Et={class:"plan-description"},xt={class:"plan-features"},At={class:"plan-footer"},jt={class:"page-section"},Nt={class:"container"},Ut={class:"section-head"},Pt={class:"section-head-title"},Bt={class:"section-content"},Ht={class:"faq-list"},qt={class:"faq-question"},Ft={class:"faq-answer"},Vt={class:"page-section bg-gradient bottom-banner"},zt={class:"container"},Jt={class:"section-content text-center"},Kt={class:"cta-content"},Wt={class:"section-head-title mb-4"},Gt={class:"text-gray-600 mb-8"},Yt={class:"banner-action flex flex-wrap gap-4 justify-center items-center"},Qt={class:"modal-header"},Xt={class:"modal-body"},Zt={class:"demo-code"},es={class:"modal-footer"},ts=V({__name:"index",setup(ss){const R=z(),{t:c}=O(),{tm:w,rt:d}=O(),f=u(!1),b=u(!1),v=u(""),C=u(!1),m=u(0),S=u(),k=u([{id:1,text:c("chathub.demo.welcomeMessage"),type:"system",time:"10:30"},{id:2,text:c("chathub.demo.userMessage"),type:"user",time:"10:31"},{id:3,text:c("chathub.demo.botResponse"),type:"bot",time:"10:31"}]),E=u([{name:"Viber",icon:"/images/icons/viber-icon.svg",comingSoon:!1},{name:"Viber Bot",icon:"/images/icons/viber-bot-icon.svg",comingSoon:!1},{name:"Telegram Bot",icon:"/images/icons/telegram-icon.svg",comingSoon:!1},{name:"WhatsApp",icon:"/images/icons/whatsapp-icon.svg",comingSoon:!1},{name:"Widget",icon:"/images/icons/widget-icon.svg",comingSoon:!1},{name:"Instagram",icon:"/images/icons/instagram-icon.svg",comingSoon:!1},{name:"Facebook",icon:"/images/icons/facebook-icon-blue.svg",comingSoon:!1},{name:"Rozetka",icon:"/images/icons/rozetka-icon.svg",comingSoon:!1},{name:"Prom.ua",icon:"/images/icons/prom-icon.svg",comingSoon:!1},{name:"Amazon",icon:"/images/icons/amazon-icon.svg",comingSoon:!0},{name:"Etsy",icon:"/images/icons/etsy-icon.svg",comingSoon:!0},{name:"TikTok",icon:"/images/icons/tiktok-icon.svg",comingSoon:!0},{name:"Twitter",icon:"/images/icons/twitter-icon.svg",comingSoon:!0}]),g=u([{title:c("chathub.api.getToken.title"),description:c("chathub.api.getToken.description"),language:"JavaScript",code:`// Get authentication token
const response = await fetch('https://chatapi.smsbat.com/api/company/get-token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        login: 'your_login',
        password: 'your_password'
    })
});

const tokenData = await response.json();
const token = tokenData.token;`},{title:c("chathub.api.connect.title"),description:c("chathub.api.connect.description"),language:"JavaScript",code:`// Connect to Chathub
const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://chatapi.smsbat.com/chathub", {
        accessTokenFactory: () => token
    })
    .build();

connection.start()
    .then(() => console.log("Connected to ChatHub"))
    .catch(err => console.error("Error connecting to ChatHub:", err));`},{title:c("chathub.api.sendMessage.title"),description:c("chathub.api.sendMessage.description"),language:"JavaScript",code:`// Send text message
connection.invoke("SendMessage", chatId, "Your message")
    .then(() => console.log("Message sent"))
    .catch(err => console.error("Error sending message:", err));

// Send media message
const mediaDTO = {
    Name: "image.jpg",
    Format: "jpg",
    DataBase64: "base64EncodedString",
    Type: 1 // MediaType.Photo
};

connection.invoke("SendMediaMessage", chatId, mediaDTO)
    .then(() => console.log("Media message sent"))
    .catch(err => console.error("Error sending media message:", err));`},{title:c("chathub.api.receiveUpdates.title"),description:c("chathub.api.receiveUpdates.description"),language:"JavaScript",code:`// Listen for text messages
connection.on("ReceiveMessage", (message) => {
    console.log("New message received:", message);
    // Handle incoming message
});

// Listen for media messages
connection.on("ReceiveMediaMessage", (mediaData) => {
    console.log("New media message received:", mediaData);
    // Handle incoming media message
});

// Listen for chat status changes
connection.on("ChatStatusChanged", (chatId, status) => {
    console.log(\`Chat \${chatId} status changed to \${status}\`);
});

// Listen for message status changes
connection.on("MessageStatusChanged", (messageId, status) => {
    console.log(\`Message \${messageId} status changed to \${status}\`);
});`}]),T=u(`// Complete Chathub API Integration Example
class ChathubClient {
    constructor() {
        this.connection = null;
        this.token = null;
    }
    
    // Step 1: Get authentication token
    async getToken(login, password) {
        const response = await fetch('https://chatapi.smsbat.com/api/company/get-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, password })
        });
        
        const data = await response.json();
        this.token = data.token;
        return this.token;
    }
    
    // Step 2: Connect to Chathub
    async connect() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("https://chatapi.smsbat.com/chathub", {
                accessTokenFactory: () => this.token
            })
            .build();
            
        // Set up event listeners
        this.setupEventListeners();
        
        await this.connection.start();
        console.log("Connected to Chathub!");
    }
    
    // Step 3: Set up event listeners
    setupEventListeners() {
        // Listen for text messages
        this.connection.on("ReceiveMessage", (message) => {
            console.log("New message:", message);
            this.handleTextMessage(message);
        });
        
        // Listen for media messages
        this.connection.on("ReceiveMediaMessage", (mediaData) => {
            console.log("New media message:", mediaData);
            this.handleMediaMessage(mediaData);
        });
        
        // Listen for chat status changes
        this.connection.on("ChatStatusChanged", (chatId, status) => {
            console.log(\`Chat \${chatId} status: \${status}\`);
            this.handleChatStatusChange(chatId, status);
        });
        
        // Listen for message status changes
        this.connection.on("MessageStatusChanged", (messageId, status) => {
            console.log(\`Message \${messageId} status: \${status}\`);
            this.handleMessageStatusChange(messageId, status);
        });
        
        // Listen for new chat creation
        this.connection.on("ChatCreated", (chatDTO) => {
            console.log("New chat created:", chatDTO);
            this.handleNewChat(chatDTO);
        });
    }
    
    // Step 4: Send messages
    async sendTextMessage(chatId, message) {
        await this.connection.invoke("SendMessage", chatId, message);
    }
    
    async sendMediaMessage(chatId, mediaDTO) {
        await this.connection.invoke("SendMediaMessage", chatId, mediaDTO);
    }
    
    // Event handlers
    handleTextMessage(message) {
        // Process incoming text message
        // message.id, message.chatId, message.message, message.phone, etc.
    }
    
    handleMediaMessage(mediaData) {
        // Process incoming media message
        // mediaData.media.uri, mediaData.media.name, etc.
    }
    
    handleChatStatusChange(chatId, status) {
        // Handle chat status changes
        // status: 0=New, 1=Processing, 2=Ended
    }
    
    handleMessageStatusChange(messageId, status) {
        // Handle message status changes
        // status: 0=New, 1=Success, 2=Rejected, 3=Read, etc.
    }
    
    handleNewChat(chatDTO) {
        // Handle new chat creation
        // chatDTO.messSource, chatDTO.client, etc.
    }
}

// Usage example
const client = new ChathubClient();

// Initialize connection
await client.getToken('your_login', 'your_password');
await client.connect();

// Send a message
await client.sendTextMessage(123, "Hello from Chathub!");

// Send media message
const mediaDTO = {
    Name: "image.jpg",
    Format: "jpg", 
    DataBase64: "base64EncodedString",
    Type: 1 // MediaType.Photo
};
await client.sendMediaMessage(123, mediaDTO);`),x=async()=>{f.value=!0;try{await new Promise(t=>setTimeout(t,2e3)),b.value=!0,k.value.push({id:Date.now(),text:c("chathub.demo.connectedMessage"),type:"system",time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}),M()}catch(t){console.error("Connection failed:",t)}finally{f.value=!1}},D=()=>{if(!v.value.trim()||!b.value)return;const t={id:Date.now(),text:v.value,type:"user",time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})};k.value.push(t),v.value="",setTimeout(()=>{k.value.push({id:Date.now()+1,text:c("chathub.demo.botResponse"),type:"bot",time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}),M()},1e3),M()},M=()=>{se(()=>{S.value&&(S.value.scrollTop=S.value.scrollHeight)})},A=()=>{C.value=!0},I=()=>{C.value=!1},j=async()=>{try{await navigator.clipboard.writeText(g.value[m.value].code)}catch(t){console.error("Failed to copy code:",t)}},N=async()=>{try{await navigator.clipboard.writeText(T.value)}catch(t){console.error("Failed to copy code:",t)}},U=()=>{const t=g.value[m.value],l=new Blob([t.code],{type:"text/plain"}),r=URL.createObjectURL(l),o=document.createElement("a");o.href=r,o.download=`chathub-${t.title.toLowerCase().replace(/\s+/g,"-")}.cs`,o.click(),URL.revokeObjectURL(r)},P=()=>{const t=new Blob([T.value],{type:"text/plain"}),l=URL.createObjectURL(t),r=document.createElement("a");r.href=l,r.download="chathub-client-example.cs",r.click(),URL.revokeObjectURL(l)},B=()=>{const t={version:"1.0.0",files:["ChathubClient.cs","ChatSource.cs","README.md","Examples/"]},l=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(l),o=document.createElement("a");o.href=r,o.download="chathub-sdk.json",o.click(),URL.revokeObjectURL(r)},H=()=>{console.log("Testing API example:",g.value[m.value].title)};return J({titleTemplate:()=>c("seo.layouts./chathub.title"),meta:[{name:"description",content:()=>c("seo.layouts./chathub.description")},{name:"keywords",content:"Chathub API, REST API, chat integration, Viber, Telegram, WhatsApp, SignalR, real-time chat, omnichannel communication, SMSBAT"},{name:"robots",content:"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"},{property:"og:title",content:()=>c("seo.layouts./chathub.title")},{property:"og:description",content:()=>c("seo.layouts./chathub.description")},{property:"og:type",content:"website"},{property:"og:site_name",content:"SMSBAT"},{property:"og:image",content:"https://cdn-web.smsbat.com/uploads/2024/chathub-api.png"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:image:type",content:"image/png"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@smsbatcom"}],script:[{type:"application/ld+json",innerHTML:JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"Chathub API",description:c("seo.layouts./chathub.description"),url:"https://smsbat.com/chathub",applicationCategory:"DeveloperApplication",operatingSystem:"Web",offers:{"@type":"Offer",price:"0",priceCurrency:"EUR",description:"Free tier available"},provider:{"@type":"Organization",name:"SMSBAT",url:"https://smsbat.com"},featureList:["REST API Communication","Multi-Platform Support","Easy Integration","AI Agent Integration","Advanced Analytics","Scalable Architecture"]})},{type:"application/ld+json",innerHTML:JSON.stringify({"@context":"https://schema.org","@type":"TechArticle",headline:c("seo.layouts./chathub.title"),description:c("seo.layouts./chathub.description"),author:{"@type":"Organization",name:"SMSBAT"},publisher:{"@type":"Organization",name:"SMSBAT",logo:{"@type":"ImageObject",url:"https://smsbat.com/logo.svg"}},datePublished:"2024-01-01",dateModified:"2024-01-01"})}]}),K(()=>{const t=document.querySelector("body");if(t==null||t.scrollIntoView(),window.location.hash){const l=document.querySelector(window.location.hash);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth"})},500)}}),(t,l)=>{const r=F;return i(),n("div",ae,[e("div",ne,[e("div",ie,[e("div",ce,[e("div",le,s(t.$t("chathub.hero.title")),1),e("div",de,s(t.$t("chathub.hero.subtitle")),1),e("div",he,s(t.$t("chathub.hero.description")),1),e("div",re,[e("button",{onClick:x,class:"nav-link button filled",disabled:a(f)},[a(f)?(i(),n("p",ge,s(t.$t("chathub.actions.connecting")),1)):(i(),n("p",me,s(t.$t("chathub.actions.connectNow")),1))],8,ue),e("button",{onClick:A,class:"button outlined"},[e("p",null,s(t.$t("chathub.actions.viewDemoCode")),1)])])]),e("div",pe,[e("div",_e,[e("div",be,[e("div",{class:y(["chat-status",{connected:a(b),disconnected:!a(b)}])},[l[2]||(l[2]=e("span",{class:"status-dot"},null,-1)),W(" "+s(a(b)?t.$t("chathub.status.connected"):t.$t("chathub.status.disconnected")),1)],2)]),e("div",{class:"chat-messages",ref_key:"chatMessages",ref:S},[(i(!0),n(p,null,_(a(k),o=>(i(),n("div",{key:o.id,class:y(["message",o.type])},[e("div",ve,[e("div",ye,s(o.text),1),e("div",we,s(o.time),1)])],2))),128))],512),e("div",fe,[G(e("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>X(v)?v.value=o:null),onKeyup:Q(D,["enter"]),placeholder:t.$t("chathub.input.placeholder"),disabled:!a(b)},null,40,Se),[[Y,a(v)]]),e("button",{onClick:D,disabled:!a(b)||!a(v).trim()},s(t.$t("chathub.input.send")),9,ke)])])])])]),e("div",Ce,[e("div",Te,[e("div",Me,[e("div",$e,s(t.$t("chathub.whatIs.title")),1)]),e("div",De,[e("div",Ie,[e("p",null,s(t.$t("chathub.whatIs.description")),1)]),e("div",Le,[(i(!0),n(p,null,_(a(w)("chathub.whatIs.features"),(o,h)=>(i(),n("div",{key:h,class:"feature-card"},[e("div",Oe,[e("img",{src:a(d)(o.icon),alt:a(d)(o.title)},null,8,Re)]),e("h3",Ee,s(a(d)(o.title)),1),e("p",xe,s(a(d)(o.description)),1)]))),128))])])])]),e("div",Ae,[e("div",je,[e("div",Ne,[e("div",Ue,s(t.$t("chathub.sources.title")),1)]),e("div",Pe,[e("div",Be,[e("p",null,s(t.$t("chathub.sources.description")),1)]),e("div",He,[(i(!0),n(p,null,_(a(E),(o,h)=>(i(),n("div",{key:h,class:y(["source-card",{"coming-soon":o.comingSoon}])},[e("div",qe,[e("img",{src:`${o.icon}`,alt:o.name},null,8,Fe)]),e("h3",Ve,s(o.name),1),e("div",ze,[o.comingSoon?(i(),n("span",Je,s(t.$t("chathub.sources.comingSoon")),1)):(i(),n("span",Ke,s(t.$t("chathub.sources.available")),1))])],2))),128))])])])]),e("div",We,[e("div",Ge,[e("div",Ye,[e("div",Qe,s(t.$t("chathub.api.title")),1)]),e("div",Xe,[e("div",Ze,[e("p",null,s(t.$t("chathub.api.description")),1)]),e("div",et,[e("div",tt,[(i(!0),n(p,null,_(a(g),(o,h)=>(i(),n("button",{key:h,onClick:L=>m.value=h,class:y(["api-tab",{active:a(m)===h}])},s(o.title),11,st))),128))]),e("div",ot,[e("div",at,[e("h4",null,s(a(g)[a(m)].title),1),e("p",null,s(a(g)[a(m)].description),1)]),e("div",nt,[e("div",it,[e("span",ct,s(a(g)[a(m)].language),1),e("button",{onClick:j,class:"copy-button"},s(t.$t("chathub.api.copyCode")),1)]),e("pre",null,[e("code",null,s(a(g)[a(m)].code),1)])]),e("div",lt,[e("button",{onClick:U,class:"button outlined"},s(t.$t("chathub.api.downloadExample")),1),e("button",{onClick:H,class:"button filled"},s(t.$t("chathub.api.testExample")),1)])])])])])]),e("div",dt,[e("div",ht,[e("div",rt,[e("div",ut,s(t.$t("chathub.integration.title")),1)]),e("div",mt,[e("div",gt,[(i(!0),n(p,null,_(a(w)("chathub.integration.steps"),(o,h)=>(i(),n("div",{key:h,class:"step-item"},[e("div",pt,s(h+1),1),e("div",_t,[e("h3",bt,s(a(d)(o.title)),1),e("p",vt,s(a(d)(o.description)),1),o.code?(i(),n("div",yt,[e("pre",null,[e("code",null,s(a(d)(o.code)),1)])])):$("",!0)])]))),128))])])])]),e("div",wt,[e("div",ft,[e("div",St,[e("div",kt,s(t.$t("chathub.pricing.title")),1),e("div",Ct,s(t.$t("chathub.pricing.subtitle")),1)]),e("div",Tt,[e("div",Mt,[(i(!0),n(p,null,_(a(w)("chathub.pricing.plans"),(o,h)=>(i(),n("div",{key:h,class:y(["pricing-card",{popular:o.popular}])},[o.popular?(i(),n("div",$t,s(t.$t("global.mostPopular")),1)):$("",!0),e("div",Dt,[e("h3",It,s(a(d)(o.name)),1),e("div",Lt,[e("span",Ot,s(a(d)(o.price)),1),e("span",Rt,s(a(d)(o.period)),1)]),e("p",Et,s(a(d)(o.description)),1)]),e("div",xt,[e("ul",null,[(i(!0),n(p,null,_(o.features,(L,q)=>(i(),n("li",{key:q},s(a(d)(L)),1))),128))])]),e("div",At,[e("button",{class:y(["button",o.popular?"filled":"outlined"])},s(a(d)(o.button)),3)])],2))),128))])])])]),e("div",jt,[e("div",Nt,[e("div",Ut,[e("div",Pt,s(t.$t("chathub.pricing.faq.title")),1)]),e("div",Bt,[e("div",Ht,[(i(!0),n(p,null,_(a(w)("chathub.pricing.faq.questions"),(o,h)=>(i(),n("div",{key:h,class:"faq-item"},[e("div",qt,[e("h4",null,s(a(d)(o.question)),1),l[3]||(l[3]=e("span",{class:"faq-toggle"},"+",-1))]),e("div",Ft,[e("p",null,s(a(d)(o.answer)),1)])]))),128))])])])]),e("div",Vt,[e("div",zt,[e("div",Jt,[e("div",Kt,[e("h2",Wt,s(t.$t("chathub.cta.title")),1),e("p",Gt,s(t.$t("chathub.cta.description")),1),e("div",Yt,[Z(r,{to:a(R)("/contacts"),class:"nav-link button filled"},{default:ee(()=>[e("p",null,s(t.$t("chathub.cta.getStarted")),1)]),_:1},8,["to"]),e("button",{onClick:B,class:"button outlined"},[e("p",null,s(t.$t("chathub.cta.downloadSDK")),1)])])])])])]),a(C)?(i(),n("div",{key:0,class:"modal-overlay",onClick:I},[e("div",{class:"modal-content",onClick:l[1]||(l[1]=te(()=>{},["stop"]))},[e("div",Qt,[e("h3",null,s(t.$t("chathub.modal.title")),1),e("button",{onClick:I,class:"close-button"},"×")]),e("div",Xt,[e("div",Zt,[e("pre",null,[e("code",null,s(a(T)),1)])])]),e("div",es,[e("button",{onClick:N,class:"button filled"},s(t.$t("chathub.modal.copyCode")),1),e("button",{onClick:P,class:"button outlined"},s(t.$t("chathub.modal.downloadCode")),1)])])])):$("",!0)])}}}),ns=oe(ts,[["__scopeId","data-v-51676328"]]);export{ns as default};
