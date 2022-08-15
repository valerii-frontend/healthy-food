(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__3r-JD","slide-down":"Checkout_slide-down__3RrJ6",control:"Checkout_control__2cRef",actions:"Checkout_actions__3CQyp",invalid:"Checkout_invalid__3LHei"}},,function(e,t,n){e.exports={button:"Button_button__2XS7E",button_o:"Button_button_o__y1HvU",button_quantity:"Button_button_quantity__2PCj4"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__-vweB",summary:"CartItem_summary__1ouYA",price:"CartItem_price__3LBJj",amount:"CartItem_amount__3PbFD",actions:"CartItem_actions__aEZw5"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__5xrBw",icon:"HeaderCartButton_icon__3qD07",badge:"HeaderCartButton_badge__1QHfn",bump:"HeaderCartButton_bump__y094I"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__x8XZi",description:"MealItem_description__25DY3",price:"MealItem_price__3FC-l"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2yUmz","meals-appear":"AvailableMeals_meals-appear__3OOil",loading:"AvailableMeals_loading__3hSxn",error:"AvailableMeals_error__2-ZAv"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2-BbL",modal:"Modal_modal__2toyJ","slide-down":"Modal_slide-down__30F41"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1f1QX",total:"Cart_total__1kojX",actions:"Cart_actions__admpq"}},,,,function(e,t,n){e.exports={header:"Header_header__1Gwzl"}},function(e,t,n){e.exports={card:"Card_card__359dr"}},function(e,t,n){e.exports={input:"Input_input__2ibL1"}},function(e,t,n){e.exports={form:"MealItemForm_form___OQ9j"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(9),j=n.n(d),m=function(e){var t=e.onClick,n=Object(i.useState)(!1),c=Object(r.a)(n,2),a=c[0],s=c[1],d=Object(i.useContext)(u).items,m=d.reduce((function(e,t){return e+t.amount}),0),b="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==d.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[d]),Object(o.jsxs)("button",{className:b,onClick:t,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:m})]})},b=n(20),O=n.n(b),p=function(e){var t=e.onShowCart;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsxs)("h2",{children:[Object(o.jsx)("span",{children:"Healthy food"})," \ud83e\udd57"]}),Object(o.jsx)(m,{onClick:t})]})})},f=n(5),x=n(12),h=n(21),_=n.n(h),v=function(e){return Object(o.jsx)("div",{className:_.a.card,children:e.children})},C=n(3),y=n(22),N=n.n(y),g=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:N.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(C.a)({ref:t},e.input))]})})),w=n(23),A=n.n(w),k=n(6),I=n.n(k),S=function(e){var t;return t=e.transparent?"".concat(I.a.button," ").concat(I.a.button_o):e.count?"".concat(I.a.button," ").concat(I.a.button_quantity):I.a.button,Object(o.jsx)("button",Object(C.a)(Object(C.a)({},e),{},{className:t,children:e.children}))},F=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(g,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)(S,{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},M=n(13),B=n.n(M),H=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:B.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:B.a.description,children:e.description}),Object(o.jsx)("div",{className:B.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=n(14),E=n.n(R),P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),l=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(f.a)().mark((function e(){var t,n,a,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-valerii-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:E.a.loading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:E.a.error,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:E.a.meals,children:Object(o.jsx)(v,{children:Object(o.jsx)("ul",{children:O})})})},D=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Welcome to Healthy food! Order our delicious meals!"}),Object(o.jsx)(P,{})]})},J=n(10),T=n.n(J),V=n(15),L=n.n(V),q=function(e){return Object(o.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},z=function(e){return Object(o.jsx)("div",{className:L.a.modal,children:Object(o.jsx)("div",{className:L.a.content,children:e.children})})},Q=document.getElementById("overlays"),Y=function(e){return Object(o.jsxs)(i.Fragment,{children:[T.a.createPortal(Object(o.jsx)(q,{onClose:e.onClose}),Q),T.a.createPortal(Object(o.jsx)(z,{children:e.children}),Q)]})},X=n(7),Z=n.n(X),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:Z.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:Z.a.summary,children:[Object(o.jsx)("span",{className:Z.a.price,children:t}),Object(o.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:Z.a.actions,children:[Object(o.jsx)(S,{count:"yes",onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)(S,{count:"yes",onClick:e.onAdd,children:"+"})]})]})},U=n(16),G=n.n(U),W=n(4),K=n.n(W),ee=function(e){return""===e.trim()},te=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postal:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)();return Object(o.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=l.current.value,r=u.current.value,i=d.current.value,o=!ee(n),j=!ee(c),m=5===r.trim().length,b=!ee(i);a({name:o,street:j,postal:m,city:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:i,postal:r,city:i})},children:[Object(o.jsxs)("div",{className:"".concat(K.a.control," ").concat(c.name?"":K.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s,defaultValue:"John Alleen"}),!c.name&&Object(o.jsx)("p",{children:"Please enter the valid name"})]}),Object(o.jsxs)("div",{className:"".concat(K.a.control," ").concat(c.street?"":K.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l,defaultValue:"9525 Queens Blvd"}),!c.street&&Object(o.jsx)("p",{children:"Please enter the valid street"})]}),Object(o.jsxs)("div",{className:"".concat(K.a.control," ").concat(c.postal?"":K.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u,defaultValue:"11374"}),!c.postal&&Object(o.jsx)("p",{children:"Please enter the valid postal code"})]}),Object(o.jsxs)("div",{className:"".concat(K.a.control," ").concat(c.city?"":K.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d,defaultValue:"New York"}),!c.city&&Object(o.jsx)("p",{children:"Please enter the valid city"})]}),Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)(S,{type:"button",transparent:"yes",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)(S,{children:"Confirm"})]})]})},ne=function(e){var t=e.onClose,n=Object(i.useContext)(u),c=Object(i.useState)(!1),a=Object(r.a)(c,2),s=a[0],l=a[1],d=Object(i.useState)(!1),j=Object(r.a)(d,2),m=j[0],b=j[1],O=Object(i.useState)(!1),p=Object(r.a)(O,2),h=p[0],_=p[1],v="$".concat(n.totalAmount.toFixed(2)),y=n.items.length>0,N=function(e){n.removeItem(e)},g=function(e){n.addItem(Object(C.a)(Object(C.a)({},e),{},{amount:1}))},w=Object(o.jsx)("ul",{className:G.a["cart-items"],children:n.items.map((function(e){return Object(o.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:N.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),A=Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)(S,{transparent:"yes",onClick:t,children:"Close"}),y&&Object(o.jsx)(S,{onClick:function(){return l(!0)},children:"Order"})]}),k=function(){var e=Object(x.a)(Object(f.a)().mark((function e(c){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://react-valerii-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:c,orderedItems:n.items})});case 3:setTimeout((function(){b(!1),_(!0),n.clearCart(),setTimeout((function(){t()}),1e3)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(o.jsxs)(o.Fragment,{children:[w,Object(o.jsxs)("div",{className:G.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:v})]}),s&&Object(o.jsx)(te,{onCancel:t,onConfirm:k}),!s&&A]}),F=Object(o.jsx)("p",{className:"cart_msg",children:"Sending order data..."}),M=Object(o.jsx)("p",{className:"cart_msg",children:"Successfully sent the order!"});return Object(o.jsxs)(Y,{onClose:t,children:[!m&&!h&&I,m&&F,!m&&h&&M]})},ce=n(17),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(C.a)(Object(C.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(C.a)(Object(C.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(p,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(D,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(se,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.74b0eb3c.chunk.js.map