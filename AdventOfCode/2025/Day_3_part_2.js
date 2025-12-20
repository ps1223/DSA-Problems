/*

    --- Part Two ---
    The escalator doesn't move. The Elf explains that it probably needs more joltage to overcome the static friction of the system and hits the big red "joltage limit safety override" button. You lose count of the number of times she needs to confirm "yes, I'm sure" and decorate the lobby a bit while you wait.

    Now, you need to make the largest joltage by turning on exactly twelve batteries within each bank.

    The joltage output for the bank is still the number formed by the digits of the batteries you've turned on; the only difference is that now there will be 12 digits in each bank's joltage output instead of two.

    Consider again the example from before:

    987654321111111
    811111111111119
    234234234234278
    818181911112111
    Now, the joltages are much larger:

    In 987654321111111, the largest joltage can be found by turning on everything except some 1s at the end to produce 987654321111.
    In the digit sequence 811111111111119, the largest joltage can be found by turning on everything except some 1s, producing 811111111119.
    In 234234234234278, the largest joltage can be found by turning on everything except a 2 battery, a 3 battery, and another 2 battery near the start to produce 434234234278.
    In 818181911112111, the joltage 888911112111 is produced by turning on everything except some 1s near the front.
    The total output joltage is now much larger: 987654321111 + 811111111119 + 434234234278 + 888911112111 = 3121910778619.

    What is the new total output joltage?

*/

/*

    Thoughts: Since 12 digits needs to be generated, maybe we can try to create a hashmap for each line on how many digits available
    Then iterate 12 times to construct the max digit based on the data from hashmap 

    <--- The above doesn't work since we can't change the order of the element --->

    Maybe create an array of 12 elements

*/

const input = require("./input/Day_3");

const sampleInput = `987654321111111
811111111111119
234234234234278
818181911112111`;

const calculateMaxJoltageForBank = (line, digitsToKeep) => {
    const digitsToRemove = line.length - digitsToKeep;
    const stack = [];
    let removed = 0;
    
    for (let i = 0; i < line.length; i++) {
        const currentDigit = line[i];
        
        while (stack.length > 0 && 
               removed < digitsToRemove && 
               currentDigit > stack[stack.length - 1]) {
            stack.pop();
            removed++;
        }
        
        stack.push(currentDigit);
    }
    
    while (removed < digitsToRemove) {
        stack.pop();
        removed++;
    }
    
    return stack.join('');
}

const calculateTotalJoltagePart2 = (input) => {
    const lines = input.split("\n");
    let totalJoltage = BigInt(0);
    
    for (const line of lines) {
        const maxJoltage = calculateMaxJoltageForBank(line, 12);
        console.log(`${line} → ${maxJoltage}`);
        totalJoltage += BigInt(maxJoltage);
    }
    
    return totalJoltage.toString();
}

console.log(calculateTotalJoltagePart2(input));
