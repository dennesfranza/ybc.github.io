import{Q as d}from"./QInput.321b8eed.js";import{_ as p,d as u,g as c,r as l,M as f,C as v,G as y,H as t,f as a,J as r,Q as n,x as V,N as b}from"./index.7c7b8282.js";import{Q as B,a as D}from"./QPopupProxy.db37d52e.js";import{Q as _}from"./QTable.a5502490.js";import{Q as q}from"./QPage.9773e727.js";import{C as w}from"./ClosePopup.c5e1e30c.js";import{u as M,F as h}from"./FormHeader.bdc211c4.js";import{d as i}from"./date.f405f89b.js";import"./use-key-composition.a804c2f6.js";import"./use-dark.f1ed3aaa.js";import"./use-id.52264d24.js";import"./uid.42677368.js";import"./use-form.8f60a875.js";import"./use-cache.b0833c75.js";import"./format.65a6df85.js";import"./QSeparator.7443f346.js";import"./QList.51621a8d.js";import"./rtl.b51694b1.js";import"./QItem.09a728d7.js";import"./QItemLabel.b8289c17.js";import"./QCheckbox.8583a2e3.js";import"./use-quasar.0035955d.js";const H=u({name:"deliveryreciept",setup(){return{formHeader:M()[c().type.name],date:l(i.formatDate(new Date,"MMMM DD, YYYY HH:mm:ss")),deliveredTo:l("134301"),address:l("Centro, Mandaue City"),preparedBy:l("Dennes Franza"),reportFrom:l("Astra Project"),deliveredBy:l("Marc Gino Osme\xF1a"),receivedBy:l("Ma. Christina Bedro"),notedBy:l("Ferdinand Marcos"),dateFormat:"MMMM DD, YYYY HH:mm:ss",formattedDate:l(i.formatDate(new Date,"MMMM DD, YYYY HH:mm:ss")),columns:[{name:"rs_number",label:"RS Number",field:"rs_number",align:"left"},{name:"quantity",label:"Quantity",field:"quantity",align:"left"},{name:"description",label:"Description",field:"description",align:"left"}],rows:[{rs_number:"SI #42296",quantity:"2 DRUM",description:"Form Oil"},{rs_number:"SI #42296",quantity:"100 PCS",description:"Cutting Disk"},{rs_number:"SI #42296",quantity:"100 PCS",description:"Hacksaw Blade"},{rs_number:"SI #42296",quantity:"10 SHEETS",description:"Plywood 1/4 x 4 x 8"}]}},components:{FormHeaderVue:h}}),C={class:"row items-center"},Q={class:"col q-pa-sm"},g={class:"col q-pa-sm"},Y={class:"col q-pa-sm"},k={class:"row items-center justify-end"},S={class:"q-pt-md"},U={class:"row q-pa-md"},F={class:"col q-pa-sm"},P={class:"col q-pa-sm"},I={class:"row q-pa-md"},R={class:"col q-pa-sm"},T={class:"row q-pa-md"},N={class:"col q-pa-sm"},$={class:"col q-pa-sm"},j={class:"row q-pa-md"},A={class:"col q-pa-sm"};function E(e,o,G,O,z,J){const m=f("form-header-vue");return v(),y(q,{class:"q-pa-sm"},{default:t(()=>[a(m,{headers:e.formHeader.headers,name:e.formHeader.name},null,8,["headers","name"]),r("div",C,[r("div",Q,[a(d,{modelValue:e.deliveredTo,"onUpdate:modelValue":o[0]||(o[0]=s=>e.deliveredTo=s),label:"Delivered To"},null,8,["modelValue"])]),r("div",g,[a(d,{modelValue:e.address,"onUpdate:modelValue":o[1]||(o[1]=s=>e.address=s),label:"Address"},null,8,["modelValue"])]),r("div",Y,[a(d,{class:"fit",modelValue:e.date,"onUpdate:modelValue":o[3]||(o[3]=s=>e.date=s),label:"Date"},{prepend:t(()=>[a(n,{name:"event",class:"cursor-pointer"},{default:t(()=>[a(B,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:t(()=>[a(D,{modelValue:e.date,"onUpdate:modelValue":o[2]||(o[2]=s=>e.date=s),mask:e.dateFormat,"today-btn":""},{default:t(()=>[r("div",k,[V(a(b,{label:"Close",color:"primary",flat:""},null,512),[[w]])])]),_:1},8,["modelValue","mask"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),r("div",S,[a(_,{rows:e.rows,columns:e.columns,"row-key":"item_number",separator:"vertical","auto-width":"",flat:"",bordered:""},null,8,["rows","columns"])]),r("div",U,[r("div",F,[a(d,{modelValue:e.preparedBy,"onUpdate:modelValue":o[4]||(o[4]=s=>e.preparedBy=s),label:"Prepared By"},null,8,["modelValue"])]),r("div",P,[a(d,{modelValue:e.deliveredBy,"onUpdate:modelValue":o[5]||(o[5]=s=>e.deliveredBy=s),label:"Delivered By"},{prepend:t(()=>[a(n,{name:"fact_check",color:"green"})]),_:1},8,["modelValue"])])]),r("div",I,[r("div",R,[a(d,{label:"Received the above goods in good order & condition",readonly:""})])]),r("div",T,[r("div",N,[a(d,{modelValue:e.receivedBy,"onUpdate:modelValue":o[6]||(o[6]=s=>e.receivedBy=s),label:"Received By"},{prepend:t(()=>[a(n,{name:"fact_check",color:"green"})]),_:1},8,["modelValue"])]),r("div",$,[a(d,{modelValue:e.notedBy,"onUpdate:modelValue":o[7]||(o[7]=s=>e.notedBy=s),label:"Noted By"},{prepend:t(()=>[a(n,{name:"fact_check",color:"green"})]),_:1},8,["modelValue"])])]),r("div",j,[r("div",A,[a(d,{modelValue:e.date,"onUpdate:modelValue":o[8]||(o[8]=s=>e.date=s),label:"Date Received"},null,8,["modelValue"])])])]),_:1})}var ye=p(H,[["render",E]]);export{ye as default};
