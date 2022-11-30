(()=>{var e={560:(e,t,n)=>{const o=n(147),i="utf-8";e.exports=class{constructor(e){this.filePath=e,this.createFileIfNotExists();const t=o.readFileSync(this.filePath,i);this.contenedor=JSON.parse(t)}createFileIfNotExists(){o.existsSync(this.filePath)||o.writeFileSync(this.filePath,"[]")}_saveAll(e){const t=JSON.stringify(e,null,2);o.writeFileSync(this.filePath,t,i)}save(e){if(!e.id){const t=this.contenedor.reduce(((e,t)=>t.id>e?t.id:e),0)+1;e.id=t}return this.contenedor.push(e),this._saveAll(this.contenedor),e.id}getById(e){return this.contenedor.find((t=>t.id===e))}getAll(){return this.contenedor}deleteById(e){const t=this.contenedor.filter((t=>t.id!==e));this.contenedor=t,this._saveAll(t)}deleteAll(){this.contenedor=[],this._saveAll([])}updateById(e,t){const n=this.contenedor.findIndex((t=>t.id===e));return this.contenedor[n]=t,this._saveAll(this.contenedor),this.contenedor[n]}}},77:(e,t,n)=>{const o=n(545)();e.exports=o},142:e=>{"use strict";e.exports=require("dotenv")},545:e=>{"use strict";e.exports=require("pino")},147:e=>{"use strict";e.exports=require("fs")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=require("mongoose");n(142).config();class t{constructor(){}static connect(){return n=this,o=void 0,r=function*(){if(!t.connected)try{return yield(0,e.connect)("mongodb://localhost:27017/pokemon"),t.connected=!0,!0}catch(e){return!1}return!1},new((i=void 0)||(i=Promise))((function(e,t){function s(e){try{u(r.next(e))}catch(e){t(e)}}function d(e){try{u(r.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,d)}u((r=r.apply(n,o||[])).next())}));var n,o,i,r}}t.connected=!1;const o=require("express");var i=n.n(o);const r=require("cors");var s=n.n(r),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};const u=new e.Schema({id:{type:"Number"},name:{type:"String"},type:{type:"String"},HP:{type:"Number",default:10},image:{type:"String",default:""}}),c=(0,e.model)("Pokemon",u);class a{constructor(){t.connect(),this.pokemonModel=c}save(e){return d(this,void 0,void 0,(function*(){const t=new this.pokemonModel(e);return t.save(),t}))}getById(e){return d(this,void 0,void 0,(function*(){return yield this.pokemonModel.findOne({id:e})}))}getAll(){return d(this,void 0,void 0,(function*(){return yield this.pokemonModel.find({})}))}delete(e){return d(this,void 0,void 0,(function*(){return yield this.pokemonModel.deleteOne({id:e}),!0}))}update(e,t){return d(this,void 0,void 0,(function*(){return yield this.pokemonModel.updateOne({id:e},t),t}))}}class l{getDAO(){return this.pokemonDAO=new a,this.pokemonDAO}}var v=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};class h{constructor(){const e=new l;this.pokemonDAO=e.getDAO()}getAll(){return v(this,void 0,void 0,(function*(){return yield this.pokemonDAO.getAll()}))}getById(e){return v(this,void 0,void 0,(function*(){return yield this.pokemonDAO.getById(e)}))}save(e){return v(this,void 0,void 0,(function*(){return this.pokemonDAO.save(e)}))}delete(e){return v(this,void 0,void 0,(function*(){return this.pokemonDAO.delete(e)}))}update(e,t){return v(this,void 0,void 0,(function*(){return this.pokemonDAO.update(e,t)}))}}var f=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};new(n(560))("src/database/pokemon.json");class p{static initRepo(){p.repo=new h}static save(e){return f(this,void 0,void 0,(function*(){var t;const n=`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${(t=e.id)<10?`00${t}`:t<100?`0${t}`:t<1e3?t:""}.png`;return e.image=n,p.initRepo(),yield p.repo.save(e)}))}static readAll(){return f(this,void 0,void 0,(function*(){return p.initRepo(),yield p.repo.getAll()}))}static getById(e){return f(this,void 0,void 0,(function*(){return p.initRepo(),p.repo.getById(e)}))}static updateById(e,t){return f(this,void 0,void 0,(function*(){return p.initRepo(),p.repo.update(e,t)}))}static deleteById(e){return f(this,void 0,void 0,(function*(){return p.initRepo(),p.repo.delete(e)}))}}var y=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};const m=(0,o.Router)();m.get("/",(function(e,t){return y(this,void 0,void 0,(function*(){const e=yield p.readAll();t.json(e)}))})),m.post("/",(function(e,t){return y(this,void 0,void 0,(function*(){const{id:n,name:o,type:i="Normal",HP:r=10}=e.body;if(!n||!o)return void t.status(400).json({mensaje:"Name, Id son requeridos"});const s=yield p.save({id:n,name:o,type:i,HP:r});t.json(s)}))})),m.put("/:id",(function(e,t){return y(this,void 0,void 0,(function*(){const n=parseInt(e.params.id)||0,{name:o,type:i="Normal",HP:r=10}=e.body;if(!n||!o)return void t.status(400).json({mensaje:"Nombre y numero son requeridos"});const s=yield p.updateById(n,{name:o,type:i,HP:r,id:n});t.json(s)}))})),m.delete("/:id",(function(e,t){return y(this,void 0,void 0,(function*(){const n=parseInt(e.params.id)||0;if(!n)return void t.status(400).json({mensaje:"Numero es requerido"});const o=yield p.deleteById(n);t.json(o)}))})),m.get("/:id",(function(e,t){return y(this,void 0,void 0,(function*(){const n=parseInt(e.params.id)||0;if(!n)return void t.status(400).json({mensaje:"Numero es requerido"});const o=yield p.getById(n);o||t.status(404).json({mensaje:"Pokemon no encontrado"}),t.json(o)}))})),m.get("/view/all",(function(e,t){return y(this,void 0,void 0,(function*(){const e=yield p.readAll();t.render("pokemon",{pokemons:e})}))}));const g=m;var w=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};const k=new e.Schema({name:{type:"String"},age:{type:"Number"},city:{type:"String"},pokemons:[Number]}),j=(0,e.model)("Trainer",k);class x{constructor(){t.connect(),this.trainerModel=j}getAll(){return w(this,void 0,void 0,(function*(){return yield this.trainerModel.find({})}))}getById(t){return w(this,void 0,void 0,(function*(){const n=new e.Types.ObjectId(t),o=yield this.trainerModel.findOne({_id:n});return Object.assign({},o._doc)}))}save(e){return w(this,void 0,void 0,(function*(){const t=new this.trainerModel(e);return t.save(),t}))}update(t,n){return w(this,void 0,void 0,(function*(){const o=new e.Types.ObjectId(t);return yield this.trainerModel.updateOne({_id:o},n),n}))}delete(t){return w(this,void 0,void 0,(function*(){const n=new e.Types.ObjectId(t);return yield this.trainerModel.deleteOne({_id:n}),!0}))}addPokemon(t,n){return w(this,void 0,void 0,(function*(){const o=new e.Types.ObjectId(t);return yield this.trainerModel.updateOne({_id:o},{$push:{pokemons:n}})}))}}class O{getDAO(){return this.trainerDAO=new x,this.trainerDAO}}var A=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};class I{constructor(){const e=new O,t=new l;this.trainerDao=e.getDAO(),this.pokemonDAO=t.getDAO()}getAll(){return A(this,void 0,void 0,(function*(){return yield this.trainerDao.getAll()}))}getById(e){return A(this,void 0,void 0,(function*(){const t=yield this.trainerDao.getById(e),n=yield t.pokemons.map((e=>A(this,void 0,void 0,(function*(){return yield this.pokemonDAO.getById(e)})))),o=yield Promise.all(n);return Object.assign(Object.assign({},t),{pokemons:o})}))}save(e){return A(this,void 0,void 0,(function*(){return yield this.trainerDao.save(e)}))}delete(e){return A(this,void 0,void 0,(function*(){return yield this.trainerDao.delete(e)}))}update(e,t){return A(this,void 0,void 0,(function*(){return yield this.trainerDao.update(e,t)}))}addPokemon(e,t){return A(this,void 0,void 0,(function*(){return yield this.trainerDao.addPokemon(e,t)}))}}var P=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};class b{static initTrainerRepo(){b.repo||(b.repo=new I),b.pokemonRepo||(b.pokemonRepo=new h)}static save(e){return P(this,void 0,void 0,(function*(){return b.initTrainerRepo(),b.repo.save(e)}))}static getInfo(e){return P(this,void 0,void 0,(function*(){return b.initTrainerRepo(),yield b.repo.getById(e)}))}static addPokemon(e,t){return P(this,void 0,void 0,(function*(){return b.initTrainerRepo(),b.repo.addPokemon(e,t)}))}}var D=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{u(o.next(e))}catch(e){r(e)}}function d(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}u((o=o.apply(e,t||[])).next())}))};const B=(0,o.Router)();B.post("/",(function(e,t){return D(this,void 0,void 0,(function*(){const{name:n,age:o,city:i}=e.body;if(!n||!o||!i)return void t.status(400).json({mensaje:"name, age, city requeridos"});const r=yield b.save({name:n,age:o,city:i});t.json(r)}))})),B.get("/:id",(function(e,t){return D(this,void 0,void 0,(function*(){const n=e.params.id;if(!n)return void t.status(400).json({mensaje:"id es requerido"});const o=yield b.getInfo(n);t.json(o)}))})),B.post("/:id/addPokemon",(function(e,t){return D(this,void 0,void 0,(function*(){const n=e.params.id,{pokemonId:o}=e.body;if(!n||!o)return void t.status(400).json({mensaje:"Id del trainer y pokemon es requerido"});const i=yield b.addPokemon(n,o);t.json(i)}))}));const _=B;var q=n(77),M=n.n(q);const N=require("express-handlebars").create({extname:".hbs",defaultLayout:"index.hbs",layoutsDir:__dirname+"/../",partialsDir:__dirname+"/../partials/"}),R=i()();t.connect(),R.engine("hbs",N.engine),R.set("view engine","hbs"),R.set("views","./src/views/"),R.use(i().urlencoded({extended:!0})),R.use(i().json()),R.use(s()()),R.use("/pokemon",g),R.use("/trainer",_),R.listen("4000",(()=>{M().info("🌩️ Escuchando peticiones en puerto: 4000")})).on("error",(e=>{M().err(e)}))})()})();