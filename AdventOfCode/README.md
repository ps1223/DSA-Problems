# Advent of Code 2025

Solutions for [Advent of Code 2025](https://adventofcode.com/2025)

## Progress Tracker

| Day | Part 1 | Part 2 | Notes |
|-----|--------|--------|-------|
| 1   | ⭐     | ⭐     |       |
| 2   | ⭐     | ⭐     | Invalid Product IDs - Pattern Detection |
| 3   |        |        |       |
| 4   |        |        |       |
| 5   |        |        |       |
| 6   |        |        |       |
| 7   |        |        |       |
| 8   |        |        |       |
| 9   |        |        |       |
| 10  |        |        |       |
| 11  |        |        |       |
| 12  |        |        |       |
| 13  |        |        |       |
| 14  |        |        |       |
| 15  |        |        |       |
| 16  |        |        |       |
| 17  |        |        |       |
| 18  |        |        |       |
| 19  |        |        |       |
| 20  |        |        |       |
| 21  |        |        |       |
| 22  |        |        |       |
| 23  |        |        |       |
| 24  |        |        |       |
| 25  |        |        |       |

## Running Solutions

```bash
node Day_X_part_1.js
node Day_X_part_2.js
```

## File Structure

```
AdventOfCode/
├── Day_1_part_1.js
├── Day_1_part_2.js
├── Day_2_part_1.js
├── Day_2_part_2.js
└── ...
```

## Notes & Learnings

### Day 1
-

### Day 2: Gift Shop - Invalid Product IDs
**Problem**: Find invalid product IDs that are repeated patterns in given ranges.

**Part 1**: Detect IDs that are exactly a pattern repeated twice (e.g., 55, 6464, 123123)
- Approach: Check if a string can be split exactly in half with identical parts
- Key logic: For each position, check if substring(0, i) repeated twice equals the full ID

**Part 2**: Detect IDs that are any pattern repeated 2+ times (e.g., 1111, 121212, 123123123)
- Approach: Check if a pattern can be repeated n times to form the ID
- Key logic: Use `replaceAll()` to remove all instances of pattern - if result is empty string, it's invalid
- Both parts sum up all invalid IDs found in the ranges

### General Tips
- Read the problem carefully - Part 2 often builds on Part 1
- Test with the example inputs before running on actual input
- Keep puzzle inputs separate from code

## Useful Resources

- [Advent of Code 2025](https://adventofcode.com/2025)
- [Subreddit](https://www.reddit.com/r/adventofcode/)
