import{Q as m}from"./QInput.321b8eed.js";import{_ as f,d as v,g,r as t,M as D,C as d,G as c,H as o,f as e,J as l,Q as V,x as w,N as M,K as i,D as h,E as k,F as y,L as Q}from"./index.7c7b8282.js";import{Q as F,a as I}from"./QPopupProxy.db37d52e.js";import{g as s,Q as H}from"./QTable.a5502490.js";import{Q as _}from"./QTr.9515965a.js";import{Q as B}from"./QPage.9773e727.js";import{C as Y}from"./ClosePopup.c5e1e30c.js";import{u as S,F as C}from"./FormHeader.bdc211c4.js";import{d as b}from"./date.f405f89b.js";import"./use-key-composition.a804c2f6.js";import"./use-dark.f1ed3aaa.js";import"./use-id.52264d24.js";import"./uid.42677368.js";import"./use-form.8f60a875.js";import"./use-cache.b0833c75.js";import"./format.65a6df85.js";import"./QSeparator.7443f346.js";import"./QList.51621a8d.js";import"./rtl.b51694b1.js";import"./QItem.09a728d7.js";import"./QItemLabel.b8289c17.js";import"./QCheckbox.8583a2e3.js";import"./use-quasar.0035955d.js";const N=v({name:"stockcard",setup(){const n=S()[g().type.name];return console.log(n),{formHeader:n,date:t(b.formatDate(new Date,"MMMM DD, YYYY HH:mm:ss")),item:t("Welding Rod 60N x 1/8"),location:t("Mandtra Residences Project Warehouse"),reorderPoint:t(""),beginningBalance:t("0"),dateFormat:"MMMM DD, YYYY HH:mm:ss",formattedDate:t(b.formatDate(new Date,"MMMM DD, YYYY HH:mm:ss")),columns:[{name:"date",label:"Date",field:"date",align:"left"},{name:"invoice_number",label:"DR Number/Invoice Number",field:"invoice_number",align:"left"},{name:"rr_number",label:"RR Number",field:"rr_number",align:"left"},{name:"received_by",label:"Received By",field:"received_by",align:"left"},{name:"ws_number",label:"WS Number",field:"ws_number",align:"left"},{name:"issued_to",label:"Issued To",field:"issued_to",align:"left"},{name:"in",label:"In",field:"in",align:"left"},{name:"out",label:"Out",field:"out",align:"left"},{name:"balance_on_hand",label:"Balance On Hand",field:"balance_on_hand",align:"left"},{name:"remarks",label:"Remarks",field:"remarks",align:"left"}],rows:[{date:"Jan 01, 2024",invoice_number:"SI #422296",rr_number:"12004",received_by:"Dennes Franza",ws_number:"134043",issued_to:"Marc",in:"100",out:"0",balance_on_hand:"100",remarks:""},{date:"Jan 03, 2024",invoice_number:"SI #422296",rr_number:"12004",received_by:"Dennes Franza",ws_number:"134087",issued_to:"Marc",in:"",out:"1",balance_on_hand:"99",remarks:""},{date:"Jan 10, 2024",invoice_number:"SI #422296",rr_number:"12004",received_by:"Dennes Franza",ws_number:"134118",issued_to:"Marc",in:"",out:"5",balance_on_hand:"94",remarks:""},{date:"Jan 15, 2024",invoice_number:"SI #422296",rr_number:"12004",received_by:"Dennes Franza",ws_number:"134133",issued_to:"Marc",in:"",out:"5",balance_on_hand:"89",remarks:""},{date:"Jan 18, 2024",invoice_number:"SI #422296",rr_number:"12004",received_by:"Dennes Franza",ws_number:"134139",issued_to:"Marc",in:"",out:"10",balance_on_hand:"79",remarks:""},{date:"Jan 21, 2024",invoice_number:"SI #422296",rr_number:"12004",received_by:"Dennes Franza",ws_number:"134256",issued_to:"Marc",in:"",out:"5",balance_on_hand:"74",remarks:""}]}},components:{FormHeaderVue:C}}),P={class:"row items-center"},R={class:"col q-pa-sm"},q={class:"col q-pa-sm"},J={class:"col q-pa-sm"},z={class:"col q-pa-sm"},U={class:"col q-pa-sm"},T={class:"row items-center justify-end"},$={class:"q-pt-md"};function L(a,n,O,W,j,E){const p=D("form-header-vue");return d(),c(B,{class:"q-pa-sm"},{default:o(()=>[e(p,{headers:a.formHeader.headers,name:a.formHeader.name},null,8,["headers","name"]),l("div",P,[l("div",R,[e(m,{modelValue:a.item,"onUpdate:modelValue":n[0]||(n[0]=r=>a.item=r),label:"Item"},null,8,["modelValue"])]),l("div",q,[e(m,{modelValue:a.location,"onUpdate:modelValue":n[1]||(n[1]=r=>a.location=r),label:"Location"},null,8,["modelValue"])]),l("div",J,[e(m,{modelValue:a.reorderPoint,"onUpdate:modelValue":n[2]||(n[2]=r=>a.reorderPoint=r),label:"ReOrder Point"},null,8,["modelValue"])]),l("div",z,[e(m,{modelValue:a.beginningBalance,"onUpdate:modelValue":n[3]||(n[3]=r=>a.beginningBalance=r),label:"Beginning Balance"},null,8,["modelValue"])]),l("div",U,[e(m,{class:"fit",modelValue:a.date,"onUpdate:modelValue":n[5]||(n[5]=r=>a.date=r),label:"Date"},{prepend:o(()=>[e(V,{name:"event",class:"cursor-pointer"},{default:o(()=>[e(F,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[e(I,{modelValue:a.date,"onUpdate:modelValue":n[4]||(n[4]=r=>a.date=r),mask:a.dateFormat,"today-btn":""},{default:o(()=>[l("div",T,[w(e(M,{label:"Close",color:"primary",flat:""},null,512),[[Y]])])]),_:1},8,["modelValue","mask"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),l("div",$,[e(H,{rows:a.rows,columns:a.columns,"row-key":"name",separator:"cell",flat:"",bordered:""},{header:o(r=>[e(_,null,{default:o(()=>[e(s),e(s,{colspan:"3"},{default:o(()=>[i("For Receiving")]),_:1}),e(s,{colspan:"2"},{default:o(()=>[i("For Issuance")]),_:1}),e(s,{colspan:"2"},{default:o(()=>[i("Quantity")]),_:1}),e(s),e(s)]),_:1}),e(_,{props:r},{default:o(()=>[(d(!0),h(y,null,k(r.cols,u=>(d(),c(s,{key:u.name,props:r},{default:o(()=>[i(Q(u.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])]),_:1})}var ve=f(N,[["render",L]]);export{ve as default};
