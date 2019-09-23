import React from "react"
import useClock from 'use-clock';
import { remainingTime, addPadding } from '../utils/utils';
import CountNumber from './count-number';

const CountdownContainer = ({ 
  targetDate, 
  hideSeconds, 
  hideMinutes,
  hideHours,
  hideDays,
  secondsLabel,
  minutesLabel,
  hoursLabel,
  daysLabel,
}) => {
  const { raw: currentDate } = useClock();
  const isOver = currentDate.isAfter(targetDate);
  const { 
    remainingDays, 
    remainingHours, 
    remainingMinutes, 
    remainingSeconds 
  } = remainingTime(targetDate, currentDate);
  return (
    <div>
      {!hideDays && <CountNumber 
        value={addPadding(isOver ? 0 : remainingDays)}
        label={daysLabel}
      />}
      {!hideHours && <CountNumber 
        value={addPadding(isOver ? 0 : remainingHours)}
        label={hoursLabel}
      />}
      {!hideMinutes && <CountNumber 
        value={addPadding(isOver ? 0 : remainingMinutes)}
        label={minutesLabel}
      />}
      {!hideSeconds && <CountNumber 
        value={addPadding(isOver ? 0 : remainingSeconds)}
        label={secondsLabel}
      />}
    </div>
  );
};

export default CountdownContainer;