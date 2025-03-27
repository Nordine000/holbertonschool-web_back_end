export default function concatArrays(array1, array2, string) {
  const tab = [...array1, ...array2, ...string];
  return tab;
}
