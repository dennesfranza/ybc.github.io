import{d as D,c as v,r as p,_ as C,M as R,C as y,G as _,H as r,f as o,K as b,Q as g,J as t,N as n,g as F,x as H,O as U}from"./index.5df2bc92.js";import{Q as V}from"./QInput.690d3d89.js";import{f as A,Q as B,e as q}from"./QTable.2ac18fab.js";import{Q as O,a as P}from"./QPopupProxy.2164c88e.js";import{Q as k}from"./QTooltip.a007546b.js";import{Q as $}from"./QPage.42c487b8.js";import{C as L}from"./ClosePopup.a118c19d.js";import{u as M,F as G}from"./FormHeader.f2aa43c0.js";import{u as T}from"./index.97fe6100.js";import{u as S}from"./index.ed48087d.js";import{u as j}from"./index.46ec5bc9.js";import{Q as f}from"./QCardSection.b73f131f.js";import{Q as h}from"./QSeparator.2cfd8ebb.js";import{Q as z,a as J}from"./QItem.e09cd2b0.js";import{Q as I}from"./QCardActions.13081c02.js";import{Q as N}from"./QCard.f7479d0b.js";import{u as K}from"./index.80f0f3bd.js";import{u as E}from"./index.fc48e11a.js";import"./use-key-composition.504026ef.js";import"./use-dark.508530b9.js";import"./use-id.0adc5cff.js";import"./uid.42677368.js";import"./use-form.1b9f1aa5.js";import"./QList.ff45222d.js";import"./rtl.b51694b1.js";import"./QItemLabel.ca6e7a19.js";import"./format.9eaaa398.js";import"./QCheckbox.471cb50a.js";import"./use-cache.b0833c75.js";import"./date.d023faf8.js";import"./use-quasar.da275605.js";import"./axios.a63e1254.js";import"./index.ab165816.js";const W=D({name:"receivingreport",setup(){const e=S(),l=T(),d=K(),a=E(),m=v(()=>d.deliveryGetItems),u=v(()=>e.receivingpayload);return{receivingstore:e,locationstore:l,deliverystore:d,userstore:a,deliveryresultitems:m,receivingpayload:u,drnumberoptions:p([])}},methods:{filterDRNumber(e,l,d){l(()=>{e===""?this.drnumberoptions=p([]):e.length>=1&&this.receivingstore.searchDeliveryNumber(e)})},updateReceivingModel(e){e!=null&&(this.deliverystore.retrieveDeliveryItem(e),this.receivingpayload.invoice_dr_no=e)},clearDeliverySearchTable(){this.deliverystore.closeDeliveryDetailsDialog(),this.receivingstore.deliverynumbersearchresults=[]},closeDialog(){this.deliverystore.closeDeliveryDetailsDialog(),this.receivingstore.closeAddReceivingItemDialog(),this.receivingstore.deliverynumbersearchresults=[]},addItems(){this.receivingstore.addItemToCreate(this.deliveryresultitems),this.deliverystore.closeDeliveryDetailsDialog()}}}),X=t("h6",null,"Receiving Report",-1),Y={class:"q-pt-md"};function Z(e,l,d,a,m,u){const i=R("q-row");return y(),_($,{class:"q-pa-sm"},{default:r(()=>[o(q,{modelValue:e.receivingstore.additemdialog,"onUpdate:modelValue":l[1]||(l[1]=c=>e.receivingstore.additemdialog=c),persistent:"",maximized:""},{default:r(()=>[o(N,null,{default:r(()=>[o(f,null,{default:r(()=>[X]),_:1}),o(h),o(f,{class:"scroll"},{default:r(()=>[o(i,{class:"q-gutter-xs"},{default:r(()=>[o(A,{"use-input":"","hide-selected":"",filled:"","fill-input":"","map-options":"","emit-value":"","input-debounce":"0",clearable:"",modelValue:e.receivingstore.deliverynumbersearchnumber,"onUpdate:modelValue":[l[0]||(l[0]=c=>e.receivingstore.deliverynumbersearchnumber=c),e.updateReceivingModel],label:"Delivery Receipt Number",options:e.receivingstore.deliveryNumberOptions,loading:e.receivingstore.deliverynumbersearchloading,onFilter:e.filterDRNumber,onClear:e.clearDeliverySearchTable},{"no-option":r(()=>[o(z,null,{default:r(()=>[o(J,{class:"text-grey"},{default:r(()=>[b(" No results ")]),_:1})]),_:1})]),prepend:r(()=>[o(g,{name:"search"})]),_:1},8,["modelValue","options","loading","onFilter","onUpdate:modelValue","onClear"])]),_:1})]),_:1}),o(f,null,{default:r(()=>[o(i,null,{default:r(()=>[t("div",Y,[o(B,{title:"Search Results",columns:e.receivingstore.searchresultstablecolumn,rows:e.deliveryresultitems,"row-key":"rs_number_id",selection:"single","auto-width":"",flat:"",bordered:""},null,8,["columns","rows"])])]),_:1})]),_:1}),o(h),o(I,{align:"left"},{default:r(()=>[o(n,{outline:"",label:"Close",color:"red",onClick:e.closeDialog},null,8,["onClick"]),o(n,{outline:"",label:"Add",color:"blue",onClick:e.addItems},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var x=C(W,[["render",Z]]);const ee=D({name:"addsupplier",setup(){return{receivingstore:S(),supplier_name:p("")}},methods:{save(){this.receivingstore.addSupplierToItems(this.supplier_name),this.supplier_name=p("")},close(){this.receivingstore.closeAddSupplierDialog(),this.supplier_name=p("")}}}),oe=t("h6",null,"Add Supplier Name",-1),re={class:"row items-center"},le={class:"col q-pa-sm"};function se(e,l,d,a,m,u){return y(),_($,{class:"q-pa-sm"},{default:r(()=>[o(q,{modelValue:e.receivingstore.addsupplierdialog,"onUpdate:modelValue":l[1]||(l[1]=i=>e.receivingstore.addsupplierdialog=i),"backdrop-filter":"blur(4px)",persistent:""},{default:r(()=>[o(N,{style:{width:"700px","max-width":"80vw"}},{default:r(()=>[o(f,null,{default:r(()=>[oe]),_:1}),o(h),o(f,{class:"scroll"},{default:r(()=>[t("div",re,[t("div",le,[o(V,{label:"Suppliers Name",modelValue:e.supplier_name,"onUpdate:modelValue":l[0]||(l[0]=i=>e.supplier_name=i),filled:""},{prepend:r(()=>[o(g,{name:"123"})]),_:1},8,["modelValue"])])])]),_:1}),o(h),o(I,{align:"left"},{default:r(()=>[o(n,{outline:"",label:"Close",color:"red",onClick:e.close},null,8,["onClick"]),o(n,{outline:"",label:"Save",color:"blue",onClick:e.save},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue","backdrop-filter"])]),_:1})}var te=C(ee,[["render",se]]);const ie=D({name:"addremarks",setup(){return{receivingstore:S(),remarks:p("")}},methods:{save(){this.receivingstore.addRemarksToItems(this.remarks),this.remarks=p("")},close(){this.receivingstore.closeAddRemarksDialog(),this.remarks=p("")}}}),ae=t("h6",null,"Add Remarks",-1),ne={class:"row items-center"},de={class:"col q-pa-sm"};function me(e,l,d,a,m,u){return y(),_($,{class:"q-pa-sm"},{default:r(()=>[o(q,{modelValue:e.receivingstore.addremarksdialog,"onUpdate:modelValue":l[1]||(l[1]=i=>e.receivingstore.addremarksdialog=i),"backdrop-filter":"blur(4px)",persistent:""},{default:r(()=>[o(N,{style:{width:"700px","max-width":"80vw"}},{default:r(()=>[o(f,null,{default:r(()=>[ae]),_:1}),o(h),o(f,{class:"scroll"},{default:r(()=>[t("div",ne,[t("div",de,[o(V,{label:"Remarks",modelValue:e.remarks,"onUpdate:modelValue":l[0]||(l[0]=i=>e.remarks=i),filled:""},{prepend:r(()=>[o(g,{name:"123"})]),_:1},8,["modelValue"])])])]),_:1}),o(h),o(I,{align:"left"},{default:r(()=>[o(n,{outline:"",label:"Close",color:"red",onClick:e.close},null,8,["onClick"]),o(n,{outline:"",label:"Save",color:"blue",onClick:e.save},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue","backdrop-filter"])]),_:1})}var pe=C(ie,[["render",me]]);const ue=D({name:"receivingreport",setup(){const e=M(),l=e[F().type.name],d=T(),a=S(),m=j(),u=v({get:()=>a.selected,set:s=>a.selected=s}),i=v(()=>a.receivingpayload),c=v(()=>m.preparedByOptions),Q=v(()=>a.hasSelectedReportItems),w=v(()=>a.postitemloading);return{formheaders:e,formHeader:l,locationstore:d,receivingstore:a,loginstore:m,selected:u,receivingpayload:i,preparedByOptions:c,hasSelectedReportItems:Q,postitemloading:w}},components:{FormHeaderVue:G,AddReceivingReportDialog:x,AddSupplierDialog:te,AddRemarksDialog:pe}}),ce={class:"row items-center"},ve={class:"col q-pa-sm"},ge={class:"col q-pa-sm"},fe={class:"col q-pa-sm"},be={class:"row items-center justify-end"},ye={class:"q-pt-md"},_e={class:"row items-center"},he={class:"col q-pa-sm"};function ke(e,l,d,a,m,u){const i=R("form-header-vue"),c=R("AddReceivingReportDialog"),Q=R("AddSupplierDialog"),w=R("AddRemarksDialog");return y(),_($,{class:"q-pa-sm"},{default:r(()=>[o(i,{headers:e.formHeader.headers,name:`Create ${e.formHeader.name}`},null,8,["headers","name"]),t("div",ce,[t("div",ve,[o(V,{modelValue:e.receivingpayload.rr_no,"onUpdate:modelValue":l[0]||(l[0]=s=>e.receivingpayload.rr_no=s),label:"RR Number"},{prepend:r(()=>[o(g,{name:"123",color:"black"})]),_:1},8,["modelValue"])]),t("div",ge,[o(A,{label:"Report From",options:e.locationstore.locationOptions,modelValue:e.receivingpayload.report_from,"onUpdate:modelValue":l[1]||(l[1]=s=>e.receivingpayload.report_from=s),"map-options":"","emit-value":""},{prepend:r(()=>[o(g,{name:"map",color:"black"})]),_:1},8,["options","modelValue"])]),t("div",fe,[o(V,{class:"fit",modelValue:e.receivingpayload.date,"onUpdate:modelValue":l[3]||(l[3]=s=>e.receivingpayload.date=s),label:"Date"},{prepend:r(()=>[o(g,{name:"event",class:"cursor-pointer"},{default:r(()=>[o(O,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[o(P,{modelValue:e.receivingpayload.date,"onUpdate:modelValue":l[2]||(l[2]=s=>e.receivingpayload.date=s),mask:e.receivingstore.dateFormat,"today-btn":""},{default:r(()=>[t("div",be,[H(o(n,{label:"Close",color:"primary",flat:""},null,512),[[L]])])]),_:1},8,["modelValue","mask"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),t("div",ye,[o(B,{title:"Items List","row-key":"item_number",separator:"vertical",columns:e.receivingstore.tablecreatecolumns,rows:e.receivingstore.tablecreaterows,"auto-width":"",flat:"",bordered:""},{"top-right":r(()=>[o(n,{class:"q-mr-sm",color:"primary",icon:"add",onClick:l[4]||(l[4]=s=>e.receivingstore.openAddReceivingItemDialog())},{default:r(()=>[o(k,{class:"bg-accent"},{default:r(()=>[b("Add Item")]),_:1})]),_:1}),e.hasSelectedReportItems?(y(),_(n,{key:0,class:"q-mr-sm",color:"primary",icon:"groups",onClick:l[5]||(l[5]=s=>e.receivingstore.openAddSupplierDialog())},{default:r(()=>[o(k,{class:"bg-accent"},{default:r(()=>[b("Add Supplier")]),_:1})]),_:1})):U("",!0),e.hasSelectedReportItems?(y(),_(n,{key:1,class:"q-mr-sm",color:"primary",icon:"description",onClick:l[6]||(l[6]=s=>e.receivingstore.openAddRemarksDialog())},{default:r(()=>[o(k,{class:"bg-accent"},{default:r(()=>[b("Add Remarks")]),_:1})]),_:1})):U("",!0),o(n,{class:"q-mr-sm",color:"primary",icon:"restart_alt",onClick:l[7]||(l[7]=s=>e.receivingstore.reset())},{default:r(()=>[o(k,{class:"bg-accent"},{default:r(()=>[b("Reset")]),_:1})]),_:1}),o(n,{class:"q-mr-sm",color:"primary",icon:"save",loading:e.postitemloading,onClick:l[8]||(l[8]=s=>e.receivingstore.createReceivingReportItem())},{default:r(()=>[o(k,{class:"bg-accent"},{default:r(()=>[b("Save")]),_:1})]),_:1},8,["loading"])]),_:1},8,["columns","rows"])]),t("div",_e,[t("div",he,[o(A,{label:"Requested By",options:e.preparedByOptions,"map-options":"","emit-value":"",modelValue:e.receivingpayload.received_by,"onUpdate:modelValue":l[9]||(l[9]=s=>e.receivingpayload.received_by=s)},{prepend:r(()=>[o(g,{name:"fact_check",color:"black"})]),_:1},8,["options","modelValue"])])]),o(c),o(Q),o(w)]),_:1})}var oo=C(ue,[["render",ke]]);export{oo as default};
