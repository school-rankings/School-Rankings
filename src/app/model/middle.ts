
export interface Middle {
    keywords: [];
    _id: string;
    middle_school_admission_status: string,
    middle_school_students_count: number,
    middle_school_application_status: string,
    middle_school_application_deadline: string,
    middle_school_seats_count: number,
    middle_school_seats_remaining_count: number,
    middle_school_students_applied_count: number,
    middle_school_students_accepted_count: number,
    middle_school_males_count: number,
    middle_school_females_count: number
  }
  
  export class MiddleModel implements Middle {
    constructor(public keywords: [],public _id: string,
        public middle_school_admission_status: string,
        public middle_school_students_count: number,
        public middle_school_application_status: string,
        public middle_school_application_deadline: string,
        public middle_school_seats_count: number = 0,
        public middle_school_seats_remaining_count: number,
        public middle_school_students_applied_count: number,
        public middle_school_students_accepted_count: number,
        public middle_school_males_count: number,
        public middle_school_females_count: number) {

          this.middle_school_seats_count = middle_school_seats_count;
    }
  
  } 
  
  