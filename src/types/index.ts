export interface Subject {
  code: string;
  name: string;
  type: 'theory' | 'lab' | 'project';
  semester: number;
  credits: number;
}

export interface Room {
  number: string;
  name?: string;
  type: 'classroom' | 'lab' | 'seminar' | 'gallery';
}

export interface Teacher {
  id: string;
  name: string;
  department: string;
  specialization?: string;
}

export interface TimeSlot {
  start: string;
  end: string;
  display: string;
}

export interface RoutineSlot {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  subjectId: string;
  teacherId: string;
  roomNo: string;
  department: string;
  semester: number;
}

export interface WeeklyRoutine {
  id: string;
  department: string;
  semester: number;
  slots: RoutineSlot[];
}