import{af as c,_ as u,C as e,D as l,J as t,L as s,O as m,f as i,F as b,E as f}from"./index.5df2bc92.js";import{Q as p}from"./QSeparator.2cfd8ebb.js";import{Q as v}from"./QInput.690d3d89.js";import{u as D}from"./use-quasar.da275605.js";var n={requisitionslip:{name:"Requisition Slip",headers:[{label:"Document Number",model:"FM-PUR-01"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},receivingreport:{name:"Receiving Report",headers:[{label:"Document Number",model:"FM-WHS-01"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},stockcard:{name:"Stock Card",headers:[{label:"Document Number",model:"FM-WHS-02"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},withdrawalslip:{name:"Withdrawal Slip",headers:[{label:"Document Number",model:"FM-WHS-04"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},listtoolsequipfac:{name:"List of Tools/Equipment/Facilities",headers:[{label:"Document Number",model:"FM-MNT-01"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},deliveryreciept:{name:"Delivery Receipt",headers:[{label:"Document Number",model:"FM-WHS-08"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Jul-18"}]},toolsequiptransferslip:{name:"Tools/Equipment Transfer Slip",headers:[{label:"Document Number",model:"FM-WHS-07"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},inventoryreport:{name:"Inventory Report",headers:[{label:"Document Number",model:"FM-WHS-03"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},requisitionlogsheet:{name:"Requisition Slip Logsheet",headers:[{label:"Document Number",model:"FM-PUR-02"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]},gatepass:{name:"Gate Pass",headers:[{label:"Document Number",model:"FM-HRD-21"},{label:"Revision Number",model:"0"},{label:"Effective Date",model:"01-Dec-12"}]}},h={};const N=a=>n[a];var _={getFormHeaderValues:N};const B=c("formheaders",{state:()=>n,getters:h,actions:_}),R={props:{name:{type:String,required:!0},headers:{type:Array,required:!0}},setup(){D()}},F={class:"row items-center"},S={class:"col items-center"},E={class:"row"},q={key:0},y={key:1},g={class:"col-md-2 col-sm-4 q-pa-sm"},M={class:"col"};function H(a,k,r,V,W,w){return e(),l("div",F,[t("div",S,[t("div",E,[a.$q.platform.is.desktop?(e(),l("h2",q,s(r.name),1)):m("",!0),a.$q.platform.is.mobile?(e(),l("h6",y,s(r.name),1)):m("",!0)])]),i(p,{vertical:"",inset:"",color:"black"}),t("div",g,[(e(!0),l(b,null,f(r.headers,o=>(e(),l("div",{class:"row",key:o.label},[t("div",M,[i(v,{modelValue:o.model,"onUpdate:modelValue":d=>o.model=d,label:o.label,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])])]))),128))])])}var C=u(R,[["render",H]]);export{C as F,B as u};
