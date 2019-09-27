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
"use strict";var __decorate=this&&this.__decorate||function(e,t,a,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var c=e.length-1;0<=c;c--)(i=e[c])&&(n=(o<3?i(n):3<o?i(t,a,n):i(t,a))||n);return 3<o&&n&&Object.defineProperty(t,a,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),rxjs_1=require("rxjs"),ACManagerService=function(){function e(){this.contactccdetails={},this.contactCCDetails$=new core_1.EventEmitter}return Object.defineProperty(e.prototype,"contactCCDetails",{get:function(){return this.contactccdetails},set:function(e){this.contactccdetails=e,this.contactCCDetails$.emit(e)},enumerable:!0,configurable:!0}),e=__decorate([core_1.Injectable()],e)}();exports.ACManagerService=ACManagerService;var accountHierarchy=function(){function e(e){this.backend=e,this.parentId="",this.requestedFields=[],this.members=[],this.membersList=[]}return e.prototype.loadHierachy=function(i,o){var n=this;void 0===i&&(i=this.parentId),void 0===o&&(o=!1);for(var c=new rxjs_1.Subject,e=[],t=0,a=this.requestedFields;t<a.length;t++){var s=a[t];e.push(s.field)}return this.backend.getRequest("AccountsHierachy/"+i+"/"+JSON.stringify(e)).subscribe(function(e){for(var t=0,a=e;t<a.length;t++){var s=a[t];n.members.push({parent_id:i,id:s.id,member_count:s.member_count,expanded:!1,loaded:!1,summary_text:s.summary_text,data:s.data})}n.members.some(function(e){if(e.id===i)return e.loaded=!0,o&&(e.expanded=!0),!0}),n.rebuildMembersList(),c.next(!0),c.complete()}),c.asObservable()},e.prototype.expand=function(t){var a=this;this.members.some(function(e){if(e.id===t)return e.loaded?e.expanded=!0:a.loadHierachy(t,!0),!0}),this.rebuildMembersList()},e.prototype.collapse=function(t){this.members.some(function(e){if(e.id===t)return!(e.expanded=!1)}),this.rebuildMembersList()},e.prototype.rebuildMembersList=function(){this.membersList=[],this.buildMembersList()},e.prototype.buildMembersList=function(e,t){void 0===e&&(e=this.parentId),void 0===t&&(t=0);for(var a=0,s=this.members;a<s.length;a++){var i=s[a];i.parent_id==e&&(this.membersList.push({level:t+1,id:i.id,member_count:parseInt(i.member_count,10),summary_text:i.summary_text,data:i.data,expanded:i.expanded}),i.expanded&&this.buildMembersList(i.id,t+1))}},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[services_1.backend])],e)}();exports.accountHierarchy=accountHierarchy;var AccountsKPIsOverview=function(){function AccountsKPIsOverview(e,t,a,s,i){var o=this;this.backend=e,this.model=t,this.metadata=a,this.language=s,this.renderer=i,this.years=[],this.limit=0,this.yearto=0,this.companyCodes=[],this.accountKpis={},this.isLoading=!1,this.getYears(),this.isLoading=!0,this.backend.getRequest("/module/AccountKPIs/"+this.model.id+"/getsummary",{yearfrom:this.yearto-this.limit+1,yearto:this.yearto}).subscribe(function(e){o.accountKpis=e.accountkpis,o.companyCodes=e.companycodes,o.isLoading=!1})}return Object.defineProperty(AccountsKPIsOverview.prototype,"tableContainerStyle",{get:function(){return{border:"1px solid #dddbda","border-radius":".25rem",height:"417px"}},enumerable:!0,configurable:!0}),AccountsKPIsOverview.prototype.getYears=function(){var e=this.metadata.getComponentConfig("AccountsKPIsOverview","AccountKPIs");this.yearto=e&&e.yearto?+e.yearto:(new moment).get("year"),this.limit=e&&e.limit?+e.limit:4;for(var t=this.yearto-this.limit+1;t<=this.yearto;t++)this.years.push(t)},AccountsKPIsOverview.prototype.getKPI=function(e,t){try{return this.accountKpis[e][t]?this.accountKpis[e][t]:0}catch(e){return 0}},AccountsKPIsOverview=__decorate([core_1.Component({template:'<div class="slds-container--fluid slds-m-vertical--small"><div *ngIf="companyCodes.length > 0" class="slds-table--header-fixed_container" [ngStyle]="tableContainerStyle"><div class="slds-scrollable--y" style="height:100%;"><table class="slds-table slds-table_bordered slds-table_header-fixed slds-theme--default"><thead><tr class="slds-text-title_caps"><th scope="col"><div class="slds-p-left--x-small slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center" title="companyCode">{{ language.getLabel(\'LBL_COMPANYCODE\') }}</div></th><th scope="col" *ngFor="let year of years"><div class="slds-p-left--x-small slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center" title="year">{{ year }}</div></th><th scope="col"><div class="slds-p-left--x-small slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center" title="currency" style="width: fit-content">{{ language.getLabel(\'LBL_CURRENCY\') }}</div></th></tr></thead><tbody><tr *ngFor="let CCode of companyCodes"><th scope="row" class="slds-theme_shade slds-text-title_caps"><div class="slds-truncate" title="Company Code">{{ CCode.companycode }}</div></th><td scope="row" *ngFor="let year of years"><div class="slds-truncate" title="Revenue">{{ getKPI(CCode.id, year)}}</div></td><th scope="row" class="slds-theme_shade"><div class="slds-truncate slds-text-title_caps" title="EUR">EUR</div></th></tr></tbody></table></div></div><system-spinner *ngIf="isLoading"></system-spinner><div *ngIf="!isLoading && companyCodes.length == 0" class="slds-align_absolute-center slds-p-vertical--medium"><span>No Company Codes found</span></div></div>'}),__metadata("design:paramtypes",[services_1.backend,services_1.model,services_1.metadata,services_1.language,core_1.Renderer2])],AccountsKPIsOverview)}();exports.AccountsKPIsOverview=AccountsKPIsOverview;var AccountCCDetails=function(){function AccountCCDetails(e,t,a,s){this.language=e,this.model=t,this.backend=a,this.view=s,this.companyCodes=[],this.activatedTabs=[],this.activeTab=0,this.isLoading=!1,this.loadCompanyCodes()}return AccountCCDetails.prototype.ngOnInit=function(){this.view.isEditable=!0},AccountCCDetails.prototype.loadCompanyCodes=function(){var t=this;this.isLoading=!0;var e=JSON.stringify(["companycode","date_modified","description","id"]);this.backend.getRequest("/module/CompanyCodes",{fields:e}).subscribe(function(e){t.companyCodes=e.list}),this.isLoading=!1},AccountCCDetails.prototype.setActiveTab=function(e){this.activatedTabs.push(e),this.activeTab=e},AccountCCDetails.prototype.getCCDetailsData=function(e){var t=this.model.data.accountccdetails.beans;for(var a in t)if(t.hasOwnProperty(a)&&t[a].companycode_id==e.id)return t[a]},AccountCCDetails.prototype.getContentContainerStyle=function(e){return{display:e!==this.activeTab?"none":"block",padding:".25rem"}},AccountCCDetails.prototype.trackByFn=function(e,t){return e},AccountCCDetails=__decorate([core_1.Component({template:'<div class="slds-grid slds-m-top--x-small slds-p-around--xxx-small" style="border-radius: .25rem; border: 1px solid #dddbda"><div *ngIf="!isLoading && companyCodes.length > 0" class="slds-tabs--default"><ul class="slds-tabs--default__nav" role="tablist"><li *ngFor="let CCode of companyCodes; let tabindex = index; trackBy: trackByFn" class="slds-tabs--default__item slds-text-title--caps" [ngClass]="{\'slds-active\': tabindex === activeTab}" role="presentation" (click)="setActiveTab(tabindex)"><a class="slds-tabs--default__link" href="javascript:void(0);" role="tab" aria-selected="false">{{ CCode.companycode }}</a></li></ul><ng-container *ngFor="let CCode of companyCodes let tabindex = index; trackBy: trackByFn"><div class="slds-tabs--default__content slds-p-around--xx-small slds-show" role="tabpanel" [ngStyle]="getContentContainerStyle(tabindex)"><account-cc-details-tab [ccode]="CCode" [parent]="model" [data]="getCCDetailsData(CCode)"></account-cc-details-tab></div></ng-container></div><system-spinner *ngIf="isLoading"></system-spinner><div *ngIf="!isLoading && companyCodes.length == 0" class="slds-align_absolute-center slds-p-around--small">{{language.getLabel(\'LBL_NO_ENTRIES\')}}</div></div>',providers:[services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.model,services_1.backend,services_1.view])],AccountCCDetails)}();exports.AccountCCDetails=AccountCCDetails;var AccountCCDetailsTab=function(){function e(e,t,a){this.language=e,this.metadata=t,this.model=a,this.data=void 0,this.componentconfig={},this.ccode={},this.model.module="AccountCCDetails"}return e.prototype.ngOnInit=function(){this.setModelData()},e.prototype.ngAfterViewInit=function(){this.renderView()},e.prototype.setModelData=function(){this.data?(this.model.id=this.data.id,this.model.data=this.model.utils.backendModel2spice(this.model.module,this.data)):(this.model.initialize(this.parent),this.model.setFields({name:this.ccode.name,companycode_id:this.ccode.id}),this.model.getField("account_id")||this.model.setFields({account_id:this.parent.id,account_name:this.parent.getField("name")}))},e.prototype.renderView=function(){_.isEmpty(this.componentconfig)&&(this.componentconfig=this.metadata.getComponentConfig("AccountCCDetails","AccountCCDetails"),_.isEmpty(this.componentconfig)&&(this.componentconfig=this.metadata.getComponentConfig("AccountCCDetailsTab","Accounts")));var e=this.componentconfig.componentset;if(e)for(var t=this.metadata.getComponentSetObjects(e),a=function(t){s.metadata.addComponent(t.component,s.ccdetailscontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig})},s=this,i=0,o=t;i<o.length;i++){a(o[i])}},__decorate([core_1.ViewChild("ccdetailscontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"ccdetailscontainer",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"data",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"componentconfig",void 0),__decorate([core_1.Input(),__metadata("design:type",services_1.model)],e.prototype,"parent",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"ccode",void 0),e=__decorate([core_1.Component({selector:"account-cc-details-tab",template:"<div #ccdetailscontainer></div>",providers:[services_1.model]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model])],e)}();exports.AccountCCDetailsTab=AccountCCDetailsTab;var ContactCCDetails=function(){function ContactCCDetails(e,t,a,s,i){this.language=e,this.model=t,this.acmService=a,this.backend=s,this.view=i,this.activatedTabs=[],this.companyCodes=[],this.activeTab=0,this.contactccdetails={},this.isLoading=!1,this.loadCompanyCode(),this.subscribeContactCCDetailsChanges()}return Object.defineProperty(ContactCCDetails.prototype,"contactCCDetails",{get:function(){return this.contactccdetails},set:function(e){this.contactccdetails=e},enumerable:!0,configurable:!0}),ContactCCDetails.prototype.ngOnInit=function(){this.view.isEditable=!0},ContactCCDetails.prototype.ngOnDestroy=function(){this.accountsContactsManagerSubscriber.unsubscribe()},ContactCCDetails.prototype.setActiveTab=function(e){this.activatedTabs.push(e),this.activeTab=e},ContactCCDetails.prototype.getCCDetailsData=function(e){if(!_.isEmpty(this.contactCCDetails))for(var t in this.contactCCDetails)if(this.contactCCDetails[t].companycode_id==e.id)return this.contactCCDetails[t]},ContactCCDetails.prototype.getContentContainerStyle=function(e){return{display:e!==this.activeTab?"none":"block",padding:".25rem"}},ContactCCDetails.prototype.loadCompanyCode=function(){var t=this;this.isLoading=!0;var e=JSON.stringify(["companycode","date_modified","description","id"]);this.backend.getRequest("/module/CompanyCodes",{fields:e}).subscribe(function(e){t.companyCodes=e.list,t.isLoading=!1})},ContactCCDetails.prototype.subscribeContactCCDetailsChanges=function(){var t=this;this.accountsContactsManagerSubscriber=this.acmService.contactCCDetails$.subscribe(function(e){t.activeTab=0,t.companyCodes=t.companyCodes.slice(),t.contactCCDetails=e})},ContactCCDetails.prototype.trackByFn=function(e,t){return e},ContactCCDetails=__decorate([core_1.Component({selector:"contact-cc-details",template:'<div class="slds-grid slds-m-top--x-small slds-p-around--xxx-small" style="border-radius: .25rem; border: 1px solid #dddbda"><div *ngIf="!isLoading && companyCodes.length > 0" class="slds-tabs--default"><ul class="slds-tabs--default__nav" role="tablist"><li *ngFor="let CCode of companyCodes; let tabindex = index; trackBy: trackByFn" class="slds-tabs--default__item slds-text-title--caps" [ngClass]="{\'slds-active\': tabindex === activeTab}" role="presentation" (click)="setActiveTab(tabindex)"><a class="slds-tabs--default__link" href="javascript:void(0);" role="tab" aria-selected="false">{{ CCode.companycode }}</a></li></ul><ng-container *ngFor="let CCode of companyCodes let tabindex = index; trackBy: trackByFn"><div class="slds-tabs--default__content slds-p-around--xx-small slds-show" role="tabpanel" [ngStyle]="getContentContainerStyle(tabindex)"><contact-cc-details-tab [ccid]="CCode.id" [ccname]="CCode.companycode" [contactid]="model.id" [data]="getCCDetailsData(CCode)"></contact-cc-details-tab></div></ng-container></div><system-spinner *ngIf="isLoading"></system-spinner><div *ngIf="!isLoading && companyCodes.length == 0" class="slds-align_absolute-center slds-p-around--small">{{language.getLabel(\'LBL_NO_ENTRIES\')}}</div></div>',providers:[services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.model,ACManagerService,services_1.backend,services_1.view])],ContactCCDetails)}();exports.ContactCCDetails=ContactCCDetails;var ContactCCDetailsTab=function(){function e(e,t,a){this.language=e,this.metadata=t,this.model=a,this.data=void 0,this.contactId=void 0,this.ccId=void 0,this.ccName=void 0}return e.prototype.ngOnChanges=function(){this.setModelData()},e.prototype.ngOnInit=function(){this.model.module="ContactCCDetails"},e.prototype.ngAfterViewInit=function(){this.renderView()},e.prototype.renderView=function(){var e=this.metadata.getComponentConfig("ContactCCDetailsTab","Accounts").componentset;if(e)for(var t=this.metadata.getComponentSetObjects(e),a=function(t){s.metadata.addComponent(t.component,s.ccdetailscontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig})},s=this,i=0,o=t;i<o.length;i++){a(o[i])}},e.prototype.setModelData=function(){this.data?(this.model.id=this.data.id,this.model.data=this.data):(this.model.id=this.model.generateGuid(),this.model.data={id:this.model.id,name:this.ccName,contact_id:this.contactId,companycode_id:this.ccId,date_entered:new moment,date_modified:new moment})},__decorate([core_1.ViewChild("ccdetailscontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"ccdetailscontainer",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"data",void 0),__decorate([core_1.Input("contactid"),__metadata("design:type",String)],e.prototype,"contactId",void 0),__decorate([core_1.Input("ccid"),__metadata("design:type",String)],e.prototype,"ccId",void 0),__decorate([core_1.Input("ccname"),__metadata("design:type",String)],e.prototype,"ccName",void 0),e=__decorate([core_1.Component({selector:"contact-cc-details-tab",template:"<div #ccdetailscontainer></div>",providers:[services_1.model]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model])],e)}();exports.ContactCCDetailsTab=ContactCCDetailsTab;var AccountsContactsManager=function(){function AccountsContactsManager(e,t,a,s,i){this.language=e,this.metadata=t,this.relatedmodels=a,this.acmService=s,this.model=i,this.editcomponentset="",this.module="",this.displayitems=5,this.activeContactId=void 0,this.relatedmodels.module=this.model.module,this.relatedmodels.id=this.model.id}return AccountsContactsManager.prototype.setActiveContactId=function(e){this.activeContactId=e},Object.defineProperty(AccountsContactsManager.prototype,"childrenHeight",{get:function(){return{height:"340px"}},enumerable:!0,configurable:!0}),Object.defineProperty(AccountsContactsManager.prototype,"mainStyle",{get:function(){return{height:"350pxpx","border-radius":".25rem",border:"1px solid #dddbda"}},enumerable:!0,configurable:!0}),AccountsContactsManager.prototype.ngAfterViewInit=function(){this.loadRelated()},AccountsContactsManager.prototype.loadRelated=function(){this.relatedmodels.relatedModule="Contacts",this.relatedmodels.getData()},AccountsContactsManager.prototype.ngOnDestroy=function(){this.relatedmodels.stopSubscriptions()},AccountsContactsManager.prototype.aclAccess=function(){return this.metadata.checkModuleAcl(this.module,"list")},AccountsContactsManager=__decorate([core_1.Component({selector:"accounts-contacts-manager",template:'<object-related-card [componentconfig]="{object: \'Contacts\'}"><div class="slds-grid slds-border--top" style="height: 350px;"><div class="slds-size--1-of-3 slds-border--right slds-p-around--xxx-small"><accounts-contacts-manager-list (activeContactId$)="setActiveContactId($event)" [tableHeight]="childrenHeight"></accounts-contacts-manager-list></div><div class="slds-size--2-of-3" [ngStyle]="childrenHeight"><accounts-contacts-manager-details [activecontactid]="activeContactId"></accounts-contacts-manager-details></div></div></object-related-card>',providers:[services_1.relatedmodels,ACManagerService]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.relatedmodels,ACManagerService,services_1.model])],AccountsContactsManager)}();exports.AccountsContactsManager=AccountsContactsManager;var AccountsContactsManagerDetails=function(){function AccountsContactsManagerDetails(e,t,a,s,i,o){this.language=e,this.metadata=t,this.view=a,this.acmService=s,this.relatedmodels=i,this.model=o,this.activeContactId=void 0,this.renderedComponents=[],this.model.module="Contacts"}return AccountsContactsManagerDetails.prototype.ngAfterViewInit=function(){this.buildContainer()},AccountsContactsManagerDetails.prototype.ngOnChanges=function(){var t=this;this.activeContactId&&(this.resetView(),this.buildContainer(),this.view.setViewMode(),this.model.id=this.activeContactId,this.model.getData(!0,"",!0).subscribe(function(e){_.isEmpty(e.contactccdetails.beans)?t.acmService.contactCCDetails={}:t.acmService.contactCCDetails=e.contactccdetails.beans}))},AccountsContactsManagerDetails.prototype.resetView=function(){for(var e=0,t=this.renderedComponents;e<t.length;e++){t[e].destroy()}this.renderedComponents=[]},AccountsContactsManagerDetails.prototype.buildContainer=function(){var a=this,e=this.metadata.getComponentConfig("AccountsContactsManager","Accounts").detailscomponentset;if(e)for(var t=this.metadata.getComponentSetObjects(e),s=function(t){i.metadata.addComponent(t.component,i.detailscontainer).subscribe(function(e){a.renderedComponents.push(e),e.instance.componentconfig=t.componentconfig})},i=this,o=0,n=t;o<n.length;o++){s(n[o])}},__decorate([core_1.ViewChild("detailscontainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],AccountsContactsManagerDetails.prototype,"detailscontainer",void 0),__decorate([core_1.Input("activecontactid"),__metadata("design:type",String)],AccountsContactsManagerDetails.prototype,"activeContactId",void 0),AccountsContactsManagerDetails=__decorate([core_1.Component({selector:"accounts-contacts-manager-details",template:'<div class="slds-scrollable--y slds-p-around--x-small"><div *ngIf="!activeContactId" class="slds-text-align_center slds-p-vertical--medium"><span>{{ language.getLabel(\'LBL_MAKE_SELECTION\') }}</span></div><div [hidden]="!activeContactId"><div #detailscontainer></div></div></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.view,ACManagerService,services_1.relatedmodels,services_1.model])],AccountsContactsManagerDetails)}();exports.AccountsContactsManagerDetails=AccountsContactsManagerDetails;var AccountsContactsManagerList=function(){function e(e,t,a,s){this.language=e,this.metadata=t,this.relatedmodels=a,this.model=s,this.listfields=[],this.fieldset="",this.tableheight={},this.activeContactId$=new core_1.EventEmitter,this.activeContactId=void 0,this.model.module="Contacts"}return e.prototype.ngOnInit=function(){var e=this.metadata.getComponentConfig("AccountsContactsManager","Accounts");this.listfields=this.metadata.getFieldSetFields(e.listfieldset)},e.prototype.setActiveContactId=function(e){this.activeContactId=e,this.activeContactId$.emit(e)},Object.defineProperty(e.prototype,"contacts",{get:function(){return this.relatedmodels.items},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tableHeight",{get:function(){return this.tableheight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isloading",{get:function(){return this.relatedmodels.isloading},enumerable:!0,configurable:!0}),__decorate([core_1.ViewChild("tableContainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],e.prototype,"tableContainer",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"fieldset",void 0),__decorate([core_1.Input("tableHeight"),__metadata("design:type",Object)],e.prototype,"tableheight",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"activeContactId$",void 0),e=__decorate([core_1.Component({selector:"accounts-contacts-manager-list",template:'<div #tableContainer *ngIf="!isloading && contacts?.length > 0" class="slds-table--header-fixed_container" [ngStyle]="tableHeight"><div class="slds-scrollable--y" style="height:100%;"><table class="slds-table slds-table_bordered slds-table_cell-buffer slds-table_header-fixed" style="border-top: 0"><thead><tr class="slds-text-title_caps"><th scope="col" *ngFor="let field of listfields"><div class="slds-truncate slds-cell-fixed slds-grid slds-grid_vertical-align-center"><field-label [fieldname]="field.field" [fieldconfig]="field.fieldconfig"></field-label></div></th></tr></thead><tbody><tr *ngFor="let contact of contacts" [modelProvider]="{module:\'Contacts\', data: contact}" (click)="setActiveContactId(contact.id)" style="cursor: pointer" (mouseover)="hovered = contact.id" (mouseout)="hovered = \'\'" [ngClass]="{\'slds-theme_shade\': activeContactId == contact.id}" [ngStyle]="{\'border-bottom\': hovered == contact.id ? \'1px solid darkred\':\'\', \'font-weight\': activeContactId == contact.id ? \'700\': \'\'}"><td *ngFor="let field of listfields"><field-container [fieldname]="field.field" [fieldconfig]="field.fieldconfig" fielddisplayclass="slds-truncate"></field-container></td></tr></tbody></table></div></div><system-spinner *ngIf="isloading"></system-spinner><div *ngIf="!isloading && contacts?.length == 0" class="slds-text-align_center slds-p-vertical--medium"><span>{{ language.getLabel(\'LBL_NO_ENTRIES\') }}</span></div>',providers:[services_1.view,services_1.model]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.relatedmodels,services_1.model])],e)}();exports.AccountsContactsManagerList=AccountsContactsManagerList;var AccountHierarchy=function(){function AccountHierarchy(e,t,a,s){this.language=e,this.metadata=t,this.accountHierarchy=a,this.model=s,this.componentconfig={},this.fieldsetFields=[],this.loading=!1}return AccountHierarchy.prototype.loadHierarchy=function(){return this.accountHierarchy.parentId=this.model.id,this.accountHierarchy.requestedFields=this.fieldsetFields,this.accountHierarchy.loadHierachy()},AccountHierarchy.prototype.ngOnInit=function(){var t=this;this.fieldsetFields=this.metadata.getFieldSetFields(this.componentconfig.fieldset),this.loading=!0,this.loadHierarchy().subscribe(function(e){t.loading=!1})},AccountHierarchy=__decorate([core_1.Component({selector:"account-hierarchy",template:'<article class="slds-card slds-card_boundary slds-m-bottom--medium"><div class="slds-card__header slds-grid"><header class="slds-media slds-media--center slds-has-flexi-truncate"><object-icon [icon]="\'hierarchy\'" [size]="\'small\'"></object-icon><div class="slds-media__body slds-truncate"><h2><a href="javascript:void(0);" class="slds-text-link--reset"><span class="slds-text-heading--small">{{language.getLabel(\'LBL_SUBSIDIARIES\')}}</span></a></h2></div></header></div><div class="slds-card__body"><table class="slds-table slds-table--bordered slds-tree slds-table--tree" role="treegrid"><thead><tr class="slds-text-title--caps"><th *ngFor="let field of fieldsetFields" class="slds-cell-buffer--left" scope="col"><div class="slds-truncate">{{language.getFieldDisplayName(\'Accounts\', field.field)}}</div></th></tr></thead><tbody><tr account-hierarchy-node class="slds-hint-parent" role="row" aria-expanded="true" *ngFor="let node of accountHierarchy.membersList" [nodedata]="node" [fields]="fieldsetFields"></tr></tbody><tbody system-table-stencils *ngIf="loading" [columns]="fieldsetFields.length" [rows]="5"></tbody></table></div></article>',providers:[accountHierarchy]}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,accountHierarchy,services_1.model])],AccountHierarchy)}();exports.AccountHierarchy=AccountHierarchy;var AccountHierarchyNode=function(){function e(e,t,a,s,i){this.view=e,this.language=t,this.metadata=a,this.accountHierarchy=s,this.model=i,this.nodedata={},this.fields=[],this.loading=!1,this.view.displayLabels=!1}return e.prototype.ngOnInit=function(){this.model.module="Accounts",this.model.id=this.nodedata.id,this.model.data.summary_text=this.nodedata.summary_text;for(var e=0,t=this.fields;e<t.length;e++){var a=t[e];this.model.data[a.field]=this.nodedata.data[a.field]}this.model.data.acl=this.nodedata.data.acl},e.prototype.expandNode=function(){this.nodedata.expanded?this.accountHierarchy.collapse(this.nodedata.id):(this.loading=!0,this.accountHierarchy.expand(this.nodedata.id))},e.prototype.getIcon=function(){switch(this.nodedata.expanded){case!1:return"chevronright";case!0:return"chevrondown"}},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"nodedata",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"fields",void 0),e=__decorate([core_1.Component({selector:"[account-hierarchy-node]",template:'<ng-container *ngFor="let field of fields; let i = index"><td *ngIf="i === 0" scope="row" class="slds-tree__item"><button class="slds-button slds-button--icon slds-button--icon-x-small slds-m-right--x-small" [disabled]="nodedata.member_count === 0" (click)="expandNode()"><system-button-icon *ngIf="!loading" [icon]="getIcon()"></system-button-icon><system-button-icon *ngIf="loading" [icon]="\'spinner\'"></system-button-icon></button><div class="slds-truncate"><field-container [field]="field.field" [fieldconfig]="field.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container></div></td><td *ngIf="i > 0"><div class="slds-truncate"><field-container [field]="field.field" [fieldconfig]="field.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container></div></td></ng-container>',providers:[services_1.model,services_1.view],host:{"[attr.aria-level]":"nodedata.level"}}),__metadata("design:paramtypes",[services_1.view,services_1.language,services_1.metadata,accountHierarchy,services_1.model])],e)}();exports.AccountHierarchyNode=AccountHierarchyNode;var ModuleAccounts=function(){function ModuleAccounts(e){this.vms=e,this.version="1.0",this.build_date="2019-09-27",this.vms.registerModule(this)}return ModuleAccounts=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[AccountsKPIsOverview,AccountCCDetails,AccountCCDetailsTab,ContactCCDetails,ContactCCDetailsTab,AccountsContactsManager,AccountsContactsManagerDetails,AccountsContactsManagerList,AccountHierarchy,AccountHierarchyNode],providers:[ACManagerService]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleAccounts)}();exports.ModuleAccounts=ModuleAccounts;