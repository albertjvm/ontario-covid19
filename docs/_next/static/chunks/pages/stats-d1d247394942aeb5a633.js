_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"5UwH":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return s}));var i=[{title:"Active cases",dataKeyX:"date_string",bars:[{dataKey:"active_cases",fill:"#f9d45c",name:"Active cases",stackId:"a"}]},{title:"Total cases",dataKeyX:"date_string",areas:[{dataKey:"Total Cases",fill:"#f9d45c",name:"Total cases",stackId:"a"}]},{title:"New cases",dataKeyX:"date_string",bars:[{dataKey:"new_cases",name:"New cases",fill:"#f9d45c"}],lines:[{dataKey:"new_cases_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Total deaths",dataKeyX:"date_string",areas:[{dataKey:"Deaths",name:"Total deaths",fill:"#ef8c8c"}]},{title:"New deaths",dataKeyX:"date_string",bars:[{dataKey:"new_deaths",name:"New deaths",fill:"#ef8c8c"}],lines:[{dataKey:"new_deaths_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"New tests",dataKeyX:"date_string",bars:[{dataKey:"Total tests completed in the last day",name:"New tests",fill:"#509ee3"}],lines:[{dataKey:"Under Investigation",name:"Pending tests",dot:!1,strokeWidth:2,stroke:"teal"},{dataKey:"tests_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Percent positive",dataKeyX:"date_string",bars:[{dataKey:"percent_positive",name:"Percent positive",fill:"#509ee3"}],lines:[{dataKey:"tests_positive_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Patients hospitalized",dataKeyX:"date_string",bars:[{dataKey:"Number of patients hospitalized with COVID-19",name:"Patients hospitalized",fill:"#ef8c8c"}]},{title:"Patients in ICU",dataKeyX:"date_string",bars:[{dataKey:"Number of patients in ICU on a ventilator with COVID-19",fill:"#509ee3",name:"ICU (with ventilator)",stackId:"a"},{dataKey:"icu_no_ventilator",fill:"#7172ad",name:"ICU (no ventilator)",stackId:"a"}]}],n=[{dataKeyX:"date_string",title:"Total people fully vaccinated",areas:[{dataKey:"total_individuals_fully_vaccinated",name:"Total people fully vacincated",fill:"#509ee3"}]},{dataKeyX:"date_string",title:"Daily vaccines administered",bars:[{dataKey:"previous_day_doses_administered",name:"Daily doses administered",fill:"#509ee3"}],lines:[{dataKey:"new_vaccines_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{dataKeyX:"date_string",title:"Total vaccines administered",areas:[{dataKey:"total_doses_administered",name:"Total doses administered",fill:"#509ee3"}]}],s={title:"Cases by age group",dataKeyX:"ageGroup",bars:[{dataKey:"deceased",fill:"#ef8c8c",name:"Deceased",stackId:"a"},{dataKey:"active",fill:"#f9d45c",name:"Active",stackId:"a"},{dataKey:"resolved",fill:"green",name:"Resolved",stackId:"a"}]}},"9Rzn":function(e,a,t){"use strict";var i=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("q1tI")),s=(0,i(t("8/g6")).default)(n.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined");a.default=s},D2bC:function(e,a,t){"use strict";var i=t("q1tI"),n=t.n(i),s=t("YFqc"),l=t.n(s),r=t("bXiM"),d=t("5CWz"),o=t("PsDL"),c=t("lO0E"),u=t("ofer"),f=t("9Rzn"),v=t.n(f),_=t("R/WZ"),m=t("bfUK"),y=n.a.createElement,g=Object(_.a)((function(e){return{toolbar:e.mixins.toolbar,main:{padding:16},appBar:{flexGrow:1},title:{flexGrow:1}}}));a.a=function(e){var a=e.title,t=e.children,i=g();return y("div",null,y(d.a,null),y(r.a,{position:"fixed",className:i.appBar},y(c.a,null,y(o.a,{color:"inherit",edge:"start"},y(l.a,{href:"/"},y(v.a,null))),y(u.a,{variant:"h6",noWrap:!0,className:i.title},a),y(m.a,null))),y("main",{className:i.main},y("div",{className:i.toolbar}),t))}},UbzJ:function(e,a,t){"use strict";t.r(a);var i=t("HALo"),n=t("vJKn"),s=t.n(n),l=t("rg98"),r=t("q1tI"),d=t.n(r),o=t("iae6"),c=t("ofer"),u=t("NGxS"),f=["<20","20s","30s","40s","50s","60s","70s","80s","90+"],v=function(){return new Promise((function(e){Object(u.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=455fd63b-603d-4608-8216-7d8647f43350&limit=1000000",(function(a){var t=function(e){var a={};return e.forEach((function(e){var t=e.Age_Group;if(a[t]){a[t].total+=1;var i="Fatal"===e.Outcome1?1:0,n="Resolved"===e.Outcome1?1:0;a[t].deceased+=i,a[t].resolved+=n,a[t].active+=1-i-n}else a[t]={total:1,deceased:"Fatal"===e.Outcome1?1:0,resolved:"Resolved"===e.Outcome1?1:0,active:["Fatal","Resolved"].includes(e.Outcome1)?1:0}})),f.map((function(e){return{ageGroup:e,deceased:a[e].deceased,resolved:a[e].resolved,active:a[e].active,total:a[e].total}}))}(a.result.records);e(t)}))}))},_=t("M/4y"),m=t("D2bC"),y=t("5UwH"),g=d.a.createElement;a.default=function(){var e=Object(r.useState)([]),a=e[0],t=e[1],n=Object(r.useState)(!0),d=n[0],u=n[1],f=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().then(t);case 2:u(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f()}),[]),g(m.a,{title:"Case statistics"},g(c.a,{variant:"h6"},"Some statistics on Covid-19 cases in Ontario"),d?g("div",{className:"tc"},g(o.a,null),g("p",null,"Hang tight. Just fetching and compiling the data")):g(_.a,Object(i.a)({dataSource:a,xAxisScale:"band"},y.a)))}},zorG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return t("UbzJ")}])}},[["zorG",0,2,1,3,4]]]);