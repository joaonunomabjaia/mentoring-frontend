import{Q as R,_ as B}from"./mentoring.31b55a37.js";import{Q as P}from"./index.806c5219.js";import{a as j,v as F,Q as V,g as A}from"./QBtn.bc754139.js";import{e as U,Q as k,u as O}from"./dialog.985b2618.js";import{z as N,r as h,G as z,aa as D,aj as L,o as M,h as G,g as J,y as C,B as $,au as K,Q as T,U as W,af as X,X as l,f as u,W as p,ah as H,a0 as w}from"./index.8cc0be75.js";import{Q as Y}from"./QCardSection.8b6fc1cd.js";import{Q as Z}from"./QCard.2b2ac6e8.js";import{Q as ee,U as te}from"./QSpinnerRings.4e4bdf31.js";import"./axios.0ed95acd.js";import"./_commonjsHelpers.468b0bfa.js";var oe=N({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(m,{slots:g,emit:f}){const y=J(),n=h(null);let i=0;const c=[];function b(e){const v=typeof e=="boolean"?e:m.noErrorFocus!==!0,_=++i,Q=(t,r)=>{f(`validation${t===!0?"Success":"Error"}`,r)},q=t=>{const r=t.validate();return typeof r.then=="function"?r.then(d=>({valid:d,comp:t}),d=>({valid:!1,comp:t,err:d})):Promise.resolve({valid:r,comp:t})};return(m.greedy===!0?Promise.all(c.map(q)).then(t=>t.filter(r=>r.valid!==!0)):c.reduce((t,r)=>t.then(()=>q(r).then(d=>{if(d.valid===!1)return Promise.reject(d)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return _===i&&Q(!0),!0;if(_===i){const{comp:r,err:d}=t[0];if(d!==void 0&&console.error(d),Q(!1,r),v===!0){const I=t.find(({comp:E})=>typeof E.focus=="function"&&F(E.$)===!1);I!==void 0&&I.comp.focus()}}return!1})}function x(){i++,c.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function o(e){e!==void 0&&C(e);const v=i+1;b().then(_=>{v===i&&_===!0&&(m.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function a(e){e!==void 0&&C(e),f("reset"),$(()=>{x(),m.autofocus===!0&&m.noResetFocus!==!0&&s()})}function s(){U(()=>{if(n.value===null)return;const e=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),v=>v.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}z(K,{bindComponent(e){c.push(e)},unbindComponent(e){const v=c.indexOf(e);v!==-1&&c.splice(v,1)}});let S=!1;return D(()=>{S=!0}),L(()=>{S===!0&&m.autofocus===!0&&s()}),M(()=>{m.autofocus===!0&&s()}),Object.assign(y.proxy,{validate:b,resetValidation:x,submit:o,reset:a,focus:s,getValidationComponents:()=>c}),()=>G("form",{class:"q-form",ref:n,onSubmit:o,onReset:a},j(g.default))}});const ae={class:"row q-pa-sm text-center justify-center"},se={class:"col-lg-3 col-md-6 col-sm-10"},re={style:{"margin-top":"100px"}},le={class:"col-auto text-grey text-caption q-pt-sm row no-wrap items-center justify-center"},ne={class:"row q-mb-sm q-mt-lg justify-center"},ie={class:"row q-mb-sm q-mt-lg justify-center"},ue={class:"row q-mt-lg justify-center q-mb-lg"},_e={__name:"Login",setup(m){const g=h(""),f=h(""),y=h(null),n=h(null),i=h(!1),c=T(),{alertError:b}=O(),x=async()=>{w.show({spinner:ee}),btoa(String(g.value).concat(":").concat(f.value)),y.value.validate(),n.value.validate(),!n.value.hasError&&!y.value.hasError&&te.login({username:g.value,password:f.value}).then(o=>{i.value=!1,o!==void 0&&o.status===200?(localStorage.setItem("access_token",o.data.access_token),localStorage.setItem("refresh_token",o.data.refresh_token),localStorage.setItem("username",o.data.username),localStorage.setItem("userInfo",JSON.stringify(o.data.userInfo)),localStorage.setItem("tokenExpiration",String(Date.now()+6e4)),localStorage.setItem("userData",JSON.stringify(o.data)),c.push({path:"/"})):b(o.response.data.message),w.hide()}).catch(o=>{w.hide(),i.value=!1,b(o.response.data.message)})};return(o,a)=>(W(),X("div",ae,[l("div",se,[l("div",re,[l("div",le,[u(P,{size:"180px"},{default:p(()=>[u(R,{src:B})]),_:1})]),a[2]||(a[2]=l("div",{class:"row text-center column"},[l("p",{style:{"font-family":"'line-awesome'"},class:"text-gray text-h4 text-weight-bold text-blue-10"}," Mentoria ")],-1))]),u(Z,{class:"q-mt-lg",style:{"max-width":"100%"}},{default:p(()=>[u(Y,{class:"login",style:{padding:"20px"},align:"center"},{default:p(()=>[u(oe,{class:"q-gutter-md",onSubmit:H(x,["prevent"])},{default:p(()=>[a[3]||(a[3]=l("div",{class:"col-12 text-grey-1 text-h5 text-weight-medium",style:{"margin-bottom":"30px"}}," LOGIN ",-1)),l("div",ne,[u(k,{outlined:"",class:"col-12 col-lg-8","bg-color":"white",ref_key:"usernameRef",ref:y,modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=s=>g.value=s),color:"red-9","label-color":"light-blue-10",label:"Utilizador",rules:[s=>s.length>=3||"O nome do utilizador deve ter um minimo de 4 caracteres"],dense:""},{append:p(()=>[u(V,{name:"person",color:"light-blue-10"})]),_:1},8,["modelValue","rules"])]),l("div",ie,[u(k,{class:"col-12 col-lg-8",outlined:"","bg-color":"white",color:"red-9","label-color":"light-blue-10",modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=s=>f.value=s),ref_key:"passwordRef",ref:n,type:"password",label:"Password",rules:[s=>s.length>=4||"A senha deve ter um minimo de 4 caracteres"],dense:""},{append:p(()=>[u(V,{name:"lock_open",color:"light-blue-10"})]),_:1},8,["modelValue","rules"])]),l("div",ue,[u(A,{loading:i.value,class:"col-12 col-lg-6 q-py-sm glossy",unelevated:"",rounded:"",color:"light-blue-12",type:"submit",label:"Entrar",style:{border:"solid 1px white"}},null,8,["loading"])])]),_:1}),a[4]||(a[4]=l("div",{class:"row"},[l("label",{class:"col text-right"},"v1.0")],-1))]),_:1})]),_:1})])]))}};export{_e as default};
