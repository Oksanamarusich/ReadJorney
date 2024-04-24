"use strict";(self.webpackChunkReadJourney=self.webpackChunkReadJourney||[]).push([[139],{9663:function(n,e,o){o.d(e,{BW:function(){return y},Fg:function(){return j},Gq:function(){return m},N5:function(){return w},ar:function(){return b},e5:function(){return k},ob:function(){return f},xL:function(){return g}});var t,i,r,a,c,d,s,p,l=o(168),x=o(5705),u=o(1087),h=o(7924),m=(0,h.zo)(x.l0)(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  @media only screen and (min-width: 768px) {\n    gap: 14px;\n  }\n"]))),f=(0,h.zo)(x.gN)(i||(i=(0,l.Z)(["\n  border-radius: 12px;\n  padding: 14px 14px 14px 59px;\n  width: 100%;\n\n  background-color: ",";\n  border: transparent;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.33333;\n  letter-spacing: -0.02em;\n  color: ",";\n  outline: none;\n  transition: border-color ",";\n\n  &:hover {\n    border: 1px solid ",";\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 16px 16px 16px 65px;\n  }\n"])),(function(n){return n.theme.colors.backgroundInput}),(function(n){return n.theme.colors.mainTxtColor}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.hoverInput})),g=h.zo.i(r||(r=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 7%;\n  width: 18px;\n  height: 18px;\n\n  @media only screen and (min-width: 768px) {\n    width: 20px;\n    height: 20px;\n  }\n"]))),b=h.zo.label(a||(a=(0,l.Z)(["\n  position: relative;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.33333;\n  letter-spacing: -0.02em;\n  color: ",";\n"])),(function(n){return n.theme.colors.darkTxtColor})),w=h.zo.button(c||(c=(0,l.Z)(["\n  border-radius: 30px;\n  padding: 12px 29px;\n  width: 140px;\n  height: 42px;\n  background-color: ",";\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.28571;\n  letter-spacing: 0.02em;\n  color: ",";\n  transition: background-color ","\n    color "," border-color\n    ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 16px 54px;\n    width: 225px;\n    height: 52px;\n    font-size: 20px;\n    line-height: 1;\n  }\n"])),(function(n){return n.theme.colors.backgroundButton}),(function(n){return n.theme.colors.colorTxtButton}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.primaryBgColor}),(function(n){return n.theme.colors.mainTxtColor}),(function(n){return n.theme.colors.border})),y=h.zo.div(d||(d=(0,l.Z)(["\n  margin-top: 14px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  @media only screen and (min-width: 768px) {\n    margin-top: 68px;\n    gap: 20px;\n  }\n"]))),j=(0,h.zo)(u.rU)(s||(s=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.16667;\n  letter-spacing: -0.02em;\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n  color: ",";\n  transition: color ",";\n\n  &:hover {\n    color: ",";\n  }\n  @media only screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.28571;\n  }\n"])),(function(n){return n.theme.colors.darkTxtColor}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.backgroundButton})),k=(0,h.zo)(x.Bc)(p||(p=(0,l.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 8px;\n  font-size: 14px;\n  font-style: italic;\n  color: red;\n"])))},7139:function(n,e,o){o.r(e),o.d(e,{default:function(){return y}});var t=o(9439),i=o(5705),r=o(9663),a=o(8323),c=o(2791),d=o(4420),s=o(8007),p=s.Ry().shape({email:s.Z_().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).required("This field is required"),password:s.Z_().min(7,"7 chars minimum.").required("This field is required")}),l=o(5734),x=o(184),u=function(){var n=(0,c.useState)(!1),e=(0,t.Z)(n,2),o=e[0],s=e[1],u=(0,d.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(i.J9,{initialValues:{email:"",password:""},validationSchema:p,onSubmit:function(n,e){u((0,l.x4)(n)),e.resetForm()},children:(0,x.jsxs)(r.Gq,{autoComplete:"off",children:[(0,x.jsxs)(r.ar,{htmlFor:"email",children:["Mail:",(0,x.jsx)(r.ob,{id:"email",type:"email",name:"email",placeholder:"Your@email.com",autoComplete:"off"}),(0,x.jsx)(r.e5,{name:"email",component:"p"})]}),(0,x.jsxs)(r.ar,{htmlFor:"password",children:["Password:",(0,x.jsx)(r.xL,{onClick:function(){s(!o)},children:o?(0,x.jsx)(a.J,{name:"eye",stroke:"#F9F9F9"}):(0,x.jsx)(a.J,{name:"eye-off",stroke:"#F9F9F9"})}),(0,x.jsx)(r.ob,{id:"password",name:"password",placeholder:"Yourpasswordhere",type:o?"text":"password",autoComplete:"off"}),(0,x.jsx)(r.e5,{name:"password",component:"p"})]}),(0,x.jsxs)(r.BW,{children:[(0,x.jsx)(r.N5,{type:"submit",children:"Log In"}),(0,x.jsx)(r.Fg,{to:"/register",children:"Don`t have an account?"})]})]})})})},h=o(3055),m=o(1263),f=o(406),g=o(5959),b=o(580),w=o(3481);function y(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m.im,{children:[(0,x.jsx)(h.T,{}),(0,x.jsxs)(m.Dx,{children:["Expand your mind, reading ",(0,x.jsx)(m.Fe,{children:"a book"})]}),(0,x.jsx)(u,{})]}),(0,x.jsx)(m.xE,{children:(0,x.jsxs)("picture",{children:[(0,x.jsx)("source",{srcSet:"".concat(f," 1x, ").concat(g," 2x"),media:"(min-width: 375px)"}),(0,x.jsx)("source",{srcSet:"".concat(b," 1x, ").concat(w," 2x"),media:"(min-width: 1440px)"}),(0,x.jsx)(m.L6,{src:b,alt:"mobile phone"})]})})]})}},1263:function(n,e,o){o.d(e,{Dx:function(){return l},Fe:function(){return x},L6:function(){return h},im:function(){return p},xE:function(){return u}});var t,i,r,a,c,d=o(168),s=o(7924),p=s.zo.section(t||(t=(0,d.Z)(["\n  margin-bottom: 10px;\n  padding: 20px;\n  border-radius: 30px;\n  width: 100%;\n  background-color: ",";\n\n  @media only screen and (min-width: 768px) {\n    padding: 40px 64px 214px 64px;\n    margin-bottom: 0px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    padding: 40px 64px;\n    width: 50%;\n    /* height:736px; */\n  }\n"])),(function(n){return n.theme.colors.secondaryBgColor})),l=s.zo.h1(i||(i=(0,d.Z)(["\n  margin-top: 40px;\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  color: ",";\n\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    width: 444px;\n    height: 180px;\n    font-size: 64px;\n    line-height: 0.9375;\n  }\n"])),(function(n){return n.theme.colors.mainTxtColor})),x=s.zo.span(r||(r=(0,d.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.accentColor})),u=s.zo.section(a||(a=(0,d.Z)(["\n  padding: 20px 40px 0 40px;\n  border-radius: 30px;\n  width: 100%;\n  height: 351px;\n  background-color: ",";\n\n  @media only screen and (min-width: 768px) {\n    display: none;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    display: block;\n    padding: 80px 97px 0 98px;\n    width: 50%;\n    height: 100vh;\n  }\n"])),(function(n){return n.theme.colors.secondaryBgColor})),h=s.zo.img(c||(c=(0,d.Z)(["\n  border-radius: 30px;\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n\n  @media (min-width: 1440px) {\n    display: block;\n    height: 100%;\n  }\n"])))},580:function(n,e,o){n.exports=o.p+"static/media/desktop1x.2ff28bbac98e2e9591da.webp"},3481:function(n,e,o){n.exports=o.p+"static/media/desktop2x.b195e2410f06f69250c5.webp"},406:function(n,e,o){n.exports=o.p+"static/media/mobile1x.7ecdbf1295c57b6e1d2a.webp"},5959:function(n,e,o){n.exports=o.p+"static/media/mobile2x.db46c9b5603feb50d476.webp"}}]);
//# sourceMappingURL=139.994d1cb6.chunk.js.map