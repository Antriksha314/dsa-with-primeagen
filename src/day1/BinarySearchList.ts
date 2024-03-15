export default function bs_list(haystack: number[], needle: number): boolean {
	if (haystack.length === 0){
		return false
	}

	let highIdx = haystack.length;
	let lowIdx = 0;

	do {
		let midIdx = Math.floor(lowIdx + (highIdx-lowIdx)/2);
		let midValue = haystack[midIdx]

		if( midValue === needle){
			return true
		} else if (needle > midValue){
			lowIdx = midIdx +1;
		} else {
			highIdx = midIdx
		}	
	} while(lowIdx < highIdx)

	return false;
}
