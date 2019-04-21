
export interface SeniorSecondary {
    keywords: [];
    _id: string;
    senior_secondary_school_admission_status: string,
    senior_secondary_school_students_count: number,
    senior_secondary_school_application_status: string,
    senior_secondary_school_application_deadline: string,
    senior_secondary_school_seats_count: number,
    senior_secondary_school_seats_remaining_count: number,
    senior_secondary_school_students_applied_count: number,
    senior_secondary_school_students_accepted_count: number,
    senior_secondary_school_males_count: number,
    senior_secondary_school_females_count: number
  }
  
  export class SeniorSecondaryModel implements SeniorSecondary {
    constructor(public keywords: [],public _id: string,
        public senior_secondary_school_admission_status: string,
        public senior_secondary_school_students_count: number,
        public senior_secondary_school_application_status: string,
        public senior_secondary_school_application_deadline: string,
        public senior_secondary_school_seats_count: number = 0,
        public senior_secondary_school_seats_remaining_count: number,
        public senior_secondary_school_students_applied_count: number,
        public senior_secondary_school_students_accepted_count: number,
        public senior_secondary_school_males_count: number,
        public senior_secondary_school_females_count: number) {

          this.senior_secondary_school_seats_count = senior_secondary_school_seats_count;
    }
  
  } 
  
  