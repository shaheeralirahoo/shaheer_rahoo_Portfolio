export interface EducationEntry {
  degree: string;
  university: string;
  year: string;
  project?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "B.Sc. Computer Science",
    university: "Usman Institute of Technology, Karachi",
    year: "Aug 2024",
    project:
      "Final Year Project: AI-powered image processing system for sugarcane disease detection.",
  },
];
