(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(2),i=t.n(c),r=(t(13),t(3)),s=t(4),m=t(6),o=t(5),u=t(7);function d(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("a",{href:"#about"},"About"),l.a.createElement("a",{href:"#experience"},"Experience"),l.a.createElement("a",{href:"#education"},"Education"),l.a.createElement("a",{href:"#projects"},"Projects"),l.a.createElement("a",{href:"#skills"},"Skills"),l.a.createElement("a",{href:"#contact"},"Contact"))}function p(e){var a=e.name,t=e.links,n=e.title,c=e.city,i=e.state;return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("div",{className:"jumbotron-text"},l.a.createElement("h1",null,a.first," ",a.last),l.a.createElement("p",null,n," in ",c,", ",i,".")),l.a.createElement("div",{className:"jumbotron-social"},l.a.createElement("ul",{className:"ul-social"},l.a.createElement("li",{className:"li-social-links"},l.a.createElement("a",{className:"social",href:t.github,target:"_blank"},l.a.createElement("img",{src:"media/GitHub_Logo_White.png",alt:"github"}))),l.a.createElement("li",{className:"li-social-links"},l.a.createElement("a",{className:"social",href:t.linkedin,target:"_blank"},l.a.createElement("img",{src:"../media",alt:"linkedin"}))))),l.a.createElement("div",{id:"down-arrow"},l.a.createElement("span",null,l.a.createElement("a",{href:"#about"},l.a.createElement("i",{className:"fa fa-chevron-down","aria-hidden":"true"})))))}function E(e){var a=e.about.map(function(e,a){return l.a.createElement("p",{key:a},e)});return l.a.createElement("div",{className:"row white box-shadow"},l.a.createElement("div",{className:"side-content"}),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"content-header"},l.a.createElement("a",{className:"anchor",name:"about"}),l.a.createElement("h2",null,"About Me")),l.a.createElement("div",{className:"content-body"},a)),l.a.createElement("div",{className:"side-content"}))}function v(e){var a=e.projects.map(function(e,a){return l.a.createElement("div",{className:"project-card",key:a},l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:e.image})),l.a.createElement("div",{className:"project-content"},l.a.createElement("h4",null,e.name),e.description.map(function(e,a){return l.a.createElement("p",{key:a},e)}),l.a.createElement("a",{href:e.linkUrl},e.linkText)))});return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"side-content-sm"}),l.a.createElement("div",{className:"main-content-lg"},l.a.createElement("div",{className:"content-header"},l.a.createElement("a",{className:"anchor",name:"projects"}),l.a.createElement("h2",null,"Projects")),l.a.createElement("div",{className:"content-body"},a,l.a.createElement("div",{className:"project-card"},l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:"http://placehold.it/600x300"})),l.a.createElement("div",{className:"project-content"},l.a.createElement("h4",null,"projet name"),l.a.createElement("p",null,"point 1"),l.a.createElement("p",null,"point 2"),l.a.createElement("p",null,"point 3"),l.a.createElement("a",{href:"link",target:"_blank"},"link text"))))),l.a.createElement("div",{className:"side-content-sm"}))}function h(e){var a=e.skills.map(function(e,a){return l.a.createElement("li",{className:"li-skills",key:a},e)});return l.a.createElement("div",{className:"row white box-shadow"},l.a.createElement("div",{className:"side-content"}),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"content-header"},l.a.createElement("a",{className:"anchor",name:"skills"}),l.a.createElement("h2",null,"Skills")),l.a.createElement("div",{className:"content-body"},l.a.createElement("ul",{className:"ul-skills"},a))),l.a.createElement("div",{className:"side-content"}))}function b(e){var a=e.email;return l.a.createElement("div",{className:"row blue"},l.a.createElement("div",{className:"side-content"}),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"content-header"},l.a.createElement("a",{className:"anchor",name:"contact"}),l.a.createElement("h2",{className:"white-text"},"Contact Me")),l.a.createElement("div",{className:"contact content-body"},l.a.createElement("form",{method:"POST",action:"https://formspree.io/".concat(a)},l.a.createElement("input",{type:"hidden",name:"_subject",value:"Contact request from personal website"}),l.a.createElement("input",{type:"email",name:"_replyto",placeholder:"Your email",required:!0}),l.a.createElement("textarea",{name:"message",placeholder:"Your message",required:!0}),l.a.createElement("button",{type:"submit"},"Send")))),l.a.createElement("div",{className:"side-content"}))}function N(e){var a=e.name,t=e.currentYear;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"side-content"}),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"content-header"}),l.a.createElement("div",{className:"content-body"},l.a.createElement("p",null,"Copyright ".concat(a.first," ").concat(a.last," ").concat(t)))),l.a.createElement("div",{className:"side-content"}))}t(15);var f={name:{first:"Jared",middle:"Michael",last:"Tanner"},currentYear:"2018",email:"deraj21@gmail.com",phoneNum:"507-202-6521",links:{github:"https://github.com/Deraj21",linkedin:"https://www.linkedin.com/in/jaredmtanner/"},title:"Full-Stack Web Developer",city:"Mesa",state:"AZ",about:["P1 Adunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum.","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.","Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],jobs:[{title:"Maintenance Worker",company:"First Service Residential",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",startDate:"August 2016",endDate:"Present"}],schools:[{name:"DevMountain",courseType:"Certificate",link:"https://www.youracclaim.com/badges/ba6c4cdf-ae62-47ab-be84-8d5abafe502d/linked_in_profile",startDate:"March 2018",endDate:"September 2018",description:"Web dev online courseasdf ;laskdjf ; lasdfj asdf;lkj"}],projects:[{name:"Hangman",image:"https://www.englishclub.com/images/esl-games/hangman-150.png",description:["point 1","point 2","point 3"],linkUrl:"https://github.com",linkText:"github page"}],skills:["Javascript","React.js","Node.js"]},g=f.name,k=f.links,j=f.title,w=f.city,y=f.state,x=f.about,q=f.projects,D=f.skills,_=f.email,M=f.currentYear,S=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement(p,{name:g,links:k,title:j,city:w,state:y}),l.a.createElement(E,{about:x})," ",l.a.createElement(v,{projects:q})," ",l.a.createElement(h,{skills:D})," ",l.a.createElement(b,{email:_}),l.a.createElement(N,{currentYear:M,name:g})))}}]),a}(n.Component);i.a.render(l.a.createElement(S,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.572bb559.chunk.js.map