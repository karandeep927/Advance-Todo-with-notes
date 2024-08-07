const currentDate = new Date();

const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()

export const today = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
export const tomorrow = `${year}-${month.toString().padStart(2, '0')}-${(day + 1).toString().padStart(2, '0')}`;