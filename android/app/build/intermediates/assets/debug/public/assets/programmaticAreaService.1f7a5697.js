var l=Object.defineProperty;var y=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{M as h,c as p,d as s}from"./index.806c5219.js";class n extends h{static fields(){return{id:this.number(()=>0),uuid:this.attr(""),name:this.attr(""),description:this.attr(""),programmaticAreas:this.hasMany(c,"program_id")}}}i(n,"entity","programs"),i(n,"primaryKey","id"),i(n,"piniaOptions",{persist:!0});class c extends h{static fields(){return{id:this.number(()=>0),uuid:this.attr(""),code:this.attr(""),name:this.attr(""),description:this.attr(""),program_id:this.attr(""),program:this.belongsTo(n,"program_id")}}}i(c,"entity","programmatic_areas"),i(c,"primaryKey","id"),i(c,"piniaOptions",{persist:!0});function g(){function r(t){return new n({id:t.id,uuid:t.uuid,name:t.name,description:t.description})}function e(t){return{id:t.id,uuid:t.uuid,name:t.name,description:t.description}}return{createProgramFromDTO:r,createDTOFromProgram:e}}function w(){function r(t){const{createProgramFromDTO:d}=g();return new c({id:t.id,uuid:t.uuid,code:t.code,name:t.name,description:t.description,program:d(t.program)})}function e(t){const{createDTOFromProgram:d}=g();return{id:t.id,uuid:t.uuid,code:t.code,name:t.name,description:t.description,program:d(t.program)}}return{createProgrammaticAreaFromDTO:r,createDTOFromProgrammaticArea:e}}const o=p(n),{createProgramFromDTO:u}=g();var A={async getAll(){return await s().get("/programs/getAll").then(r=>(this.generateAndSaveEntityFromDTO(r.data),r)).catch(r=>{console.error("Error",r.message)})},getProgramList(){return o.query().withAllRecursive(2).orderBy("id","asc").get()},getById(r){return o.query().withAllRecursive(2).where("id",r).orderBy("id","asc").first()},generateAndSaveEntityFromDTO(r){r.forEach(e=>{const t=u(e);o.save(t)})},deleteAllFromStorage(){o.flush()},piniaGetAll(){return o.query().orderBy("name","asc").get()},async saveProgram(r){return await s().post("/programs/save",r).then(e=>(o.save(u(e.data)),e)).catch(e=>{console.error("Error",e.message)})},async deleteProgram(r){try{const e=await s().patch(`/programs/${r}`);return await s().delete(`/programs/${r}`),o.save(u(e.data)),o.delete(r),e}catch(e){throw console.error("Error",e.message),e}},async updateProgram(r){return await s().patch("/programs/update",r).then(e=>(o.save(u(e.data)),e)).catch(e=>{console.error("Error",e.message)})}};const a=p(c),{createProgrammaticAreaFromDTO:m}=w();var E={async getAll(){return await s().get("/programmaticareas/getAll").then(r=>(this.generateAndSaveEntityFromDTO(r.data),r)).catch(r=>{console.error(r),console.error("Error",r.message)})},generateAndSaveEntityFromDTO(r){r.forEach(e=>{const t=m(e);a.save(t)})},deleteAllFromStorage(){a.flush()},piniaGetAll(){return a.query().orderBy("description","asc").get()},getByName(r){return a.query().where("name",r).orderBy("description","asc").first()},getById(r){return a.query().with("program").where("id",r).orderBy("description","asc").first()},getProgrammaticAreasByProgramaId(r){return a.query().with("program").where("program_id",r).get()},async saveProgrammaticArea(r){return await s().post("/programmaticareas",r).then(e=>(a.save(m(e.data)),e)).catch(e=>{console.error("Error",e.message)})},async deleteProgrammaticArea(r){try{const e=await s().patch(`/programmaticareas/${r}`);return await s().delete(`/programmaticareas/${r}`),a.save(m(e.data)),a.delete(r),e}catch(e){throw console.error("Error",e.message),e}},async updateProgrammaticArea(r){return await s().patch("/programmaticareas",r).then(e=>(a.save(m(e.data)),e)).catch(e=>{console.error("Error",e.message)})}};export{c as P,E as a,n as b,A as p,w as u};