export interface EducationEntry {
  id: string;
  qualification: string;
  board: string;
  institution?: string;
  period?: string;
  description?: string;
  coursework?: string[];
}

export const educationData: EducationEntry[] = [
  {
    id: "edu-1",
    qualification: "Intermediate (Inter)",
    board: "Islamic Board",
  }
];
