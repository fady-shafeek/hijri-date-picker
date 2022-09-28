import { Component, OnInit,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';
const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];
  @Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getWeekdayLabel(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}


@Component({
  selector: 'app-hijri',
  templateUrl: './hijri.component.html',
  styleUrls: ['./hijri.component.scss'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarIslamicCivil},
    {provide: NgbDatepickerI18n, useClass: IslamicI18n}
  ]
})

export class HijriComponent implements OnInit {
  model!: NgbDateStruct;
  constructor(private calendar: NgbCalendar) { }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  ngOnInit(): void {
  }

}
