/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/*(c) aac services 2019. All Rights reserved)*/
"use strict";var __decorate=this&&this.__decorate||function(e,t,s,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,o);else for(var n=e.length-1;0<=n;n--)(i=e[n])&&(r=(c<3?i(r):3<c?i(t,s,r):i(t,s))||r);return 3<c&&r&&Object.defineProperty(t,s,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),services_2=require("../../services/services"),services_3=require("../../services/services"),services_4=require("../../services/services"),services_5=require("../../services/services"),services_6=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),directives_1=require("../../directives/directives"),AsteriskToolbarIndicator=function(){function AsteriskToolbarIndicator(e,t,s,o){var i=this;this.language=e,this.backend=t,this.toast=s,this.dockedComposer=o,this.status="initial",this.callevent="",this.message="",this.messages=[],this.extension="",this.activeCall={callnumber:"",callevent:"",callid:"",direction:""},this.backend.getRequest("asterisk/userext").subscribe(function(e){e.extension&&(i.extension=e.extension,i.connect())})}return AsteriskToolbarIndicator.prototype.connect=function(){var t=this;this.socket=socketIo("http://asterisk.spicecrm.io:3000?room="+this.extension),this.socket.on("connect",function(e){t.status="connected"}),this.socket.on("disconnect",function(){t.status="disconnect"}),this.socket.on("message",function(e){t.setCallStatus(e.text)})},AsteriskToolbarIndicator.prototype.ngOnDestroy=function(){"connected"==this.status&&this.socket.disconnect()},Object.defineProperty(AsteriskToolbarIndicator.prototype,"color",{get:function(){var e="";switch(this.status){case"connected":e="green";break;case"disconnect":e="red";break;default:e="grey"}return e},enumerable:!0,configurable:!0}),AsteriskToolbarIndicator.prototype.toggleconnect=function(){"connected"==this.status?this.socket.disconnect():this.socket.connect()},AsteriskToolbarIndicator.prototype.setCallStatus=function(e){switch(this.callevent=e.event?e.event:"",this.activeCall.callevent=e.event,this.activeCall.callid=e.callId,this.activeCall.callnumber=e.outsideNo,this.activeCall.direction=e.direction,e.event){case"OUTBOUND":case"RING":this.dockedComposer.calls.push(this.activeCall)}},AsteriskToolbarIndicator.prototype.simulatecall=function(){this.activeCall.callevent="RING",this.activeCall.callid="66475757",this.activeCall.callnumber="43676898238847",this.dockedComposer.calls.push(this.activeCall)},AsteriskToolbarIndicator=__decorate([core_1.Component({template:'<div class="slds-grid slds-grid--vertical-align-center slds-m-horizontal--xx-small" (click)="toggleconnect()" (dblclick)="simulatecall()" [title]="status"><system-custom-icon icon="asterisk" size="x-small" [color]="color"></system-custom-icon><div class="slds-p-horizontal--xx-small">{{extension}}</div></div>'}),__metadata("design:paramtypes",[services_2.language,services_3.backend,services_4.toast,services_5.dockedComposer])],AsteriskToolbarIndicator)}();exports.AsteriskToolbarIndicator=AsteriskToolbarIndicator;var ModuleAsterisk=function(){function ModuleAsterisk(e){this.vms=e,this.version="1.0",this.build_date="2019-02-23",this.vms.registerModule(this)}return ModuleAsterisk=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[AsteriskToolbarIndicator],providers:[services_1.userpreferences]}),__metadata("design:paramtypes",[services_6.VersionManagerService])],ModuleAsterisk)}();exports.ModuleAsterisk=ModuleAsterisk;