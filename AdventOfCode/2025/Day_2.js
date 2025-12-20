/*

    --- Day 2: Gift Shop ---
    You get inside and take the elevator to its only other stop: the gift shop. "Thank you for visiting the North Pole!" gleefully exclaims a nearby sign. You aren't sure who is even allowed to visit the North Pole, but you know you can access the lobby through here, and from there you can access the rest of the North Pole base.

    As you make your way through the surprisingly extensive selection, one of the clerks recognizes you and asks for your help.

    As it turns out, one of the younger Elves was playing on a gift shop computer and managed to add a whole bunch of invalid product IDs to their gift shop database! Surely, it would be no trouble for you to identify the invalid product IDs for them, right?

    They've even checked most of the product ID ranges already; they only have a few product ID ranges (your puzzle input) that you'll need to check. For example:

    11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
    1698522-1698528,446443-446449,38593856-38593862,565653-565659,
    824824821-824824827,2121212118-2121212124
    (The ID ranges are wrapped here for legibility; in your input, they appear on a single long line.)

    The ranges are separated by commas (,); each range gives its first ID and last ID separated by a dash (-).

    Since the young Elf was just doing silly patterns, you can find the invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice. So, 55 (5 twice), 6464 (64 twice), and 123123 (123 twice) would all be invalid IDs.

    None of the numbers have leading zeroes; 0101 isn't an ID at all. (101 is a valid ID that you would ignore.)

    Your job is to find all of the invalid IDs that appear in the given ranges. In the above example:

    11-22 has two invalid IDs, 11 and 22.
    95-115 has one invalid ID, 99.
    998-1012 has one invalid ID, 1010.
    1188511880-1188511890 has one invalid ID, 1188511885.
    222220-222224 has one invalid ID, 222222.
    1698522-1698528 contains no invalid IDs.
    446443-446449 has one invalid ID, 446446.
    38593856-38593862 has one invalid ID, 38593859.
    The rest of the ranges contain no invalid IDs.
    Adding up all the invalid IDs in this example produces 1227775554.

*/

/*

    Thoughts: Now the repeated paterns should be detected.
    Lets build a small function find if the string is a repeated value
    Example: 646646 - true, 646464 - false
    Iteration 1:
    Current implementation is not good, since the id is invalid when the same string is duplicated again
    Iteration 2:
    Even in this implementation we need to iterate through all the items in the range. A better approach is to generate the possible numbers and check if they are in range

*/

// const invalidIDsCount = (id) => {

//     const map = {};
//     const firstChar = id[0];
//     for(let i = 1; i < id.length; i++) {
//         if(id[i] === firstChar) {
//             const common = id.substring(0, i);
//             if(id === `${common}${common}`) {
//                 return id;
//             }
//         }
//     }
//     return  0;

// }

// const invalidIDsCount = (id) => {

//     const mid = Math.floor(id.length / 2);
//     const half = id.substring(0, mid);
//     return  `${half}${half}` === id ? Number(id) : 0;

// }

const findInvalidProductIds = (input) => {

    const seen = new Set();

    const ranges = input.split(",").map(range => {
        const [start, end] = range.split("-").map(Number);
        return {
            start, end
        };
    });


    let totalCount = 0;
    const maxNum = Math.max(...ranges.map(range => range.end));
    const maxDigits = maxNum.toString().length;

    for(let i = 1; i <= Math.floor(maxDigits / 2); i++) {
        const minPattern = Math.pow(10, i - 1);
        const maxPattern = Math.pow(10, i) - 1;
        console.log(minPattern, maxPattern);
        for(let pattern = minPattern; pattern <= maxPattern; pattern++) {
            const invalidProductId = Number(`${pattern}${pattern}`);
            if(seen.has(invalidProductId)) {
                continue;
            }
            for(const range of ranges) {
                if(invalidProductId >= range.start && invalidProductId <= range.end) {
                    console.log(invalidProductId);
                    totalCount += invalidProductId;
                    seen.add(invalidProductId);
                    break;
                }
            }
        }
    }

    return totalCount;

}


console.log(findInvalidProductIds("26803-38596,161-351,37-56,9945663-10044587,350019-413817,5252508299-5252534634,38145069-38162596,1747127-1881019,609816-640411,207466-230638,18904-25781,131637-190261,438347308-438525264,5124157617-5124298820,68670991-68710448,8282798062-8282867198,2942-5251,659813-676399,57-99,5857600742-5857691960,9898925025-9899040061,745821-835116,2056-2782,686588904-686792094,5487438-5622255,325224-347154,352-630,244657-315699,459409-500499,639-918,78943-106934,3260856-3442902,3-20,887467-1022885,975-1863,5897-13354,43667065-43786338"));
// console.log(findInvalidProductIds("11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"));
