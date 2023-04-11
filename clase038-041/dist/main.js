(()=>{"use strict";var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=require("express");var t=e.n(n);const o=require("cors"),i=require("mongoose");var r=e.n(i);const a=new i.Schema({id:{type:Number,required:!0,default:0},name:{type:String,required:!0,default:""},type:{type:String,required:!0,default:""}}),s=(0,i.model)("pokemon",a);var u=function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function a(e){try{u(o.next(e))}catch(e){r(e)}}function s(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((o=o.apply(e,n||[])).next())}))};const d=new class{getAllPokemons(){return u(this,void 0,void 0,(function*(){return yield s.find()}))}getPokemonById(e){return u(this,void 0,void 0,(function*(){return yield s.findOne({id:e})}))}createPokemon(e){return u(this,void 0,void 0,(function*(){const n=new s(e);return yield n.save(),n}))}updatePokemon(e,n){return u(this,void 0,void 0,(function*(){return yield s.findOneAndUpdate({id:e},n)}))}deletePokemon(e){return u(this,void 0,void 0,(function*(){return yield s.deleteOne({id:e}),!0}))}};var c=function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function a(e){try{u(o.next(e))}catch(e){r(e)}}function s(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((o=o.apply(e,n||[])).next())}))};const l=(0,n.Router)();l.get("/",((e,n)=>c(void 0,void 0,void 0,(function*(){const e=yield d.getAllPokemons();n.json({data:e})})))),l.get("/:id",((e,n)=>c(void 0,void 0,void 0,(function*(){const{id:t}=e.params,o=yield d.getPokemonById(t);if(!o)return n.status(404).json({message:"Pokemon not found",data:null});n.json({data:o})})))),l.post("/",((e,n)=>c(void 0,void 0,void 0,(function*(){const{id:t,name:o,type:i}=e.body;if(!t||!o||!i)return n.status(400).json({message:"Bad request",data:null});if(yield d.getPokemonById(t))return n.status(409).json({message:"Pokemon already exists",data:null});const r={id:t,name:o,type:i},a=yield d.createPokemon(r);return n.status(201).json({data:a,message:"Pokemon has been created"})})))),l.delete("/:id",((e,n,t)=>{return o=void 0,i=void 0,a=function*(){const o=e.headers.authorization;return console.log(o),o?"123456"!==o?n.status(401).json({message:"Unauthorized",data:null}):(e.token=o,void t()):n.status(401).json({message:"Unauthorized",data:null})},new((r=void 0)||(r=Promise))((function(e,n){function t(e){try{u(a.next(e))}catch(e){n(e)}}function s(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var o;n.done?e(n.value):(o=n.value,o instanceof r?o:new r((function(e){e(o)}))).then(t,s)}u((a=a.apply(o,i||[])).next())}));var o,i,r,a}),((e,n)=>c(void 0,void 0,void 0,(function*(){const{id:t}=e.params;if(!t)return n.status(400).json({message:"Bad request",data:null});const o=yield d.deletePokemon(t);n.json({message:"Pokemon has been deleted",data:o})}))));const f=l,v=require("dotenv");e.n(v)().config();const m=process.env.PORT||8080;process.env.BASE_URL;const y=require("pino"),h=e.n(y)()();(function(){return e=this,n=void 0,o=function*(){r().set("strictQuery",!1),yield r().connect("mongodb://localhost:27017/pokemon")},new((t=void 0)||(t=Promise))((function(i,r){function a(e){try{u(o.next(e))}catch(e){r(e)}}function s(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((o=o.apply(e,n||[])).next())}));var e,n,t,o})().catch((e=>console.log(e)));const p=t()();p.use(t().json()),p.use(t().urlencoded({extended:!0})),p.use(o()),p.get("/",((e,n)=>n.json({time:Date.now()}))),p.use("/api/pokemon",f),p.listen(m,(()=>{h.info(`🔋 Server running on port::${m}`)}))})();