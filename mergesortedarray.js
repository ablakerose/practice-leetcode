var merge = function(nums1, m, nums2, n) {
    let i=0
    let j=0
    while(i < m) {
        if(nums2[j] >= nums1[i]){         
            i++;
        } else {
            nums1.splice(i, 0, nums2[j] )
            j++
            i++
            nums1.pop()
        }
    }
     while (j < n) {
         nums1[j+i] = nums2[j]
         j++
     }
};