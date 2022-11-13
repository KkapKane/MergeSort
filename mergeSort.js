

function mergeSort(l, h)
{
    if (l < h) {
        mid = (l + h) / 2;
        mergeSort(l, mid);
        mergeSort(mid + 1, h);
        mergeSort(l, mid, h);
    
    }
    
}



//m = lenght of firstlist
// n = length of second list

 const mergeSortRec = (arr) => {
	if (arr.length === 0) return "Please provide a non empty array!"
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	return merge(mergeSortRec(left), mergeSortRec(right));
};
 


function merge(a,b,m,n) {
    let i = 0
    let j = 0
    let k = 0
    
    while (i <= m && j <= n) {
        if (a[i] < b[j]) {
            c[k++] = a[i++];
        }
        else {
            c[k++] = b[j++];
        }
        
    }
    for (; i <= m; i++) {
        c[k++] = a[i]
    }
    for (; j <= n; j++)
    {
        c[k++] = b[j]
        }
    console.log(c)
}

let a = [2, 8, 15, 18]
let b = [5, 9, 12, 17]
let c = [];

merge(a,b,a.length,b.length)