import { RoutineSlot } from '../types';

export const validateSlot = (
  slotData: Partial<RoutineSlot>,
  existingSlots: RoutineSlot[],
  currentSlotId?: string
): string | null => {
  if (!slotData.day || !slotData.startTime || !slotData.subjectId || !slotData.teacherId || !slotData.roomNo) {
    return 'All fields are required';
  }

  // Check for conflicts with existing slots
  const conflictingSlot = existingSlots.find(slot => 
    slot.id !== currentSlotId && // Ignore current slot when editing
    slot.day === slotData.day &&
    slot.startTime === slotData.startTime &&
    (
      slot.roomNo === slotData.roomNo || // Same room
      slot.teacherId === slotData.teacherId // Same teacher
    )
  );

  if (conflictingSlot) {
    return `Conflict detected: ${
      conflictingSlot.roomNo === slotData.roomNo
        ? `Room ${slotData.roomNo} is already booked`
        : `Teacher ${slotData.teacherId} is already assigned`
    } for this time slot`;
  }

  return null;
}