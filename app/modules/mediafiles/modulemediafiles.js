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
"use strict";var __decorate=this&&this.__decorate||function(e,t,i,a){var s,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;0<=n;n--)(s=e[n])&&(o=(l<3?s(o):3<l?s(t,i,o):s(t,i))||o);return 3<l&&o&&Object.defineProperty(t,i,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),rxjs_1=require("rxjs"),MediaFileImage=function(){function MediaFileImage(e,t){this.mediafiles=e,this.elRef=t,this.classImage="",this.classOuter="",this.styleImage="",this.align="",this.size=null,this.width=null,this.height=null,this.frameWidth=null,this.frameHeight=null,this.frameSize=null,this.displayInline=!1,this.title="",this.alttext="",this.dimensions={},this.isFirstChange=!0,this.lastMediaId="",this.withFrameHeight=!0}return MediaFileImage.prototype.ngOnChanges=function(){var t=this;if(this.isFirstChange&&(this.isFirstChange=!1,this.variantStatic=this.variant),"mw"===this.variantStatic||"mwh"===this.variantStatic?(null!=this.width&&(this.dimensions.width=this.width),null!=this.height&&(this.dimensions.height=this.height),null===this.frameWidth&&(this.frameWidth=this.determineWidthOfImage()),"mwh"===this.variantStatic&&null===this.frameHeight&&(this.frameHeight=this.determineHeightOfImage()),"mw"===this.variantStatic&&(this.withFrameHeight=!1)):(null!=this.size&&(this.dimensions.height=this.dimensions.width=this.size),null===this.frameSize&&(this.frameSize=this.determineWidthOfImage())),this.lastMediaId!==this.media_id)if(this.media_id){var e=void 0;switch(this.variantStatic){case"mw":e=this.frameWidth;break;case"mwh":e=this.frameWidth+"/"+this.frameHeight;break;case"th":e=this.frameSize}this.mediafiles.getImageVariant(this.media_id,this.variantStatic+"/"+e).subscribe(function(e){t.imageUrl=e})}else this.imageUrl=""},Object.defineProperty(MediaFileImage.prototype,"styleDisplay",{get:function(){return this.displayInline?"inline-block":"block"},enumerable:!0,configurable:!0}),Object.defineProperty(MediaFileImage.prototype,"styleOuter",{get:function(){switch(this.align){case"left":return{"margin-left":0,"margin-right":"auto"};case"right":return{"margin-left":"auto","margin-right":0};case"center":return{"margin-left":"auto","margin-right":"auto"};default:return{}}},enumerable:!0,configurable:!0}),MediaFileImage.prototype.getWidthOfParent=function(){return Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).width.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingLeft.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingRight.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderLeftWidth.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderRightWidth.replace(/px$/,""))},MediaFileImage.prototype.determineWidthOfImage=function(){return Math.round(this.getWidthOfParent())},MediaFileImage.prototype.getHeightOfParent=function(){return Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).height.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingTop.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).paddingBottom.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderTopWidth.replace(/px$/,""))-Number(getComputedStyle(this.elRef.nativeElement.parentElement,null).borderBottomWidth.replace(/px$/,""))},MediaFileImage.prototype.determineHeightOfImage=function(){return Math.round(this.getHeightOfParent())},__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"media_id",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"variant",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"classImage",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"classOuter",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"styleImage",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"align",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"size",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"width",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"height",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"frameWidth",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"frameHeight",void 0),__decorate([core_1.Input(),__metadata("design:type",Number)],MediaFileImage.prototype,"frameSize",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],MediaFileImage.prototype,"displayInline",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],MediaFileImage.prototype,"alttext",void 0),MediaFileImage=__decorate([core_1.Component({selector:"media-file-image",template:'<span style="position:relative" class="{{classOuter}}" [ngStyle]="styleOuter" [style.maxwidth]="frameWidth" [style.height]="frameHeight" [style.display]="styleDisplay"><img *ngIf="imageUrl" [src]="imageUrl" [class.withFrameHeight]="withFrameHeight" [title]="title" [alt]="alttext" [ngStyle]="dimensions" class="{{classImage}}" style="max-width:100%;max-height:100%"></span>',providers:[services_1.mediafiles],styles:["img.withFrameHeight { position:absolute; top:0; left:0; bottom:0; right:0; margin:auto; }"]}),__metadata("design:paramtypes",[services_1.mediafiles,core_1.ElementRef])],MediaFileImage)}();exports.MediaFileImage=MediaFileImage;var MediaFilePicker=function(){function MediaFilePicker(e,t,i,a){this.mediafiles=e,this.backend=t,this.language=i,this.toast=a,this.pickerIsLoading=!0,this.files=[],this.selectedCategoryID="",this.dropdownUnused=!0,this.categoriesLoaded=!1,this.filesLoaded=!1,this.mediatype=1,this.filetype="",this.answer=null,this.answerSubject=null,this.uploadAllowed=!1,this.answerSubject=new rxjs_1.Subject,this.answer=this.answerSubject.asObservable()}return MediaFilePicker.prototype.ngOnInit=function(){var t=this;this.mediafiles.loadCategories().subscribe(function(){t.categoriesLoaded=!0,t.filesLoaded&&(t.pickerIsLoading=!1)});var e={fields:["id","name","category"],searchfields:{join:"AND",conditions:[{field:"mediatype",operator:"=",value:this.mediatype},{field:"upload_completed",operator:"=",value:1}]},sortfield:"name",limit:-99};this.backend.getRequest("/module/MediaFiles",e).subscribe(function(e){t.files=e.list,t.filesLoaded=!0,t.categoriesLoaded&&(t.pickerIsLoading=!1)},function(e){t.toast.sendToast(t.language.getLabel("ERR_NETWORK_LOADING"),"error","To retry: Close and reopen the window.",!1)})},MediaFilePicker.prototype.pick=function(e){this.answerSubject.next({id:this.files[e].id}),this.answerSubject.complete(),this.self.destroy()},MediaFilePicker.prototype.cancel=function(){this.answerSubject.next({}),this.answerSubject.complete(),this.self.destroy()},MediaFilePicker.prototype.onModalEscX=function(){this.cancel()},MediaFilePicker.prototype.changeToUploadDialog=function(){this.answerSubject.next({upload:!0}),this.answerSubject.complete(),this.self.destroy()},MediaFilePicker.prototype.onChangeCategory=function(e){this.selectedCategoryID=e.target.value,this.selectedCategory=this.mediafiles.categories[this.selectedCategoryID],this.dropdownUnused=!1},MediaFilePicker=__decorate([core_1.Component({selector:"media-file-picker",template:'<div class="slds-modal slds-fade-in-open slds-modal_large"><div class="slds-modal__container"><div *ngIf="!isLoading" class="slds-modal__header slds-theme_shade"><h2 class="slds-text-heading--medium">{{language.getLabel(\'LBL_MEDIAFILE_PICKER\')}}</h2></div><div class="slds-modal__content slds-p-around--medium" style="height:100%"><system-spinner *ngIf="pickerIsLoading"></system-spinner><ng-container *ngIf="!pickerIsLoading"><div class="slds-form-element slds-m-bottom--medium"><label class="slds-form-element__label" for="select-mediacategory">{{language.getLabel(\'LBL_FILTER\')}}: {{language.getLabel(\'LBL_CATEGORY\')}}</label><div class="slds-form-element__control"><div class="slds-select_container"><select class="slds-select" id="select-mediacategory" (change)="onChangeCategory($event)"><option *ngIf="dropdownUnused" style="font-style: italic" selected>{{language.getLabel(\'LBL_MAKE_SELECTION\')}} …</option><option value="*" style="font-style: italic">{{language.getLabel(\'LBL_ALL_FILES\')}}</option><option value="-" style="font-style: italic">{{language.getLabel(\'LBL_FILES_WITHOUT_CATEGORIES\')}}</option><option *ngFor="let category of mediafiles.categoriesSorted" value="{{category.id}}">{{category.fullName}}</option></select></div></div></div><ul class="media-file-picker"><ng-container *ngFor="let file of files; let i=index"><li *ngIf="( file.category == \'\' && selectedCategoryID === \'-\' ) || selectedCategoryID === \'*\' || ( file.category && selectedCategory && mediafiles.fileIsInCategory( file.category, selectedCategory ))" class="slds-m-right--small slds-m-bottom--small"><a class="slds-theme_shade" href="javascript:void(0);" (click)="pick(i)"><media-file-image [media_id]="file.id" [variant]="\'mwh\'" [title]="file.name"></media-file-image></a></li></ng-container></ul></ng-container></div><div class="slds-modal__footer slds-modal__footer_directional"><button class="slds-button slds-button--brand" (click)="changeToUploadDialog()">{{language.getLabel(\'LBL_UPLOAD_NEW_FILE\')}} …</button> <button class="slds-button slds-button--neutral" (click)="cancel()">{{language.getLabel(\'LBL_CLOSE\')}}</button></div></div></div>',providers:[services_1.mediafiles],styles:["img.thumb { background-color: #fff; border: 1px solid #d8dde6; padding: 1px; margin-right: 3px; width: 32px; height: 32px; }","li { display: inline-block; vertical-align: middle; border-radius: .25rem; width: 160px; height: 160px;  box-sizing: content-box; position: relative;  }","ul { margin: 0 -.75rem -.75rem 0; }","a { display: block; height: 100%; width: 100%; padding: .25rem; border: 1px solid #dddbda; }","a:hover { border: 1px solid #1589ee; filter: brightness(92%); }","a:hover media-file-image { filter: brightness(118%); }"]}),__metadata("design:paramtypes",[services_1.mediafiles,services_1.backend,services_1.language,services_1.toast])],MediaFilePicker)}();exports.MediaFilePicker=MediaFilePicker;var MediaFileUploader=function(){function MediaFileUploader(e,t,i,a,s){this.mediafiles=e,this.backend=t,this.language=i,this.toast=a,this.renderer=s,this.theProgress=0,this.uploadFinished=!1,this.filedata={},this.noMetaData=!1,this.fileIsSelected=!1,this.answer=null,this.answerSubject=null,this.answerSubject=new rxjs_1.Subject,this.answer=this.answerSubject.asObservable()}return MediaFileUploader.prototype.ngAfterViewInit=function(){this.triggerFileSelectionDialog()},MediaFileUploader.prototype.triggerFileSelectionDialog=function(){var e=new MouseEvent("click",{bubbles:!0});this.renderer.invokeElementMethod(this.fileupload.element.nativeElement,"dispatchEvent",[e])},MediaFileUploader.prototype.fileSelected=function(){var t=this,e=this.fileupload.element.nativeElement.files;this.fileIsSelected=0<e.length,this.statustext="Uploading "+e[0].name+" …",this.mediafiles.uploadFile(e).subscribe(function(e){e.progress?t.theProgress=e.progress.loaded/e.progress.total*100:t.filedata=e.filedata},function(e){t.toast.sendToast(t.language.getLabel("ERR_UPLOAD_FAILED")),t.cancel()},function(){t.uploadFinished=!0,t.filedata.category=t.category,t.noMetaData?(t.filedata.name=t.filedata.id,t.finishDataInput()):(t.filedata.name=e[0].name,t.statustext=t.language.getLabel("MSG_IMGUPLOADED_INPUTDATA"),t.mediafiles.loadCategories())})},MediaFileUploader.prototype.finishDataInput=function(){this.filedata.upload_completed=1,this.backend.postRequest("module/MediaFiles/"+this.filedata.id,null,this.filedata),this.answerSubject.next(this.filedata.id),this.answerSubject.complete(),this.self.destroy()},MediaFileUploader.prototype.cancel=function(){this.answerSubject.next(!1),this.answerSubject.complete(),this.self.destroy()},MediaFileUploader.prototype.onModalEscX=function(){this.cancel()},MediaFileUploader.prototype.getBarStyle=function(){return{width:this.theProgress+"%"}},__decorate([core_1.ViewChild("fileupload",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],MediaFileUploader.prototype,"fileupload",void 0),MediaFileUploader=__decorate([core_1.Component({selector:"media-file-uploader",template:'<div tabindex="-1" class="slds-modal slds-fade-in-open"><div class="slds-modal__container"><system-modal-header (close)="cancel()">{{language.getLabel(\'LBL_NEW_IMAGE\')}}</system-modal-header><input #fileupload style="display:none" type="file" (change)="fileSelected()"><div class="slds-modal__content slds-p-around--medium slds-wrap"><ng-container *ngIf="fileIsSelected"><div class="slds-progress-bar slds-progress-bar_medium slds-progress-bar_circular" role="progressbar" [class.finished]="uploadFinished"><span class="slds-progress-bar__value" [ngStyle]="getBarStyle()"></span></div><div class="slds-m-top--x-small" style="text-align: center">{{statustext}}</div><div *ngIf="uploadFinished && !noMetaData" class="slds-m-top--medium" style="display:table;width:100%"><div class="slds-box slds-box_x-small" style="display:table-cell;width:40%;vertical-align:middle;background-color:#fff;"><media-file-image [media_id]="filedata.id" [variant]="\'mwh\'"></media-file-image></div><div class="slds-p-left--medium" style="display:table-cell;width:60%"><label class="slds-form-element__label">{{language.getLabel(\'LBL_IMAGENAME\')}}</label><div class="slds-form-element__control"><input [(ngModel)]="filedata.name" type="text" class="slds-input"></div><label class="slds-form-element__label slds-m-top--medium" for="select-mediacategory">{{language.getLabel(\'LBL_CATEGORY\')}}</label><div class="slds-form-element__control"><div class="slds-select_container"><select class="slds-select" id="select-mediacategory" [(ngModel)]="filedata.category"><option style="font-style: italic">&mdash;</option><option *ngFor="let category of mediafiles.categoriesSorted" value="{{category.id}}">{{category.fullName}}</option></select></div></div><label class="slds-form-element__label slds-m-top--medium">{{language.getLabel(\'LBL_ALTTEXT\')}}</label><div class="slds-form-element__control"><input [(ngModel)]="filedata.alttext" type="text" class="slds-input"></div><label class="slds-form-element__label slds-m-top--medium">{{language.getLabel(\'LBL_COPYRIGHT_OWNER\')}}</label><div class="slds-form-element__control"><input [(ngModel)]="filedata.copyright_owner" type="text" class="slds-input"></div><label class="slds-form-element__label slds-m-top--medium">{{language.getLabel(\'LBL_COPYRIGHT_LICENSE\')}}</label><div class="slds-form-element__control"><input [(ngModel)]="filedata.copyright_license" type="text" class="slds-input"></div></div></div></ng-container><div *ngIf="!fileIsSelected">{{language.getLabel(\'LBL_WAITING_FILE_SELECTION\')}} …</div></div><div class="slds-modal__footer"><ng-container *ngIf="!noMetaData"><button *ngIf="fileIsSelected" class="slds-button slds-button--brand" (click)="finishDataInput()">{{language.getLabel(\'LBL_SAVE\')}}</button></ng-container><button *ngIf="!fileIsSelected" class="slds-button slds-button--neutral" (click)="triggerFileSelectionDialog()">{{language.getLabel(\'LBL_SELECT_FILE\')}} …</button> <button class="slds-button slds-button--neutral" (click)="cancel()">{{language.getLabel(\'LBL_CANCEL\')}}</button></div></div></div>',providers:[services_1.mediafiles],styles:[":host {height: 100%;}",":host >>> div.uploadbar {margin-left:-16px;margin-right:-16px;margin-top:16px;margin-bottom:-16px;width:calc(100% + 32px);height:8px;}",":host >>> div.uploadprogress {width: 90%;height: 100%;background-color: red;}"]}),__metadata("design:paramtypes",[services_1.mediafiles,services_1.backend,services_1.language,services_1.toast,core_1.Renderer])],MediaFileUploader)}();exports.MediaFileUploader=MediaFileUploader;var ModuleMediaFiles=function(){function ModuleMediaFiles(){}return ModuleMediaFiles=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents],declarations:[MediaFileImage,MediaFilePicker,MediaFileUploader],exports:[MediaFileImage,MediaFilePicker,MediaFileUploader]})],ModuleMediaFiles)}();exports.ModuleMediaFiles=ModuleMediaFiles;