(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Xc8c:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J");class t{}var o=e("pMnS"),i=e("SVse"),u=e("dJrM"),r=e("HsOI"),d=e("Xd0L"),s=e("IP0z"),b=e("/HVE"),c=e("omvX"),m=e("s7LF"),p=e("ZwOa"),h=e("oapL"),g=e("bujt"),f=e("Fwaw"),D=e("5GAg");class _{constructor(l){this.service=l,this.child="parent",this.value="",this.sentMsgToParent=new a.m}ngOnInit(){this.service.currentMessage.subscribe(l=>{"child1"==l.toChild&&(this.child=l.fromChild,this.message=l.message)})}sendMessageParent(){this.sentMsgToParent.emit({child:"child1",value:this.value})}sendMessageChild(l){this.service.sentMessage({toChild:`child${l}`,fromChild:"child1",message:this.value})}sendAll(){this.sendMessageParent(),this.sendMessageChild(2),this.sendMessageChild(3)}}var C=e("mQZp"),v=a.pb({encapsulation:0,styles:[[".children[_ngcontent-%COMP%]{max-width:200px;border:2px solid rgba(0,0,0,.2)}.children[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;margin-bottom:0}.children[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:90%}.groupBtn[_ngcontent-%COMP%]{margin:5px 0;display:flex;flex-direction:column}.groupBtn[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%]{margin-top:10px;width:100%}.message[_ngcontent-%COMP%]{word-break:break-all}"]],data:{}});function y(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"p",[["class","message"]],null,null,null,null,null)),(l()(),a.Jb(1,null,[""," say: ",""]))],null,function(l,n){var e=n.component;l(n,1,0,e.child,e.message)})}function M(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,36,"div",[["class","children"]],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Child1"])),(l()(),a.rb(3,0,null,null,18,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,u.b,u.a)),a.qb(4,7520256,null,9,r.c,[a.k,a.h,[2,d.j],[2,s.b],[2,r.a],b.a,a.x,[2,c.a]],null,null),a.Hb(603979776,1,{_controlNonStatic:0}),a.Hb(335544320,2,{_controlStatic:0}),a.Hb(603979776,3,{_labelChildNonStatic:0}),a.Hb(335544320,4,{_labelChildStatic:0}),a.Hb(603979776,5,{_placeholderChild:0}),a.Hb(603979776,6,{_errorChildren:1}),a.Hb(603979776,7,{_hintChildren:1}),a.Hb(603979776,8,{_prefixChildren:1}),a.Hb(603979776,9,{_suffixChildren:1}),(l()(),a.rb(14,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Say something"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==a.Db(l,15)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,15).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,15)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,15)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,20)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,20)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,20)._onInput()&&t),"ngModelChange"===n&&(t=!1!==(o.value=e)&&t),t},null,null)),a.qb(15,16384,null,0,m.c,[a.C,a.k,[2,m.a]],null,null),a.Gb(1024,null,m.j,function(l){return[l]},[m.c]),a.qb(17,671744,null,0,m.o,[[8,null],[8,null],[8,null],[6,m.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,m.k,null,[m.o]),a.qb(19,16384,null,0,m.l,[[4,m.k]],null,null),a.qb(20,999424,null,0,p.a,[a.k,b.a,[6,m.k],[2,m.n],[2,m.h],d.d,[8,null],h.a,a.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.Gb(2048,[[1,4],[2,4]],r.d,null,[p.a]),(l()(),a.rb(22,0,null,null,12,"div",[["class","groupBtn"]],null,null,null,null,null)),(l()(),a.rb(23,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageParent()&&a),a},g.b,g.a)),a.qb(24,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to parent"])),(l()(),a.rb(26,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageChild(2)&&a),a},g.b,g.a)),a.qb(27,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child2"])),(l()(),a.rb(29,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageChild(3)&&a),a},g.b,g.a)),a.qb(30,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child3"])),(l()(),a.rb(32,0,null,null,2,"button",[["class","btn-lg"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendAll()&&a),a},g.b,g.a)),a.qb(33,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Tell everyone"])),(l()(),a.gb(16777216,null,null,1,null,y)),a.qb(36,16384,null,0,i.k,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,17,0,e.value),l(n,20,0,"Say something","text"),l(n,24,0,"primary"),l(n,27,0,"primary"),l(n,30,0,"primary"),l(n,33,0,"primary"),l(n,36,0,e.message)},function(l,n){l(n,3,1,["standard"==a.Db(n,4).appearance,"fill"==a.Db(n,4).appearance,"outline"==a.Db(n,4).appearance,"legacy"==a.Db(n,4).appearance,a.Db(n,4)._control.errorState,a.Db(n,4)._canLabelFloat,a.Db(n,4)._shouldLabelFloat(),a.Db(n,4)._hasFloatingLabel(),a.Db(n,4)._hideControlPlaceholder(),a.Db(n,4)._control.disabled,a.Db(n,4)._control.autofilled,a.Db(n,4)._control.focused,"accent"==a.Db(n,4).color,"warn"==a.Db(n,4).color,a.Db(n,4)._shouldForward("untouched"),a.Db(n,4)._shouldForward("touched"),a.Db(n,4)._shouldForward("pristine"),a.Db(n,4)._shouldForward("dirty"),a.Db(n,4)._shouldForward("valid"),a.Db(n,4)._shouldForward("invalid"),a.Db(n,4)._shouldForward("pending"),!a.Db(n,4)._animationsEnabled]),l(n,14,1,[a.Db(n,19).ngClassUntouched,a.Db(n,19).ngClassTouched,a.Db(n,19).ngClassPristine,a.Db(n,19).ngClassDirty,a.Db(n,19).ngClassValid,a.Db(n,19).ngClassInvalid,a.Db(n,19).ngClassPending,a.Db(n,20)._isServer,a.Db(n,20).id,a.Db(n,20).placeholder,a.Db(n,20).disabled,a.Db(n,20).required,a.Db(n,20).readonly&&!a.Db(n,20)._isNativeSelect||null,a.Db(n,20)._ariaDescribedby||null,a.Db(n,20).errorState,a.Db(n,20).required.toString()]),l(n,23,0,a.Db(n,24).disabled||null,"NoopAnimations"===a.Db(n,24)._animationMode),l(n,26,0,a.Db(n,27).disabled||null,"NoopAnimations"===a.Db(n,27)._animationMode),l(n,29,0,a.Db(n,30).disabled||null,"NoopAnimations"===a.Db(n,30)._animationMode),l(n,32,0,a.Db(n,33).disabled||null,"NoopAnimations"===a.Db(n,33)._animationMode)})}class k{constructor(l){this.service=l,this.child="parent",this.value="",this.sentMsgToParent=new a.m}ngOnInit(){this.service.currentMessage.subscribe(l=>{"child2"==l.toChild&&(this.child=l.fromChild,this.message=l.message)})}sendMessageParent(){this.sentMsgToParent.emit({child:"child2",value:this.value})}sendMessageChild(l){this.service.sentMessage({toChild:`child${l}`,fromChild:"child2",message:this.value})}sendAll(){this.sendMessageParent(),this.sendMessageChild(1),this.sendMessageChild(3)}}var P=a.pb({encapsulation:0,styles:[[".children[_ngcontent-%COMP%]{max-width:200px;border:2px solid rgba(0,0,0,.2)}.children[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;margin-bottom:0}.children[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:90%}.groupBtn[_ngcontent-%COMP%]{margin:5px 0;display:flex;flex-direction:column}.groupBtn[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%]{margin-top:10px;width:100%}.message[_ngcontent-%COMP%]{word-break:break-all}"]],data:{}});function w(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"p",[["class","message"]],null,null,null,null,null)),(l()(),a.Jb(1,null,[""," say: ",""]))],null,function(l,n){var e=n.component;l(n,1,0,e.child,e.message)})}function S(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,36,"div",[["class","children"]],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Child2"])),(l()(),a.rb(3,0,null,null,18,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,u.b,u.a)),a.qb(4,7520256,null,9,r.c,[a.k,a.h,[2,d.j],[2,s.b],[2,r.a],b.a,a.x,[2,c.a]],null,null),a.Hb(603979776,1,{_controlNonStatic:0}),a.Hb(335544320,2,{_controlStatic:0}),a.Hb(603979776,3,{_labelChildNonStatic:0}),a.Hb(335544320,4,{_labelChildStatic:0}),a.Hb(603979776,5,{_placeholderChild:0}),a.Hb(603979776,6,{_errorChildren:1}),a.Hb(603979776,7,{_hintChildren:1}),a.Hb(603979776,8,{_prefixChildren:1}),a.Hb(603979776,9,{_suffixChildren:1}),(l()(),a.rb(14,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Say something"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==a.Db(l,15)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,15).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,15)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,15)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,20)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,20)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,20)._onInput()&&t),"ngModelChange"===n&&(t=!1!==(o.value=e)&&t),t},null,null)),a.qb(15,16384,null,0,m.c,[a.C,a.k,[2,m.a]],null,null),a.Gb(1024,null,m.j,function(l){return[l]},[m.c]),a.qb(17,671744,null,0,m.o,[[8,null],[8,null],[8,null],[6,m.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,m.k,null,[m.o]),a.qb(19,16384,null,0,m.l,[[4,m.k]],null,null),a.qb(20,999424,null,0,p.a,[a.k,b.a,[6,m.k],[2,m.n],[2,m.h],d.d,[8,null],h.a,a.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.Gb(2048,[[1,4],[2,4]],r.d,null,[p.a]),(l()(),a.rb(22,0,null,null,12,"div",[["class","groupBtn"]],null,null,null,null,null)),(l()(),a.rb(23,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageParent()&&a),a},g.b,g.a)),a.qb(24,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to parent"])),(l()(),a.rb(26,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageChild(1)&&a),a},g.b,g.a)),a.qb(27,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child1"])),(l()(),a.rb(29,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageChild(3)&&a),a},g.b,g.a)),a.qb(30,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child3"])),(l()(),a.rb(32,0,null,null,2,"button",[["class","btn-lg"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendAll()&&a),a},g.b,g.a)),a.qb(33,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Tell everyone"])),(l()(),a.gb(16777216,null,null,1,null,w)),a.qb(36,16384,null,0,i.k,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,17,0,e.value),l(n,20,0,"Say something","text"),l(n,24,0,"primary"),l(n,27,0,"primary"),l(n,30,0,"primary"),l(n,33,0,"primary"),l(n,36,0,e.message)},function(l,n){l(n,3,1,["standard"==a.Db(n,4).appearance,"fill"==a.Db(n,4).appearance,"outline"==a.Db(n,4).appearance,"legacy"==a.Db(n,4).appearance,a.Db(n,4)._control.errorState,a.Db(n,4)._canLabelFloat,a.Db(n,4)._shouldLabelFloat(),a.Db(n,4)._hasFloatingLabel(),a.Db(n,4)._hideControlPlaceholder(),a.Db(n,4)._control.disabled,a.Db(n,4)._control.autofilled,a.Db(n,4)._control.focused,"accent"==a.Db(n,4).color,"warn"==a.Db(n,4).color,a.Db(n,4)._shouldForward("untouched"),a.Db(n,4)._shouldForward("touched"),a.Db(n,4)._shouldForward("pristine"),a.Db(n,4)._shouldForward("dirty"),a.Db(n,4)._shouldForward("valid"),a.Db(n,4)._shouldForward("invalid"),a.Db(n,4)._shouldForward("pending"),!a.Db(n,4)._animationsEnabled]),l(n,14,1,[a.Db(n,19).ngClassUntouched,a.Db(n,19).ngClassTouched,a.Db(n,19).ngClassPristine,a.Db(n,19).ngClassDirty,a.Db(n,19).ngClassValid,a.Db(n,19).ngClassInvalid,a.Db(n,19).ngClassPending,a.Db(n,20)._isServer,a.Db(n,20).id,a.Db(n,20).placeholder,a.Db(n,20).disabled,a.Db(n,20).required,a.Db(n,20).readonly&&!a.Db(n,20)._isNativeSelect||null,a.Db(n,20)._ariaDescribedby||null,a.Db(n,20).errorState,a.Db(n,20).required.toString()]),l(n,23,0,a.Db(n,24).disabled||null,"NoopAnimations"===a.Db(n,24)._animationMode),l(n,26,0,a.Db(n,27).disabled||null,"NoopAnimations"===a.Db(n,27)._animationMode),l(n,29,0,a.Db(n,30).disabled||null,"NoopAnimations"===a.Db(n,30)._animationMode),l(n,32,0,a.Db(n,33).disabled||null,"NoopAnimations"===a.Db(n,33)._animationMode)})}class q{constructor(l){this.service=l,this.child="parent",this.value="",this.sentMsgToParent=new a.m}ngOnInit(){this.service.currentMessage.subscribe(l=>{"child3"==l.toChild&&(this.child=l.fromChild,this.message=l.message)})}sendMessageParent(){this.sentMsgToParent.emit({child:"child3",value:this.value})}sendMessageChild(l){this.service.sentMessage({toChild:`child${l}`,fromChild:"child3",message:this.value})}sendAll(){this.sendMessageParent(),this.sendMessageChild(1),this.sendMessageChild(2)}}var x=a.pb({encapsulation:0,styles:[[".children[_ngcontent-%COMP%]{max-width:200px;border:2px solid rgba(0,0,0,.2)}.children[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;margin-bottom:0}.children[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:90%}.groupBtn[_ngcontent-%COMP%]{margin:5px 0;display:flex;flex-direction:column}.groupBtn[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%]{margin-top:10px;width:100%}.message[_ngcontent-%COMP%]{word-break:break-all}"]],data:{}});function F(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"p",[["class","message"]],null,null,null,null,null)),(l()(),a.Jb(1,null,[""," say: ",""]))],null,function(l,n){var e=n.component;l(n,1,0,e.child,e.message)})}function O(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,36,"div",[["class","children"]],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Child3"])),(l()(),a.rb(3,0,null,null,18,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,u.b,u.a)),a.qb(4,7520256,null,9,r.c,[a.k,a.h,[2,d.j],[2,s.b],[2,r.a],b.a,a.x,[2,c.a]],null,null),a.Hb(603979776,1,{_controlNonStatic:0}),a.Hb(335544320,2,{_controlStatic:0}),a.Hb(603979776,3,{_labelChildNonStatic:0}),a.Hb(335544320,4,{_labelChildStatic:0}),a.Hb(603979776,5,{_placeholderChild:0}),a.Hb(603979776,6,{_errorChildren:1}),a.Hb(603979776,7,{_hintChildren:1}),a.Hb(603979776,8,{_prefixChildren:1}),a.Hb(603979776,9,{_suffixChildren:1}),(l()(),a.rb(14,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Say something"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==a.Db(l,15)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,15).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,15)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,15)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,20)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,20)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,20)._onInput()&&t),"ngModelChange"===n&&(t=!1!==(o.value=e)&&t),t},null,null)),a.qb(15,16384,null,0,m.c,[a.C,a.k,[2,m.a]],null,null),a.Gb(1024,null,m.j,function(l){return[l]},[m.c]),a.qb(17,671744,null,0,m.o,[[8,null],[8,null],[8,null],[6,m.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,m.k,null,[m.o]),a.qb(19,16384,null,0,m.l,[[4,m.k]],null,null),a.qb(20,999424,null,0,p.a,[a.k,b.a,[6,m.k],[2,m.n],[2,m.h],d.d,[8,null],h.a,a.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.Gb(2048,[[1,4],[2,4]],r.d,null,[p.a]),(l()(),a.rb(22,0,null,null,12,"div",[["class","groupBtn"]],null,null,null,null,null)),(l()(),a.rb(23,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageParent()&&a),a},g.b,g.a)),a.qb(24,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to parent"])),(l()(),a.rb(26,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageChild(1)&&a),a},g.b,g.a)),a.qb(27,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child1"])),(l()(),a.rb(29,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessageChild(2)&&a),a},g.b,g.a)),a.qb(30,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child2"])),(l()(),a.rb(32,0,null,null,2,"button",[["class","btn-lg"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendAll()&&a),a},g.b,g.a)),a.qb(33,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Tell everyone"])),(l()(),a.gb(16777216,null,null,1,null,F)),a.qb(36,16384,null,0,i.k,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,17,0,e.value),l(n,20,0,"Say something","text"),l(n,24,0,"primary"),l(n,27,0,"primary"),l(n,30,0,"primary"),l(n,33,0,"primary"),l(n,36,0,e.message)},function(l,n){l(n,3,1,["standard"==a.Db(n,4).appearance,"fill"==a.Db(n,4).appearance,"outline"==a.Db(n,4).appearance,"legacy"==a.Db(n,4).appearance,a.Db(n,4)._control.errorState,a.Db(n,4)._canLabelFloat,a.Db(n,4)._shouldLabelFloat(),a.Db(n,4)._hasFloatingLabel(),a.Db(n,4)._hideControlPlaceholder(),a.Db(n,4)._control.disabled,a.Db(n,4)._control.autofilled,a.Db(n,4)._control.focused,"accent"==a.Db(n,4).color,"warn"==a.Db(n,4).color,a.Db(n,4)._shouldForward("untouched"),a.Db(n,4)._shouldForward("touched"),a.Db(n,4)._shouldForward("pristine"),a.Db(n,4)._shouldForward("dirty"),a.Db(n,4)._shouldForward("valid"),a.Db(n,4)._shouldForward("invalid"),a.Db(n,4)._shouldForward("pending"),!a.Db(n,4)._animationsEnabled]),l(n,14,1,[a.Db(n,19).ngClassUntouched,a.Db(n,19).ngClassTouched,a.Db(n,19).ngClassPristine,a.Db(n,19).ngClassDirty,a.Db(n,19).ngClassValid,a.Db(n,19).ngClassInvalid,a.Db(n,19).ngClassPending,a.Db(n,20)._isServer,a.Db(n,20).id,a.Db(n,20).placeholder,a.Db(n,20).disabled,a.Db(n,20).required,a.Db(n,20).readonly&&!a.Db(n,20)._isNativeSelect||null,a.Db(n,20)._ariaDescribedby||null,a.Db(n,20).errorState,a.Db(n,20).required.toString()]),l(n,23,0,a.Db(n,24).disabled||null,"NoopAnimations"===a.Db(n,24)._animationMode),l(n,26,0,a.Db(n,27).disabled||null,"NoopAnimations"===a.Db(n,27)._animationMode),l(n,29,0,a.Db(n,30).disabled||null,"NoopAnimations"===a.Db(n,30)._animationMode),l(n,32,0,a.Db(n,33).disabled||null,"NoopAnimations"===a.Db(n,33)._animationMode)})}class H{constructor(){this.child="",this.value="",this.text="Parent say: ",this.message={child1:"",child2:"",child3:""}}ngOnInit(){}sendMessage(l){if("all"===l){const l=Object.keys(this.message);for(let n=0;n<l.length;n++)this.message[l[n]]=this.value}else this.message[l]=this.value}getMessage({child:l,value:n}){this.messageFromChild=n,this.child=l}}var B=a.pb({encapsulation:0,styles:[[".parent[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;text-align:center;border:2px solid rgba(0,0,0,.2);padding:10px 40px}.parent[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0}.parent[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:40%}.child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.groupBtn[_ngcontent-%COMP%]{margin:20px 0;display:flex;flex-wrap:wrap;justify-content:space-between}.groupBtn[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%]{margin-top:10px;width:100%}"]],data:{}});function N(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Jb(1,null,[""," say: ",""]))],null,function(l,n){var e=n.component;l(n,1,0,e.child,e.messageFromChild)})}function I(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,43,"div",[["class","parent"]],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Parent"])),(l()(),a.gb(16777216,null,null,1,null,N)),a.qb(4,16384,null,0,i.k,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.rb(5,0,null,null,18,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,u.b,u.a)),a.qb(6,7520256,null,9,r.c,[a.k,a.h,[2,d.j],[2,s.b],[2,r.a],b.a,a.x,[2,c.a]],null,null),a.Hb(603979776,1,{_controlNonStatic:0}),a.Hb(335544320,2,{_controlStatic:0}),a.Hb(603979776,3,{_labelChildNonStatic:0}),a.Hb(335544320,4,{_labelChildStatic:0}),a.Hb(603979776,5,{_placeholderChild:0}),a.Hb(603979776,6,{_errorChildren:1}),a.Hb(603979776,7,{_hintChildren:1}),a.Hb(603979776,8,{_prefixChildren:1}),a.Hb(603979776,9,{_suffixChildren:1}),(l()(),a.rb(16,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Say something"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==a.Db(l,17)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,17)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,22)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,22)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,22)._onInput()&&t),"ngModelChange"===n&&(t=!1!==(o.value=e)&&t),t},null,null)),a.qb(17,16384,null,0,m.c,[a.C,a.k,[2,m.a]],null,null),a.Gb(1024,null,m.j,function(l){return[l]},[m.c]),a.qb(19,671744,null,0,m.o,[[8,null],[8,null],[8,null],[6,m.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,m.k,null,[m.o]),a.qb(21,16384,null,0,m.l,[[4,m.k]],null,null),a.qb(22,999424,null,0,p.a,[a.k,b.a,[6,m.k],[2,m.n],[2,m.h],d.d,[8,null],h.a,a.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.Gb(2048,[[1,4],[2,4]],r.d,null,[p.a]),(l()(),a.rb(24,0,null,null,12,"div",[["class","groupBtn"]],null,null,null,null,null)),(l()(),a.rb(25,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessage("child1")&&a),a},g.b,g.a)),a.qb(26,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child1"])),(l()(),a.rb(28,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessage("child2")&&a),a},g.b,g.a)),a.qb(29,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child2"])),(l()(),a.rb(31,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessage("child3")&&a),a},g.b,g.a)),a.qb(32,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Say to child3"])),(l()(),a.rb(34,0,null,null,2,"button",[["class","btn-lg"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.sendMessage("all")&&a),a},g.b,g.a)),a.qb(35,180224,null,0,f.b,[a.k,D.e,[2,c.a]],{color:[0,"color"]},null),(l()(),a.Jb(-1,0,["Tell everyone"])),(l()(),a.rb(37,0,null,null,6,"div",[["class","child"]],null,null,null,null,null)),(l()(),a.rb(38,0,null,null,1,"app-child1",[],null,[[null,"sentMsgToParent"]],function(l,n,e){var a=!0;return"sentMsgToParent"===n&&(a=!1!==l.component.getMessage(e)&&a),a},M,v)),a.qb(39,114688,null,0,_,[C.a],{message:[0,"message"]},{sentMsgToParent:"sentMsgToParent"}),(l()(),a.rb(40,0,null,null,1,"app-child2",[],null,[[null,"sentMsgToParent"]],function(l,n,e){var a=!0;return"sentMsgToParent"===n&&(a=!1!==l.component.getMessage(e)&&a),a},S,P)),a.qb(41,114688,null,0,k,[C.a],{message:[0,"message"]},{sentMsgToParent:"sentMsgToParent"}),(l()(),a.rb(42,0,null,null,1,"app-child3",[],null,[[null,"sentMsgToParent"]],function(l,n,e){var a=!0;return"sentMsgToParent"===n&&(a=!1!==l.component.getMessage(e)&&a),a},O,x)),a.qb(43,114688,null,0,q,[C.a],{message:[0,"message"]},{sentMsgToParent:"sentMsgToParent"})],function(l,n){var e=n.component;l(n,4,0,e.messageFromChild),l(n,19,0,e.value),l(n,22,0,"Say something","text"),l(n,26,0,"primary"),l(n,29,0,"primary"),l(n,32,0,"primary"),l(n,35,0,"primary"),l(n,39,0,e.message.child1),l(n,41,0,e.message.child2),l(n,43,0,e.message.child3)},function(l,n){l(n,5,1,["standard"==a.Db(n,6).appearance,"fill"==a.Db(n,6).appearance,"outline"==a.Db(n,6).appearance,"legacy"==a.Db(n,6).appearance,a.Db(n,6)._control.errorState,a.Db(n,6)._canLabelFloat,a.Db(n,6)._shouldLabelFloat(),a.Db(n,6)._hasFloatingLabel(),a.Db(n,6)._hideControlPlaceholder(),a.Db(n,6)._control.disabled,a.Db(n,6)._control.autofilled,a.Db(n,6)._control.focused,"accent"==a.Db(n,6).color,"warn"==a.Db(n,6).color,a.Db(n,6)._shouldForward("untouched"),a.Db(n,6)._shouldForward("touched"),a.Db(n,6)._shouldForward("pristine"),a.Db(n,6)._shouldForward("dirty"),a.Db(n,6)._shouldForward("valid"),a.Db(n,6)._shouldForward("invalid"),a.Db(n,6)._shouldForward("pending"),!a.Db(n,6)._animationsEnabled]),l(n,16,1,[a.Db(n,21).ngClassUntouched,a.Db(n,21).ngClassTouched,a.Db(n,21).ngClassPristine,a.Db(n,21).ngClassDirty,a.Db(n,21).ngClassValid,a.Db(n,21).ngClassInvalid,a.Db(n,21).ngClassPending,a.Db(n,22)._isServer,a.Db(n,22).id,a.Db(n,22).placeholder,a.Db(n,22).disabled,a.Db(n,22).required,a.Db(n,22).readonly&&!a.Db(n,22)._isNativeSelect||null,a.Db(n,22)._ariaDescribedby||null,a.Db(n,22).errorState,a.Db(n,22).required.toString()]),l(n,25,0,a.Db(n,26).disabled||null,"NoopAnimations"===a.Db(n,26)._animationMode),l(n,28,0,a.Db(n,29).disabled||null,"NoopAnimations"===a.Db(n,29)._animationMode),l(n,31,0,a.Db(n,32).disabled||null,"NoopAnimations"===a.Db(n,32)._animationMode),l(n,34,0,a.Db(n,35).disabled||null,"NoopAnimations"===a.Db(n,35)._animationMode)})}function T(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"app-parent",[],null,null,null,I,B)),a.qb(1,114688,null,0,H,[],null,null)],function(l,n){l(n,1,0)},null)}var J=a.nb("app-parent",H,T,{},{},[]),A=e("POq0"),L=e("iInd");class j{}var G=e("cUpR");e.d(n,"ParentChildModuleNgFactory",function(){return E});var E=a.ob(t,[],function(l){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[o.a,J]],[3,a.j],a.v]),a.Bb(4608,i.m,i.l,[a.s,[2,i.y]]),a.Bb(4608,m.s,m.s,[]),a.Bb(4608,A.c,A.c,[]),a.Bb(4608,d.d,d.d,[]),a.Bb(1073742336,i.c,i.c,[]),a.Bb(1073742336,L.n,L.n,[[2,L.s],[2,L.k]]),a.Bb(1073742336,j,j,[]),a.Bb(1073742336,m.r,m.r,[]),a.Bb(1073742336,m.i,m.i,[]),a.Bb(1073742336,b.b,b.b,[]),a.Bb(1073742336,h.c,h.c,[]),a.Bb(1073742336,A.d,A.d,[]),a.Bb(1073742336,r.e,r.e,[]),a.Bb(1073742336,p.b,p.b,[]),a.Bb(1073742336,s.a,s.a,[]),a.Bb(1073742336,d.n,d.n,[[2,d.f],[2,G.f]]),a.Bb(1073742336,d.w,d.w,[]),a.Bb(1073742336,f.c,f.c,[]),a.Bb(1073742336,t,t,[]),a.Bb(1024,L.i,function(){return[[{path:"",component:H}]]},[])])})}}]);