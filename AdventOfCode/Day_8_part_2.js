/*

--- Part Two ---
The Elves were right; they definitely don't have enough extension cables. You'll need to keep connecting junction boxes together until they're all in one large circuit.

Continuing the above example, the first connection which causes all of the junction boxes to form a single circuit is between the junction boxes at 216,146,977 and 117,168,530. The Elves need to know how far those junction boxes are from the wall so they can pick the right extension cable; multiplying the X coordinates of those two junction boxes (216 and 117) produces 25272.

Continue connecting the closest unconnected pairs of junction boxes together until they're all in the same circuit. What do you get if you multiply together the X coordinates of the last two junction boxes you need to connect?

*/

/*

    Made a mess on the 1st part with brute force, this is a better approach comparitively but need to check it can be improved.

*/

const calculateCircuitProduct = (input) => {

    const list = input.split("\n");

    const circuits = [];

    const distances = {};

    for(let i = 0; i < list.length - 1; i++) {
        for(let j = i + 1; j < list.length; j++) {
            const distance = findThreeDDistance(list[i], list[j]);
            distances[distance] = [list[i], list[j]];
        }
    }
    const sortedDistance = Object.keys(distances).sort((a, b) => Number(a) - Number(b));
    // console.log(distances);

    // const checkedBoxes = {};

    let lastCircuit = ["", ""];

    for(const distance of sortedDistance) {
        const currentCircuit = ["", ""];
        const [box1, box2] = distances[distance];
        // if(!checkedBoxes[`${box1},${box2}`]) {
            currentCircuit[0] = box1;
            currentCircuit[1] = box2;
            // checkedBoxes[`${currentCircuit.join(",")}`] = true;

            // console.log(Object.keys(checkedBoxes));
        // }
        const firstBoxIndex = circuits.findIndex(circuit => circuit.includes(currentCircuit[0]));
        const secondBoxIndex = circuits.findIndex(circuit => circuit.includes(currentCircuit[1]));

        if(firstBoxIndex === -1 && secondBoxIndex === -1) {
            circuits.push(currentCircuit);
        } else if(firstBoxIndex > -1 && secondBoxIndex > -1 && firstBoxIndex === secondBoxIndex) {
        } else if(firstBoxIndex > -1 && secondBoxIndex > -1) {
            circuits[firstBoxIndex] = [...circuits[firstBoxIndex], ...circuits[secondBoxIndex]];
            circuits.splice(secondBoxIndex, 1);
        } else {
            const index = firstBoxIndex > -1 ? firstBoxIndex : secondBoxIndex;
            const box = firstBoxIndex > -1 ? currentCircuit[1] : currentCircuit[0];
            circuits[index] = [...circuits[index], box];
        }
        let count = 0;
        for(const circuit of circuits) {
            count += circuit.length;
        }
        if(count === list.length) {
            lastCircuit = currentCircuit;

            console.log("Last box, ", currentCircuit);
            break;
        }
    }

    return lastCircuit[0].split(",")[0] * lastCircuit[1].split(",")[0];

}

const findThreeDDistance = (a, b) => {

    a = a.split(",");
    b = b.split(",");
    return Math.sqrt((Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)));

}

const sampleInput = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;

const input = require("./input/Day_8");

// console.log(input.length);

console.log(calculateCircuitProduct(input));

// console.log(calculateCircuitProduct(sampleInput));
