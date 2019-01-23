/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

"use strict";var __decorate=this&&this.__decorate||function(e,t,s,o){var a,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;0<=c;c--)(a=e[c])&&(n=(i<3?a(n):3<i?a(t,s,n):a(t,s))||n);return 3<i&&n&&Object.defineProperty(t,s,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),router_1=require("@angular/router"),rxjs_1=require("rxjs"),services_1=require("../../services/services"),services_2=require("../../services/services"),services_3=require("../../services/services"),services_4=require("../../services/services"),services_5=require("../../services/services"),services_6=require("../../services/services"),services_7=require("../../services/services"),services_8=require("../../services/services"),services_9=require("../../services/services"),services_10=require("../../services/services"),services_11=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),LeadConvertButton=function(){function LeadConvertButton(e,t,s,o,a,i){this.language=e,this.metadata=t,this.model=s,this.router=o,this.toast=a,this.modal=i,this.disabled=!0}return LeadConvertButton.prototype.execute=function(){var t=this;"Converted"===this.model.data.status?this.toast.sendToast("Lead already Converted","warning"):this.model.getFieldValue("account_id")?this.modal.openModal("LeadConvertOpportunityModal").subscribe(function(e){e.instance.lead=t.model,e.instance.converted.subscribe(function(e){t.model.setField("status","Converted"),t.model.setField("opportunity_id",e.id),t.model.setField("opportunity_name",e.name),t.model.setField("opportunity_amount",e.amount),t.model.save()})}):this.router.navigate(["/module/Leads/"+this.model.id+"/convert"])},LeadConvertButton.prototype.ngOnInit=function(){var t=this;this.handleDisabled(),this.model.mode$.subscribe(function(e){t.handleDisabled()}),this.model.data$.subscribe(function(e){t.handleDisabled()})},LeadConvertButton.prototype.handleDisabled=function(){this.disabled="Converted"===this.model.getFieldValue("status")||!this.model.checkAccess("edit")},LeadConvertButton=__decorate([core_1.Component({selector:"lead-convert-button",template:"<span>{{language.getModuleLabel(model.module, 'LBL_CONVERT_LEAD')}}</span>"}),__metadata("design:paramtypes",[services_5.language,services_1.metadata,services_2.model,router_1.Router,services_9.toast,services_3.modal])],LeadConvertButton)}();exports.LeadConvertButton=LeadConvertButton;var LeadConvertModal=function(){function e(e,t,s){this.language=e,this.metadata=t,this.model=s,this.saveactions=[],this.closemodal=new core_1.EventEmitter}return e.prototype.close=function(){this.closemodal.emit(!0)},e.prototype.itemBorder=function(e){return e<this.saveactions.length-1},__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"saveactions",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"closemodal",void 0),e=__decorate([core_1.Component({selector:"lead-convert-modal",template:'<div role="dialog" tabindex="-1" class="slds-modal slds-fade-in-open"><div class="slds-modal__container"><div class="slds-modal__header"><button class="slds-button slds-modal__close slds-button--icon-inverse" title="Close"><svg class="slds-button__icon slds-button__icon--large" aria-hidden="true" (click)="close()"><use xlink:href="./sldassets/icons/utility-sprite/svg/symbols.svg#close"></use></svg></button><h2 class="slds-text-heading--medium">{{language.getModuleLabel(\'Leads\', \'LBL_CONVERT_LEAD\')}}</h2></div><div class="slds-modal__content slds-p-around--medium"><div class="slds-grid slds-grid--align-spread slds-p-vertical--small" *ngFor="let saveaction of saveactions; let i = index ;" [ngClass]="{\'slds-border--bottom\' : itemBorder(i)}"><div class="slds-truncate">{{language.getLabel(saveaction.label)}}</div><div>{{saveaction.status}}</div></div></div></div></div>'}),__metadata("design:paramtypes",[services_5.language,services_1.metadata,services_2.model])],e)}();exports.LeadConvertModal=LeadConvertModal;var LeadConvert=function(){function LeadConvert(e,t,s,o,a,i,n){this.language=e,this.metadata=t,this.model=s,this.router=o,this.activatedRoute=a,this.navigation=i,this.toast=n,this.moduleName="Leads",this.headerFieldSets=[],this.contact=void 0,this.account=void 0,this.selectedaccount=void 0,this.createAccount=!1,this.opportunity=void 0,this.createOpportunity=!1,this.createSaveActions=[],this.convertSubject=void 0,this.showSaveModal=!1,this.currentConvertStep=0,this.convertSteps=["Contact","Account","Opportunity"];var c=this.metadata.getComponentConfig("ObjectPageHeader","Leads");this.headerFieldSets=[c.fieldset]}return LeadConvert.prototype.ngAfterViewInit=function(){var t=this;this.navigation.setActiveModule(this.moduleName),this.model.module=this.moduleName,this.model.id=this.activatedRoute.params.value.id,this.model.getData(!0,"detailview").subscribe(function(e){t.navigation.setActiveModule(t.moduleName,t.model.id,e.summary_text)})},LeadConvert.prototype.getContainerStyle=function(){return{height:"calc(100vh - "+this.contentcontainer.element.nativeElement.getBoundingClientRect().top+"px)","overflow-y":"auto"}},LeadConvert.prototype.gotoLead=function(){this.router.navigate(["/module/Leads/"+this.model.id])},LeadConvert.prototype.getStepClass=function(e){var t=this.convertSteps.indexOf(e);return t==this.currentConvertStep?"slds-is-active":t<this.currentConvertStep?"slds-is-completed":void 0},LeadConvert.prototype.getStepComplete=function(e){return this.convertSteps.indexOf(e)<this.currentConvertStep},LeadConvert.prototype.getProgressBarWidth=function(){return{width:this.currentConvertStep/(this.convertSteps.length-1)*100+"%"}},LeadConvert.prototype.nextStep=function(){switch(this.currentConvertStep){case 0:this.contact.validate()&&this.currentConvertStep++;break;case 1:this.createAccount&&this.account.validate()?this.currentConvertStep++:this.createAccount||this.currentConvertStep++;break;case 2:this.createOpportunity&&this.opportunity.validate()?this.convert():this.createOpportunity||this.convert()}},LeadConvert.prototype.prevStep=function(){0<this.currentConvertStep&&this.currentConvertStep--},LeadConvert.prototype.showNext=function(){return this.currentConvertStep<this.convertSteps.length-1},LeadConvert.prototype.showSave=function(){return this.currentConvertStep==this.convertSteps.length-1},LeadConvert.prototype.convert=function(){var e=this;this.createSaveActions=[],this.createAccount&&this.createSaveActions.push({action:"createAccount",label:"LBL_LEADCONVERT_CREATEACCOUNT",status:"initial"}),this.createSaveActions.push({action:"createContact",label:"LBL_LEADCONVERT_CREATECONTACT",status:"initial"}),this.createOpportunity&&this.createSaveActions.push({action:"createOpportunity",label:"LBL_LEADCONVERT_CREATEOPPORTUNITY",status:"initial"}),this.createSaveActions.push({action:"convertLead",label:"LBL_LEADCONVERT_CONVERTLEAD",status:"initial"}),this.showSaveModal=!0,this.processConvert().subscribe(function(){e.showSaveModal=!1,e.toast.sendToast("Lead "+e.model.data.summary_text+" converted","success","",30),e.gotoLead()})},LeadConvert.prototype.processConvert=function(){return this.convertSubject=new rxjs_1.Subject,this.processConvertActions(),this.convertSubject.asObservable()},LeadConvert.prototype.processConvertActions=function(){var t="";this.createSaveActions.some(function(e){if("initial"===e.status)return t=e.action,!0}),t?this.processConvertAction(t):(this.convertSubject.next(!0),this.convertSubject.complete())},LeadConvert.prototype.processConvertAction=function(t){var s=this;switch(t){case"createAccount":this.account.save().subscribe(function(e){s.completeConvertAction(t)});break;case"createContact":this.createAccount?this.contact.data.account_id=this.account.id:this.selectedaccount&&(this.contact.data.account_id=this.selectedaccount.id),this.contact.save().subscribe(function(e){s.completeConvertAction(t)});break;case"createOpportunity":this.createAccount?this.opportunity.data.account_id=this.account.id:this.selectedaccount&&(this.opportunity.data.account_id=this.selectedaccount.id),this.opportunity.save().subscribe(function(e){s.completeConvertAction(t)});break;case"convertLead":this.createAccount?this.model.data.account_id=this.account.id:this.selectedaccount&&(this.model.data.account_id=this.selectedaccount.id),this.model.data.contact_id=this.contact.id,this.model.data.status="Converted",this.model.save().subscribe(function(e){s.completeConvertAction(t)})}},LeadConvert.prototype.completeConvertAction=function(t){this.createSaveActions.some(function(e){if(e.action===t)return e.status="completed",!0}),this.processConvertActions()},LeadConvert.prototype.setContact=function(e){this.contact=e},LeadConvert.prototype.setAccount=function(e){this.account=e},LeadConvert.prototype.setSelectedAccount=function(e){this.selectedaccount=e},LeadConvert.prototype.setCreateAccount=function(e){this.createAccount=e},LeadConvert.prototype.setOpportunity=function(e){this.opportunity=e},LeadConvert.prototype.setCreateOpportunity=function(e){this.createOpportunity=e},__decorate([core_1.ViewChild("contentcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadConvert.prototype,"contentcontainer",void 0),LeadConvert=__decorate([core_1.Component({selector:"lead-convert",template:'<div class="slds-page-header"><div class="slds-grid"><div class="slds-col slds-has-flexi-truncate"><div class="slds-media slds-no-space slds-grow"><system-icon [module]="\'Leads\'"></system-icon><div class="slds-media__body"><nav role="navigation" aria-label="Breadcrumbs"><ol class="slds-breadcrumb slds-list--horizontal"><li class="slds-breadcrumb__item slds-text-title--caps"><a href="javascript:void(0);" (click)="gotoLead()">{{language.getModuleName(model.module, true)}}</a></li><li class="slds-breadcrumb__item slds-text-title--caps"><a href="javascript:void(0);">{{language.getModuleLabel(model.module, \'LBL_CONVERT_LEAD\')}}</a></li></ol></nav><div><h1 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate">{{model.data.summary_text}}</h1></div></div></div></div></div><div><object-page-header-detail-row *ngFor="let headerFieldSet of headerFieldSets" [fieldSet]="headerFieldSet"></object-page-header-detail-row></div></div><div class="slds-grid slds-grid--align-spread slds-p-around--small slds-theme--shade slds-border--bottom"><button class="slds-button slds-button--neutral" (click)="prevStep()">{{language.getLabel(\'LBL_PREVIOUS\')}}</button><div class="slds-progress slds-progress--shade"><ol class="slds-progress__list"><li *ngFor="let convertStep of convertSteps" class="slds-progress__item" [ngClass]="getStepClass(convertStep)"><button class="slds-button slds-progress__marker" [ngClass]="{\'slds-button--icon slds-progress__marker--icon\': getStepComplete(convertStep)}"><span class="slds-assistive-text">{{convertStep}}</span><system-button-icon *ngIf="getStepComplete(convertStep)" [icon]="\'success\'"></system-button-icon></button></li></ol><div class="slds-progress-bar slds-progress-bar_x-small"><span class="slds-progress-bar__value" [ngStyle]="getProgressBarWidth()"></span></div></div><button *ngIf="showNext()" class="slds-button slds-button--neutral" (click)="nextStep()">{{language.getLabel(\'LBL_NEXT\')}}</button> <button *ngIf="showSave()" class="slds-button slds-button--brand" (click)="nextStep()">{{language.getLabel(\'LBL_SAVE\')}}</button></div><div #contentcontainer class="slds-scrollable--y" [ngStyle]="getContainerStyle()"><lead-convert-contact [lead]="model" [hidden]="currentConvertStep!==0" (contact)="setContact($event)"></lead-convert-contact><lead-convert-account [lead]="model" [hidden]="currentConvertStep!==1" (account)="setAccount($event)" (selectedaccount)="setSelectedAccount($event)" (createaccount)="setCreateAccount($event)"></lead-convert-account><lead-convert-opportunity [lead]="model" [hidden]="currentConvertStep!==2" (opportunity)="setOpportunity($event)" (createopportunity)="setCreateOpportunity($event)"></lead-convert-opportunity></div><lead-convert-modal *ngIf="showSaveModal" [saveactions]="createSaveActions" (closemodal)="showSaveModal=false"></lead-convert-modal>',providers:[services_2.model,services_8.view],styles:[":host >>> global-button-icon svg {fill:#CA1B1F}",":host >>> .slds-progress__marker:hover global-button-icon svg {fill:#FD595D}",":host >>> .slds-progress__marker:active global-button-icon svg {fill:#FD595D}",":host >>> .slds-progress__marker:focus global-button-icon svg {fill:#FD595D}"]}),__metadata("design:paramtypes",[services_5.language,services_1.metadata,services_2.model,router_1.Router,router_1.ActivatedRoute,services_6.navigation,services_9.toast])],LeadConvert)}();exports.LeadConvert=LeadConvert;var LeadConvertContact=function(){function LeadConvertContact(e,t,s){this.view=e,this.metadata=t,this.model=s,this.lead=void 0,this.contact=new core_1.EventEmitter,this.initialized=!1,this.componentSet="",this.componentconfig={},this.componentRefs=[],this.model.module="Contacts",this.model.initializeModel(),this.view.isEditable=!0,this.view.setEditMode()}return LeadConvertContact.prototype.ngOnInit=function(){var t=this;this.lead.data$.subscribe(function(e){t.model.data.degree1=e.degree1,t.model.data.degree2=e.degree2,t.model.data.first_name=e.first_name,t.model.data.last_name=e.last_name,t.model.data.salutation=e.salutation,t.model.data.title_dd=e.title_dd,t.model.data.title=e.title,t.model.data.department=e.department,t.model.data.email1=e.email1,t.model.data.phone_work=e.phone_work,t.model.data.phone_mobile=e.phone_mobile,t.model.data.phone_fax=e.phone_fax,e.business_sector&&(t.model.data.business_sector=e.business_sector),e.business_topic&&(t.model.data.business_topic=e.business_topic),t.model.data.primary_address_street=e.primary_address_street,t.model.data.primary_address_city=e.primary_address_city,t.model.data.primary_address_postalcode=e.primary_address_postalcode,t.model.data.primary_address_state=e.primary_address_state,t.model.data.primary_address_country=e.primary_address_country,t.model.data.primary_address_attn=e.primary_address_attn}),this.contact.emit(this.model)},LeadConvertContact.prototype.ngAfterViewInit=function(){this.initialized=!0,this.buildContainer()},LeadConvertContact.prototype.buildContainer=function(){for(var s=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}for(var o=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),a=function(t){i.metadata.addComponent(t.component,i.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,s.componentRefs.push(e)})},i=this,n=0,c=this.metadata.getComponentSetObjects(o.componentset);n<c.length;n++){a(c[n])}},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadConvertContact.prototype,"detailcontainer",void 0),__decorate([core_1.Input(),__metadata("design:type",services_2.model)],LeadConvertContact.prototype,"lead",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertContact.prototype,"contact",void 0),LeadConvertContact=__decorate([core_1.Component({selector:"lead-convert-contact",template:"<div><div #detailcontainer></div></div>",providers:[services_8.view,services_2.model]}),__metadata("design:paramtypes",[services_8.view,services_1.metadata,services_2.model])],LeadConvertContact)}();exports.LeadConvertContact=LeadConvertContact;var LeadConvertAccount=function(){function LeadConvertAccount(e,t,s,o,a){this.view=e,this.metadata=t,this.model=s,this.modelutilities=o,this.fts=a,this.lead={},this.account=new core_1.EventEmitter,this.createaccount=new core_1.EventEmitter,this.selectedaccount=new core_1.EventEmitter,this.initialized=!1,this.componentSet="",this.componentconfig={},this.componentRefs=[],this.createAccount=!1,this.selectedAccount=void 0,this.matchedAccounts=[],this.model.module="Accounts",this.model.initializeModel(),this.view.isEditable=!0,this.view.setEditMode()}return Object.defineProperty(LeadConvertAccount.prototype,"create",{get:function(){return this.createAccount},set:function(e){this.createAccount=e,this.createaccount.emit(e)},enumerable:!0,configurable:!0}),LeadConvertAccount.prototype.ngOnInit=function(){var t=this;this.lead.data$.subscribe(function(e){""!==e.account_name&&(t.fts.searchByModules(t.modelutilities.cleanAccountName(e.account_name),["Accounts"]).subscribe(function(e){t.matchedAccounts=e.Accounts.hits,0===t.matchedAccounts.length&&(t.create=!0)}),t.model.data.name=e.account_name,t.model.data.website=e.website,t.model.data.billing_address_street=e.primary_address_street,t.model.data.billing_address_city=e.primary_address_city,t.model.data.billing_address_postalcode=e.primary_address_postalcode,t.model.data.billing_address_state=e.primary_address_state,t.model.data.billing_address_country=e.primary_address_country)}),this.account.emit(this.model)},LeadConvertAccount.prototype.ngAfterViewInit=function(){this.initialized=!0,this.buildContainer()},LeadConvertAccount.prototype.buildContainer=function(){for(var s=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}for(var o=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),a=function(t){i.metadata.addComponent(t.component,i.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,s.componentRefs.push(e)})},i=this,n=0,c=this.metadata.getComponentSetObjects(o.componentset);n<c.length;n++){a(c[n])}},LeadConvertAccount.prototype.selectAccount=function(e){this.selectedAccount=e,this.selectedaccount.emit(e)},LeadConvertAccount.prototype.unlinkAccount=function(){this.selectedAccount=void 0,this.selectedaccount.emit(void 0)},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadConvertAccount.prototype,"detailcontainer",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],LeadConvertAccount.prototype,"lead",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertAccount.prototype,"account",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertAccount.prototype,"createaccount",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertAccount.prototype,"selectedaccount",void 0),LeadConvertAccount=__decorate([core_1.Component({selector:"lead-convert-account",template:'<div><div class="slds-theme--shade slds-p-around--small slds-border--bottom slds-grid slds-grid--vertical-align-center slds-grid--align-spread"><div class="slds-form--inline"><div class="slds-form-element__control"><span class="slds-checkbox"><input type="checkbox" name="options" id="createaccount" [(ngModel)]="create"> <label class="slds-checkbox__label" for="createaccount"><span class="slds-checkbox--faux"></span> <span class="slds-form-element__label">Create Account</span></label></span></div></div><div *ngIf="selectedAccount && !createAccount" class="slds-grid slds-grid--vertical-align-center"><div class="slds-m-right--x-small">Selected Account:</div><div class="slds-pill"><span class="slds-icon_container slds-icon-standard-account slds-pill__icon_container"><object-icon [module]="model.module"></object-icon></span><a href="javascript:void(0);" class="slds-pill__label">{{selectedAccount.name}}, {{selectedAccount.billing_address_city}}</a> <button class="slds-button slds-button--icon slds-pill__remove" title="Remove"><system-button-icon [icon]="\'clear\'" (click)="unlinkAccount()"></system-button-icon></button></div></div></div><div [hidden]="createAccount"><lead-convert-account-list [matchedaccounts]="matchedAccounts" (selectaccount)="selectAccount($event)"></lead-convert-account-list></div><div [hidden]="!createAccount"><div #detailcontainer></div></div></div>',providers:[services_8.view,services_2.model]}),__metadata("design:paramtypes",[services_8.view,services_1.metadata,services_2.model,services_4.modelutilities,services_10.fts])],LeadConvertAccount)}();exports.LeadConvertAccount=LeadConvertAccount;var LeadConvertAccountList=function(){function e(e,t,s,o){this.metadata=e,this.model=t,this.fts=s,this.language=o,this.matchedaccounts=[],this.selectaccount=new core_1.EventEmitter,this.listfields=[];for(var a=this.metadata.getComponentConfig("LeadConvertAccountList",this.model.module),i=0,n=this.metadata.getFieldSetFields(a.fieldset);i<n.length;i++){var c=n[i];!1!==c.fieldconfig.default&&this.listfields.push(c)}}return e.prototype.selectitem=function(e){this.selectaccount.emit(e)},__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"matchedaccounts",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"selectaccount",void 0),e=__decorate([core_1.Component({selector:"lead-convert-account-list",template:'<div><table class="slds-table slds-table--bordered slds-table--cell-buffer"><thead><tr class="slds-text-title--caps"><th *ngFor="let item of listfields" scope="col"><div class="slds-truncate">{{language.getFieldDisplayName(model.module, item.field)}}</div></th><th class="slds-cell-shrink" scope="col"></th></tr></thead><tbody><tr lead-convert-account-list-item *ngFor="let matchedaccount of matchedaccounts" [listfields]="listfields" [matchedaccount]="matchedaccount" (selectitem)="selectitem($event)"></tr></tbody></table></div>'}),__metadata("design:paramtypes",[services_1.metadata,services_2.model,services_10.fts,services_5.language])],e)}();exports.LeadConvertAccountList=LeadConvertAccountList;var LeadConvertAccountListItem=function(){function e(e,t,s,o){this.metadata=e,this.model=t,this.view=s,this.language=o,this.matchedaccount={},this.listfields=[],this.selectitem=new core_1.EventEmitter,this.view.isEditable=!1}return e.prototype.ngOnInit=function(){this.model.module=this.matchedaccount._type,this.model.id=this.matchedaccount._id,this.model.data=this.matchedaccount._source},e.prototype.selectAccount=function(){this.selectitem.emit({id:this.matchedaccount._id,name:this.matchedaccount._source.name,billing_address_city:this.matchedaccount._source.billing_address_city})},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"matchedaccount",void 0),__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"listfields",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"selectitem",void 0),e=__decorate([core_1.Component({selector:"[lead-convert-account-list-item]",template:'<td *ngFor="let listfield of listfields" scope="col"><div class="slds-truncate"><field-container [field]="listfield.field" [fieldconfig]="listfield.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container></div></td><td class="slds-cell-shrink" scope="col"><button class="slds-button slds-button--neutral" (click)="selectAccount()">{{language.getLabel(\'LBL_SELECT\')}}</button></td>',providers:[services_2.model,services_8.view]}),__metadata("design:paramtypes",[services_1.metadata,services_2.model,services_8.view,services_5.language])],e)}();exports.LeadConvertAccountListItem=LeadConvertAccountListItem;var LeadConvertOpportunity=function(){function LeadConvertOpportunity(e,t,s){this.view=e,this.metadata=t,this.model=s,this.lead=void 0,this.opportunity=new core_1.EventEmitter,this.createopportunity=new core_1.EventEmitter,this.initialized=!1,this.componentSet="",this.componentconfig={},this.componentRefs=[],this.createOpportunity=!1,this.model.module="Opportunities",this.model.initializeModel(),this.view.isEditable=!0,this.view.setEditMode()}return Object.defineProperty(LeadConvertOpportunity.prototype,"create",{get:function(){return this.createOpportunity},set:function(e){this.createOpportunity=e,this.createopportunity.emit(e)},enumerable:!0,configurable:!0}),LeadConvertOpportunity.prototype.ngOnInit=function(){var t=this;this.lead.data$.subscribe(function(e){t.model.data.amount=e.opportunity_amount,t.model.data.campaign_name=e.campaign_name,t.model.data.campaign_id=e.campaign_id}),this.opportunity.emit(this.model)},LeadConvertOpportunity.prototype.ngAfterViewInit=function(){this.initialized=!0,this.buildContainer()},LeadConvertOpportunity.prototype.buildContainer=function(){for(var s=this,e=0,t=this.componentRefs;e<t.length;e++){t[e].destroy()}for(var o=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module),a=function(t){i.metadata.addComponent(t.component,i.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig,s.componentRefs.push(e)})},i=this,n=0,c=this.metadata.getComponentSetObjects(o.componentset);n<c.length;n++){a(c[n])}},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadConvertOpportunity.prototype,"detailcontainer",void 0),__decorate([core_1.Input(),__metadata("design:type",services_2.model)],LeadConvertOpportunity.prototype,"lead",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertOpportunity.prototype,"opportunity",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertOpportunity.prototype,"createopportunity",void 0),LeadConvertOpportunity=__decorate([core_1.Component({selector:"lead-convert-opportunity",template:'<div><div class="slds-theme--shade slds-p-around--small slds-border--bottom"><div class="slds-form--inline"><div class="slds-form-element__control"><span class="slds-checkbox"><input type="checkbox" name="options" id="createopportunity" [(ngModel)]="create"> <label class="slds-checkbox__label" for="createopportunity"><span class="slds-checkbox--faux"></span> <span class="slds-form-element__label">Create Opportunity</span></label></span></div></div></div><div [hidden]="!createOpportunity"><div #detailcontainer></div></div></div>',providers:[services_8.view,services_2.model]}),__metadata("design:paramtypes",[services_8.view,services_1.metadata,services_2.model])],LeadConvertOpportunity)}();exports.LeadConvertOpportunity=LeadConvertOpportunity;var LeadOpenLeadsDashlet=function(){function LeadOpenLeadsDashlet(e,t,s,o,a){this.language=e,this.metadata=t,this.backend=s,this.model=o,this.elementRef=a,this.myLeads=[],this.myLeadsCount=0}return LeadOpenLeadsDashlet.prototype.ngOnInit=function(){var t=this,e={searchmyitems:!0,fields:JSON.stringify(["id","first_name","last_name","account_name","status","phone_mobile"])};this.backend.getRequest("module/Leads",e).subscribe(function(e){t.myLeads=e.list,t.myLeadsCount=e.totalcount})},Object.defineProperty(LeadOpenLeadsDashlet.prototype,"containerstyle",{get:function(){if(this.dashletcontainer){var e=this.dashletcontainer.element.nativeElement.getBoundingClientRect(),t=this.tableheader.element.nativeElement.getBoundingClientRect();return{height:e.bottom-t.bottom+"px","margin-top":"-1px"}}},enumerable:!0,configurable:!0}),__decorate([core_1.ViewChild("tableheader",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadOpenLeadsDashlet.prototype,"tableheader",void 0),__decorate([core_1.ViewChild("dashletcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadOpenLeadsDashlet.prototype,"dashletcontainer",void 0),LeadOpenLeadsDashlet=__decorate([core_1.Component({selector:"lead-openleads-dashlet",template:'<div #dashletcontainer style="height: 100%; overflow: hidden;"><h2 class="slds-text-heading--small slds-p-bottom--xx-small">My Open Leads ({{myLeadsCount}})</h2><table #tableheader class="slds-table slds-table_cell-buffer"><thead><tr class="slds-text-title_caps"><th scope="col" width="30%"><div class="slds-truncate" title="Opportunity Name">Name</div></th><th scope="col" width="20%"><div class="slds-truncate" title="Account Name">Status</div></th><th scope="col" width="30%"><div class="slds-truncate" title="Close Date">Account</div></th><th scope="col" width="20%"><div class="slds-truncate" title="Stage">Mobile</div></th></tr></thead></table><div class="slds-scrollable--y" [ngStyle]="containerstyle"><table class="slds-table slds-table_bordered slds-table_cell-buffer"><tbody><tr *ngFor="let myLead of myLeads"><td width="30%"><div class="slds-truncate">{{myLead.summary_text}}</div></td><td width="20%"><div class="slds-truncate">{{myLead.status}}</div></td><td width="30%"><div class="slds-truncate">{{myLead.account_name}}</div></td><td width="20%"><div class="slds-truncate">{{myLead.phone_mobile}}</div></td></tr></tbody></table></div></div>',providers:[services_2.model]}),__metadata("design:paramtypes",[services_5.language,services_1.metadata,services_7.backend,services_2.model,core_1.ElementRef])],LeadOpenLeadsDashlet)}();exports.LeadOpenLeadsDashlet=LeadOpenLeadsDashlet;var LeadConvertOpportunityModal=function(){function LeadConvertOpportunityModal(e,t,s,o,a){this.language=e,this.model=t,this.metadata=s,this.view=o,this.modal=a,this.self={},this.converted=new core_1.EventEmitter,this.model.module="Opportunities",this.view.isEditable=!0,this.view.setEditMode()}return LeadConvertOpportunityModal.prototype.ngOnInit=function(){this.model.initialize(this.lead)},LeadConvertOpportunityModal.prototype.ngAfterViewInit=function(){for(var e=this.metadata.getComponentConfig("ObjectRecordDetails",this.model.module).componentset,t=function(t){s.metadata.addComponent(t.component,s.detailcontainer).subscribe(function(e){e.instance.componentconfig=t.componentconfig})},s=this,o=0,a=this.metadata.getComponentSetObjects(e);o<a.length;o++){t(a[o])}},LeadConvertOpportunityModal.prototype.close=function(){this.self.destroy()},LeadConvertOpportunityModal.prototype.convert=function(){var s=this;this.model.validate()&&this.modal.openModal("SystemLoadingModal").subscribe(function(t){t.instance.messagelabel="creating Opportunity",s.model.save().subscribe(function(e){t.instance.messagelabel="updating Lead",s.lead.setField("status","Converted"),s.lead.setField("opportunity_id",s.model.id),s.lead.setField("opportunity_name",s.model.getFieldValue("name")),s.lead.save().subscribe(function(e){t.instance.self.destroy(),s.close()})})})},LeadConvertOpportunityModal.prototype.onModalEscX=function(){this.close()},__decorate([core_1.ViewChild("detailcontainer",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],LeadConvertOpportunityModal.prototype,"detailcontainer",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],LeadConvertOpportunityModal.prototype,"converted",void 0),LeadConvertOpportunityModal=__decorate([core_1.Component({selector:"lead-convert-opportunity-modal",template:'<system-modal size="large"><system-modal-header (close)="close()">{{language.getLabel(\'LBL_CONVERT_TO_OPPORTUNITY\')}}</system-modal-header><system-modal-content><div #detailcontainer></div></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="close()">{{language.getLabel(\'LBL_CLOSE\')}}</button> <button class="slds-button slds-button--brand" (click)="convert()">{{language.getLabel(\'LBL_CONVERT_LEAD\')}}</button></system-modal-footer></system-modal>',providers:[services_2.model,services_8.view]}),__metadata("design:paramtypes",[services_5.language,services_2.model,services_1.metadata,services_8.view,services_3.modal])],LeadConvertOpportunityModal)}();exports.LeadConvertOpportunityModal=LeadConvertOpportunityModal;var ModuleLeads=function(){function ModuleLeads(e){this.vms=e,this.version="1.0",this.build_date="2019-01-23",this.vms.registerModule(this)}return ModuleLeads=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents],declarations:[LeadConvertButton,LeadConvertModal,LeadConvert,LeadConvertContact,LeadConvertAccount,LeadConvertAccountList,LeadConvertAccountListItem,LeadConvertOpportunity,LeadOpenLeadsDashlet,LeadConvertOpportunityModal]}),__metadata("design:paramtypes",[services_11.VersionManagerService])],ModuleLeads)}();exports.ModuleLeads=ModuleLeads;