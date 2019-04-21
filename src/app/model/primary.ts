
export interface Primary {
    keywords: [];
    _id: string;
    primary_school_admission_status: string,
    primary_school_students_count: number,
    primary_school_application_status: string,
    primary_school_application_deadline: string,
    primary_school_seats_count: number,
    primary_school_seats_remaining_count: number,
    primary_school_students_applied_count: number,
    primary_school_students_accepted_count: number,
    primary_school_males_count: number,
    primary_school_females_count: number
  }
  
  export class PrimaryModel implements Primary {
    constructor(public keywords: [],public _id: string,
        public primary_school_admission_status: string,
        public primary_school_students_count: number,
        public primary_school_application_status: string,
        public primary_school_application_deadline: string,
        public primary_school_seats_count: number = 0,
        public primary_school_seats_remaining_count: number,
        public primary_school_students_applied_count: number,
        public primary_school_students_accepted_count: number,
        public primary_school_males_count: number,
        public primary_school_females_count: number) {

          this.primary_school_seats_count = primary_school_seats_count;
    }
  
  } 
  
  