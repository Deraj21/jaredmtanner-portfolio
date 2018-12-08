(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),s=t.n(l),o=(t(13),t(3)),i=t(4),c=t(6),m=t(5),d=t(7);function u(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("a",{href:"#about"},"About"),r.a.createElement("a",{href:"#experience"},"Experience"),r.a.createElement("a",{href:"#education"},"Education"),r.a.createElement("a",{href:"#projects"},"Projects"),r.a.createElement("a",{href:"#skills"},"Skills"),r.a.createElement("a",{href:"#contact"},"Contact"))}function h(e){var a=e.name,t=e.links,n=e.title,l=e.city,s=e.state;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"jumbotron-text"},r.a.createElement("h1",null,a.first," ",a.last),r.a.createElement("p",null,n," in ",l,", ",s,".")),r.a.createElement("div",{className:"jumbotron-social"},r.a.createElement("ul",{className:"ul-social"},r.a.createElement("li",{className:"li-social-links"},r.a.createElement("a",{className:"social",href:t.github,target:"_blank"},r.a.createElement("img",{src:"media/GitHub_Logo_White.png",alt:"github"}))),r.a.createElement("li",{className:"li-social-links"},r.a.createElement("a",{className:"social",href:t.linkedin,target:"_blank"},r.a.createElement("img",{src:"../media",alt:"linkedin"}))))),r.a.createElement("div",{id:"down-arrow"},r.a.createElement("span",null,r.a.createElement("a",{href:"#about"},r.a.createElement("i",{className:"fa fa-chevron-down","aria-hidden":"true"})))))}function p(e){var a=e.about.map(function(e,a){return r.a.createElement("p",{key:a},e)});return r.a.createElement("div",{className:"row white box-shadow"},r.a.createElement("div",{className:"side-content"}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content-header"},r.a.createElement("a",{className:"anchor",name:"about"}),r.a.createElement("h2",null,"About Me")),r.a.createElement("div",{className:"content-body"},a)),r.a.createElement("div",{className:"side-content"}))}function g(e){var a=e.projects.map(function(e,a){return r.a.createElement("div",{className:"project-card",key:a},r.a.createElement("div",{className:"project-image"},r.a.createElement("img",{src:e.image})),r.a.createElement("div",{className:"project-content"},r.a.createElement("h4",null,e.name),e.description.map(function(e,a){return r.a.createElement("p",{key:a},e)}),e.links.map(function(e,a){return r.a.createElement("a",{key:a,target:"_blank",href:e.url}," ",e.text," ")})))});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"side-content-sm"}),r.a.createElement("div",{className:"main-content-lg"},r.a.createElement("div",{className:"content-header"},r.a.createElement("a",{className:"anchor",name:"projects"}),r.a.createElement("h2",null,"Projects")),r.a.createElement("div",{className:"content-body"},a)),r.a.createElement("div",{className:"side-content-sm"}))}function w(e){var a=e.skills.map(function(e,a){return r.a.createElement("li",{className:"li-skills",key:a},e)});return r.a.createElement("div",{className:"row white box-shadow"},r.a.createElement("div",{className:"side-content"}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content-header"},r.a.createElement("a",{className:"anchor",name:"skills"}),r.a.createElement("h2",null,"Skills")),r.a.createElement("div",{className:"content-body"},r.a.createElement("ul",{className:"ul-skills"},a))),r.a.createElement("div",{className:"side-content"}))}function b(e){var a=e.email;return r.a.createElement("div",{className:"row blue"},r.a.createElement("div",{className:"side-content"}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content-header"},r.a.createElement("a",{className:"anchor",name:"contact"}),r.a.createElement("h2",{className:"white-text"},"Contact Me")),r.a.createElement("div",{className:"contact content-body"},r.a.createElement("form",{method:"POST",action:"https://formspree.io/".concat(a)},r.a.createElement("input",{type:"hidden",name:"_subject",value:"Contact request from personal website"}),r.a.createElement("input",{type:"email",name:"_replyto",placeholder:"Your email",required:!0}),r.a.createElement("textarea",{name:"message",placeholder:"Your message",required:!0}),r.a.createElement("button",{type:"submit"},"Send")))),r.a.createElement("div",{className:"side-content"}))}function E(e){var a=e.name,t=e.currentYear;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"side-content"}),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content-header"}),r.a.createElement("div",{className:"content-body"},r.a.createElement("p",null,"Copyright ".concat(a.first," ").concat(a.last," ").concat(t)),r.a.createElement("p",null,"Created using React, gh-pages, and create-react-app"),r.a.createElement("a",{target:"_blank",href:"https://github.com/Deraj21/jaredmtanner-portfolio"},"github link"))),r.a.createElement("div",{className:"side-content"}))}t(15);var f={name:{first:"Jared",middle:"Michael",last:"Tanner"},currentYear:"2018",email:"deraj21@gmail.com",phoneNum:"507-202-6521",links:{github:"https://github.com/Deraj21",linkedin:"https://www.linkedin.com/in/jaredmtanner/"},title:"Full-Stack Web Developer",city:"Mesa",state:"AZ",about:["I am a React.js, full-stack web developer. I currently work very hard at my maintenance job while working to break into the software field.","I enjoy learning new things in order to develop my skill-set, and improve the technology I am working on.","Formidable problems are my jam. The rush of sitting down to solve an enigma is one of the reasons I became a software engineer. I enjoy the challenge, struggle, and eventual victory that comes with writing code.","The main reason, however, for wanting to get into software engineering, is so that I can build something worthwhile. My dream is to work building something great, with amazing individuals."],jobs:[{title:"Maintenance Worker",company:"First Service Residential",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",startDate:"August 2016",endDate:"Present"}],schools:[{name:"DevMountain",courseType:"Certificate",link:"https://www.youracclaim.com/badges/ba6c4cdf-ae62-47ab-be84-8d5abafe502d/linked_in_profile",startDate:"March 2018",endDate:"September 2018",description:"Web dev online courseasdf ;laskdjf ; lasdfj asdf;lkj"}],projects:[{name:"Hangman",image:"https://www.englishclub.com/images/esl-games/hangman-150.png",description:["Personal Project","This website is a hangman game wrapped up with user rankings and fun word categories to choose from. It allows for a user to log in, play some hangman games, and then compare their scores with other players.","I love playing games, so for me, this was a really fun project to come up with and create.","I learned the importance of making an MVP plan while making this project. I designed the layout, dataflow, and database schemas all before starting to code, and it really helped me to keep track of where I was, and how far I had to go.","It was built from scratch, using create-react-app, React, Redux, Node.js, express, and a postgres database. I also used css media queries to make my project mobile-friendly.","I hosted the site with DigitalOcean for a couple months in order to learn how to host a project, and so I could share it with my friends and family."],links:[{url:"https://github.com",text:"Github Page"},{url:"https://www.youtube.com/watch?v=_AAaCuGeVjE",text:"Video Walkthrough"}]},{name:"Trello Clone",image:"https://www.englishclub.com/images/esl-games/hangman-150.png",description:["Group Project","This project is a clone of the popular time-management tool, Trello.com. We wanted to see how far we could get into building an enterprise app between the three of us over the course of four weeks.","It was challenging, but with the help of the real Trello, we were able to decide on an MVP, divide up tasks, and set a timeline that kept us on track. Three times a week, we would hold meetings to each talk about our progress, and help each other with blockages.","We used React, Redux, and react-router to build a responsive frontend that copied the clean style of Trello. For the backend, we used Node.js, express, a postgres database, and Auth0 with sessions."],links:[{url:"https://github.com/trello-clone-group/trello-clone",text:"Github Page"},{url:"https://www.youtube.com/watch?v=VcydlEE5qvs&feature=youtu.be",text:"Video Walkthrough"}]},{name:"D&D Character Generator",image:"https://www.englishclub.com/images/esl-games/hangman-150.png",description:["Personal Project","This project comes from my love of the role-playing game Dungeons and Dragons. I wanted a quick way to generate some random character stats to get ideas flowing for players wanting to make a character. So I built this!","It was built using React for the front-end and Node for the back-end. Node stores all the possible values for each stat, and with an Axios request from React, it sends them to it. React then randomly chooses one from each list, and displays it.","It has a bare-bones single-page design. I mimicked the look of a Dungeon and Dragons character sheet. Since it was my first full project, I learned a lot about CSS and flexboxes."],links:[{text:"Github Page",url:"https://github.com/Deraj21/dnd-character-generator"}]}],skills:["React.js","AngularJS","ES6","HTML","CSS","Node.js","SQL","Git","Github","Linux","C++"]},v=f.name,k=f.links,N=f.title,y=f.city,j=f.state,x=f.about,I=f.projects,D=f.skills,S=f.email,P=f.currentYear,T=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(h,{name:v,links:k,title:N,city:y,state:j}),r.a.createElement(p,{about:x})," ",r.a.createElement(g,{projects:I})," ",r.a.createElement(w,{skills:D})," ",r.a.createElement(b,{email:S}),r.a.createElement(E,{currentYear:P,name:v})))}}]),a}(n.Component);s.a.render(r.a.createElement(T,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.a1127909.chunk.js.map