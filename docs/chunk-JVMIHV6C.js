import{a as P}from"./chunk-XDF72XJA.js";import{a as N,b as p,c as E,d as F,e as V,f as A,g as T,h as j,i as H,j as D,k as J,m as K,n as L}from"./chunk-THO453NJ.js";import{Aa as M,Ca as k,Ea as I,F as l,G as d,J as m,N as _,O as n,P as a,Q as u,R as y,S,T as x,V as c,W as f,Z as h,_ as w,d as B,ja as U,ka as z,m as R,ma as $,q,t as C,u as G,x as g,y as b}from"./chunk-ONHGRJAC.js";function ne(t,e){if(t&1){let s=x();y(0),n(1,"app-error",10),c("close",function(){let o=g(s).index,v=f();return b(v.close(o))}),a(),S()}if(t&2){let s=e.$implicit;l(1),m("msg",s)}}var Z=(()=>{let e=class e{get email(){return this.formUser.get("email")}get password(){return this.formUser.get("password")}constructor(r,i,o){this.fb=r,this.auth=i,this.router=o,this.errors=[],this.formUser=this.fb.group({email:["",[p.email,p.required]],password:["",p.required]})}close(r){this.errors=this.errors.filter((i,o)=>o!==r)}upload(){this.errors=[],this.formUser.valid?this.auth.login(this.formUser.get("email")?.value,this.formUser.get("password")?.value).subscribe({next:r=>{console.log(r)},error:r=>{console.error(r),this.errors.push("Error when try to connect")},complete:()=>{this.router.navigateByUrl("/"),this.formUser.reset()}}):(this.email.errors?.email&&this.errors.push("Email must be like user@example"),this.email.errors?.required&&this.errors.push("Add an email"),this.password.invalid&&this.errors.push("Add a password"))}};e.\u0275fac=function(i){return new(i||e)(d(j),d(I),d(M))},e.\u0275cmp=C({type:e,selectors:[["app-signin"]],hostAttrs:[1,"flex","flex-wrap","w-full","sm:w-[calc(100%-5rem)]","content-start","mx-auto","px-10","pb-6"],decls:12,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"relative","max-w-sm","bg-white","px-8","pt-5","mx-auto","mt-4","rounded-lg","border-8","border-greenl"],[1,"absolute","w-full","h-full","rounded-lg","border-8","border-purple","z-[-1]"],[1,"pb-6","text-xl","font-semibold","text-greenl"],[1,"pb-6",3,"formGroup","ngSubmit"],["type","email","formControlName","email","placeholder","Email",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],["type","password","formControlName","password","placeholder","Password",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],[1,"relative","w-full"],[1,"absolute","w-full","h-full","rounded-lg","border-4","border-purple","inset-x-[10px]","inset-y-[5px]"],["type","submit",1,"relative","w-full","bg-white","rounded-lg","border-4","border-greenl","px-3","py-2","font-semibold","text-greenl","active:inset-x-[10px]","active:inset-y-[5px]"],[3,"msg","close"]],template:function(i,o){i&1&&(_(0,ne,2,1,"ng-container",0),n(1,"section",1),u(2,"div",2),n(3,"h2",3),h(4),a(),n(5,"form",4),c("ngSubmit",function(){return o.upload()}),u(6,"input",5)(7,"input",6),n(8,"div",7),u(9,"div",8),n(10,"button",9),h(11),a()()()()),i&2&&(m("ngForOf",o.errors),l(4),w("Account loggin"),l(1),m("formGroup",o.formUser),l(6),w("SignIn"))},dependencies:[U,D,V,N,E,F,A,T]});let t=e;return t})();function ee(){return t=>t.value.password1===t.value.password2?null:{PasswordNoMatch:!0}}function se(t,e){if(t&1){let s=x();y(0),n(1,"app-error",12),c("close",function(){let o=g(s).index,v=f();return b(v.close(o))}),a(),S()}if(t&2){let s=e.$implicit;l(1),m("msg",s)}}var re=(()=>{let e=class e{get user(){return this.formUser.get("user")}get email(){return this.formUser.get("email")}get password1(){return this.formUser.get("password1")}get password2(){return this.formUser.get("password2")}constructor(r,i,o){this.fb=r,this.auth=i,this.router=o,this.errors=[],this.formUser=this.fb.group({user:["",p.required],email:["",[p.email,p.required]],password1:["",p.required],password2:["",p.required]})}ngOnInit(){this.formUser.setValidators(ee())}close(r){this.errors=this.errors.filter((i,o)=>o!==r)}upload(){this.errors=[],this.formUser.valid?this.auth.signup(this.user.value,this.email.value,this.password1.value).subscribe({next:r=>{console.log(r)},error:r=>{console.error(r),this.errors.push("Error when try to connect")},complete:()=>{this.router.navigateByUrl("/"),this.formUser.reset()}}):(this.user.errors?.required&&this.errors.push("Add an user name"),this.email.errors?.email&&this.errors.push("Email must be like user@example"),this.email.errors?.required&&this.errors.push("Add an email"),this.password1.errors?.required&&this.errors.push("Add a password"),this.password2.errors?.required&&this.password1.valid&&this.errors.push("Confirm the password"),this.formUser.errors?.PasswordNoMatch&&this.password1.valid&&this.password2.valid&&this.errors.push("The passwords don't match"))}};e.\u0275fac=function(i){return new(i||e)(d(j),d(I),d(M))},e.\u0275cmp=C({type:e,selectors:[["app-signup"]],hostAttrs:[1,"flex","flex-wrap","w-full","sm:w-[calc(100%-5rem)]","content-start","mx-auto","px-10","pb-6"],decls:14,vars:4,consts:[[4,"ngFor","ngForOf"],[1,"relative","max-w-sm","bg-white","px-8","pt-5","mx-auto","mt-4","rounded-lg","border-8","border-greenl"],[1,"absolute","w-full","h-full","rounded-lg","border-8","border-purple","z-[-1]"],[1,"pb-6","text-xl","font-semibold","text-greenl"],["id","form-post",1,"pb-6",3,"formGroup","ngSubmit"],["type","text","formControlName","user","placeholder","User name",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],["type","email","formControlName","email","placeholder","Email",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],["type","password","formControlName","password1","placeholder","Password",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],["type","password","formControlName","password2","placeholder","Repeat password",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],[1,"relative","w-full"],[1,"absolute","w-full","h-full","rounded-lg","border-4","border-purple","inset-x-[10px]","inset-y-[5px]"],["type","submit",1,"relative","w-full","bg-white","rounded-lg","border-4","border-greenl","px-3","py-2","font-semibold","text-greenl","active:inset-x-[10px]","active:inset-y-[5px]"],[3,"msg","close"]],template:function(i,o){i&1&&(_(0,se,2,1,"ng-container",0),n(1,"section",1),u(2,"div",2),n(3,"h2",3),h(4),a(),n(5,"form",4),c("ngSubmit",function(){return o.upload()}),u(6,"input",5)(7,"input",6)(8,"input",7)(9,"input",8),n(10,"div",9),u(11,"div",10),n(12,"button",11),h(13),a()()()()),i&2&&(m("ngForOf",o.errors),l(4),w("Account Register"),l(1),m("formGroup",o.formUser),l(8),w("SignUp"))},dependencies:[U,D,V,N,E,F,A,T]});let t=e;return t})();function le(t,e){if(t&1){let s=x();y(0),n(1,"app-error",6),c("close",function(){let o=g(s).index,v=f();return b(v.close(o))}),a(),S()}if(t&2){let s=e.$implicit;l(1),m("msg",s)}}function ae(t,e){if(t&1){let s=x();n(0,"div",7)(1,"p",8),h(2),a(),n(3,"button",9),c("click",function(){g(s);let i=f();return b(i.alert="")}),u(4,"i",10),a()()}if(t&2){let s=f();l(2),w(s.alert)}}function me(t,e){if(t&1){let s=x();n(0,"form",11),c("ngSubmit",function(){g(s);let i=f();return b(i.submit())}),u(1,"input",12)(2,"input",13),n(3,"div",14),u(4,"div",15),n(5,"button",16),h(6,"Update data"),a()()()}if(t&2){let s=f();m("formGroup",s.formUser)}}var te=(()=>{let e=class e{get user_name(){return this.formUser?.get("user_name")}get email(){return this.formUser?.get("email")}close(r){this.errors=this.errors.filter((i,o)=>o!==r)}submit(){this.errors=[],this.formUser?.valid?this.auth.signup(this.user_name.value,this.email.value,"").subscribe({next:r=>{console.log(r)},error:r=>{console.error(r),this.errors.push("Error when try to connect")},complete:()=>{this.alert="The data was updated"}}):(this.user_name.errors?.required&&this.errors.push("Add an user name"),this.email.errors?.email&&this.errors.push("Email must be like user@example"),this.email.errors?.required&&this.errors.push("Add an email"))}constructor(r,i,o){this.fb=r,this.imgService=i,this.auth=o,this.notifier=new B,this.alert="",this.errors=[]}ngOnInit(){this.auth.userData.pipe(R(this.notifier)).subscribe(r=>{this.formUser=this.fb.group({user_name:[r.user_name,p.required],email:[r.email,[p.required,p.email]]})})}ngOnDestroy(){this.notifier.next(!0),this.notifier.complete()}};e.\u0275fac=function(i){return new(i||e)(d(j),d(J),d(I))},e.\u0275cmp=C({type:e,selectors:[["app-index-users"]],hostAttrs:[1,"flex","flex-wrap","w-full","sm:w-[calc(100%-5rem)]","content-start","mx-auto","px-10","pb-6"],decls:7,vars:3,consts:[[4,"ngFor","ngForOf"],["class","flex justify-between w-full items-center rounded-lg border-4 border-purple text-purple px-8 py-2 my-2",4,"ngIf"],[1,"relative","max-w-sm","bg-white","px-8","pt-5","mx-auto","mt-4","rounded-lg","border-8","border-greenl"],[1,"absolute","w-full","h-full","rounded-lg","border-8","border-purple","z-[-1]"],[1,"pb-6","text-xl","font-semibold","text-greenl"],["id","form-post","class","pb-6",3,"formGroup","ngSubmit",4,"ngIf"],[3,"msg","close"],[1,"flex","justify-between","w-full","items-center","rounded-lg","border-4","border-purple","text-purple","px-8","py-2","my-2"],[1,"font-semibold"],["title","close alert",1,"close","bg-white","px-2",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle","text-2xl"],["id","form-post",1,"pb-6",3,"formGroup","ngSubmit"],["type","text","formControlName","user_name","placeholder","User name",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],["type","email","formControlName","email","placeholder","Email",1,"w-full","border-b-4","border-greenl","px-2","py-1","mb-3","outline-none","focus:border-purple"],[1,"relative","w-full"],[1,"absolute","w-full","h-full","rounded-lg","border-4","border-purple","inset-x-[10px]","inset-y-[5px]"],["type","submit",1,"relative","w-full","bg-white","rounded-lg","border-4","border-greenl","px-3","py-2","font-semibold","text-greenl","active:inset-x-[10px]","active:inset-y-[5px]"]],template:function(i,o){i&1&&(_(0,le,2,1,"ng-container",0)(1,ae,5,1,"div",1),n(2,"section",2),u(3,"div",3),n(4,"h2",4),h(5,"change your data"),a(),_(6,me,7,1,"form",5),a()),i&2&&(m("ngForOf",o.errors),l(1),m("ngIf",o.alert),l(5),m("ngIf",o.formUser))},dependencies:[U,z,D,V,N,E,F,A,T]});let t=e;return t})();var pe=[{path:"",component:te,canActivate:[P]},{path:"signin",component:Z},{path:"signup",component:re}],ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=G({type:e}),e.\u0275inj=q({providers:[P],imports:[k.forChild(pe),k]});let t=e;return t})();var Oe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=G({type:e}),e.\u0275inj=q({imports:[$,ie,K,L,H]});let t=e;return t})();export{Oe as UsersModule};