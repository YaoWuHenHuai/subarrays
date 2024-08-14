var subarrays_values = {};
function createSubarrays(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
array_to_subarray = ["a","b","c","d","e","f"];
values_per_subarray = 2;
subarrays_values[i] = (createSubarrays(array_to_subarray, values_per_subarray)).reverse(); //prob you may need reverse.() depending on your array
