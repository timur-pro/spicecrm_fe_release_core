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
"use strict";var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])})(e,t)};return function(e,t){function s(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__decorate=this&&this.__decorate||function(e,t,s,i){var a,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;0<=l;l--)(a=e[l])&&(n=(o<3?a(n):3<o?a(t,s,n):a(t,s))||n);return 3<o&&n&&Object.defineProperty(t,s,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),animations_1=require("@angular/animations"),SpicePathTrack=function(){function e(e,t,s){this.configuration=e,this.model=t,this.language=s,this.activeStage$=new core_1.EventEmitter}return Object.defineProperty(e.prototype,"stages",{get:function(){return this.configuration.getData("spicebeanguides")?this.configuration.getData("spicebeanguides")[this.model.module].stages:[]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"statusfield",{get:function(){return this.configuration.getData("spicebeanguides")[this.model.module].statusfield},enumerable:!0,configurable:!0}),e.prototype.stageClass=function(e){for(var t="slds-is-complete",s=0,i=this.stages;s<i.length;s++){var a=i[s];if(a.stage==this.model.getField(this.statusfield)?t="slds-is-current":"slds-is-current"==t&&(t="slds-is-incomplete"),a.stage==e)break}return(this.activeStage&&this.activeStage==e||!this.activeStage&&this.model.getField(this.statusfield)==e)&&("slds-is-current"==t?t="slds-is-active":t+=" slds-is-active"),t},e.prototype.setActiveStage=function(e){this.activeStage=e,this.activeStage$.emit(e)},e.prototype.getStageLabel=function(e){return e.stage_label?this.language.getLabel(e.stage_label):e.stage_name},__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"activeStage$",void 0),e=__decorate([core_1.Component({selector:"spice-path-track",template:'<div class="slds-grid slds-path__scroller-container"><div class="slds-path__scroller" role="application"><div class="slds-path__scroller_inner"><ul class="slds-path__nav" role="listbox" aria-orientation="horizontal"><li *ngFor="let stage of stages" class="slds-path__item" [ngClass]="stageClass(stage.stage)" role="presentation"><a aria-selected="false" class="slds-path__link" href="javascript:void(0);" role="option" (click)="setActiveStage(stage.stage)"><span class="slds-path__stage"><system-utility-icon icon="check" size="x-small"></system-utility-icon></span> <span class="slds-path__title">{{getStageLabel(stage.stagedata)}}</span></a></li></ul></div></div></div>'}),__metadata("design:paramtypes",[services_1.configurationService,services_1.model,services_1.language])],e)}();exports.SpicePathTrack=SpicePathTrack;var SpicePathModel=function(){function e(){}return e=__decorate([core_1.Component({selector:"spice-path-model",template:'<div class="slds-path slds-p-vertical--small slds-scrollable--x"><spice-path-track></spice-path-track></div>'})],e)}();exports.SpicePathModel=SpicePathModel;var SpicePathWithCoaching=function(){function SpicePathWithCoaching(e,t,s,i){this.configuration=e,this.model=t,this.language=s,this.backend=i,this.coachingVisible=!1}return SpicePathWithCoaching.prototype.ngOnInit=function(){var t=this;this.backend.getRequest("spicebeanguide/"+this.model.module+"/"+this.model.id).subscribe(function(e){t.beanStagesChecksResults=e})},Object.defineProperty(SpicePathWithCoaching.prototype,"coachingIconStyle",{get:function(){return this.coachingVisible?{transform:"rotate(90deg)"}:{}},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathWithCoaching.prototype,"stages",{get:function(){return this.configuration.getData("spicebeanguides")[this.model.module].stages},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathWithCoaching.prototype,"statusfield",{get:function(){return this.configuration.getData("spicebeanguides")[this.model.module].statusfield},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathWithCoaching.prototype,"currentStage",{get:function(){return this.model.getField(this.statusfield)},enumerable:!0,configurable:!0}),SpicePathWithCoaching.prototype.toggleCoaching=function(){this.coachingVisible=!this.coachingVisible},SpicePathWithCoaching.prototype.setActiveStage=function(e){this.activeStage=e},Object.defineProperty(SpicePathWithCoaching.prototype,"displayStage",{get:function(){return this.activeStage?this.activeStage:this.currentStage},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathWithCoaching.prototype,"checks",{get:function(){var t=this,s=[];return this.beanStagesChecksResults.some(function(e){if(e.stage===t.displayStage)return s=e.stagedata.checks,!0}),s},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathWithCoaching.prototype,"stageDescription",{get:function(){var t=this,e=this.stages.find(function(e){return e.stage==t.displayStage});return e?e.stagedata.stage_label?this.language.getLabel(e.stagedata.stage_label,"","long"):e.stagedata.stage_description:""},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathWithCoaching.prototype,"stageComponentset",{get:function(){var t=this,e=this.stages.find(function(e){return e.stage==t.displayStage});return e?e.stagedata.stage_componentset:""},enumerable:!0,configurable:!0}),SpicePathWithCoaching=__decorate([core_1.Component({selector:"spice-path-with-coaching",template:'<div class="slds-path slds-path_has-coaching slds-p-around--small"><div class="slds-grid slds-path__scroller-container"><button class="slds-button slds-button_icon slds-button_icon-border-filled slds-path__trigger" aria-expanded="false" [@coachingicon]="coachingVisible ? \'open\': \'closed\'" (click)="toggleCoaching()"><system-button-icon icon="chevronright"></system-button-icon></button><spice-path-track class="slds-grow" (activeStage$)="setActiveStage($event)"></spice-path-track></div><div @displaycoaching *ngIf="coachingVisible" class="slds-grid slds-grid--align-spread slds-gutters_direct-xx-small slds-p-top--medium slds-p-horizontal--xxx-small"><div class="slds-col slds-size--1-of-2"><h2 class="slds-text-title--caps slds-p-bottom--small">{{language.getLabel(\'LBL_CHECKS\')}}</h2><dl class="slds-dl--horizontal"><ng-container *ngFor="let check of checks"><dt class="slds-coach__item slds-dl--horizontal__label"><system-utility-icon [icon]="check.result ? \'check\' : \'warning\'" [size]="\'x-small\'"></system-utility-icon></dt><dd class="slds-coach__value slds-dl--horizontal__detail">{{check.label ? language.getLabel(check.label) : check.name}}</dd></ng-container></dl></div><div class="slds-col slds-size--1-of-2"><h2 class="slds-text-title--caps slds-p-bottom--small slds-has-divider--bottom">{{language.getLabel(\'LBL_DETAILS\')}}</h2><div class="slds-has-divider--bottom slds-p-vertical--xx-small slds-text-align--justify" [innerHtml]="stageDescription"></div><system-componentset *ngIf="stageComponentset" [componentset]="stageComponentset"></system-componentset></div></div></div>',animations:[animations_1.trigger("displaycoaching",[animations_1.transition(":enter",[animations_1.style({opacity:0,height:"0px",overflow:"hidden"}),animations_1.animate(".5s",animations_1.style({height:"*",opacity:1})),animations_1.style({overflow:"unset"})]),animations_1.transition(":leave",[animations_1.style({overflow:"hidden"}),animations_1.animate(".5s",animations_1.style({height:"0px",opacity:0}))])]),animations_1.trigger("coachingicon",[animations_1.state("open",animations_1.style({transform:"rotate(90deg)"})),animations_1.state("closed",animations_1.style({transform:"rotate(0deg)"})),animations_1.transition("open => closed",[animations_1.animate(".5s")]),animations_1.transition("closed => open",[animations_1.animate(".5s")])])]}),__metadata("design:paramtypes",[services_1.configurationService,services_1.model,services_1.language,services_1.backend])],SpicePathWithCoaching)}();exports.SpicePathWithCoaching=SpicePathWithCoaching;var SpicePathRelatedListTiles=function(e){function SpicePathRelatedListTiles(){return null!==e&&e.apply(this,arguments)||this}return __extends(SpicePathRelatedListTiles,e),SpicePathRelatedListTiles=__decorate([core_1.Component({template:'<object-related-card [componentconfig]="componentconfig"><div *ngFor="let relateditem of relatedmodels.items" class="slds-p-around--xx-small slds-size--1-of-1"><spice-path-related-list-tile class="slds-box slds-box--x-small slds-media slds-card__tile" [componentset]="componentconfig.componentset" [data]="relateditem" [module]="module"></spice-path-related-list-tile></div></object-related-card>',providers:[services_1.relatedmodels]})],SpicePathRelatedListTiles)}(objectcomponents_1.ObjectRelatedList);exports.SpicePathRelatedListTiles=SpicePathRelatedListTiles;var SpicePathRelatedListTile=function(){function SpicePathRelatedListTile(e,t,s,i,a){this.model=e,this.relatedmodels=t,this.view=s,this.language=i,this.metadata=a,this.module="",this.data={},this.fieldset="",this.componentset="",this.componentconfig={}}return SpicePathRelatedListTile.prototype.ngOnInit=function(){this.model.module=this.module,this.model.id=this.data.id,this.model.data=this.data,this.componentconfig=this.metadata.getComponentConfig("SpicePathRelatedListTile",this.module)},Object.defineProperty(SpicePathRelatedListTile.prototype,"actionset",{get:function(){return this.componentconfig.actionset},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathRelatedListTile.prototype,"componentSetLeft",{get:function(){return this.componentconfig.left},enumerable:!0,configurable:!0}),Object.defineProperty(SpicePathRelatedListTile.prototype,"componentSetRight",{get:function(){return this.componentconfig.right},enumerable:!0,configurable:!0}),SpicePathRelatedListTile.prototype.getFields=function(){return this.metadata.getFieldSetFields(this.fieldset)},SpicePathRelatedListTile.prototype.navgiateDetail=function(){this.model.goDetail()},__decorate([core_1.Input(),__metadata("design:type",String)],SpicePathRelatedListTile.prototype,"module",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],SpicePathRelatedListTile.prototype,"data",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],SpicePathRelatedListTile.prototype,"fieldset",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],SpicePathRelatedListTile.prototype,"componentset",void 0),SpicePathRelatedListTile=__decorate([core_1.Component({selector:"spice-path-related-list-tile",template:'<object-icon [module]="module" [size]="\'small\'"></object-icon><div class="slds-media__body"><div class="slds-grid slds-grid--align-spread slds-has-flexi-truncate"><h3 class="slds-truncate slds-text-heading--small slds-p-top--xxx-small slds-m-bottom--small" modelPopOver (click)="navgiateDetail()"><a href="javascript:void(0);">{{data.summary_text}}</a></h3><div class="slds-shrink-none slds-show--medium"><object-action-menu [buttonsize]="\'x-small\'" [actionset]="actionset"></object-action-menu></div></div><div class="slds-tile__detail" style="margin-left: -2rem;"><spice-path-model></spice-path-model><div class="slds-text-body--small"><system-componentset *ngIf="componentset" [componentset]="componentset"></system-componentset></div></div><object-action-menu class="slds-hide--medium" [buttonsize]="\'x-small\'" [actionset]="actionset"></object-action-menu></div>',providers:[services_1.model,services_1.view]}),__metadata("design:paramtypes",[services_1.model,services_1.relatedmodels,services_1.view,services_1.language,services_1.metadata])],SpicePathRelatedListTile)}();exports.SpicePathRelatedListTile=SpicePathRelatedListTile;var SpiceKanbanStagePipe=function(){function e(e,t){this.configuration=e,this.model=t}return e.prototype.transform=function(e,t){for(var s=[],i=this.getStageData(t),a=0,o=e;a<o.length;a++){var n=o[a];n[i.statusfield]&&0==n[i.statusfield].indexOf(t)&&s.push(n)}return s},Object.defineProperty(e.prototype,"stages",{get:function(){return this.configuration.getData("spicebeanguides")?this.configuration.getData("spicebeanguides")[this.model.module].stages:[]},enumerable:!0,configurable:!0}),e.prototype.getStageData=function(t){var s=[];return this.stages.some(function(e){t!=e.stage||(s=e.stagedata)}),s},e=__decorate([core_1.Pipe({name:"spicekanbanstagepipe"}),__metadata("design:paramtypes",[services_1.configurationService,services_1.model])],e)}();exports.SpiceKanbanStagePipe=SpiceKanbanStagePipe;var SpiceKanban=function(){function SpiceKanban(e,t,s,i,a,o,n,l){var c=this;this.broadcast=e,this.model=t,this.modellist=s,this.configuration=i,this.metadata=a,this.userpreferences=o,this.language=n,this.currency=l,this.componentconfig={},this.modellistsubscribe=void 0,this.requestedFields=[],this.currencies=[],this.componentconfig=this.metadata.getComponentConfig("SpiceKanban",this.model.module),this.modellistsubscribe=this.modellist.listtype$.subscribe(function(e){return c.switchListtype()}),this.requestedFields=["name","account_name","account_id","sales_stage","amount_usdollar","amount"],this.modellist.getListData(this.requestedFields),this.currencies=this.currency.getCurrencies()}return Object.defineProperty(SpiceKanban.prototype,"stages",{get:function(){try{return this.configuration.getData("spicebeanguides")?this.configuration.getData("spicebeanguides")[this.model.module].stages:[]}catch(e){return[]}},enumerable:!0,configurable:!0}),SpiceKanban.prototype.getStageData=function(t){var s=[];return this.stages.some(function(e){t!=e.stage||(s=e.stagedata)}),s},SpiceKanban.prototype.ngOnDestroy=function(){this.modellistsubscribe.unsubscribe()},SpiceKanban.prototype.switchListtype=function(){this.modellist.getListData(this.requestedFields)},SpiceKanban.prototype.showSum=function(){return""!==this.componentconfig.sum},Object.defineProperty(SpiceKanban.prototype,"sizeClass",{get:function(){return"slds-size--1-of-"+this.stages.length},enumerable:!0,configurable:!0}),SpiceKanban.prototype.getStageCount=function(e){for(var t=this.getStageData(e),s=0,i=0,a=this.modellist.listData.list;i<a.length;i++){var o=a[i];o[t.statusfield]&&0==o[t.statusfield].indexOf(e)&&s++}return s},SpiceKanban.prototype.getStageSum=function(e){for(var t=this.getStageData(e),s=0,i=0,a=this.modellist.listData.list;i<a.length;i++){var o=a[i];o[t.statusfield]&&0==o[t.statusfield].indexOf(e)&&(s+=parseFloat(o[this.componentconfig.sum]))}return this.userpreferences.formatMoney(s,0)},SpiceKanban.prototype.getStageItems=function(e){for(var t=this.getStageData(e),s=[],i=0,a=this.modellist.listData.list;i<a.length;i++){var o=a[i];o[t.statusfield]&&0==o[t.statusfield].indexOf(e)&&s.push(o)}return s},SpiceKanban.prototype.getMoney=function(e){return this.userpreferences.formatMoney(parseFloat(e),0)},SpiceKanban.prototype.onScroll=function(e){var t=this.kanbanContainer.element.nativeElement;t.scrollTop+t.clientHeight+50>t.scrollHeight&&this.modellist.loadMoreList()},SpiceKanban.prototype.getStageLabel=function(e){return e.stage_label?this.language.getLabel(e.stage_label):e.stage_name},SpiceKanban.prototype.getCurrencySymbol=function(){var t;return this.currencies.some(function(e){if(-99==e.id)return t=e.symbol,!0}),t},__decorate([core_1.ViewChild("kanbanContainer",{read:core_1.ViewContainerRef,static:!0}),__metadata("design:type",core_1.ViewContainerRef)],SpiceKanban.prototype,"kanbanContainer",void 0),SpiceKanban=__decorate([core_1.Component({selector:"spice-kanban",template:'<div class="slds-m-top--small slds-m-horizontal--small"><div class="slds-tabs--path" role="application"><ul class="slds-tabs--path__nav" role="tablist"><ng-container *ngFor="let stage of stages"><li class="slds-tabs--path__item slds-is-incomplete" role="presentation"><a class="slds-tabs--path__link" aria-selected="false" role="tab" href="javascript:void(0);" aria-live="assertive"><span class="slds-tabs--path__stage"><system-icon [icon]="\'check\'" [size]="\'x-small\'" [sprite]="\'utility\'" [addclasses]="\'spicecrm-processicon\'"></system-icon></span> <span class="slds-tabs--path__title">{{getStageLabel(stage.stagedata)}} ({{getStageCount(stage.stage)}})</span></a></li></ng-container></ul></div><div *ngIf="this.componentconfig.sum" class="slds-grid" style="border-bottom: 1px solid #d8dde6;"><div *ngFor="let stage of stages" class="slds-col slds-p-horizontal--xx-small slds-m-top--x-small" [ngClass]="sizeClass"><div *ngIf="showSum()" class="slds-text-heading--medium slds-text-align--center slds-p-vertical--x-small">{{getCurrencySymbol()}}{{getStageSum(stage.stage)}}</div></div></div><div tobottom #kanbanContainer class="slds-scrollable--y" (scroll)="onScroll()"><div class="slds-grid"><div *ngFor="let stage of stages" class="slds-col slds-p-horizontal--xx-small slds-m-top--x-small" [ngClass]="sizeClass"><ul class="slds-has-dividers--around-space slds-m-top--x-small"><li spice-kanban-tile *ngFor="let item of this.modellist.listData.list|spicekanbanstagepipe:stage.stage" draggable [item]="item" class="slds-item"></li></ul></div></div><system-spinner *ngIf="modellist.isLoading"></system-spinner></div></div>'}),__metadata("design:paramtypes",[services_1.broadcast,services_1.model,services_1.modellist,services_1.configurationService,services_1.metadata,services_1.userpreferences,services_1.language,services_1.currency])],SpiceKanban)}();exports.SpiceKanban=SpiceKanban;var SpiceKanbanTile=function(){function SpiceKanbanTile(e,t,s,i){this.modellist=e,this.model=t,this.view=s,this.metadata=i,this.item={},this.componentconfig={},this.componentFields={},this.componentconfig=this.metadata.getComponentConfig("SpiceKanbanTile",this.modellist.module),this.componentFields=this.metadata.getFieldSetFields(this.componentconfig.fieldset),this.view.labels="short",this.view.displayLabels=!1}return SpiceKanbanTile.prototype.ngOnInit=function(){this.model.module=this.modellist.module,this.model.id=this.item.id,this.model.data=this.model.utils.backendModel2spice(this.modellist.module,this.item),this.model.initializeFieldsStati()},SpiceKanbanTile.prototype.goDetail=function(){this.model.goDetail()},__decorate([core_1.Input(),__metadata("design:type",Object)],SpiceKanbanTile.prototype,"item",void 0),SpiceKanbanTile=__decorate([core_1.Component({selector:"[spice-kanban-tile]",template:'<div class="slds-tile slds-tile--board"><div class="slds-grid slds-grid--align-spread"><h3 class="slds-truncate" (click)="goDetail()"><a href="javascript:void(0);">{{item.summary_text}}</a></h3><object-action-menu [buttonsize]="\'x-small\'"></object-action-menu></div><div class="slds-tile__detail slds-text-body--small"><field-container *ngIf="componentconfig.amount" [field]="componentconfig.amount" [fielddisplayclass]="\'slds-text-heading--medium\'"></field-container><div class="slds-grid" *ngFor="let componentField of componentFields"><field-label class="slds-truncate" [fieldname]="componentField.field" [fieldconfig]="componentField.fieldconfig"></field-label><field-container class="slds-col--bump-left slds-truncate" [field]="componentField.field" [fieldconfig]="componentField.fieldconfig" [fielddisplayclass]="\'slds-truncate\'"></field-container></div></div></div>',providers:[services_1.model,services_1.view],host:{"[class]":"'slds-item'"}}),__metadata("design:paramtypes",[services_1.modellist,services_1.model,services_1.view,services_1.metadata])],SpiceKanbanTile)}();exports.SpiceKanbanTile=SpiceKanbanTile;var ModuleSpicePath=function(){function ModuleSpicePath(e){this.vms=e,this.version="1.0",this.build_date="2019-10-02",this.vms.registerModule(this)}return ModuleSpicePath=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[SpicePathTrack,SpicePathModel,SpicePathWithCoaching,SpicePathRelatedListTiles,SpicePathRelatedListTile,SpiceKanbanStagePipe,SpiceKanban,SpiceKanbanTile]}),__metadata("design:paramtypes",[services_1.VersionManagerService])],ModuleSpicePath)}();exports.ModuleSpicePath=ModuleSpicePath;