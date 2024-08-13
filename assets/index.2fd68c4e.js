import{af as s}from"./index.5df2bc92.js";import{b as i,c as o,d as m}from"./axios.a63e1254.js";var c={listallitemstableloading:!1,retrievedetailspageloading:!1,deleteconsumableitemloading:!1,updateconsumableitemloading:!1,postconsumableitemloading:!1,tableindexrows:[],tableindexcolumns:[{name:"name",label:"Name",field:"name",align:"left"},{name:"description",label:"Description",field:"description",align:"left"},{name:"created_at",label:"Added",field:"created_at",align:"left"}],consumablesinput:[{name:"name",label:"Name",icon:"",type:"input"},{name:"description",label:"Description",icon:"",type:"input"},{name:"image",label:"Image",icon:"",type:"file"}],createconsumableitem:{name:"",description:"",image:null,imageurl:""},consumabledetailsitem:{id:null,name:null,description:null,image:null,created_at:null},consumabledetailsdialog:!1,consumabledetailsloadingpage:!1,addconsumableitemdialog:!1,selected:[],consumablesearchresults:[]};const d=e=>{e.listallitemstableloading=!0,i.get("consumables/").then(a=>{a.status===200&&(e.tableindexrows=a.data)}).catch(a=>{}).finally(()=>{setTimeout(()=>{e.listallitemstableloading=!1},2e3)})},u=(e,a)=>{e.retrievedetailspageloading=!0,i.get(`consumables/${a}/`).then(l=>{l.status}).catch(l=>{}).then(()=>{e.retrievedetailspageloading=!1})},r=(e,a)=>{e.deleteconsumableitemloading=!0,i.delete(`consumables/${a}/`).then(l=>{if(l.status===204){let t=e.tableindexrows.findIndex(n=>n.id===a);e.tableindexrows.splice(t,1),e.selected=[]}}).catch(l=>{}).finally(()=>{e.deleteconsumableitemloading=!1})},b=(e,a)=>{e.updateconsumableitemloading=!0,i.put(`consumables/${a.id}/`,a).then(l=>{l.status}).catch(l=>{}).finally(()=>{e.updateconsumableitemloading=!1})},g=(e,a)=>{e.consumabledetailsdialog=!0,e.consumabledetailsloadingpage=!0,e.consumabledetailsitem.id=a.id,e.consumabledetailsitem.name=a.name,e.consumabledetailsitem.description=a.description,e.consumabledetailsitem.image=a.image,e.consumabledetailsitem.created_at=a.created_at},p=e=>{e.consumabledetailsitem={id:null,name:null,description:null,image:null,created_at:null},e.consumabledetailsdialog=!1},f=e=>{e.addconsumableitemdialog=!0},h=e=>{e.createconsumableitem={name:"",description:"",image:null,imageurl:""},e.addconsumableitemdialog=!1},C=e=>{e.postconsumableitemloading=!0;let a=new FormData;a.append("name",e.createconsumableitem.name),a.append("description",e.createconsumableitem.description),a.append("image",e.createconsumableitem.image),o.post("/consumables/",a).then(l=>{l.status===201&&(console.log(l.data),e.tableindexrows.unshift(l.data))}).catch(l=>{console.log(l)}).finally(()=>{e.createconsumableitem={name:"",description:"",image:null,imageurl:""},e.postconsumableitemloading=!1,e.addconsumableitemdialog=!1})},I=(e,a)=>{i.get(`consumables_search/?name=${a}`).then(l=>{l.status===200&&(e.consumablesearchresults=l.data)})},_=s("consumables",{state:()=>c,getters:{hasSelection:e=>e.selected.length>0,consumableItems:e=>e.tableindexrows.map(a=>({id:a.id,name:a.name,description:a.description,image:`${m.baseUrl}${a.image}`,created_at:a.created_at})),consumableOptions:e=>e.consumablesearchresults.map(a=>({label:a.name,value:a.id}))},actions:{getAllItems(){d(this)},getConsumableItem(e){u(this,e.id)},deleteConsumableItem(e){r(this,e.id)},updateConsumableItem(e){b(this,e)},openConsumableDetailsDialog(e){g(this,e)},closeConsumableDetailsDialog(){p(this)},openAddConsumableItemDialog(){f(this)},closeAddConsumableItemDialog(){h(this)},postConsumableItem(){C(this)},searchConsumable(e){I(this,e)}}});export{_ as u};
