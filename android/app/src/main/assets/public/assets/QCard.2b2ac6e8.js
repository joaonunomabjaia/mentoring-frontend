import{u as s,a as d}from"./index.806c5219.js";import{z as u,c as n,h as c,g as l}from"./index.8cc0be75.js";import{a as q}from"./QBtn.bc754139.js";var g=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=l(),t=d(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},q(r.default))}});export{g as Q};
