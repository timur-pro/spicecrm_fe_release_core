/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

"use strict";var __decorate=this&&this.__decorate||function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(a=(n<3?r(a):3<n?r(t,o,a):r(t,o))||a);return 3<n&&a&&Object.defineProperty(t,o,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(o,i){return function(e,t){i(e,t,o)}};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),router_1=require("@angular/router"),services_1=require("../services/services"),services_2=require("../services/services"),services_3=require("../services/services"),services_4=require("../services/services"),ModelPopOverDirective=function(){function e(e,t,o,i,r){this.metadata=e,this.footer=t,this.model=o,this.elementRef=i,this.router=r,this.popoverCmp=null,this.self=null,this.showPopover=!1,this.showPopoverTimeout={},this.hidePopoverTimeout={}}return e.prototype.onMouseOver=function(){var e=this;this.showPopoverTimeout=window.setTimeout(function(){return e.renderPopover()},500)},e.prototype.onMouseOut=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.popoverCmp&&this.popoverCmp.closePopover()},e.prototype.goRelated=function(){this.showPopoverTimeout&&window.clearTimeout(this.showPopoverTimeout),this.router.navigate(["/module/"+this.module+"/"+this.id])},e.prototype.renderPopover=function(){var t=this;this.metadata.addComponent("ObjectModelPopover",this.footer.footercontainer).subscribe(function(e){e.instance.popovermodule=t.module,e.instance.popoverid=t.id,e.instance.parentElementRef=t.elementRef,t.popoverCmp=e.instance})},e.prototype.ngOnInit=function(){!this.module&&this.model&&(this.module=this.model.module),!this.id&&this.model&&(this.id=this.model.id)},e.prototype.ngOnDestroy=function(){this.popoverCmp&&this.popoverCmp.closePopover(!0)},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"module",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"id",void 0),__decorate([core_1.HostListener("mouseenter"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"onMouseOver",null),__decorate([core_1.HostListener("mouseleave"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"onMouseOut",null),__decorate([core_1.HostListener("click"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],e.prototype,"goRelated",null),e=__decorate([core_1.Directive({selector:"[modelPopOver]"}),__param(2,core_1.Optional()),__metadata("design:paramtypes",[services_1.metadata,services_2.footer,services_3.model,core_1.ElementRef,router_1.Router])],e)}();exports.ModelPopOverDirective=ModelPopOverDirective;var SpiceUIToBottomDirective=function(){function e(e){e.nativeElement.style.backgroundColor="yellow"}return e=__decorate([core_1.Directive({selector:"[spiceuitobottom]"}),__metadata("design:paramtypes",[core_1.ElementRef])],e)}();exports.SpiceUIToBottomDirective=SpiceUIToBottomDirective;var ModelProviderDirective=function(){function e(e){this.model=e,this.model.isLoading=!0}return Object.defineProperty(e.prototype,"provided_model",{set:function(e){this.model.module=e.module,e.id?this.model.id=e.id:e.data&&(this.model.id=e.data.id),e.data?(this.model.data=e.data,this.model.isLoading=!1,this.model.data$.emit(),e.data.acl&&this.model.initializeFieldsStati()):this.model.id&&this.model.getData()},enumerable:!0,configurable:!0}),__decorate([core_1.Input("modelProvider"),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],e.prototype,"provided_model",null),e=__decorate([core_1.Directive({selector:"[modelProvider]",providers:[services_3.model]}),__metadata("design:paramtypes",[services_3.model])],e)}();exports.ModelProviderDirective=ModelProviderDirective;var LocalVariableDirective=function(){function e(e,t){this.vcRef=e,this.templateRef=t,this.context={}}return Object.defineProperty(e.prototype,"ngVar",{set:function(e){this.context.$implicit=this.context.ngVar=e,this.updateView()},enumerable:!0,configurable:!0}),e.prototype.updateView=function(){this.vcRef.clear(),this.vcRef.createEmbeddedView(this.templateRef,this.context)},__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],e.prototype,"ngVar",null),e=__decorate([core_1.Directive({selector:"[ngVar]"}),__metadata("design:paramtypes",[core_1.ViewContainerRef,core_1.TemplateRef])],e)}();exports.LocalVariableDirective=LocalVariableDirective;var SpiceUIAutofocusDirective=function(){function e(e){this.elementRef=e,this.el=this.elementRef.nativeElement}return e.prototype.ngOnInit=function(){this.el.focus()},__decorate([core_1.Input(),__metadata("design:type",Boolean)],e.prototype,"appAutofocus",void 0),e=__decorate([core_1.Directive({selector:"[spoiceui-autofocus]"}),__metadata("design:paramtypes",[core_1.ElementRef])],e)}();exports.SpiceUIAutofocusDirective=SpiceUIAutofocusDirective;var FirstUpperCasePipe=function(){function e(){}return e.prototype.transform=function(e,t){return null===e?null:e.charAt(0).toUpperCase()+e.slice(1)},e=__decorate([core_1.Pipe({name:"firstuppercase"})],e)}();exports.FirstUpperCasePipe=FirstUpperCasePipe;var DropdownTriggerDirective=function(){function e(e,t){this.renderer=e,this.elementRef=t,this.dropDownOpen=!1}return e.prototype.openDropdown=function(e){var t=this;this.dropDownOpen=!this.dropDownOpen,this.dropDownOpen?(e.preventDefault(),this.clickListener=this.renderer.listen("document","click",function(e){return t.onClick(e)})):this.clickListener()},e.prototype.onClick=function(e){this.elementRef.nativeElement.contains(e.target)||(this.dropDownOpen=!1,this.clickListener())},e.prototype.ngOnDestroy=function(){this.clickListener&&this.clickListener()},__decorate([core_1.HostBinding("class.slds-is-open"),__metadata("design:type",Boolean)],e.prototype,"dropDownOpen",void 0),__decorate([core_1.HostListener("click",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],e.prototype,"openDropdown",null),e=__decorate([core_1.Directive({selector:"[dropdowntrigger]"}),__metadata("design:paramtypes",[core_1.Renderer2,core_1.ElementRef])],e)}();exports.DropdownTriggerDirective=DropdownTriggerDirective;var ToBottomDirective=function(){function e(e,t){this.element=e,this.renderer=t,this.elementClass=!0}return e.prototype.ngDoCheck=function(){var e=this.element.nativeElement.getBoundingClientRect();this.renderer.setStyle(this.element.nativeElement,"height",window.innerHeight-e.top+"px")},__decorate([core_1.HostBinding("class.slds-scrollable--y"),__metadata("design:type",Object)],e.prototype,"elementClass",void 0),e=__decorate([core_1.Directive({selector:"[tobottom]"}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer2])],e)}();exports.ToBottomDirective=ToBottomDirective;var TrimInputDirective=function(){function e(){}return e.prototype.getCaret=function(e){return{start:e.selectionStart,end:e.selectionEnd}},e.prototype.setCaret=function(e,t,o){e.selectionStart=t,e.selectionEnd=o,e.focus()},e.prototype.dispatchEvent=function(e,t){var o=document.createEvent("Event");o.initEvent(t,!1,!1),e.dispatchEvent(o)},e.prototype.trimValue=function(e,t){e.value=t.trim(),this.dispatchEvent(e,"input")},e.prototype.onBlur=function(e,t){this.trim&&"blur"!==this.trim||"function"!=typeof t.trim||t.trim()===t||(this.trimValue(e,t),this.dispatchEvent(e,"blur"))},e.prototype.onInput=function(e,t){if(!this.trim&&"function"==typeof t.trim&&t.trim()!==t){var o=this.getCaret(e),i=o.start,r=o.end;" "===t[0]&&1===i&&1===r&&(r=i=0),this.trimValue(e,t),this.setCaret(e,i,r)}},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"trim",void 0),__decorate([core_1.HostListener("blur",["$event.target","$event.target.value"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,String]),__metadata("design:returntype",void 0)],e.prototype,"onBlur",null),__decorate([core_1.HostListener("input",["$event.target","$event.target.value"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,String]),__metadata("design:returntype",void 0)],e.prototype,"onInput",null),e=__decorate([core_1.Directive({selector:"input[trim]"})],e)}();exports.TrimInputDirective=TrimInputDirective;var DirectivesModule=function(){function e(e,t){this.metadata=e,this.vms=t,this.version="1.0",this.build_date="2018-11-26",this.vms.registerModule(this)}return e=__decorate([core_1.NgModule({imports:[common_1.CommonModule],declarations:[ModelPopOverDirective,SpiceUIToBottomDirective,ModelProviderDirective,LocalVariableDirective,SpiceUIAutofocusDirective,FirstUpperCasePipe,DropdownTriggerDirective,ToBottomDirective,TrimInputDirective],exports:[ModelPopOverDirective,SpiceUIToBottomDirective,ModelProviderDirective,LocalVariableDirective,SpiceUIAutofocusDirective,FirstUpperCasePipe,DropdownTriggerDirective,ToBottomDirective,TrimInputDirective]}),__metadata("design:paramtypes",[services_1.metadata,services_4.VersionManagerService])],e)}();exports.DirectivesModule=DirectivesModule;