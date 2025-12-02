/*

    --- Part Two ---
    The clerk quickly discovers that there are still invalid IDs in the ranges in your list. Maybe the young Elf was doing other silly patterns as well?

    Now, an ID is invalid if it is made only of some sequence of digits repeated at least twice. So, 12341234 (1234 two times), 123123123 (123 three times), 1212121212 (12 five times), and 1111111 (1 seven times) are all invalid IDs.

    From the same example as before:

    11-22 still has two invalid IDs, 11 and 22.
    95-115 now has two invalid IDs, 99 and 111.
    998-1012 now has two invalid IDs, 999 and 1010.
    1188511880-1188511890 still has one invalid ID, 1188511885.
    222220-222224 still has one invalid ID, 222222.
    1698522-1698528 still contains no invalid IDs.
    446443-446449 still has one invalid ID, 446446.
    38593856-38593862 still has one invalid ID, 38593859.
    565653-565659 now has one invalid ID, 565656.
    824824821-824824827 now has one invalid ID, 824824824.
    2121212118-2121212124 now has one invalid ID, 2121212121.
    Adding up all the invalid IDs in this example produces 4174379265.

*/

/*

    Thoughts: Now the repeated paterns should be detected.
    Lets modify the function so that if a pattern repeats any number of time then it is true;
    Example: 646646 - true, 646464 - true, 64646 - false

*/

const invalidIDsCount = (id) => {

    const map = {};
    const firstChar = id[0];
    for(let i = 1; i < id.length; i++) {
        if(id[i] === firstChar) {
            const common = id.substring(0, i);
            if(id.replaceAll(common, "") === "") {
                return id;
            }
        }
    }
    return  0;

}

const findInvalidProductIds = (input) => {

    const ranges = input.split(",").map(range => {
        const [start, end] = range.split("-").map(Number);
        return {
            start, end
        };
    });

    let totalCount = 0;
    const seen = new Set();
    const maxNum = Math.max(...ranges.map(range => range.end));
    const maxDigit = maxNum.toString().length;

    for(let patternLen = 1; patternLen <= Math.floor(maxDigit / 2); patternLen++) {
        const minPattern = Math.pow(10, patternLen - 1);
        const maxPattern = Math.pow(10, patternLen) - 1;

        for(let pattern = minPattern; pattern <= maxPattern; pattern++) {
            let repeats = 2;

            let invalidId = Number(`${pattern}`.repeat(repeats));
            while(invalidId <= maxNum) {
                for(const range of ranges) {
                    if(invalidId >= range.start && invalidId <= range.end && !seen.has(invalidId)) {
                        seen.add(invalidId);
                        totalCount += invalidId;
                        break;
                    }
                }
                repeats++;
                invalidId = Number(`${pattern}`.repeat(repeats));
            }
        }

    }

    return totalCount;

}


console.log(findInvalidProductIds("26803-38596,161-351,37-56,9945663-10044587,350019-413817,5252508299-5252534634,38145069-38162596,1747127-1881019,609816-640411,207466-230638,18904-25781,131637-190261,438347308-438525264,5124157617-5124298820,68670991-68710448,8282798062-8282867198,2942-5251,659813-676399,57-99,5857600742-5857691960,9898925025-9899040061,745821-835116,2056-2782,686588904-686792094,5487438-5622255,325224-347154,352-630,244657-315699,459409-500499,639-918,78943-106934,3260856-3442902,3-20,887467-1022885,975-1863,5897-13354,43667065-43786338"));
