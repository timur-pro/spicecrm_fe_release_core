/*
SpiceUI 1.1.0

This file is part of SpiceCRM in its "More" Editions and thus is licensed and copyrighted software. Your installation or use of this SpiceCRM file is subject to the license agreement you entered regaridng the use of SpiceCRM with aac services k.s or any of its affiliates and partners.

If you are unsure about your licese agreement please contat aac services k.s. at office@all-about-crm.com

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
*/

"use strict";var __decorate=this&&this.__decorate||function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;0<=c;c--)(r=e[c])&&(s=(a<3?r(s):3<a?r(t,o,s):r(t,o))||s);return 3<a&&s&&Object.defineProperty(t,o,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),router_1=require("@angular/router"),services_1=require("../services/services"),services_2=require("../services/services"),services_3=require("../services/services"),services_4=require("../services/services"),ModelPopOverDirective=function(){function e(e,t,o,i,r){this.metadata=e,this.footer=t,this.model=o,this.elementRef=i,this.router=r,this.popoverCmp=null,this.self=null,this.showPopover=!1,this.showPopoverTimeout={}}return e.prototype.onMouseOver=function(){var e=this;this.showPopoverTimeout=window.setTimeout(function(){return e.renderPopover()},500)},e.prototype.onMouseOut=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.destroyPopover()},e.prototype.goRelated=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.router.navigate(["/module/"+this.module+"/"+this.id])},e.prototype.renderPopover=function(){var t=this;this.metadata.addComponent("fieldModelFooterPopover",this.footer.footercontainer).subscribe(function(e){e.instance.popovermodule=t.module,e.instance.popoverid=t.id,e.instance.parentElementRef=t.elementRef,t.popoverCmp=e.instance.self})},e.prototype.destroyPopover=function(){this.popoverCmp&&this.popoverCmp.destroy()},e.prototype.ngOnInit=function(){this.module||(this.module=this.model.module),this.id||(this.id=this.model.id)},e.prototype.ngOnDestroy=function(){this.destroyPopover()},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"module",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"id",void 0),__decorate([core_1.HostListener("mouseenter"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"onMouseOver",null),__decorate([core_1.HostListener("mouseleave"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"onMouseOut",null),__decorate([core_1.HostListener("click"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"goRelated",null),e=__decorate([core_1.Directive({selector:"[modelPopOver]"}),__metadata("design:paramtypes",[services_1.metadata,services_2.footer,services_3.model,core_1.ElementRef,router_1.Router])],e)}();exports.ModelPopOverDirective=ModelPopOverDirective;var SpiceUIToBottomDirective=function(){function e(e){e.nativeElement.style.backgroundColor="yellow"}return e=__decorate([core_1.Directive({selector:"[spiceuitobottom]"}),__metadata("design:paramtypes",[core_1.ElementRef])],e)}();exports.SpiceUIToBottomDirective=SpiceUIToBottomDirective;var ModelProviderDirective=function(){function e(e){this.model=e,this.model.isLoading=!0}return Object.defineProperty(e.prototype,"provided_model",{set:function(e){this.model.module=e.module,e.id?this.model.id=e.id:e.data&&(this.model.id=e.data.id),e.data?(this.model.data=e.data,this.model.isLoading=!1,this.model.data$.emit(),e.data.acl&&this.model.initializeFieldsStati()):this.model.id&&this.model.getData()},enumerable:!0,configurable:!0}),__decorate([core_1.Input("modelProvider"),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],e.prototype,"provided_model",null),e=__decorate([core_1.Directive({selector:"[modelProvider]",providers:[services_3.model]}),__metadata("design:paramtypes",[services_3.model])],e)}();exports.ModelProviderDirective=ModelProviderDirective;var LocalVariableDirective=function(){function e(e,t){this.vcRef=e,this.templateRef=t,this.context={}}return Object.defineProperty(e.prototype,"ngVar",{set:function(e){this.context.$implicit=this.context.ngVar=e,this.updateView()},enumerable:!0,configurable:!0}),e.prototype.updateView=function(){this.vcRef.clear(),this.vcRef.createEmbeddedView(this.templateRef,this.context)},__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],e.prototype,"ngVar",null),e=__decorate([core_1.Directive({selector:"[ngVar]"}),__metadata("design:paramtypes",[core_1.ViewContainerRef,core_1.TemplateRef])],e)}();exports.LocalVariableDirective=LocalVariableDirective;var SpiceUIAutofocusDirective=function(){function e(e){this.elementRef=e,this.el=this.elementRef.nativeElement}return e.prototype.ngOnInit=function(){this.el.focus()},__decorate([core_1.Input(),__metadata("design:type",Boolean)],e.prototype,"appAutofocus",void 0),e=__decorate([core_1.Directive({selector:"[spoiceui-autofocus]"}),__metadata("design:paramtypes",[core_1.ElementRef])],e)}();exports.SpiceUIAutofocusDirective=SpiceUIAutofocusDirective;var FirstUpperCasePipe=function(){function e(){}return e.prototype.transform=function(e,t){return null===e?null:e.charAt(0).toUpperCase()+e.slice(1)},e=__decorate([core_1.Pipe({name:"firstuppercase"})],e)}();exports.FirstUpperCasePipe=FirstUpperCasePipe;var DirectivesModule=function(){function e(e,t){this.metadata=e,this.vms=t,this.version="1.0",this.build_date="2018-10-25",this.vms.registerModule(this)}return e=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[ModelPopOverDirective,SpiceUIToBottomDirective,ModelProviderDirective,LocalVariableDirective,SpiceUIAutofocusDirective,FirstUpperCasePipe],exports:[ModelPopOverDirective,SpiceUIToBottomDirective,ModelProviderDirective,LocalVariableDirective,SpiceUIAutofocusDirective,FirstUpperCasePipe]}),__metadata("design:paramtypes",[services_1.metadata,services_4.VersionManagerService])],e)}();exports.DirectivesModule=DirectivesModule;