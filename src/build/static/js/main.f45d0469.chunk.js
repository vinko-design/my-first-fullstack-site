(this["webpackJsonpmy-blog-cuzzy"]=this["webpackJsonpmy-blog-cuzzy"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),i=a.n(n),u=a(17),s=a.n(u),r=(a(30),a(18)),l=a(19),c=a(23),m=a(22),o=a(6),p=a(7),d=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Sup cunt? Welcome to my blog cuz!"),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."))},f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"About Page"),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),i.a.createElement("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."))},g=a(5),v=a.n(g),b=a(9),h=a(11),E=function(e){var t=e.articles;return i.a.createElement(i.a.Fragment,null,t.map((function(e,t){return i.a.createElement(o.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},q=function(e){var t=e.comments;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return i.a.createElement("div",{className:"comment",key:t},i.a.createElement("h4",null,e.username),i.a.createElement("p",null,e.text))})))},A=function(e){var t=e.articleName,a=e.upvotes,n=e.setArticleInfo,u=function(){var e=Object(b.a)(v.a.mark((function e(){var a,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return a=e.sent,e.next=5,a.json();case 5:i=e.sent,n(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{id:"upvotes-section"},i.a.createElement("button",{onClick:function(){return u()}},"Add Upvote"),i.a.createElement("p",null,"This post hase been upvoted ",a," times"))},N=function(e){var t=e.articleName,a=e.setArticleInfo,u=Object(n.useState)(""),s=Object(h.a)(u,2),r=s[0],l=s[1],c=Object(n.useState)(""),m=Object(h.a)(c,2),o=m[0],p=m[1],d=function(){var e=Object(b.a)(v.a.mark((function e(){var n,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:r,text:o}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,a(i),l(""),p("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"add-comment-form"},i.a.createElement("h3",null,"Add a comment"),i.a.createElement("label",null,"Name:",i.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}})),i.a.createElement("label",null,"Comment:",i.a.createElement("textarea",{rows:"4",cols:"50",value:o,onChange:function(e){return p(e.target.value)}})),i.a.createElement("button",{onClick:function(){return d()}},"Add Comment")))},y=function(){return i.a.createElement("h1",null,"404: Page not found cunt!",i.a.createElement("br",null),"suck a fat one ya dog.")},w=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.\n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,\n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut\n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at\n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.\n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,\n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut\n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at\n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.\n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,\n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut\n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at\n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],M=function(e){var t=e.match.params.name,a=w.find((function(e){return e.name===t})),u=Object(n.useState)({upvotes:0,comments:[]}),s=Object(h.a)(u,2),r=s[0],l=s[1];if(Object(n.useEffect)((function(){(function(){var e=Object(b.a)(v.a.mark((function e(){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),l(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!a)return i.a.createElement(y,null);var c=w.filter((function(e){return e.name!==t}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,a.title),i.a.createElement(A,{articleName:t,upvotes:r.upvotes,setArticleInfo:l}),a.content.map((function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement(q,{comments:r.comments}),i.a.createElement(N,{articleName:t,setArticleInfo:l}),i.a.createElement("h3",null,"Other Articles:"),i.a.createElement(E,{articles:c}))},j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Articles"),i.a.createElement(E,{articles:w}))},k=function(){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/articles-list"},"Articles"))))},D=(a(37),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(k,null),i.a.createElement("div",{id:"page-body"},i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/",component:d,exact:!0}),i.a.createElement(p.a,{path:"/about",component:f}),i.a.createElement(p.a,{path:"/articles-list",component:j}),i.a.createElement(p.a,{path:"/article/:name",component:M}),i.a.createElement(p.a,{component:y})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f45d0469.chunk.js.map