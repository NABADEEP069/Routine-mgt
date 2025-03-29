import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { RoutineSlot } from '../types';
import { getSubjectName } from '../constants/subjects';

export const exportRoutineToPdf = async (
  slots: RoutineSlot[],
  department: string,
  semester: number
) => {
  // Create a temporary div to render the routine
  const element = document.createElement('div');
  element.innerHTML = `
    <h2>${department} - Semester ${semester} Routine</h2>
    <table>
      ${/* Generate table HTML */}
    </table>
  `;
  document.body.appendChild(element);

  try {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`${department}_Sem${semester}_Routine.pdf`);
  } finally {
    document.body.removeChild(element);
  }
};