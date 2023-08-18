
import { OfficeItem } from '../interfaces/OfficeInterfaces'

export const getCountWaitings = (office: OfficeItem) => {
  const lines = office.lines
  const totalWaiting = lines.reduce((acc: number, line: any) => {
    return acc + line.waiting
  }, 0)
  return totalWaiting
}

export const getTimeElapse = (office: OfficeItem) => {
  const lines = office.lines
  let formattedTime = ''
  if (lines.length === 0) {
    return '00:00:00'
  }
  const totalElapsedInSeconds = lines.reduce((acc: number, line: any) => {
    return acc + line.elapsed
  }, 0)

  const totalWaiting = lines.reduce((accumulator, line) => {
    return accumulator + line.waiting
  }, 0)

  const averageElapsedInSeconds = totalElapsedInSeconds / totalWaiting

  const hours = Math.floor(averageElapsedInSeconds / 3600)
  const minutes = Math.floor((averageElapsedInSeconds % 3600) / 60)
  const seconds = Math.floor(averageElapsedInSeconds % 60)

  if (hours > 0) {
    formattedTime += hours.toString().padStart(1, '0') + ':'
  }

  formattedTime +=
    minutes.toString().padStart(1, '0') +
    ':' +
    seconds.toString().padStart(2, '0')

  return formattedTime
}

export const getTypeOfBody = (office: OfficeItem) => {
  const commonStyles = {
    padding: '18px',
    flex: 1,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    lineHeight: 1.1,
  };

  const specificStyles = office?.online ? {color: '#fff'} : { backgroundColor: '#e2e2e2', color: '#8f8f8f' };

  return { ...commonStyles, ...specificStyles };
};

export const getTypeOfFooter = (office: OfficeItem) => {
  const commonStyles = {
    display: 'flex',
    gap: '15px',
    padding: '10px 18px',
    maxHeight: '38px'
  };

  const specificStyles = office?.online
    ? { backgroundColor: '#00b886' }
    : { backgroundColor: '#8b8b8b' };

  return { ...commonStyles, ...specificStyles };
};

