
export interface Secondary {
    keywords: [];
    _id: string;
    secondary_school_admission_status: string,
    secondary_school_students_count: number,
    secondary_school_application_status: string,
    secondary_school_application_deadline: string,
    secondary_school_seats_count: number,
    secondary_school_seats_remaining_count: number,
    secondary_school_students_applied_count: number,
    secondary_school_students_accepted_count: number,
    secondary_school_males_count: number,
    secondary_school_females_count: number
  }
  
  export class SecondaryModel implements Secondary {
    constructor(public keywords: [],public _id: string,
        public secondary_school_admission_status: string,
        public secondary_school_students_count: number,
        public secondary_school_application_status: string,
        public secondary_school_application_deadline: string,
        public secondary_school_seats_count: number = 0,
        public secondary_school_seats_remaining_count: number,
        public secondary_school_students_applied_count: number,
        public secondary_school_students_accepted_count: number,
        public secondary_school_males_count: number,
        public secondary_school_females_count: number) {

          this.secondary_school_seats_count = secondary_school_seats_count;
    }
  
  } 
  
  