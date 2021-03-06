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
 * @module ModuleCalendar
 */
import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {language} from '../../../services/language.service';
import {calendar} from '../services/calendar.service';

/**
 * @ignore
 */
declare var moment: any;

@Component({
    selector: 'calendar-sheet-day',
    templateUrl: './src/modules/calendar/templates/calendarsheetday.html'
})

export class CalendarSheetDay implements OnChanges {

    @ViewChild('calendarsheet', {read: ViewContainerRef, static: true}) private calendarsheet: ViewContainerRef;
    @Output() public navigateweek: EventEmitter<any> = new EventEmitter<any>();
    @Input() private setdate: any = {};
    @Input('userscalendars') private usersCalendars: any[] = [];
    @Input('googleisvisible') private googleIsVisible: boolean = true;
    private sheetDay: any = {};
    private sheetHours: any[] = [];
    private ownerEvents: any[] = [];
    private ownerMultiEvents: any[] = [];
    private userEvents: any[] = [];
    private userMultiEvents: any[] = [];
    private googleEvents: any[] = [];
    private googleMultiEvents: any[] = [];

    constructor(private language: language, private calendar: calendar) {
        this.buildHours();
    }

    get multiEventStyle(): any {
        return {
            height: this.calendar.multiEventHeight + "px",
            width: '100%',
            position: 'initial',
            display: 'block'
        };
    }

    get hourHeightStyle() {
        return {height: this.calendar.sheetHourHeight + 'px'};
    }

    get isDashlet() {
        return this.calendar.isDashlet;
    }

    get offset() {
        return moment.tz(this.calendar.timeZone).format('z Z');
    }

    get sheetTimeWidth() {
        return this.calendar.sheetTimeWidth;
    }

    get allEvents() {
        return this.calendar.arrangeEvents(this.ownerEvents.concat(this.userEvents, this.googleEvents));
    }

    get allMultiEvents() {
        return this.ownerMultiEvents.concat(this.userMultiEvents, this.googleMultiEvents);
    }

    get startDate() {
        return new moment(this.setdate).hour(this.calendar.startHour).minute(0).second(0);
    }

    get endDate() {
        return new moment(this.startDate).add((this.calendar.endHour - this.calendar.startHour), 'h');
    }

    get dayTextContainerClass() {
        return this.isDashlet ? 'slds-grid slds-grid--vertical-align-center' : '';
    }

    get dayTextDayClass() {
        return this.isDashlet ? 'slds-text-heading--medium' : 'slds-text-body--regular';
    }

    get dateTextDateClass() {
        return this.isDashlet ? 'slds-text-heading--medium' : 'slds-text-heading--large';
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.setdate) {
            this.sheetDay = {date: changes.setdate.currentValue};
            this.getEvents();
        }
        if (changes.usersCalendars || changes.setdate) {
            this.getUsersEvents();
        }
        if (changes.googleIsVisible || changes.setdate) {
            this.getGoogleEvents();
        }
    }

    get timeColStyle() {
        return {
            width: this.sheetTimeWidth + 'px',
            height: '100%'
        };
    }

    /*
    * @param index
    * @param item
    * @return item.id
    */
    private trackByItemFn(index, item) {
        return item.id;
    }

    /*
    * @param index
    * @param item
    * @return index
    */
    private trackByIndexFn(index, item) {
        return index;
    }

    /*
    * @param events
    * @return events
    */
    private correctHours(events) {
        events.forEach(event => {
            if (!event.isMulti) {
                let endInRange = event.end.hour() > this.calendar.startHour && event.start.hour() < this.calendar.startHour;
                let startInRange = event.start.hour() < this.calendar.endHour && event.end.hour() > this.calendar.endHour;
                if (endInRange) {
                    event.start = event.start.hour(this.calendar.startHour).minute(0);
                }
                if (startInRange) {
                    event.end = event.end.hour(this.calendar.endHour).minute(59);
                }
            }
        });
        return events;
    }

    /*
    * @return void
    */
    private getEvents() {
        this.ownerEvents = [];
        this.ownerMultiEvents = [];

        this.calendar.loadEvents(this.startDate, this.endDate)
            .subscribe(events => {
                if (events.length > 0) {
                    events = this.correctHours(events);
                    events = this.filterEvents(events);
                    this.ownerEvents = events.filter(event => !event.isMulti);
                    this.ownerMultiEvents = events.filter(event => event.isMulti);
                }
            });
    }

    /*
    * @return void
    */
    private getGoogleEvents() {
        this.googleEvents = [];
        this.googleMultiEvents = [];
        if (!this.googleIsVisible || this.calendar.isMobileView) {
            return;
        }

        this.calendar.loadGoogleEvents(this.startDate, this.endDate)
            .subscribe(events => {
                if (events.length > 0) {
                    events = this.correctHours(events);
                    events = this.filterEvents(events);
                    this.googleEvents = events.filter(event => !event.isMulti);
                    this.googleMultiEvents = events.filter(event => event.isMulti);
                }
            });
    }

    /*
    * @return void
    */
    private getUsersEvents() {
        this.userEvents = [];
        this.userMultiEvents = [];
        if (this.calendar.isMobileView) {
            return;
        }

        this.calendar.loadUsersEvents(this.startDate, this.endDate)
            .subscribe(events => {
                if (events.length > 0) {
                    events = this.correctHours(events);
                    events = this.filterEvents(events);
                    events.forEach(event => {
                        if (!event.isMulti) {
                            this.userEvents.push(event);
                        } else {
                            this.userMultiEvents.push(event);
                        }
                    });
                }
            });
    }

    /*
    * filter the out of range events
    * @return void
    */
    private filterEvents(events) {
        return events.filter(event => event.end.hour() > this.calendar.startHour || event.start.hour() < this.calendar.endHour || ('absence' == event.type));
    }

    /*
    * @param type
    * @return date format
    */
    private displayDate(type) {
        switch (type) {
            case 'day':
                return this.setdate.format('ddd');
            case 'date':
                return this.setdate.format(this.isDashlet ? 'D, MMMM' : 'D');
        }
    }

    /*
    * @param event
    * @return style
    */
    private getEventStyle(event): any {
        // get the day of the week
        let startminutes = (event.start.hour() - this.calendar.startHour) * 60 + event.start.minute();
        let endminutes = (event.end.hour() - this.calendar.startHour) * 60 + event.end.minute();
        let itemWidth = ((this.calendarsheet.element.nativeElement.clientWidth - this.sheetTimeWidth)) / (event.maxOverlay > 0 ? event.maxOverlay : 1);
        return {
            'left': (this.sheetTimeWidth + (itemWidth * event.displayIndex)) + 'px',
            'width': itemWidth + 'px',
            'top': (((this.calendar.sheetHourHeight / 60 * startminutes)) -1) + 'px',
            'height': (this.calendar.sheetHourHeight / 60 * (endminutes - startminutes)) + 'px',
            'z-index': event.resizing ? 20 : 15,
            'border-bottom': event.resizing ? '1px dotted #fff' : 0
        };

    }

    /*
    * @return style
    */
    private getDayColStyle() {
        return {width: 'calc(100% - ' + this.sheetTimeWidth + 'px)'};
    }

    /*
    * @return void
    */
    private buildHours() {
        this.sheetHours = [];
        let i = this.calendar.startHour;
        while (i <= this.calendar.endHour) {
            this.sheetHours.push(i);
            i++;
        }
    }

    /*
    * @return style
    */
    private isTodayStyle() {
        let today = new moment();
        let isToday = today.year() === this.setdate.year() && today.month() === this.setdate.month() && today.date() == this.setdate.date();
        return {
            color: isToday ? this.calendar.todayColor : 'inherit'
        };
    }
}
