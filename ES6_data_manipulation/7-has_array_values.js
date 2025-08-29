export default function hasValuesFromArray(set, arr) {
    return array.every((item) => set.has(item));
}
