import{af as a}from"./index.5df2bc92.js";import"./axios.a63e1254.js";var t={dateFormat:"YYYY-MM-DD",tableindexcolumns:[{name:"gp_number",label:"GP Number",field:"gp_number",align:"left"},{name:"please_allow",label:"Visitor",field:"please_allow",align:"left"},{name:"purpose",label:"Purpose",field:"purpose",align:"left"},{name:"location",label:"Location",field:"location",align:"left"},{name:"date_time_in",label:"Date IN",field:"date_time_in",align:"left"},{name:"remarks",label:"Remarks",field:"remarks",align:"left"}],tableindexrows:[],gatepassdetails:{gp_number:"",please_allow:"",date:"",purpose:"",prepared_by:"",noted_by:"",checked_by:"",location:"",date_time_in:"",date_time_out:"",remarks:"",gatepassdetailsitems:[]},gatepassdetailsitems:{item:"",description:"",quantity:0},tableindexloading:!1,gatepassadditemloading:!1,gatepassadditemdialog:!1,gatepassremoveitemloading:!1,gatepasspostitemloading:!1,addgatepassdialog:!1,selected:[],createtablecolumn:[{name:"item",label:"Item",field:"item",align:"left"},{name:"description_label",label:"Item Description",field:"description_label",align:"left"},{name:"quantity",label:"Quantity",field:"quantity",align:"left"}],createtablerows:[],gatepasscreateitem:{gp_number:"",please_allow:"",date:"",purpose:"",prepared_by:null,noted_by:null,checked_by:null,location:null,date_time_in:"",date_time_out:"",remarks:"",gate_pass_items:[]},gate_pass_items:{item:"",description:null,description_label:null,quantity:0},gatepassinput:[{name:"item",label:"Item",icon:"task",type:"input"},{name:"description",label:"Description",icon:"description",type:"select"},{name:"quantity",label:"Quantity",icon:"123",type:"input"}]};const l=e=>{e.addgatepassdialog=!0},i=e=>{e.addgatepassdialog=!1,e.gate_pass_items={item:"",description:null,quantity:0}},s=e=>{e.gate_pass_items={item:"",description:null,quantity:0},e.gatepasscreateitem={gp_number:"",please_allow:"",date:"",purpose:"",prepared_by:null,noted_by:null,checked_by:null,location:null,date_time_in:"",date_time_out:"",remarks:"",gate_pass_items:[]}},p=a("gatepass",{state:()=>t,getters:{hasSelection:e=>e.selected.length>0},actions:{openAddGatepassDialog(){l(this)},closeAddGatepassDialog(){i(this)},reset(){s(this)}}});export{p as u};
