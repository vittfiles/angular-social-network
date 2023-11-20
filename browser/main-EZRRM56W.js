import{a as oe,b as ie}from"./chunk-5QRSCP63.js";import{a as k}from"./chunk-XDF72XJA.js";import{Ba as ee,Ca as E,Da as te,Ea as se,F as _,G as N,J as f,N as B,O as b,P as C,Q as p,Z as I,_ as H,c as x,e as q,f as L,g as P,h as j,k as U,ka as $,l as A,ma as G,na as w,oa as Z,p as T,pa as V,q as h,qa as Q,ra as J,s as y,t as R,ta as Y,u,ua as X,va as K,wa as z,za as W}from"./chunk-ONHGRJAC.js";var re=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=R({type:e,selectors:[["app-not-found-404"]],decls:3,vars:0,consts:[[1,"w-full","flex","items-center","flex-col","p-4"],[1,"text-3xl","text-purple"]],template:function(s,r){s&1&&(b(0,"header",0)(1,"h1",1),I(2,"404 not foun"),C()())}});let i=e;return i})();var me=[{path:"",loadChildren:()=>import("./chunk-6NRHAWQE.js").then(i=>i.HomeModule)},{path:"users",loadChildren:()=>import("./chunk-JVMIHV6C.js").then(i=>i.UsersModule)},{path:"images",loadChildren:()=>import("./chunk-EOOVLFWS.js").then(i=>i.ImagesModule),canActivate:[k]},{path:"**",component:re}],ne=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=h({providers:[k],imports:[E.forRoot(me,{useHash:!0,scrollPositionRestoration:"enabled"}),E]});let i=e;return i})();function _e(i,e){i&1&&p(0,"hr",9)}function be(i,e){i&1&&p(0,"app-link-header",10),i&2&&f("title","User")("icon","fa fa-user-o")}function Te(i,e){i&1&&p(0,"app-link-header",11),i&2&&f("title","Pictures")("icon","fa fa-picture-o")}function ye(i,e){i&1&&p(0,"app-link-header",12),i&2&&f("title","Upload image")("icon","fa fa-upload")}var ce=(()=>{let e=class e{constructor(t){this.authService=t,this.login=!1}ngOnInit(){this.subscription=this.authService.userLoginOn.subscribe(t=>this.login=t)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};e.\u0275fac=function(s){return new(s||e)(N(se))},e.\u0275cmp=R({type:e,selectors:[["app-header"]],hostAttrs:[1,"flex","justify-evenly","sm:justify-start","sm:flex-col","text-center","w-full","sm:w-[5rem]","p-2","bg-greenl","sm:sticky","top-0","z-[1]"],decls:10,vars:5,consts:[["routerLink","",1,"w-16","sm:w-full","relative","group/ic"],["src","assets/img/logo-cam.jpg","alt","logo",1,"w-full","rounded-lg"],[1,"absolute","sm:left-[90px]","top-[80px]","sm:top-0","border-4","border-purple","text-purple","font-bold","transition-all","group-hover/ic:block","scale-0","group-hover/ic:scale-100","transition-all"],[1,"absolute","w-full","h-full","border-4","border-greenl","left-[-15px]","top-[15px]","z-[0]","scale-0","group-hover/ic:scale-100","transition-all","delay-100"],[1,"relative","w-full","bg-white","h-full","z-[1]","p-2"],["class","mt-4 h-1 bg-whited",4,"ngIf"],["routerLink","users",3,"title","icon",4,"ngIf"],["routerLink","images",3,"title","icon",4,"ngIf"],["routerLink","images/upload-image",3,"title","icon",4,"ngIf"],[1,"mt-4","h-1","bg-whited"],["routerLink","users",3,"title","icon"],["routerLink","images",3,"title","icon"],["routerLink","images/upload-image",3,"title","icon"]],template:function(s,r){s&1&&(b(0,"a",0),p(1,"img",1),b(2,"div",2),p(3,"div",3),b(4,"p",4),I(5),C()()(),B(6,_e,1,0,"hr",5)(7,be,1,2,"app-link-header",6)(8,Te,1,2,"app-link-header",7)(9,ye,1,2,"app-link-header",8)),s&2&&(_(5),H("Home"),_(1),f("ngIf",r.login),_(1),f("ngIf",r.login),_(1),f("ngIf",r.login),_(1),f("ngIf",r.login))},dependencies:[$,ee,oe]});let i=e;return i})();var ae=(()=>{let e=class e{constructor(t){this.cookieSession=t,this.title="angular-social-network",t.deleteAll()}};e.\u0275fac=function(s){return new(s||e)(N(te))},e.\u0275cmp=R({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(s,r){s&1&&p(0,"app-header")(1,"router-outlet")},dependencies:[W,ce]});let i=e;return i})();var de=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=h({imports:[G,E,ie]});let i=e;return i})();function ve(i,e){return new x(o=>{let t=!1,s=!1,r=i.subscribe(c=>{s=!0,setTimeout(()=>{o.next(c),t&&o.complete()},e)},c=>setTimeout(()=>o.error(c),e),()=>{t=!0,s||o.complete()});return()=>r.unsubscribe()})}var d={CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTIPLE_CHOICES:300,MOVED_PERMANTENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,TEMPORARY_REDIRECT:307,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,PAYLOAD_TO_LARGE:413,URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,UPGRADE_REQUIRED:426,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,PROCESSING:102,MULTI_STATUS:207,IM_USED:226,PERMANENT_REDIRECT:308,UNPROCESSABLE_ENTRY:422,LOCKED:423,FAILED_DEPENDENCY:424,PRECONDITION_REQUIRED:428,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,NETWORK_AUTHENTICATION_REQUIRED:511},Oe={100:{code:100,text:"Continue",description:'"The initial part of a request has been received and has not yet been rejected by the server."',spec_title:"RFC7231#6.2.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.2.1"},101:{code:101,text:"Switching Protocols",description:`"The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection."`,spec_title:"RFC7231#6.2.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.2.2"},200:{code:200,text:"OK",description:'"The request has succeeded."',spec_title:"RFC7231#6.3.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},201:{code:201,text:"Created",description:'"The request has been fulfilled and has resulted in one or more new resources being created."',spec_title:"RFC7231#6.3.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},202:{code:202,text:"Accepted",description:'"The request has been accepted for processing, but the processing has not been completed."',spec_title:"RFC7231#6.3.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.3"},203:{code:203,text:"Non-Authoritative Information",description:`"The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy."`,spec_title:"RFC7231#6.3.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.4"},204:{code:204,text:"No Content",description:'"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body."',spec_title:"RFC7231#6.3.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.5"},205:{code:205,text:"Reset Content",description:'"The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server."',spec_title:"RFC7231#6.3.6",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.6"},206:{code:206,text:"Partial Content",description:`"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field."`,spec_title:"RFC7233#4.1",spec_href:"https://tools.ietf.org/html/rfc7233#section-4.1"},300:{code:300,text:"Multiple Choices",description:'"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."',spec_title:"RFC7231#6.4.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.1"},301:{code:301,text:"Moved Permanently",description:'"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."',spec_title:"RFC7231#6.4.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.2"},302:{code:302,text:"Found",description:'"The target resource resides temporarily under a different URI."',spec_title:"RFC7231#6.4.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.3"},303:{code:303,text:"See Other",description:'"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request."',spec_title:"RFC7231#6.4.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.4"},304:{code:304,text:"Not Modified",description:'"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false."',spec_title:"RFC7232#4.1",spec_href:"https://tools.ietf.org/html/rfc7232#section-4.1"},305:{code:305,text:"Use Proxy",description:"*deprecated*",spec_title:"RFC7231#6.4.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.5"},307:{code:307,text:"Temporary Redirect",description:'"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI."',spec_title:"RFC7231#6.4.7",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.7"},400:{code:400,text:"Bad Request",description:'"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."',spec_title:"RFC7231#6.5.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.1"},401:{code:401,text:"Unauthorized",description:'"The request has not been applied because it lacks valid authentication credentials for the target resource."',spec_title:"RFC7235#6.3.1",spec_href:"https://tools.ietf.org/html/rfc7235#section-3.1"},402:{code:402,text:"Payment Required",description:"*reserved*",spec_title:"RFC7231#6.5.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.2"},403:{code:403,text:"Forbidden",description:'"The server understood the request but refuses to authorize it."',spec_title:"RFC7231#6.5.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.3"},404:{code:404,text:"Not Found",description:'"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists."',spec_title:"RFC7231#6.5.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.4"},405:{code:405,text:"Method Not Allowed",description:'"The method specified in the request-line is known by the origin server but not supported by the target resource."',spec_title:"RFC7231#6.5.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.5"},406:{code:406,text:"Not Acceptable",description:'"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation."',spec_title:"RFC7231#6.5.6",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.6"},407:{code:407,text:"Proxy Authentication Required",description:'"The client needs to authenticate itself in order to use a proxy."',spec_title:"RFC7231#6.3.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},408:{code:408,text:"Request Timeout",description:'"The server did not receive a complete request message within the time that it was prepared to wait."',spec_title:"RFC7231#6.5.7",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.7"},409:{code:409,text:"Conflict",description:'"The request could not be completed due to a conflict with the current state of the resource."',spec_title:"RFC7231#6.5.8",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.8"},410:{code:410,text:"Gone",description:'"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."',spec_title:"RFC7231#6.5.9",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.9"},411:{code:411,text:"Length Required",description:'"The server refuses to accept the request without a defined Content-Length."',spec_title:"RFC7231#6.5.10",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.10"},412:{code:412,text:"Precondition Failed",description:'"One or more preconditions given in the request header fields evaluated to false when tested on the server."',spec_title:"RFC7232#4.2",spec_href:"https://tools.ietf.org/html/rfc7232#section-4.2"},413:{code:413,text:"Payload Too Large",description:'"The server is refusing to process a request because the request payload is larger than the server is willing or able to process."',spec_title:"RFC7231#6.5.11",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.11"},414:{code:414,text:"URI Too Long",description:'"The server is refusing to service the request because the request-target is longer than the server is willing to interpret."',spec_title:"RFC7231#6.5.12",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.12"},415:{code:415,text:"Unsupported Media Type",description:'"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."',spec_title:"RFC7231#6.5.13",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.13"},416:{code:416,text:"Range Not Satisfiable",description:`"None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."`,spec_title:"RFC7233#4.4",spec_href:"https://tools.ietf.org/html/rfc7233#section-4.4"},417:{code:417,text:"Expectation Failed",description:`"The expectation given in the request's Expect header field could not be met by at least one of the inbound servers."`,spec_title:"RFC7231#6.5.14",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.14"},418:{code:418,text:"I'm a teapot",description:'"1988 April Fools Joke. Returned by tea pots requested to brew coffee."',spec_title:"RFC 2324",spec_href:"https://tools.ietf.org/html/rfc2324"},426:{code:426,text:"Upgrade Required",description:'"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."',spec_title:"RFC7231#6.5.15",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.15"},500:{code:500,text:"Internal Server Error",description:'"The server encountered an unexpected condition that prevented it from fulfilling the request."',spec_title:"RFC7231#6.6.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.1"},501:{code:501,text:"Not Implemented",description:'"The server does not support the functionality required to fulfill the request."',spec_title:"RFC7231#6.6.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.2"},502:{code:502,text:"Bad Gateway",description:'"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."',spec_title:"RFC7231#6.6.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.3"},503:{code:503,text:"Service Unavailable",description:'"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay."',spec_title:"RFC7231#6.6.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.4"},504:{code:504,text:"Gateway Time-out",description:'"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."',spec_title:"RFC7231#6.6.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.5"},505:{code:505,text:"HTTP Version Not Supported",description:'"The server does not support, or refuses to support, the protocol version that was used in the request message."',spec_title:"RFC7231#6.6.6",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.6"},102:{code:102,text:"Processing",description:'"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it."',spec_title:"RFC5218#10.1",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.1"},207:{code:207,text:"Multi-Status",description:'"Status for multiple independent operations."',spec_title:"RFC5218#10.2",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.2"},226:{code:226,text:"IM Used",description:'"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."',spec_title:"RFC3229#10.4.1",spec_href:"https://tools.ietf.org/html/rfc3229#section-10.4.1"},308:{code:308,text:"Permanent Redirect",description:'"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET."',spec_title:"RFC7238",spec_href:"https://tools.ietf.org/html/rfc7238"},422:{code:422,text:"Unprocessable Entity",description:'"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions."',spec_title:"RFC5218#10.3",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.3"},423:{code:423,text:"Locked",description:'"The source or destination resource of a method is locked."',spec_title:"RFC5218#10.4",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.4"},424:{code:424,text:"Failed Dependency",description:'"The method could not be performed on the resource because the requested action depended on another action and that action failed."',spec_title:"RFC5218#10.5",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.5"},428:{code:428,text:"Precondition Required",description:'"The origin server requires the request to be conditional."',spec_title:"RFC6585#3",spec_href:"https://tools.ietf.org/html/rfc6585#section-3"},429:{code:429,text:"Too Many Requests",description:'"The user has sent too many requests in a given amount of time ("rate limiting")."',spec_title:"RFC6585#4",spec_href:"https://tools.ietf.org/html/rfc6585#section-4"},431:{code:431,text:"Request Header Fields Too Large",description:'"The server is unwilling to process the request because its header fields are too large."',spec_title:"RFC6585#5",spec_href:"https://tools.ietf.org/html/rfc6585#section-5"},451:{code:451,text:"Unavailable For Legal Reasons",description:'"The server is denying access to the resource in response to a legal demand."',spec_title:"draft-ietf-httpbis-legally-restricted-status",spec_href:"https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status"},506:{code:506,text:"Variant Also Negotiates",description:'"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."',spec_title:"RFC2295#8.1",spec_href:"https://tools.ietf.org/html/rfc2295#section-8.1"},507:{code:507,text:"Insufficient Storage",description:'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."',spec_title:"RFC5218#10.6",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.6"},511:{code:511,text:"Network Authentication Required",description:'"The client needs to authenticate to gain network access."',spec_title:"RFC6585#6",spec_href:"https://tools.ietf.org/html/rfc6585#section-6"}};function xe(i){return Oe[i+""].text||"Unknown Status"}function Ne(i){return i>=200&&i<300}var v=class{},D=class{},F=(()=>{let e=class e{constructor(t={}){Object.assign(this,{caseSensitiveSearch:!1,dataEncapsulation:!1,delay:500,delete404:!1,passThruUnknownUrl:!1,post204:!0,post409:!1,put204:!0,put404:!1,apiBase:void 0,host:void 0,rootPath:void 0},t)}};e.\u0275fac=function(s){return new(s||e)(y(D))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let i=e;return i})();function Ce(i){let o=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(i),t={source:"",protocol:"",authority:"",userInfo:"",user:"",password:"",host:"",port:"",relative:"",path:"",directory:"",file:"",query:"",anchor:""},s=Object.keys(t),r=s.length;for(;r--;)t[s[r]]=o&&o[r]||"";return t}function Ie(i){return i.replace(/\/$/,"")}var M=class{constructor(e,o={}){this.inMemDbService=e,this.config=new F,this.db={},this.requestInfoUtils=this.getRequestInfoUtils();let t=this.getLocation("/");this.config.host=t.host,this.config.rootPath=t.path,Object.assign(this.config,o)}get dbReady(){return this.dbReadySubject||(this.dbReadySubject=new q(!1),this.resetDb()),this.dbReadySubject.asObservable().pipe(A(e=>e))}handleRequest(e){return this.dbReady.pipe(U(()=>this.handleRequest_(e)))}handleRequest_(e){let o=e.urlWithParams?e.urlWithParams:e.url,t=this.bind("parseRequestUrl"),s=t&&t(o,this.requestInfoUtils)||this.parseRequestUrl(o),r=s.collectionName,c=this.db[r],n={req:e,apiBase:s.apiBase,collection:c,collectionName:r,headers:this.createHeaders({"Content-Type":"application/json"}),id:this.parseId(c,r,s.id),method:this.getRequestMethod(e),query:s.query,resourceUrl:s.resourceUrl,url:o,utils:this.requestInfoUtils},a;if(/commands\/?$/i.test(n.apiBase))return this.commands(n);let l=this.bind(n.method);if(l){let m=l(n);if(m)return m}return this.db[r]?this.createResponse$(()=>this.collectionHandler(n)):this.config.passThruUnknownUrl?this.getPassThruBackend().handle(e):(a=this.createErrorResponseOptions(o,d.NOT_FOUND,`Collection '${r}' not found`),this.createResponse$(()=>a))}addDelay(e){let o=this.config.delay;return o===0?e:ve(e,o||500)}applyQuery(e,o){let t=[],s=this.config.caseSensitiveSearch?void 0:"i";o.forEach((c,n)=>{c.forEach(a=>t.push({name:n,rx:new RegExp(decodeURI(a),s)}))});let r=t.length;return r?e.filter(c=>{let n=!0,a=r;for(;n&&a;){a-=1;let l=t[a];n=l.rx.test(c[l.name])}return n}):e}bind(e){let o=this.inMemDbService[e];return o?o.bind(this.inMemDbService):void 0}bodify(e){return this.config.dataEncapsulation?{data:e}:e}clone(e){return JSON.parse(JSON.stringify(e))}collectionHandler(e){let o;switch(e.method){case"get":o=this.get(e);break;case"post":o=this.post(e);break;case"put":o=this.put(e);break;case"delete":o=this.delete(e);break;default:o=this.createErrorResponseOptions(e.url,d.METHOD_NOT_ALLOWED,"Method not allowed");break}let t=this.bind("responseInterceptor");return t?t(o,e):o}commands(e){let o=e.collectionName.toLowerCase(),t=e.method,s={url:e.url};switch(o){case"resetdb":return s.status=d.NO_CONTENT,this.resetDb(e).pipe(U(()=>this.createResponse$(()=>s,!1)));case"config":if(t==="get")s.status=d.OK,s.body=this.clone(this.config);else{let r=this.getJsonBody(e.req);Object.assign(this.config,r),this.passThruBackend=void 0,s.status=d.NO_CONTENT}break;default:s=this.createErrorResponseOptions(e.url,d.INTERNAL_SERVER_ERROR,`Unknown command "${o}"`)}return this.createResponse$(()=>s,!1)}createErrorResponseOptions(e,o,t){return{body:{error:`${t}`},url:e,headers:this.createHeaders({"Content-Type":"application/json"}),status:o}}createResponse$(e,o=!0){let t=this.createResponseOptions$(e),s=this.createResponse$fromResponseOptions$(t);return o?this.addDelay(s):s}createResponseOptions$(e){return new x(o=>{let t;try{t=e()}catch(r){let c=r.message||r;t=this.createErrorResponseOptions("",d.INTERNAL_SERVER_ERROR,`${c}`)}let s=t.status;try{t.statusText=s!=null?xe(s):void 0}catch{}return s!=null&&Ne(s)?(o.next(t),o.complete()):o.error(t),()=>{}})}delete({collection:e,collectionName:o,headers:t,id:s,url:r}){if(s==null)return this.createErrorResponseOptions(r,d.NOT_FOUND,`Missing "${o}" id`);let c=this.removeById(e,s);return{headers:t,status:c||!this.config.delete404?d.NO_CONTENT:d.NOT_FOUND}}findById(e,o){return e.find(t=>t.id===o)}genId(e,o){let t=this.bind("genId");if(t){let s=t(e,o);if(s!=null)return s}return this.genIdDefault(e,o)}genIdDefault(e,o){if(!this.isCollectionIdNumeric(e,o))throw new Error(`Collection '${o}' id type is non-numeric or unknown. Can only generate numeric ids.`);let t=0;return e.reduce((s,r)=>{t=Math.max(t,typeof r.id=="number"?r.id:t)},void 0),t+1}get({collection:e,collectionName:o,headers:t,id:s,query:r,url:c}){let n=e;return s!=null&&s!==""?n=this.findById(e,s):r&&(n=this.applyQuery(e,r)),n?{body:this.bodify(this.clone(n)),headers:t,status:d.OK}:this.createErrorResponseOptions(c,d.NOT_FOUND,`'${o}' with id='${s}' not found`)}getLocation(e){if(!e.startsWith("http")){let o=typeof document>"u"?void 0:document,t=o?o.location.protocol+"//"+o.location.host:"http://fake";e=e.startsWith("/")?t+e:t+"/"+e}return Ce(e)}getPassThruBackend(){return this.passThruBackend?this.passThruBackend:this.passThruBackend=this.createPassThruBackend()}getRequestInfoUtils(){return{createResponse$:this.createResponse$.bind(this),findById:this.findById.bind(this),isCollectionIdNumeric:this.isCollectionIdNumeric.bind(this),getConfig:()=>this.config,getDb:()=>this.db,getJsonBody:this.getJsonBody.bind(this),getLocation:this.getLocation.bind(this),getPassThruBackend:this.getPassThruBackend.bind(this),parseRequestUrl:this.parseRequestUrl.bind(this)}}indexOf(e,o){return e.findIndex(t=>t.id===o)}parseId(e,o,t){if(!this.isCollectionIdNumeric(e,o))return t;let s=parseFloat(t);return isNaN(s)?t:s}isCollectionIdNumeric(e,o){return!!(e&&e[0])&&typeof e[0].id=="number"}parseRequestUrl(e){try{let o=this.getLocation(e),t=(this.config.rootPath||"").length,s="";o.host!==this.config.host&&(t=1,s=o.protocol+"//"+o.host+"/");let c=o.path.substring(t).split("/"),n=0,a;this.config.apiBase==null?a=c[n++]:(a=Ie(this.config.apiBase.trim()),a?n=a.split("/").length:n=0),a+="/";let l=c[n++];l=l&&l.split(".")[0];let m=c[n++],S=this.createQueryMap(o.query),O=s+a+l+"/";return{apiBase:a,collectionName:l,id:m,query:S,resourceUrl:O}}catch(o){let t=`unable to parse url '${e}'; original error: ${o.message}`;throw new Error(t)}}post({collection:e,collectionName:o,headers:t,id:s,req:r,resourceUrl:c,url:n}){let a=this.clone(this.getJsonBody(r));if(a.id==null)try{a.id=s||this.genId(e,o)}catch(S){let O=S.message||"";return/id type is non-numeric/.test(O)?this.createErrorResponseOptions(n,d.UNPROCESSABLE_ENTRY,O):this.createErrorResponseOptions(n,d.INTERNAL_SERVER_ERROR,`Failed to generate new id for '${o}'`)}if(s&&s!==a.id)return this.createErrorResponseOptions(n,d.BAD_REQUEST,"Request id does not match item.id");s=a.id;let l=this.indexOf(e,s),m=this.bodify(a);return l===-1?(e.push(a),t.set("Location",c+"/"+s),{headers:t,body:m,status:d.CREATED}):this.config.post409?this.createErrorResponseOptions(n,d.CONFLICT,`'${o}' item with id='${s} exists and may not be updated with POST; use PUT instead.`):(e[l]=a,this.config.post204?{headers:t,status:d.NO_CONTENT}:{headers:t,body:m,status:d.OK})}put({collection:e,collectionName:o,headers:t,id:s,req:r,url:c}){let n=this.clone(this.getJsonBody(r));if(n.id==null)return this.createErrorResponseOptions(c,d.NOT_FOUND,`Missing '${o}' id`);if(s&&s!==n.id)return this.createErrorResponseOptions(c,d.BAD_REQUEST,`Request for '${o}' id does not match item.id`);s=n.id;let a=this.indexOf(e,s),l=this.bodify(n);return a>-1?(e[a]=n,this.config.put204?{headers:t,status:d.NO_CONTENT}:{headers:t,body:l,status:d.OK}):this.config.put404?this.createErrorResponseOptions(c,d.NOT_FOUND,`'${o}' item with id='${s} not found and may not be created with PUT; use POST instead.`):(e.push(n),{headers:t,body:l,status:d.CREATED})}removeById(e,o){let t=this.indexOf(e,o);return t>-1?(e.splice(t,1),!0):!1}resetDb(e){this.dbReadySubject&&this.dbReadySubject.next(!1);let o=this.inMemDbService.createDb(e);return(o instanceof x?o:typeof o.then=="function"?L(o):P(o)).pipe(A()).subscribe(s=>{this.db=s,this.dbReadySubject&&this.dbReadySubject.next(!0)}),this.dbReady}},we=(()=>{let e=class e extends M{constructor(t,s,r){super(t,s),this.xhrFactory=r}handle(t){try{return this.handleRequest(t)}catch(s){let r=s.message||s,c=this.createErrorResponseOptions(t.url,d.INTERNAL_SERVER_ERROR,`${r}`);return this.createResponse$(()=>c)}}getJsonBody(t){return t.body}getRequestMethod(t){return(t.method||"get").toLowerCase()}createHeaders(t){return new V(t)}createQueryMap(t){let s=new Map;if(t){let r=new Q({fromString:t});r.keys().forEach(c=>s.set(c,r.getAll(c)||[]))}return s}createResponse$fromResponseOptions$(t){return t.pipe(j(s=>new J(s)))}createPassThruBackend(){try{return new Y(this.xhrFactory)}catch(t){throw t.message="Cannot create passThru404 backend; "+(t.message||""),t}}};e.\u0275fac=function(s){return new(s||e)(y(v),y(F,8),y(w))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let i=e;return i})();function Fe(i,e,o){return new we(i,e,o)}var le=(()=>{let e=class e{static forRoot(t,s){return{ngModule:e,providers:[{provide:v,useClass:t},{provide:F,useValue:s},{provide:Z,useFactory:Fe,deps:[v,F,w]}]}}static forFeature(t,s){return e.forRoot(t,s)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=h({});let i=e;return i})();var pe=[{id:"6432f79ed2602649cc2e31d8",user_id:"642b6c97ed78e31839c2249e",user_name:"Jos\xE9 de San Mart\xEDn",title:"Living room",description:"A warm living room",filename:"gjsfwXjBZHkxwjO9Io8c",comments:3,views:0,likes:0,type:1,timestamp:"2023-04-09T17:36:30.247Z",__v:0,local:!1},{id:"642e451665f66056574a3067",user_id:"642b6c9asks8e31839c2249e",user_name:"Juan Manuel de Rosas",title:"A lamp",description:"A lamp with very pretty colors",filename:"mi5FUH1YDulb9QGXm1nu",comments:0,views:0,likes:0,type:0,timestamp:"2023-04-06T04:05:42.698Z",__v:0,local:!1},{id:"642e412cd5b15a35355e7534",user_id:"642b6c97ed78e77739c2249e",user_name:"Manuel Belgrano",title:"Matrix 5",description:"A fusion between matrix and star wars",filename:"Eewn8e3o2fB2jW7u7pFO",comments:0,views:0,likes:0,type:1,timestamp:"2023-04-06T03:49:00.122Z",__v:0,local:!1},{id:"642e40ced5b15a35355e7522",user_id:"642b6c97ed78e31839c2249e",user_name:"Jos\xE9 de San Mart\xEDn",title:"leaves",description:"The leaves of my favorite plant",filename:"I9UAyudDk35cA7TQPku7",comments:0,views:0,likes:0,type:1,timestamp:"2023-04-06T03:47:26.796Z",__v:0,local:!1},{id:"642e40b6d5b15a35355e7513",user_id:"642b6c97ed78e77739c2249e",user_name:"Manuel Belgrano",title:"bathroom",description:"A magnificent style",filename:"KUOazR9IZvXjZOJH4qns",comments:0,views:0,likes:0,type:2,timestamp:"2023-04-06T03:47:02.727Z",__v:0,local:!1},{id:"642e4085d5b15a35355e7504",user_id:"642b6c97ed78e31839c2249e",user_name:"Jos\xE9 de San Mart\xEDn",title:"Dessert",description:"A delicacy to eat in the afternoon",filename:"pkLu0lafE9IkbROodSNb",comments:2,views:0,likes:0,type:2,timestamp:"2023-04-06T03:46:13.012Z",__v:0,local:!1},{id:"642e3ba9d5b15a35355e74b4",user_id:"642b6c94h4he31839c2249e",user_name:"Hip\xF3lito Yrigoyen",title:"couch",description:"time to read a book",filename:"ohOdDzeM7qU64tKr1bXm",comments:0,views:0,likes:0,type:2,timestamp:"2023-04-06T03:25:29.473Z",__v:0,local:!1},{id:"642e3b2bd5b15a35355e74a2",user_id:"642b6c97ed78e31839c2249e",user_name:"Jos\xE9 de San Mart\xEDn",title:"Painting",description:"Look at my new painting",filename:"ssRgNVYA1CzSuFStVyF2",comments:0,views:0,likes:0,type:1,timestamp:"2023-04-06T03:23:23.286Z",__v:0,local:!1}];var he=[{id:"65564f00e1ae99ecebf57038",user_id:"642b6c9asks8e31839c2249e",image_id:"6432f79ed2602649cc2e31d8",image_user_id:"642b6c97ed78e31839c2249e",content:"That nice photo",user:"Juan Manuel de Rosas",filename:"gjsfwXjBZHkxwjO9Io8c",fileext:"",timestamp:"2023-11-16T17:18:56.320Z",__v:0,local:!1},{id:"652b19493584b671c8baaa4c",user_id:"642b6c97ed78e77739c2249e",image_id:"6432f79ed2602649cc2e31d8",image_user_id:"642b6c97ed78e31839c2249e",content:"I love this photo",user:"Manuel Belgrano",filename:"gjsfwXjBZHkxwjO9Io8c",fileext:"",timestamp:"2023-10-14T22:42:17.953Z",__v:0,local:!1},{id:"6432f7a5d2602649cc2e31de",user_id:"642b6c94h4he31839c2249e",image_id:"6432f79ed2602649cc2e31d8",image_user_id:"642b6c97ed78e31839c2249e",content:"Incredible picture",user:"Hip\xF3lito Yrigoyen",filename:"gjsfwXjBZHkxwjO9Io8c",fileext:"",timestamp:"2023-04-09T17:36:37.488Z",__v:0,local:!1},{id:"6432f756d2602649cc2e31c7",user_id:"642b6c97ed78e77739c2249e",image_id:"642e4085d5b15a35355e7504",image_user_id:"642b6c97ed78e31839c2249e",content:"Very good image",user:"Manuel Belgrano",filename:"pkLu0lafE9IkbROodSNb",fileext:"",timestamp:"2023-04-09T17:35:18.523Z",__v:0,local:!1},{id:"6432f74fd2602649cc2e31c0",user_id:"642b6c9asks8e31839c2249e",image_id:"642e4085d5b15a35355e7504",image_user_id:"642b6c97ed78e31839c2249e",content:"Beautiful memory",user:"Juan Manuel de Rosas",filename:"pkLu0lafE9IkbROodSNb",fileext:"",timestamp:"2023-04-09T17:35:11.430Z",__v:0,local:!1}];var ue=(()=>{let e=class e{createDb(){let t=[],s=[...pe],r=[...he];return{users:t,images:s,comments:r}}genId(t){return console.log("generando"),Math.random().toString()}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var fe=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e,bootstrap:[ae]}),e.\u0275inj=h({imports:[z,ne,X,de,le.forRoot(ue,{dataEncapsulation:!1})]});let i=e;return i})();K().bootstrapModule(fe).catch(i=>console.error(i));
