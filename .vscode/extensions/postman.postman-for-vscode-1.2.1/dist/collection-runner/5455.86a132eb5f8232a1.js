"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[5455,7560,2389,7397,25],{7560:(e,t,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{Z:()=>o})},98283:(e,t,n)=>{function o(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:()=>o})},98675:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i}),n(40540);var o=n(80429),r=n(97913),c=n(32543),a=n(52322);const i=({collectionId:e,folderId:t,isDisabled:n})=>{const i=(0,c.XC)();return(0,a.jsx)(o.Z,{type:"tertiary",text:"Run",tooltip:n?"You do not have permission to run this collection":"Run collection",isDisabled:n,icon:(0,a.jsx)(r.Z,{}),onClick:()=>{i(e,t)}})}},32543:(e,t,n)=>{n.d(t,{HH:()=>u,UT:()=>d,XC:()=>a,Ze:()=>v,rV:()=>s,tZ:()=>i,tl:()=>l});var o=n(10099),r=n(39245),c=n(56880);const a=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return(n,o)=>{e(o?`/workspace/${t}/run/create?folder=${o}&collection=${n}&type=manual-run`:`/workspace/${t}/run/create?collection=${n}&type=manual-run`,{},{customNavEvent:"COLLECTION_RUNNER_NAV_EVENT"}),c.AnalyticsService.addEventV2({category:"collectionrun",action:"open_run_create",label:"new_run",entityType:o?"folder":"collection",entityId:null!=o?o:n})}},i=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return async(n,o)=>{if(!n)return;const{openInNewTab:r,loadFromHistory:a,navigationPayload:i}=o;if(r)return e(`/workspace/${t}/run/${n}`,{state:JSON.stringify({additionalContext:{id:n,loadFromHistory:a,additionalContext:i}})},{customNavEvent:"COLLECTION_RUNNER_NAV_EVENT"}),void c.AnalyticsService.addEventV2({category:"collectionrun",action:"open_run_details",label:a?"past_run":"new_run",entityType:"collectionrun",entityId:n});e(`/workspace/${t}/run/${n}`,{state:JSON.stringify({additionalContext:{id:n,loadFromHistory:a,additionalContext:i}})}),c.AnalyticsService.addEventV2({category:"collectionrun",action:"open_run_details",label:a?"past_run":"new_run",entityType:"collectionrun",entityId:n})}},l=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&e(`/workspace/${t}/request/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}},s=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&(e(`/workspace/${t}/collection/${n}?tab=runs`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),c.AnalyticsService.addEventV2({category:"collectionrun",action:"view_all_runs",label:"runs_history",entityType:"collection",entityId:n}))}},u=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{e(`/workspace/${t}/environment/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}},d=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&e(`/workspace/${t}/collection/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}},v=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&e(`/workspace/${t}/folder/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}}},97913:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7560),r=n(40540),c=n.n(r),a=n(207),i=c().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c().createElement("path",{d:"M6 5.35323V10.6468C6 10.8022 6.16959 10.8982 6.3029 10.8183L10.7142 8.17149C10.8436 8.09381 10.8436 7.90618 10.7142 7.8285L6.3029 5.18173C6.16959 5.10175 6 5.19777 6 5.35323Z",fill:"#6B6B6B"}),c().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H13.5C13.7761 2 14 2.22386 14 2.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V2.5Z",fill:"#6B6B6B"})),l=c().forwardRef((function(e,t){return c().createElement(a.Z,(0,o.Z)({},e,{svg:i,ref:t}))}));l.getName=function(){return"icon-action-run-stroke"};const s=l}}]);
//# sourceMappingURL=5455.86a132eb5f8232a1.js.map