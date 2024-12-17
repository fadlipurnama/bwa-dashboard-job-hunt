import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Need",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "12 Aug 2024",
    dueDate: "12 Sep 2024",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
];

export const JOB_APPLICANTS_COLUMNS: string[] = ["Name", "Applied Date"];

export const JOB_APPLICANTS_DATA = [{

  name: 'Fadli Purnama',
  appliedDate: '15 Aug 2024' 
}];
