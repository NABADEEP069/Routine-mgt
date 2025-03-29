import { supabase } from '../lib/supabase';
import { WeeklyRoutine, RoutineSlot } from '../types';

export const loadData = async () => {
  const { data, error } = await supabase
    .from('routines')
    .select('*');

  if (error) throw error;
  return { routines: data || [] };
};

export const saveRoutine = async (routine: WeeklyRoutine) => {
  const { error } = await supabase
    .from('routines')
    .upsert({ 
      id: routine.id,
      department: routine.department,
      semester: routine.semester,
      slots: routine.slots 
    });

  if (error) throw error;
};

export const deleteRoutineSlot = async (department: string, semester: number, slotId: string) => {
  const { data: routine } = await supabase
    .from('routines')
    .select('*')
    .eq('department', department)
    .eq('semester', semester)
    .single();

  if (routine) {
    const updatedSlots = routine.slots.filter((slot: RoutineSlot) => slot.id !== slotId);
    await supabase
      .from('routines')
      .update({ slots: updatedSlots })
      .eq('id', routine.id);
  }
};

export const findConflictingSlots = async (day: string, startTime: string): Promise<RoutineSlot[]> => {
  const { data, error } = await supabase
    .from('routines')
    .select('slots')
    .contains('slots', [{ day, startTime }]);

  if (error) throw error;
  return data?.flatMap(r => r.slots) || [];
};