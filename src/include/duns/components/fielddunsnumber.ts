/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/**
 * @module ModuleDuns
 */
import {Component, ViewContainerRef} from "@angular/core";
import {fieldGeneric} from "../../../objectfields/components/fieldgeneric";
import {model} from "../../../services/model.service";
import {view} from "../../../services/view.service";
import {language} from "../../../services/language.service";
import {metadata} from "../../../services/metadata.service";
import {Router} from "@angular/router";
import {backend} from "../../../services/backend.service";
import {modal} from "../../../services/modal.service";

@Component({
    selector: "field-duns-number",
    templateUrl: "./src/include/duns/templates/fielddunsnumber.html"
})
export class FieldDunsNumber extends fieldGeneric {

    constructor(public model: model,
                public view: view,
                public language: language,
                public metadata: metadata,
                public router: Router,
                private backend: backend,
                private modal: modal,
                private ViewContainerRef: ViewContainerRef
    ) {
        super(model, view, language, metadata, router);
    }

    private openDunsModal() {
        this.modal.openModal('DunsNumberModal', true, this.ViewContainerRef.injector)
            .subscribe(modalRef => {
                this.getResults(modalRef);
                modalRef.instance.response.subscribe(res => {
                    if (res) this.value = res;
                });
            });
    }

    private getResults(modalRef) {
        let params = {
            name: this.model.data.summary_text,
            street: this.model.data.billing_address_street + ' ' + this.model.data.billing_address_hsnm,
            city: this.model.data.billing_address_city,
            postalcode: this.model.data.billing_address_postalcode,
            country: this.model.data.billing_address_country
        };
        modalRef.instance.isLoading = true;
        this.backend.getRequest('/SpiceDuns', params).subscribe(res => {
            if (res && res.length) {
                modalRef.instance.results = res;
                modalRef.instance.isLoading = false;
            }
        });
    }
}