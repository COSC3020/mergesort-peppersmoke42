function mergesort(array) 
{
    let size = 2; // -> size of subarrays : we don't need to sort the size 1 subarrays
    let len = Math.floor(array.length / 2) * 2;
    if (array.length < 2) // -> An array needs at least two elements to sort it
        return array;

    while (size <= len) // -> while our subarrays are not larger than the whole array
    {
        //Sort lower half, sort upper half, next subarray
        let temp = 0;
        while (temp < len)
        {
            sort(array, temp, temp + size - 1);
            sort(array, temp + size, Math.min(temp + 2*size, arr.length));
            temp += size;
        }

        size *= 2;
    }
}

//Sorts from back end
function sort(arr, low, high)
{
    for (let i = low + 1; i < high; i++)
        for (let j = i; j > low; j--)
            if (arr[j] <= arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
}