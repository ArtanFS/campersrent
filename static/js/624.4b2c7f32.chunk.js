"use strict";(self.webpackChunkcampersrent=self.webpackChunkcampersrent||[]).push([[624],{1624:(e,s,a)=>{a.r(s),a.d(s,{default:()=>pe});var i=a(5043),l=a(3003);const c=e=>e.campers.campers,t=e=>e.campers.shownCampers;var r=a(579);const n=e=>{let{className:s,type:a="button",onClick:i,disabled:l=!1,children:c}=e;return(0,r.jsx)("button",{className:s,type:a,onClick:i,disabled:l,children:c})};const d=a.p+"static/media/sprite.0ce1a61bfd272493ff9030c578b633fc.svg",_=e=>{let{id:s,className:a}=e;return(0,r.jsx)("svg",{className:a,children:(0,r.jsx)("use",{href:d+"#"+s})})},o="Option_option__PPQMi",m="Option_option_icon__8k2oG",h=e=>{let{className:s,classNameIcon:a,id:i,children:l}=e;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)(_,{className:m,id:i}),l]})},x=e=>{let{className:s,price:a}=e;return(0,r.jsx)("p",{className:s,children:"\u20ac"+a+".00"})},j="CamperCard_card_item__jwojS",p="CamperCard_card_info_wrap__j5FkZ",N="CamperCard_card_title_wrap__TN7M+",u="CamperCard_card_title__kpn+n",v="CamperCard_favorite_icon__VgBuA",f="CamperCard_card_price_wrap__8NsWc",C="CamperCard_card_description__sqQZq",g="CamperCard_card_option_wrap__JtJiX",w="CamperCard_card_info_btn__db1nK";var y=a(7950);const k="Modal_backdrop__xTnIT",b="Modal_modal__DJDMv",F="Modal_close_btn__Q3Ecq",D="Modal_icon__2UpwH";var I=a(8775);const E=document.querySelector("#modal-root"),M=e=>{let{children:s,openModal:a}=e;(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.code&&a()};return window.addEventListener("keydown",e),(0,I.mh)(document.body),()=>{window.removeEventListener("keydown",e),(0,I.qY)()}}),[a]);return(0,y.createPortal)((0,r.jsx)("div",{className:k,onClick:e=>{e.currentTarget===e.target&&a()},children:(0,r.jsxs)("div",{className:b,children:[(0,r.jsx)(n,{className:F,onClick:()=>a(),children:(0,r.jsx)(_,{className:D,id:"cross"})}),s]})}),E)},q="Rating_rating_wrap__bKCmP",T="Rating_rating__-RhId",V="Rating_rating_icon__U0SZu",A="Rating_location__2bwWN",L="Rating_location_icon__F8EFx",R=e=>{let{data:s}=e;const{rating:a,reviews:i,location:l}=s,c=l.split(", "),t=[c[1],c[0]].join(", ");return(0,r.jsxs)("div",{className:q,children:[(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)(_,{className:V,id:"star"}),(0,r.jsx)("p",{children:a+"("+i.length+" Reviews)"})]}),(0,r.jsxs)("div",{className:A,children:[(0,r.jsx)(_,{className:L,id:"locate"}),(0,r.jsx)("p",{children:t})]})]})},S={details_wrap:"CamperDetails_details_wrap__2r1Yu",card_title:"CamperDetails_card_title__x0UP0",card_rating_wrap:"CamperDetails_card_rating_wrap__aW9FJ",card_img_wrap:"CamperDetails_card_img_wrap__tqqxI",card_description:"CamperDetails_card_description__uTzkM",scroll_container_wrap:"CamperDetails_scroll_container_wrap__PZTQ2",scroll_container:"CamperDetails_scroll_container__XJS3b",card_info:"CamperDetails_card_info__RuofF",info_list:"CamperDetails_info_list__pJQPa",info_item_title:"CamperDetails_info_item_title__uEpzZ"},P="CardImg_img_wrap__XGEsI",Z="CardImg_img__0ZE1H",z=e=>{let{src:s,alt:a}=e;return(0,r.jsx)("div",{className:P,children:(0,r.jsx)("img",{className:Z,src:s,alt:a,width:290,height:310})})},J=()=>(0,r.jsx)("div",{children:"Features"}),K=()=>(0,r.jsx)("div",{children:"Reviewes"}),Q=e=>{let{data:s}=e;const[a,l]=(0,i.useState)(!1),[c,t]=(0,i.useState)(!1),{_id:d,name:_,price:o,gallery:m,description:h}=s;return(0,r.jsxs)("div",{className:S.details_wrap,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:S.card_title,children:_}),(0,r.jsx)("div",{className:S.card_rating_wrap,children:(0,r.jsx)(R,{data:s})}),(0,r.jsx)(x,{className:S.card_title,price:o})]}),(0,r.jsx)("div",{className:S.scroll_container_wrap,children:(0,r.jsxs)("div",{className:S.scroll_container,children:[(0,r.jsxs)("div",{className:S.card_info,children:[(0,r.jsx)("ul",{className:S.card_img_wrap,children:m.length>0&&m.map((e=>(0,r.jsx)("li",{children:(0,r.jsx)(z,{src:e,alt:"Camper "+_})},d)))}),(0,r.jsx)("p",{className:S.card_description,children:h}),(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{className:S.info_list,children:[(0,r.jsx)("li",{className:S.info_item,children:(0,r.jsx)(n,{className:S.info_item_title,onClick:()=>{l(!0),t(!1)},children:"Features"})}),(0,r.jsx)("li",{className:S.info_item,children:(0,r.jsx)(n,{className:S.info_item_title,onClick:()=>{l(!1),t(!0)},children:"Reviews"})})]})})]}),a&&(0,r.jsx)(J,{}),c&&(0,r.jsx)(K,{})]})})]})},U=e=>{let{data:s}=e;const[a,l]=(0,i.useState)(!1),c=()=>{l(!a)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("li",{className:j,children:[(0,r.jsx)(z,{src:s.gallery[0],alt:"Camper "+s.name}),(0,r.jsxs)("div",{className:p,children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:N,children:[(0,r.jsx)("h2",{className:u,children:s.name}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(x,{className:u,price:s.price}),(0,r.jsx)(n,{children:(0,r.jsx)(_,{className:v,id:"heart"})})]})]}),(0,r.jsx)(R,{data:s})]}),(0,r.jsx)("p",{className:C,children:s.description}),(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)(h,{id:"adults",children:s.adults+" adults"}),(0,r.jsx)(h,{id:"transmission",children:s.transmission}),(0,r.jsx)(h,{id:"fuel",children:s.engine}),(0,r.jsx)(h,{id:"kitchen",children:"Kitchen"}),(0,r.jsx)(h,{id:"bed",children:s.details.beds+" beds"}),(0,r.jsx)(h,{id:"AC",children:"AC"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(n,{className:w,onClick:c,children:"Show more"})})]})]}),a&&(0,r.jsx)(M,{openModal:c,children:(0,r.jsx)(Q,{data:s,closeModal:c})})]})},G="Catalog_catalog_section__FlTgv",Y="Catalog_card_list__T0pmr",W="Catalog_loadmore_btn__CURE-",H=e=>{let{loadMore:s,isLoadMore:a}=e;const i=(0,l.d4)(t);return(0,r.jsxs)("section",{className:G,children:[(0,r.jsx)("ul",{className:Y,children:i.length>0&&i.map((e=>(0,r.jsx)(U,{data:e},e._id)))}),i.length>0&&(0,r.jsx)(n,{className:W,onClick:s,disabled:!a,children:a?"Load more":"No more campers"})]})};var X=a(3892);const B={visually_hidden:"FilterEquipment_visually_hidden__QgIi5",checkbox:"FilterEquipment_checkbox__fD43b",filter_item:"FilterEquipment_filter_item__ZAdtA",filter_item_add:"FilterEquipment_filter_item_add__kCvjy",filter_icon:"FilterEquipment_filter_icon__gcUhl"},O="Label_title__zjKCr",$=e=>{let{className:s,classNameIcon:a,id:i,title:l}=e;return(0,r.jsxs)("label",{htmlFor:i,className:s,children:[(0,r.jsx)(_,{className:a,id:i}),(0,r.jsx)("p",{className:O,children:l})]})};var ee=a(8139),se=a.n(ee);const ae=()=>(0,r.jsxs)("div",{className:B.filter_container,children:[(0,r.jsx)("h2",{className:B.title,children:"Filter equipment"}),(0,r.jsx)("div",{className:B.filter_wrapper,children:(0,r.jsx)(X.l1,{initialValues:{checked:[]},children:(0,r.jsx)(X.lV,{className:B.filter,onChange:e=>{},children:(0,r.jsxs)("div",{role:"checkbox","aria-checked":!0,className:B.checkbox,children:[(0,r.jsx)(X.D0,{value:"AC",className:B.visually_hidden,type:"checkbox",name:"checked",id:"AC"}),(0,r.jsx)($,{className:B.filter_item,classNameIcon:B.filter_icon,id:"AC",title:"AC"}),(0,r.jsx)(X.D0,{value:"transmission",className:B.visually_hidden,type:"checkbox",name:"checked",id:"transmission"}),(0,r.jsx)($,{className:B.filter_item,classNameIcon:B.filter_icon,id:"transmission",title:"Automatic"}),(0,r.jsx)(X.D0,{value:"kitchen",className:B.visually_hidden,type:"checkbox",name:"checked",id:"kitchen"}),(0,r.jsx)($,{className:B.filter_item,classNameIcon:B.filter_icon,id:"kitchen",title:"Kitchen"}),(0,r.jsx)(X.D0,{value:"TV",className:B.visually_hidden,type:"checkbox",name:"checked",id:"TV"}),(0,r.jsx)($,{className:se()(B.filter_item,B.filter_item_add),classNameIcon:B.filter_icon,id:"TV",title:"TV"}),(0,r.jsx)(X.D0,{value:"shower",className:B.visually_hidden,type:"checkbox",name:"checked",id:"shower"}),(0,r.jsx)($,{className:B.filter_item,classNameIcon:B.filter_icon,id:"shower",title:"Shower/WC"})]})})})})]}),ie={visually_hidden:"FilterType_visually_hidden__xl9zD",radio:"FilterType_radio__zgP-q",filter_item:"FilterType_filter_item__pZYwq",filter_icon:"FilterType_filter_icon__70FGB"},le=()=>(0,r.jsx)("div",{className:ie.filter_container,children:(0,r.jsx)("div",{className:ie.filter_wrapper,children:(0,r.jsx)(X.l1,{initialValues:{filter:""},children:(0,r.jsx)(X.lV,{className:ie.filter,onChange:e=>{},children:(0,r.jsxs)("div",{role:"group",className:ie.radio,children:[(0,r.jsx)(X.D0,{value:"van",className:ie.visually_hidden,type:"radio",name:"filter",id:"van"}),(0,r.jsx)($,{className:ie.filter_item,classNameIcon:ie.filter_icon,id:"van",title:"Van"}),(0,r.jsx)(X.D0,{value:"fully-int",className:ie.visually_hidden,type:"radio",name:"filter",id:"fully-int"}),(0,r.jsx)($,{className:ie.filter_item,classNameIcon:ie.filter_icon,id:"fully-int",title:"Fully Integrated"}),(0,r.jsx)(X.D0,{value:"alcove",className:ie.visually_hidden,type:"radio",name:"filter",id:"alcove"}),(0,r.jsx)($,{className:ie.filter_item,classNameIcon:ie.filter_icon,id:"alcove",title:"Alcove"})]})})})})}),ce="LocationInput_filter_location_form__PIpMz",te="LocationInput_filter_location_input__jmAM0",re="LocationInput_filter_location_icon__640L3",ne=()=>{const[e,s]=(0,i.useState)(null);return(0,r.jsx)(X.l1,{children:(0,r.jsxs)(X.lV,{className:ce,children:[(0,r.jsx)(X.D0,{type:"text",name:"location",placeholder:"City",className:te,value:e,onChange:e=>{let{target:a}=e;return s(a.value)}}),(0,r.jsx)(_,{className:re,id:"locate"})]})})},de="Filters_filters_wrap__+VcGD",_e="Filters_filter_location__LHC06",oe="Filters_filter_location_title__iwKhG",me="Filters_filters_title__cUl9Y",he="Filters_filters_type_title__d6uDY",xe=()=>(0,r.jsxs)("div",{className:de,children:[(0,r.jsxs)("div",{className:_e,children:[(0,r.jsx)("h2",{className:oe,children:"Location"}),(0,r.jsx)(ne,{})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:me,children:"Filters"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:he,children:"Vehicle equipment"}),(0,r.jsx)(ae,{})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:he,children:"Vehicle type"}),(0,r.jsx)(le,{})]})]})]});var je=a(13);const pe=()=>{const[e,s]=(0,i.useState)(1),a=(0,l.wA)();let t=!0;const n=(0,l.d4)(c);e>n.length/4&&(t=!1),(0,i.useEffect)((()=>{a((0,je.g)())}),[a]),(0,i.useEffect)((()=>{a((0,je.s)(e))}),[a,e]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(xe,{}),(0,r.jsx)(H,{loadMore:()=>{s((e=>e+1))},isLoadMore:t})]})}}}]);
//# sourceMappingURL=624.4b2c7f32.chunk.js.map