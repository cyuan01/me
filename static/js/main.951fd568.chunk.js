(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/medium.211431a4.png"},28:function(e,t,a){e.exports=a.p+"static/media/resume.a2dea6f4.pdf"},31:function(e,t,a){e.exports=a.p+"static/media/logo.6dcc0ad7.png"},33:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),i=a(26),s=a.n(i),r=(a(38),a(4)),c=a(5),o=a(7),m=a(6),u=a(20),p=a(2),d=a(16),h=a(14),f=a(12),g=(a(15),a(19)),k=a(18),b=a(29),v=(n.a.Component,a(30)),y=a(17),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"projectItem"},n.a.createElement("p",{className:"subTitleLg CG"},this.props.title),n.a.createElement("p",{className:"content CB"},this.props.desc),n.a.createElement("div",{style:{display:"flex"}},this.props.links.map((function(e){return n.a.createElement("a",{href:e.href,target:"_blank"},n.a.createElement("p",{className:"CA link"},"gen"==e.type?n.a.createElement(y.b,null):n.a.createElement(y.a,null)))}))),n.a.createElement("div",{style:{width:"65%",alignItems:"center"}},this.props.tags.map((function(e,t){return n.a.createElement("p",{className:e.active?"tagActive skill":"tag skill"},e.skill)}))))}}]),a}(l.Component),C=a(27),j=a.n(C),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"centered",style:{display:"flex",flexDirection:"column"}},n.a.createElement("p",{className:"subTitleLg CG"},"Skills"),n.a.createElement("div",{style:{}},Object.keys(this.props.skills).map((function(t,a){return n.a.createElement("p",{className:e.props.skills[t].active?"tagActive skill":"tag skill",onClick:function(){return e.props.handleClick(t)}},t)}))))}}]),a}(l.Component),x=a(28),T=a.n(x),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).state={skills:{"React.js":{active:!1,skill:"React.js"},"React Native":{active:!1,skill:"React Native"},Firebase:{active:!1,skill:"Firebase"},Redux:{active:!1,skill:"Redux"},JavaScript:{active:!1,skill:"JavaScript"},Python:{active:!1,skill:"Python"},"C++":{active:!1,skill:"C++"},C:{active:!1,skill:"C"},HTML:{active:!1,skill:"HTML"},CSS:{active:!1,skill:"CSS"}}},l.skillClick=l.skillClick.bind(Object(f.a)(l)),l}return Object(c.a)(a,[{key:"skillClick",value:function(e){this.setState({skills:Object(h.a)(Object(h.a)({},this.state.skills),{},Object(d.a)({},e,Object(h.a)(Object(h.a)({},this.state.skills[e]),{},{active:!this.state.skills[e].active})))})}},{key:"render",value:function(){return n.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#1f2236"}},n.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%",marginTop:"20%",marginBottom:"20%",display:"flex",flex:1,flexDirection:"column",color:"#c3c8e8"}},n.a.createElement("p",{className:"smallTitle CB FC Txt"},"Hello, world! My name is,"),n.a.createElement("p",{className:"bigTitle CB FB Txt"},">_\u8881\u9704 Chadd Yuan"),n.a.createElement("p",{className:"subTitleBlurb CG Txt"},"I'm a full stack software developer looking for new opportunities to build cool stuff."),n.a.createElement("p",{className:"smallTitle CB Txt"},n.a.createElement(k.b,null)," Boston, MA "),n.a.createElement("div",{style:{dispaly:"flex"}},n.a.createElement("a",{href:"https://www.linkedin.com/in/cyuan01/",target:"_blank"},n.a.createElement("p",{className:"CA link"},n.a.createElement(g.b,null))),n.a.createElement("a",{href:"https://github.com/cyuan01",target:"_blank"},n.a.createElement("p",{className:"CA link"},n.a.createElement(g.a,null))),n.a.createElement("a",{href:"mailto:chaddyuan@gmail.com",target:"_blank"},n.a.createElement("p",{className:"CA link"},n.a.createElement(b.a,null)))),n.a.createElement("br",null),n.a.createElement("p",{className:"subTitleBlurb CG Txt"},"In a rush?"),n.a.createElement("a",{href:T.a,className:"resume FC",target:"_blank"},n.a.createElement(v.a,null)," My Resume"),n.a.createElement("div",{style:{marginTop:"20%"}},n.a.createElement("p",{className:"sectionTitle CB Txt mgB20"}," About"),n.a.createElement("p",{className:"content CB Txt"},"I recently graduated Magna Cum Laude from Tufts     University with a B.S. in Computer Science and minor in Finance. In my free time I love working on old BMW's, hiking, and building passion projects."),n.a.createElement("br",null),n.a.createElement("p",{className:"content CB Txt"},"I\u2019m most interested in entrepreneurship through leveraging B2B opportunities within consumer technology. Currently, I\u2019m expanding my mobile development skills, learning to build scalable software, and gaining experience starting a company by developing a sports engagement platform. I\u2019m open to full time software development positions or just talking about my work so feel free to reach out!"),n.a.createElement(w,{skills:this.state.skills,handleClick:this.skillClick})),n.a.createElement("div",{style:{marginTop:"10%"}},n.a.createElement("p",{className:"sectionTitle CB Txt mgB20"},"Personal Projects")),n.a.createElement("div",{style:{}},n.a.createElement(E,{tags:[this.state.skills["React.js"],this.state.skills["React Native"],this.state.skills.Redux,this.state.skills.Firebase],title:"RealTime Sports",desc:"RealTime allows you and your friends to actively engage alongside your favorite sport via contests based on simple questions that reflect live game flow. Unlike other apps that require high-level analytics, RealTime values a fair payout structure designed for the casual player.",links:[{href:"https://realtimesports.io",type:"gen"}]}),n.a.createElement("div",{className:"centered"},n.a.createElement("img",{className:"rtImg",width:"100%",height:"auto",src:"https://realtimesports.io/static/media/appMockClear.49737975.png"})),n.a.createElement(E,{tags:[this.state.skills.Python],title:"Political Polarization on Twitter",desc:"In this big data project, I Co-published a featured Medium article based on research into the intersection between Twitter and politics. By leveraging Twitter's API I developed a web-app that hosted a dynamic histogram of sentiment score for real-time tweets containing a specified keyword. Among various findings, we looked into Trump's impact on ",links:[{href:"https://medium.com/@AlexS19376448/political-polarization-on-twitter-8aaaf880dc52",type:"gen"},{href:"https://github.com/cyuan01/birdnest",type:"git"}]}),n.a.createElement("div",{className:"centered"},n.a.createElement("img",{width:"100%",height:"auto",src:j.a})))),n.a.createElement("div",{className:"footer",style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("p",{className:"footerTxt"},"Made with"),n.a.createElement(k.a,{style:{color:"#f54242",fontSize:22,paddingLeft:5,paddingRight:5}}),n.a.createElement("p",{className:"footerTxt"},"by Chadd Yuan | 2020")))}}]),a}(n.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Other"))}}]),a}(n.a.Component),B=a(31),I=a.n(B),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"100%",height:100,backgroundColor:"#1f2236"}},n.a.createElement(u.b,{to:"/"},n.a.createElement("img",{src:I.a,width:"auto",height:"100%",alt:"blog img"})))}}]),a}(n.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column"}},n.a.createElement(R,null),n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/hello"},n.a.createElement(N,null)),n.a.createElement(p.a,{path:"/"},n.a.createElement(O,null)))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.951fd568.chunk.js.map