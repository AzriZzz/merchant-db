/**
 * Returns a number formatter that formats a number with two decimal places as a currency in Malaysian Ringgit (MYR).
 * @type {Intl.NumberFormat}
 * @returns The number afer format.
 */
export const formatterDouble = new Intl.NumberFormat('en-MY', {
  style: 'currency',
  currency: 'MYR',
  minimumFractionDigits: 2,
})

/**
 * Returns a number formatter that formats a number with 0 decimal places as a currency in Malaysian Ringgit (MYR).
 * @type {Intl.NumberFormat}
 * @returns The number afer format.
 */
export const formatterZero = new Intl.NumberFormat('en-MY', {
  style: 'currency',
  currency: 'MYR',
  minimumFractionDigits: 0,
})

/**
 * Sorts an array of objects in ascending order by their `dateCollected` property.
 * @param data The array of objects to sort.
 * @returns The sorted array of objects.
 */
export const sortDataAscending = (data: any[]) => {
  return data.sort((a: any, b: any) => new Date(a.dateCollected).getTime() - new Date(b.dateCollected).getTime())
}

/**
 * Convert dateCollected in each object of dateFormat array to a more readable format and return an array of labels.
 * @param dateFormat - an array of objects with dateCollected property
 * @returns an array of string labels representing the dateCollected in "dd MMM" format
 */
export const renameDate = (dateFormat: any[]) => {
  return dateFormat.reduce((acc: any, item: any) => {
    const date = new Date(item.dateCollected);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const label = `${day} ${month}`;
    if (!acc.includes(label)) {
      acc.push(label);
    }
    return acc;
  }, []);
}

/**
 * Finds the highest collection value in the provided array of objects
 * @param maxData - An array of objects containing a 'collection' property
 * @returns The highest 'collection' value in the array
 */
export const maxCollection = (maxData: any[]) => {
  return Math.max(...maxData.map(obj => obj.collection))
};

/**
 * Calculates the maximum value for the y-axis tick in a chart based on the input value.
 * Example
 * 1. The tick max is rounded up to the next multiple of the tick step value, which is determined by the number of digits in the input value.
 * 2. Math.log10(value) returns the base 10 logarithm of value, which is 2.9661863325900626 for 926.60.
 * 3. Math.floor(2.9661863325900626) returns the largest integer less than or equal to 2.9661863325900626, which is 2.
 * 4. Math.pow(10, 2) returns the result of 10 raised to the power of 2, which is 100.
 * 5. Math.ceil(value / tickStep) returns the smallest integer greater than or equal to the value divided by the tick step.
 * 6. Multiplying the result by the tick step gives the next multiple of the tick step.
 * 
 * @param value - The input value for which to calculate the y-axis tick max.
 * @returns The y-axis tick max value for the chart.
 */
export const getTickMax = (value: number) => {
  // Calculate the tick step by finding the largest power of 10 less than the value.
  const tickStep = Math.pow(10, Math.floor(Math.log10(value)));
  // Calculate the tick max by dividing the value by the tick step, rounding up, and multiplying by the tick step.
  const tickMax = Math.ceil(value / tickStep) * tickStep;
  return tickMax;
}