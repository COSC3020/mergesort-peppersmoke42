// mergesort(array)
//
// For all subarray sizes smaller than the total array:
//   For all subarrays:
//      Declare middle index
//      Declare end index
//      Merge lower and upper half
function mergesort(array) 
{
    let len = array.length;
    for (let size = 1; size < len; size *= 2)
        for (let start = 0; start < len - 1; start += 2 * size) {
            let mid = Math.min(start + size - 1, len - 1);
            let end = Math.min(start + 2 * size - 1, len - 1);
            merge(array, start, mid, end);
        }
    return array;
}


// merge(arr, start, mid, end)
//
// Declare pointer for start of upper half
// While there are still elements in either array:
//    if (lower array element > upper array element)
//      save upper array element
//      push all elements between these two indices down by one
//      replace lower array element with saved value
//      update indices
function merge(arr, start, mid, end) {

    // Start is the current element of the 1st subarray, start2 is the current element of the 2nd
    let start2 = mid + 1;
    while (start <= mid && start2 <= end) 
    {
        if (arr[start] > arr[start2]) {
            let value = arr[start2];
            let index = start2;

            // Shift all elements down
            while (index != start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;

            // Update indices
            mid++;
            start2++;
        }
        start++;
    }
}