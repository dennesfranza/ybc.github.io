import{af as r}from"./index.5df2bc92.js";import{b as t}from"./axios.a63e1254.js";var a={users:[]};const u=s=>{t.get("users/").then(e=>{s.users=e.data.results}).catch(()=>{})},o=r("users",{state:()=>a,getters:{approverOptions:s=>s.users.filter(e=>e.is_approver===!0).map(e=>({label:e.name,value:e.id})),usersOptions:s=>s.users.map(e=>({label:e.name,value:e.id})),securityOptions:s=>s.users.filter(e=>e.is_security===!0).map(e=>({label:e.name,value:e.id})),supervisorOptions:s=>s.users.filter(e=>e.is_supervisor===!0).map(e=>({label:e.name,value:e.id}))},actions:{loadAllUsers(){u(this)}},persist:!0});export{o as u};
