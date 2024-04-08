import{c as d,d as h,r as m,a as _,o as p,b as x,e as g,f as w,g as e,t as a,h as l,w as r,u as n,_ as u}from"./index-CB8ZjHAR.js";/**
 * @license lucide-vue-next v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=d("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=d("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),k={class:"flex justify-center w-full"},b={class:"flex flex-col w-1/2"},I=e("h3",{class:"text-4xl text-center text-[#03034f]"},"Why customers opted for ",-1),j={class:"flex gap-4 my-10"},B=["src"],L={class:"container flex flex-col justify-between flex-grow rounded-lg shadow-md bg-slate-50"},z={class:"mt-10"},N={class:"flex justify-between w-full my-10"},q=h({__name:"Testimonial",props:{testimonials:{}},setup(f){const o=f,t=m(0),s=_(()=>o.testimonials[t.value]),c=()=>{t.value<o.testimonials.length-1?t.value++:t.value=0},v=()=>{t.value>0?t.value--:t.value=o.testimonials.length-1};let i;return p(()=>{i=setInterval(c,5e3)}),x(()=>{clearInterval(i)}),(R,T)=>(g(),w("div",k,[e("div",b,[I,e("div",j,[e("img",{src:s.value.image,alt:"test",class:"object-cover w-64 h-64 rounded-lg"},null,8,B),e("div",L,[e("p",z,a(s.value.comment),1),e("div",N,[e("div",null,[e("div",null,a(s.value.name),1),e("div",null,a(s.value.title),1)]),e("div",null,[l(n(u),{variant:"outline",size:"icon",class:"rounded-full",onClick:v},{default:r(()=>[l(n(y),{class:"w-4 h-4"})]),_:1}),l(n(u),{variant:"outline",size:"icon",class:"rounded-full",onClick:c},{default:r(()=>[l(n(C),{class:"w-4 h-4"})]),_:1})])])])])])]))}});export{q as default};
