/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

"use strict";var __decorate=this&&this.__decorate||function(e,t,s,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var c=e.length-1;0<=c;c--)(o=e[c])&&(a=(r<3?o(a):3<r?o(t,s,a):o(t,s))||a);return 3<r&&a&&Object.defineProperty(t,s,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),services_2=require("../../services/services"),services_3=require("../../services/services"),services_4=require("../../services/services"),services_5=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),spiceimportsservice=function(){function e(e){this.backend=e,this.isloading=!1,this.isloadingLogs=!1,this.canLoadMore=!0,this.activeimportdata=void 0,this.loadLimit=25,this.activeimportdata$=new core_1.EventEmitter,this.items=[],this.activeItemLogs=void 0}return Object.defineProperty(e.prototype,"activeImportData",{get:function(){return this.activeimportdata},set:function(e){this.activeimportdata=e,this.activeimportdata$.emit(e)},enumerable:!0,configurable:!0}),e.prototype.getItemLogs=function(){var t=this;this.activeItemLogs=void 0,this.isloadingLogs=!0,this.backend.getRequest("/modules/SpiceImports/"+this.activeImportData.id+"/logs").subscribe(function(e){e.map(function(e){return e.data=e.data.split('";"')}),t.activeItemLogs=e,t.isloadingLogs=!1})},e.prototype.loadData=function(){var t=this;this.isloading=!0,this.backend.getRequest("/module/SpiceImports",{orderby:"date_entered DESC",limit:this.loadLimit,offset:0,fields:"*"}).subscribe(function(e){t.parseItemsStatus(e.list),t.items=e.list,t.isloading=!1})},e.prototype.loadMoreData=function(){var t=this;if(this.isloading||!this.canLoadMore)return!1;this.isloading=!0,this.backend.getRequest("/module/SpiceImports",{orderby:"date_entered DESC",limit:this.loadLimit,offset:this.items.length,fields:"*"}).subscribe(function(e){t.parseItemsStatus(e.list),t.items=t.items.concat(e.list),e.list.length<t.loadLimit&&(t.canLoadMore=!1),t.isloading=!1})},e.prototype.deleteImport=function(){var s=this;this.items.every(function(e){var t=s.items.indexOf(e);return e.id==s.activeImportData.id&&s.items.splice(t,1),!0})},e.prototype.parseItemsStatus=function(e){e.map(function(e){var t=JSON.parse(e.data);switch(e.status){case"c":"new"==t.importAction?e.status="LBL_IMPORTED":e.status="LBL_UPDATED";break;case"e":"new"==t.importAction?e.status="LBL_IMPORTED":e.status="LBL_UPDATE_FAILED";break;case"q":default:e.status="LBL_SCHEDULED"}return e})},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[services_3.backend])],e)}();exports.spiceimportsservice=spiceimportsservice;var SpiceImports=function(){function SpiceImports(e,t){this.language=e,this.spiceimportsservice=t}return SpiceImports.prototype.ngOnInit=function(){this.spiceimportsservice.loadData()},SpiceImports=__decorate([core_1.Component({template:'<div class="slds-grid"><spice-imports-list class="slds-size--1-of-2"><div class="slds-scrollable"></div></spice-imports-list><spice-imports-logs class="slds-size--1-of-2 slds-theme--shade"><div class="slds-scrollable"></div></spice-imports-logs></div>',providers:[spiceimportsservice]}),__metadata("design:paramtypes",[services_2.language,spiceimportsservice])],SpiceImports)}();exports.SpiceImports=SpiceImports;var SpiceImportsList=function(){function e(e,t){this.language=e,this.spiceimportsservice=t}return e.prototype.listStyle=function(){return{height:"calc(100vh - "+this.listcontainer.element.nativeElement.getBoundingClientRect().top+"px)"}},Object.defineProperty(e.prototype,"items",{get:function(){return this.spiceimportsservice.items},enumerable:!0,configurable:!0}),e.prototype.onScroll=function(e){var t=this.listcontainer.element.nativeElement;t.scrollTop+t.clientHeight+50>t.scrollHeight&&this.spiceimportsservice.loadMoreData()},__decorate([core_1.ViewChild("listcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"listcontainer",void 0),e=__decorate([core_1.Component({selector:"spice-imports-list",template:'<div #listcontainer (scroll)="onScroll($event)" class="slds-scrollable--y" [ngStyle]="listStyle()"><div *ngIf="!spiceimportsservice.isloading && items?.length == 0" class="slds-text-align_center slds-p-vertical--medium"><span>{{ language.getLabel(\'LBL_NO_ENTRIES\') }}</span></div><spice-imports-list-item *ngFor="let item of items" [item]="item"></spice-imports-list-item><system-spinner *ngIf="spiceimportsservice.isloading"></system-spinner></div>'}),__metadata("design:paramtypes",[services_2.language,spiceimportsservice])],e)}();exports.SpiceImportsList=SpiceImportsList;var SpiceImportsListItem=function(){function e(e,t){this.language=e,this.spiceimportsservice=t,this.item=void 0}return __decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"item",void 0),e=__decorate([core_1.Component({selector:"spice-imports-list-item",template:'<div class="slds-p-around--medium slds-border--bottom slds-border--right slds-grid" (click)="spiceimportsservice.activeImportData = {id: item.id, name: item.name}" [ngClass]="{\'slds-theme_shade\':spiceimportsservice.activeImportData?.id == item.id}" style="cursor: pointer"><div class="slds-icon_container slds-col slds-size--1-of-12" title="{{ item.model }}"><system-icon [module]="item.module" size="medium"></system-icon></div><div class="slds-col slds-size--11-of-12"><div class="slds-grid slds-grid--align-spread"><div class="slds-text-title_caps">{{ item.name }}</div><div class="slds-col--bump-left slds-truncate">{{ item.date_entered | slice:0:16 }}</div></div><div class="slds-grid slds-grid--align-spread"><div class="slds-truncate">{{ language.getLabel(item.status) }}</div><div class="slds-col--bump-left slds-truncate">{{ item.created_by_name }}</div></div></div></div>'}),__metadata("design:paramtypes",[services_2.language,spiceimportsservice])],e)}();exports.SpiceImportsListItem=SpiceImportsListItem;var Spiceimportslogs=function(){function e(e,t,s,i,o){var r=this;this.language=e,this.modal=t,this.backend=s,this.toast=i,this.spiceimportsservice=o,this.itemHeader=void 0,this.activeLogId=void 0,this.activelogname=void 0,this.opened=!1,this.spiceimportsservice.activeimportdata$.subscribe(function(e){e&&(r.activeLogName=e.name,r.spiceimportsservice.getItemLogs(),r.setItemHeader(e.id)),r.opened=!1})}return Object.defineProperty(e.prototype,"itemLogs",{get:function(){return this.spiceimportsservice.activeItemLogs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeLogName",{get:function(){return this.activelogname},set:function(e){this.activelogname=e},enumerable:!0,configurable:!0}),e.prototype.getButtonicon=function(e){return this.opened&&this.activeLogId==e?"chevronup":"chevrondown"},e.prototype.setItemHeader=function(s){var i=this;this.spiceimportsservice.items.some(function(e){var t=JSON.parse(e.data);return e.id==s&&(i.itemHeader=t.fileHeader),!0})},e.prototype.mainStyle=function(){return{height:"calc(100vh - "+this.logscontainer.element.nativeElement.getBoundingClientRect().top+"px)",overflow:"auto"}},e.prototype.toggleOpen=function(e){this.opened&&e!=this.activeLogId||(this.opened=!this.opened),this.activeLogId=e},e.prototype.delete=function(){var t=this;this.modal.confirm(this.language.getLabel("MSG_DELETE_RECORD","","long"),this.language.getLabel("MSG_DELETE_RECORD")).subscribe(function(e){e&&t.backend.deleteRequest("/module/SpiceImports/"+t.spiceimportsservice.activeImportData.id).subscribe(function(e){e?(t.toast.sendToast(t.language.getLabel("MSG_SUCCESSFULLY_DELETED"),"success"),t.spiceimportsservice.deleteImport(),t.resetData()):t.toast.sendToast(t.language.getLabel("ERR_CANT_DELETE"),"error")})})},e.prototype.resetData=function(){this.spiceimportsservice.activeImportData=void 0,this.spiceimportsservice.activeItemLogs=void 0,this.activeLogName=void 0},__decorate([core_1.ViewChild("logscontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"logscontainer",void 0),e=__decorate([core_1.Component({selector:"spice-imports-logs",template:'<div class="slds-grid slds-page-header slds-p-horizontal--none slds-p-vertical--xx-small slds-grid--vertical-align-center" style="border-radius: 0; border-left: 0; height: 50px"><div class="slds-text-title_caps slds-p-left--small">{{ activeLogName }}</div><div class="slds-p-around_xx-small slds-col--bump-left"><button *ngIf="activeLogName" class="slds-button slds-button--brand" (click)="delete()">{{language.getLabel(\'LBL_DELETE\')}}</button></div></div><div #logscontainer class="slds-scrollable--y" [ngStyle]="mainStyle()"><div *ngIf="!spiceimportsservice.isloadingLogs && spiceimportsservice.activeImportData && itemLogs?.length <= 0" class="slds-align_absolute-center slds-m-around--xx-large slds-text-heading--medium">{{language.getLabel(\'MSG_NO_LOGS_FOUND\')}}</div><div *ngIf="!spiceimportsservice.isloadingLogs && !spiceimportsservice.activeImportData" class="slds-align_absolute-center slds-m-around--xx-large slds-text-heading--medium">{{language.getLabel(\'LBL_MAKE_SELECTION\')}}</div><system-spinner *ngIf="spiceimportsservice.isloadingLogs"></system-spinner><div *ngFor="let log of itemLogs"><div (click)="toggleOpen(log.id)" style="cursor: pointer" class="slds-p-left--small slds-border--bottom slds-border--right slds-grid"><div class="slds-p-vertical--small slds-col slds-size--2-of-12 slds-border--right">{{ log.msg }}</div><div [hidden]="opened && log.id == activeLogId" class="slds-p-around--small slds-col slds-size--9-of-12 slds-truncate">{{ log.data.join(\' , \') }}</div><div class="slds-p-around--small slds-size--1-of-12 slds-col_bump-left"><button class="slds-button slds-button_icon"><system-button-icon [icon]="getButtonicon(log.id)"></system-button-icon></button></div></div><table *ngIf="opened && log.id == activeLogId" class="slds-table slds-table--bordered slds-table--cell-buffer"><tbody><tr *ngFor="let field of log.data; let index = index"><td class="slds-truncate">{{ itemHeader[index] }}</td><td class="slds-truncate">{{ field }}</td></tr></tbody></table></div></div>'}),__metadata("design:paramtypes",[services_2.language,services_1.modal,services_3.backend,services_4.toast,spiceimportsservice])],e)}();exports.Spiceimportslogs=Spiceimportslogs;var ModuleSpiceImports=function(){function ModuleSpiceImports(e){this.vms=e,this.version="1.0",this.build_date="2018-10-28",this.vms.registerModule(this)}return ModuleSpiceImports=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents],declarations:[SpiceImports,SpiceImportsList,SpiceImportsListItem,Spiceimportslogs],providers:[spiceimportsservice]}),__metadata("design:paramtypes",[services_5.VersionManagerService])],ModuleSpiceImports)}();exports.ModuleSpiceImports=ModuleSpiceImports;