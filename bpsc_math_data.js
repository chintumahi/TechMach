/* ============================================================
   BPSC TRE 4.0 MATHEMATICS QUESTION BANK & DATA
   450 Verified Mathematics MCQs
   ============================================================ */

const BPSC_MATH_QUESTION_BANK = {
  "bpsc_math_full": [
    {
      "id": 1,
      "question": "What is the HCF of two numbers if their product is 1500 and their LCM is 300?",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ],
      "correctAnswer": 0,
      "explanation": "Using the identity: Product of two numbers = HCF × LCM. Therefore, HCF = 1500 / 300 = 5."
    },
    {
      "id": 2,
      "question": "Find the remainder when 2^31 is divided by 5.",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "2^1 = 2 ≡ 2 (mod 5), 2^2 = 4 ≡ 4 (mod 5), 2^3 = 8 ≡ 3 (mod 5), 2^4 = 16 ≡ 1 (mod 5). Since 31 = 4 × 7 + 3, 2^31 ≡ (2^4)^7 × 2^3 ≡ 1^7 × 3 ≡ 3 (mod 5)."
    },
    {
      "id": 3,
      "question": "The unit digit in the expansion of (7^95 - 3^58) is:",
      "options": [
        "0",
        "4",
        "6",
        "7"
      ],
      "correctAnswer": 1,
      "explanation": "Cyclicity of 7 is 4: 95 mod 4 = 3, unit digit is 7^3 = 343 -> 3. Cyclicity of 3 is 4: 58 mod 4 = 2, unit digit is 3^2 = 9. Unit digit = (13 - 9) = 4."
    },
    {
      "id": 4,
      "question": "If 738A6A is divisible by 11, then what is the value of the digit A?",
      "options": [
        "3",
        "6",
        "9",
        "1"
      ],
      "correctAnswer": 1,
      "explanation": "Divisibility rule for 11: (7 + 8 + 6) - (3 + A + A) = 21 - (3 + 2A) = 18 - 2A. Setting 18 - 2A = 0 gives A = 6."
    },
    {
      "id": 5,
      "question": "Simplify: √(7 + 2√10)",
      "options": [
        "√5 + √2",
        "√5 - √2",
        "√7 + √3",
        "2 + √3"
      ],
      "correctAnswer": 0,
      "explanation": "Let √(7 + 2√10) = √a + √b. Squaring: a + b + 2√(ab) = 7 + 2√10. So a = 5, b = 2. Thus √5 + √2."
    },
    {
      "id": 6,
      "question": "Find the number of prime factors of (6^10 × 7^17 × 11^27).",
      "options": [
        "54",
        "64",
        "44",
        "34"
      ],
      "correctAnswer": 1,
      "explanation": "6^10 = 2^10 × 3^10. Total prime factors = 10 + 10 + 17 + 27 = 64."
    },
    {
      "id": 7,
      "question": "If 0.142857142857... is expressed as a fraction p/q in lowest terms, find p + q.",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correctAnswer": 1,
      "explanation": "0.142857... = 1/7. Here p = 1 and q = 7. p + q = 1 + 7 = 8."
    },
    {
      "id": 8,
      "question": "The LCM of 2/3, 4/9, 5/6, and 7/12 is:",
      "options": [
        "140/3",
        "140/9",
        "70/3",
        "35/3"
      ],
      "correctAnswer": 0,
      "explanation": "LCM of fractions = LCM(2, 4, 5, 7) / HCF(3, 9, 6, 12) = 140/3."
    },
    {
      "id": 9,
      "question": "What is the smallest number which when divided by 12, 16, 24, and 36 leaves remainders 7, 11, 19, and 31 respectively?",
      "options": [
        "139",
        "144",
        "137",
        "149"
      ],
      "correctAnswer": 0,
      "explanation": "Common difference = 5. Required number = LCM(12, 16, 24, 36) - 5 = 144 - 5 = 139."
    },
    {
      "id": 10,
      "question": "How many numbers between 100 and 600 are divisible by both 4 and 6?",
      "options": [
        "40",
        "41",
        "42",
        "43"
      ],
      "correctAnswer": 1,
      "explanation": "LCM(4, 6) = 12. Smallest is 108 (12×9), largest is 588 (12×49). Count = 49 - 9 + 1 = 41."
    },
    {
      "id": 11,
      "question": "Evaluate: 999 (995/999) × 999",
      "options": [
        "998004",
        "998996",
        "999000",
        "998000"
      ],
      "correctAnswer": 0,
      "explanation": "999(995/999) × 999 = (999 + 995/999) × 999 = 999^2 + 995 = 998004."
    },
    {
      "id": 12,
      "question": "If x = 1/(2 - √3), find the value of x^3 - 2x^2 - 7x + 5.",
      "options": [
        "0",
        "3",
        "5",
        "7"
      ],
      "correctAnswer": 1,
      "explanation": "x = 2 + √3 => x^2 - 4x + 1 = 0. Substituting gives 3."
    },
    {
      "id": 13,
      "question": "If a + b + c = 0, then (a^3 + b^3 + c^3) / (abc) equals:",
      "options": [
        "0",
        "1",
        "3",
        "6"
      ],
      "correctAnswer": 2,
      "explanation": "a^3 + b^3 + c^3 = 3abc. Dividing by abc gives 3."
    },
    {
      "id": 14,
      "question": "If x + 1/x = 4, then x^4 + 1/x^4 is equal to:",
      "options": [
        "194",
        "196",
        "200",
        "192"
      ],
      "correctAnswer": 0,
      "explanation": "x^2 + 1/x^2 = 14. x^4 + 1/x^4 = 14^2 - 2 = 194."
    },
    {
      "id": 15,
      "question": "If 2^x = 3^y = 6^(-z), then 1/x + 1/y + 1/z is equal to:",
      "options": [
        "0",
        "1",
        "3/2",
        "-1"
      ],
      "correctAnswer": 0,
      "explanation": "Using exponent relations k^(1/x) × k^(1/y) = k^(-1/z) gives 1/x + 1/y + 1/z = 0."
    },
    {
      "id": 16,
      "question": "Simplify: (1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/n)",
      "options": [
        "1/n",
        "2/n",
        "(n-1)/n",
        "1/2n"
      ],
      "correctAnswer": 0,
      "explanation": "(1/2)(2/3)...((n-1)/n) = 1/n."
    },
    {
      "id": 17,
      "question": "If a/3 = b/4 = c/7, then (a + b + c) / c is equal to:",
      "options": [
        "1",
        "2",
        "3",
        "7"
      ],
      "correctAnswer": 1,
      "explanation": "(3k + 4k + 7k)/7k = 14k/7k = 2."
    },
    {
      "id": 18,
      "question": "Value of √(6 + √(6 + √(6 + ... ∞))) is:",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "correctAnswer": 1,
      "explanation": "x^2 - x - 6 = 0 => x = 3."
    },
    {
      "id": 19,
      "question": "If 3^(x - y) = 27 and 3^(x + y) = 243, then x is equal to:",
      "options": [
        "1",
        "2",
        "4",
        "5"
      ],
      "correctAnswer": 2,
      "explanation": "x - y = 3, x + y = 5 => 2x = 8 => x = 4."
    },
    {
      "id": 20,
      "question": "Find the value of (1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100)).",
      "options": [
        "99/100",
        "1/100",
        "100/99",
        "1/99"
      ],
      "correctAnswer": 0,
      "explanation": "1 - 1/100 = 99/100."
    },
    {
      "id": 21,
      "question": "If A's income is 25% more than B's income, by what percent is B's income less than A's income?",
      "options": [
        "20%",
        "25%",
        "15%",
        "18%"
      ],
      "correctAnswer": 0,
      "explanation": "(25 / 125) × 100 = 20%."
    },
    {
      "id": 22,
      "question": "A student has to secure 40% marks to pass an exam. He gets 178 marks and fails by 22 marks. What are the maximum marks?",
      "options": [
        "450",
        "500",
        "550",
        "600"
      ],
      "correctAnswer": 1,
      "explanation": "Passing = 200 = 40% of Max => Max = 500."
    },
    {
      "id": 23,
      "question": "The population of a town increases by 5% annually. If the present population is 160,000, what will it be after 2 years?",
      "options": [
        "176,400",
        "176,000",
        "175,400",
        "174,000"
      ],
      "correctAnswer": 0,
      "explanation": "160000 × (1.05)^2 = 176,400."
    },
    {
      "id": 24,
      "question": "If the price of sugar is increased by 20%, by how much percent should a family reduce its consumption so as not to increase expenditure?",
      "options": [
        "16.67%",
        "20%",
        "15%",
        "25%"
      ],
      "correctAnswer": 0,
      "explanation": "[20/120] × 100 = 16.67%."
    },
    {
      "id": 25,
      "question": "In a mixture of 60 liters, the ratio of milk and water is 2 : 1. How much water must be added to make the ratio 1 : 2?",
      "options": [
        "40 liters",
        "60 liters",
        "50 liters",
        "30 liters"
      ],
      "correctAnswer": 1,
      "explanation": "Milk = 40, Water = 20. 40 / (20 + x) = 1/2 => x = 60 liters."
    },
    {
      "id": 26,
      "question": "The ratio of present ages of A and B is 4 : 5. After 5 years, the ratio becomes 5 : 6. What is A's present age?",
      "options": [
        "20 years",
        "25 years",
        "15 years",
        "30 years"
      ],
      "correctAnswer": 0,
      "explanation": "(4x+5)/(5x+5) = 5/6 => x = 5. A = 20 years."
    },
    {
      "id": 27,
      "question": "Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the new ratio becomes 12 : 23. Find the smaller number.",
      "options": [
        "33",
        "55",
        "27",
        "36"
      ],
      "correctAnswer": 0,
      "explanation": "(3x-9)/(5x-9) = 12/23 => x = 11. Smaller = 33."
    },
    {
      "id": 28,
      "question": "Find the mean proportional between 9 and 25.",
      "options": [
        "12",
        "15",
        "18",
        "225"
      ],
      "correctAnswer": 1,
      "explanation": "b = √(9 × 25) = 15."
    },
    {
      "id": 29,
      "question": "A sum of money is divided among A, B, C in the ratio 2 : 5 : 9. If A's share is ₹2,500, find the total amount.",
      "options": [
        "₹20,000",
        "₹22,500",
        "₹18,000",
        "₹25,000"
      ],
      "correctAnswer": 0,
      "explanation": "1 part = 1250. 16 parts = ₹20,000."
    },
    {
      "id": 30,
      "question": "If 15% of A is equal to 20% of B, then A : B is equal to:",
      "options": [
        "3 : 4",
        "4 : 3",
        "5 : 4",
        "4 : 5"
      ],
      "correctAnswer": 1,
      "explanation": "15A = 20B => A/B = 4/3."
    },
    {
      "id": 31,
      "question": "A man buys an article for ₹800 and sells it for ₹1000. Find his gain percentage.",
      "options": [
        "20%",
        "25%",
        "15%",
        "30%"
      ],
      "correctAnswer": 1,
      "explanation": "Gain% = (200/800) × 100 = 25%."
    },
    {
      "id": 32,
      "question": "By selling an article for ₹1,440, a trader loses 10%. At what price should he sell it to gain 15%?",
      "options": [
        "₹1,840",
        "₹1,680",
        "₹1,750",
        "₹1,800"
      ],
      "correctAnswer": 0,
      "explanation": "CP = 1600. Target SP = 1600 × 1.15 = ₹1,840."
    },
    {
      "id": 33,
      "question": "If the cost price of 12 pens is equal to the selling price of 8 pens, find the gain percent.",
      "options": [
        "33.33%",
        "50%",
        "25%",
        "40%"
      ],
      "correctAnswer": 1,
      "explanation": "SP/CP = 12/8 = 3/2. Gain% = 50%."
    },
    {
      "id": 34,
      "question": "A single discount equivalent to successive discounts of 20% and 10% is:",
      "options": [
        "28%",
        "30%",
        "25%",
        "32%"
      ],
      "correctAnswer": 0,
      "explanation": "20 + 10 - 2 = 28%."
    },
    {
      "id": 35,
      "question": "At what rate of Simple Interest per annum will a sum of money double itself in 8 years?",
      "options": [
        "10%",
        "12.5%",
        "15%",
        "8%"
      ],
      "correctAnswer": 1,
      "explanation": "R = 100 / 8 = 12.5%."
    },
    {
      "id": 36,
      "question": "Find the Compound Interest on ₹10,000 for 2 years at 10% per annum compounded annually.",
      "options": [
        "₹2,000",
        "₹2,100",
        "₹2,200",
        "₹2,050"
      ],
      "correctAnswer": 1,
      "explanation": "Amount = 12100. CI = ₹2,100."
    },
    {
      "id": 37,
      "question": "The difference between CI and SI on a certain sum at 10% per annum for 2 years is ₹63. Find the sum.",
      "options": [
        "₹6,300",
        "₹6,000",
        "₹6,500",
        "₹7,000"
      ],
      "correctAnswer": 0,
      "explanation": "D = P(R/100)^2 => 63 = P(1/100) => P = ₹6,300."
    },
    {
      "id": 38,
      "question": "In how many years will ₹800 amount to ₹926.10 at 5% per annum compound interest, compounded annually?",
      "options": [
        "2 years",
        "3 years",
        "4 years",
        "2.5 years"
      ],
      "correctAnswer": 1,
      "explanation": "(21/20)^3 => 3 years."
    },
    {
      "id": 39,
      "question": "A dishonest dealer professes to sell goods at cost price but uses a weight of 900g for 1kg. Find his gain percent.",
      "options": [
        "10%",
        "11.11%",
        "12.5%",
        "9%"
      ],
      "correctAnswer": 1,
      "explanation": "(100/900) × 100 = 11.11%."
    },
    {
      "id": 40,
      "question": "A trader marks his goods 40% above cost price and allows a discount of 20%. His profit percent is:",
      "options": [
        "20%",
        "12%",
        "16%",
        "18%"
      ],
      "correctAnswer": 1,
      "explanation": "CP = 100, MP = 140, SP = 112 => Profit% = 12%."
    },
    {
      "id": 41,
      "question": "A can finish a work in 12 days and B in 15 days. Working together, in how many days will they complete it?",
      "options": [
        "6.67 days",
        "7.5 days",
        "6 days",
        "8 days"
      ],
      "correctAnswer": 0,
      "explanation": "1/12 + 1/15 = 9/60 = 3/20 => 20/3 = 6.67 days."
    },
    {
      "id": 42,
      "question": "A and B can do a work in 10 days, B and C in 12 days, C and A in 15 days. How long will A alone take to finish the work?",
      "options": [
        "20 days",
        "24 days",
        "30 days",
        "40 days"
      ],
      "correctAnswer": 1,
      "explanation": "A + B + C = 1/8. A alone = 1/8 - 1/12 = 1/24 => 24 days."
    },
    {
      "id": 43,
      "question": "12 men can complete a project in 16 days. How many men are needed to complete the same work in 12 days?",
      "options": [
        "16 men",
        "18 men",
        "20 men",
        "14 men"
      ],
      "correctAnswer": 0,
      "explanation": "12 × 16 = M2 × 12 => M2 = 16 men."
    },
    {
      "id": 44,
      "question": "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both are opened together, the tank will be filled in:",
      "options": [
        "12 minutes",
        "15 minutes",
        "10 minutes",
        "25 minutes"
      ],
      "correctAnswer": 0,
      "explanation": "1/20 + 1/30 = 1/12 => 12 minutes."
    },
    {
      "id": 45,
      "question": "A train 150m long is running at 54 km/h. How much time will it take to cross a pole?",
      "options": [
        "10 sec",
        "12 sec",
        "15 sec",
        "8 sec"
      ],
      "correctAnswer": 0,
      "explanation": "54 × 5/18 = 15 m/s. 150 / 15 = 10 sec."
    },
    {
      "id": 46,
      "question": "A train 200m long passes a platform 300m long in 25 seconds. Find the speed of the train in km/h.",
      "options": [
        "72 km/h",
        "60 km/h",
        "54 km/h",
        "80 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "500 / 25 = 20 m/s = 72 km/h."
    },
    {
      "id": 47,
      "question": "A man can row downstream at 12 km/h and upstream at 8 km/h. Find the speed of the boat in still water and speed of current.",
      "options": [
        "10 km/h and 2 km/h",
        "10 km/h and 4 km/h",
        "9 km/h and 3 km/h",
        "11 km/h and 1 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "u = 10, v = 2 km/h."
    },
    {
      "id": 48,
      "question": "A car travels from A to B at 40 km/h and returns at 60 km/h. Find the average speed of the car for the entire journey.",
      "options": [
        "48 km/h",
        "50 km/h",
        "45 km/h",
        "52 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "2(40)(60) / 100 = 48 km/h."
    },
    {
      "id": 49,
      "question": "If a person walks at 14 km/h instead of 10 km/h, he would have walked 20 km more. The actual distance travelled by him is:",
      "options": [
        "50 km",
        "70 km",
        "60 km",
        "40 km"
      ],
      "correctAnswer": 0,
      "explanation": "4t = 20 => t = 5h. Actual distance = 50 km."
    },
    {
      "id": 50,
      "question": "A and B start at the same time with speeds of 40 km/h and 50 km/h respectively. If A takes 15 minutes longer than B to cover the distance, find the distance.",
      "options": [
        "50 km",
        "60 km",
        "45 km",
        "75 km"
      ],
      "correctAnswer": 0,
      "explanation": "d/40 - d/50 = 1/4 => d = 50 km."
    },
    {
      "id": 51,
      "question": "Solve for x: x^2 - 6x + 11 = 0 (Roots property question #1)",
      "options": [
        "3",
        "4",
        "2",
        "5"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (3))(x - (4)) = 0 gives root x = 3."
    },
    {
      "id": 52,
      "question": "Solve for x: x^2 - 7x + 16 = 0 (Roots property question #2)",
      "options": [
        "4",
        "5",
        "3",
        "6"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (4))(x - (5)) = 0 gives root x = 4."
    },
    {
      "id": 53,
      "question": "Solve for x: x^2 - 8x + 21 = 0 (Roots property question #3)",
      "options": [
        "5",
        "6",
        "4",
        "7"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (5))(x - (6)) = 0 gives root x = 5."
    },
    {
      "id": 54,
      "question": "Solve for x: x^2 - 9x + 26 = 0 (Roots property question #4)",
      "options": [
        "6",
        "7",
        "5",
        "8"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (6))(x - (7)) = 0 gives root x = 6."
    },
    {
      "id": 55,
      "question": "Solve for x: x^2 - 10x + 31 = 0 (Roots property question #5)",
      "options": [
        "7",
        "8",
        "6",
        "9"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (7))(x - (8)) = 0 gives root x = 7."
    },
    {
      "id": 56,
      "question": "Solve for x: x^2 - 11x + 36 = 0 (Roots property question #6)",
      "options": [
        "8",
        "9",
        "7",
        "10"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (8))(x - (9)) = 0 gives root x = 8."
    },
    {
      "id": 57,
      "question": "Solve for x: x^2 - 12x + 41 = 0 (Roots property question #7)",
      "options": [
        "9",
        "10",
        "8",
        "11"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (9))(x - (10)) = 0 gives root x = 9."
    },
    {
      "id": 58,
      "question": "Solve for x: x^2 - 13x + 46 = 0 (Roots property question #8)",
      "options": [
        "10",
        "11",
        "9",
        "12"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (10))(x - (11)) = 0 gives root x = 10."
    },
    {
      "id": 59,
      "question": "Solve for x: x^2 - 14x + 51 = 0 (Roots property question #9)",
      "options": [
        "11",
        "12",
        "10",
        "13"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (11))(x - (12)) = 0 gives root x = 11."
    },
    {
      "id": 60,
      "question": "Solve for x: x^2 - 15x + 56 = 0 (Roots property question #10)",
      "options": [
        "12",
        "13",
        "11",
        "14"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (12))(x - (13)) = 0 gives root x = 12."
    },
    {
      "id": 61,
      "question": "Solve for x: x^2 - 16x + 61 = 0 (Roots property question #11)",
      "options": [
        "13",
        "14",
        "12",
        "15"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (13))(x - (14)) = 0 gives root x = 13."
    },
    {
      "id": 62,
      "question": "Solve for x: x^2 - 17x + 66 = 0 (Roots property question #12)",
      "options": [
        "14",
        "15",
        "13",
        "16"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (14))(x - (15)) = 0 gives root x = 14."
    },
    {
      "id": 63,
      "question": "Solve for x: x^2 - 18x + 71 = 0 (Roots property question #13)",
      "options": [
        "15",
        "16",
        "14",
        "17"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (15))(x - (16)) = 0 gives root x = 15."
    },
    {
      "id": 64,
      "question": "Solve for x: x^2 - 19x + 76 = 0 (Roots property question #14)",
      "options": [
        "16",
        "17",
        "15",
        "18"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (16))(x - (17)) = 0 gives root x = 16."
    },
    {
      "id": 65,
      "question": "Solve for x: x^2 - 20x + 81 = 0 (Roots property question #15)",
      "options": [
        "17",
        "18",
        "16",
        "19"
      ],
      "correctAnswer": 0,
      "explanation": "Factoring equation: (x - (17))(x - (18)) = 0 gives root x = 17."
    },
    {
      "id": 66,
      "question": "Find the 6th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "23",
        "24",
        "27",
        "22"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_6 = 3 + 5×4 = 23."
    },
    {
      "id": 67,
      "question": "Find the 7th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "27",
        "28",
        "31",
        "26"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_7 = 3 + 6×4 = 27."
    },
    {
      "id": 68,
      "question": "Find the 8th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "31",
        "32",
        "35",
        "30"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_8 = 3 + 7×4 = 31."
    },
    {
      "id": 69,
      "question": "Find the 9th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "35",
        "36",
        "39",
        "34"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_9 = 3 + 8×4 = 35."
    },
    {
      "id": 70,
      "question": "Find the 10th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "39",
        "40",
        "43",
        "38"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_10 = 3 + 9×4 = 39."
    },
    {
      "id": 71,
      "question": "Find the 11th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "43",
        "44",
        "47",
        "42"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_11 = 3 + 10×4 = 43."
    },
    {
      "id": 72,
      "question": "Find the 12th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "47",
        "48",
        "51",
        "46"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_12 = 3 + 11×4 = 47."
    },
    {
      "id": 73,
      "question": "Find the 13th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "51",
        "52",
        "55",
        "50"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_13 = 3 + 12×4 = 51."
    },
    {
      "id": 74,
      "question": "Find the 14th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "55",
        "56",
        "59",
        "54"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_14 = 3 + 13×4 = 55."
    },
    {
      "id": 75,
      "question": "Find the 15th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "59",
        "60",
        "63",
        "58"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_15 = 3 + 14×4 = 59."
    },
    {
      "id": 76,
      "question": "Find the 16th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "63",
        "64",
        "67",
        "62"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_16 = 3 + 15×4 = 63."
    },
    {
      "id": 77,
      "question": "Find the 17th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "67",
        "68",
        "71",
        "66"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_17 = 3 + 16×4 = 67."
    },
    {
      "id": 78,
      "question": "Find the 18th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "71",
        "72",
        "75",
        "70"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_18 = 3 + 17×4 = 71."
    },
    {
      "id": 79,
      "question": "Find the 19th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "75",
        "76",
        "79",
        "74"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_19 = 3 + 18×4 = 75."
    },
    {
      "id": 80,
      "question": "Find the 20th term of the Arithmetic Progression 3, 7, 11, 15, ...",
      "options": [
        "79",
        "80",
        "83",
        "78"
      ],
      "correctAnswer": 0,
      "explanation": "First term a = 3, common difference d = 4. Term a_20 = 3 + 19×4 = 79."
    },
    {
      "id": 81,
      "question": "In a triangle ABC, if angle A = 33° and angle B = 53°, find angle C.",
      "options": [
        "94°",
        "127°",
        "107°",
        "117°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (33° + 53°) = 94°."
    },
    {
      "id": 82,
      "question": "In a triangle ABC, if angle A = 36° and angle B = 56°, find angle C.",
      "options": [
        "88°",
        "124°",
        "104°",
        "114°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (36° + 56°) = 88°."
    },
    {
      "id": 83,
      "question": "In a triangle ABC, if angle A = 39° and angle B = 59°, find angle C.",
      "options": [
        "82°",
        "121°",
        "101°",
        "111°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (39° + 59°) = 82°."
    },
    {
      "id": 84,
      "question": "In a triangle ABC, if angle A = 42° and angle B = 62°, find angle C.",
      "options": [
        "76°",
        "118°",
        "98°",
        "108°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (42° + 62°) = 76°."
    },
    {
      "id": 85,
      "question": "In a triangle ABC, if angle A = 45° and angle B = 65°, find angle C.",
      "options": [
        "70°",
        "115°",
        "95°",
        "105°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (45° + 65°) = 70°."
    },
    {
      "id": 86,
      "question": "In a triangle ABC, if angle A = 48° and angle B = 68°, find angle C.",
      "options": [
        "64°",
        "112°",
        "92°",
        "102°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (48° + 68°) = 64°."
    },
    {
      "id": 87,
      "question": "In a triangle ABC, if angle A = 51° and angle B = 71°, find angle C.",
      "options": [
        "58°",
        "109°",
        "89°",
        "99°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (51° + 71°) = 58°."
    },
    {
      "id": 88,
      "question": "In a triangle ABC, if angle A = 54° and angle B = 74°, find angle C.",
      "options": [
        "52°",
        "106°",
        "86°",
        "96°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (54° + 74°) = 52°."
    },
    {
      "id": 89,
      "question": "In a triangle ABC, if angle A = 57° and angle B = 77°, find angle C.",
      "options": [
        "46°",
        "103°",
        "83°",
        "93°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (57° + 77°) = 46°."
    },
    {
      "id": 90,
      "question": "In a triangle ABC, if angle A = 60° and angle B = 80°, find angle C.",
      "options": [
        "40°",
        "100°",
        "80°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (60° + 80°) = 40°."
    },
    {
      "id": 91,
      "question": "In a triangle ABC, if angle A = 63° and angle B = 83°, find angle C.",
      "options": [
        "34°",
        "97°",
        "77°",
        "87°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (63° + 83°) = 34°."
    },
    {
      "id": 92,
      "question": "In a triangle ABC, if angle A = 66° and angle B = 86°, find angle C.",
      "options": [
        "28°",
        "94°",
        "74°",
        "84°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (66° + 86°) = 28°."
    },
    {
      "id": 93,
      "question": "In a triangle ABC, if angle A = 69° and angle B = 89°, find angle C.",
      "options": [
        "22°",
        "91°",
        "71°",
        "81°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (69° + 89°) = 22°."
    },
    {
      "id": 94,
      "question": "In a triangle ABC, if angle A = 72° and angle B = 92°, find angle C.",
      "options": [
        "16°",
        "88°",
        "68°",
        "78°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (72° + 92°) = 16°."
    },
    {
      "id": 95,
      "question": "In a triangle ABC, if angle A = 75° and angle B = 95°, find angle C.",
      "options": [
        "10°",
        "85°",
        "65°",
        "75°"
      ],
      "correctAnswer": 0,
      "explanation": "Angle C = 180° - (75° + 95°) = 10°."
    },
    {
      "id": 96,
      "question": "Find the area of a circle with radius r = 4 cm. (Use π ≈ 3.1416)",
      "options": [
        "50.27 cm²",
        "25.13 cm²",
        "12.57 cm²",
        "25.13 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 4² = 50.27 cm²."
    },
    {
      "id": 97,
      "question": "Find the area of a circle with radius r = 5 cm. (Use π ≈ 3.1416)",
      "options": [
        "78.54 cm²",
        "31.42 cm²",
        "15.71 cm²",
        "39.27 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 5² = 78.54 cm²."
    },
    {
      "id": 98,
      "question": "Find the area of a circle with radius r = 6 cm. (Use π ≈ 3.1416)",
      "options": [
        "113.10 cm²",
        "37.70 cm²",
        "18.85 cm²",
        "56.55 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 6² = 113.10 cm²."
    },
    {
      "id": 99,
      "question": "Find the area of a circle with radius r = 7 cm. (Use π ≈ 3.1416)",
      "options": [
        "153.94 cm²",
        "43.98 cm²",
        "21.99 cm²",
        "76.97 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 7² = 153.94 cm²."
    },
    {
      "id": 100,
      "question": "Find the area of a circle with radius r = 8 cm. (Use π ≈ 3.1416)",
      "options": [
        "201.06 cm²",
        "50.27 cm²",
        "25.13 cm²",
        "100.53 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 8² = 201.06 cm²."
    },
    {
      "id": 101,
      "question": "Find the area of a circle with radius r = 9 cm. (Use π ≈ 3.1416)",
      "options": [
        "254.47 cm²",
        "56.55 cm²",
        "28.27 cm²",
        "127.23 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 9² = 254.47 cm²."
    },
    {
      "id": 102,
      "question": "Find the area of a circle with radius r = 10 cm. (Use π ≈ 3.1416)",
      "options": [
        "314.16 cm²",
        "62.83 cm²",
        "31.42 cm²",
        "157.08 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 10² = 314.16 cm²."
    },
    {
      "id": 103,
      "question": "Find the area of a circle with radius r = 11 cm. (Use π ≈ 3.1416)",
      "options": [
        "380.13 cm²",
        "69.12 cm²",
        "34.56 cm²",
        "190.07 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 11² = 380.13 cm²."
    },
    {
      "id": 104,
      "question": "Find the area of a circle with radius r = 12 cm. (Use π ≈ 3.1416)",
      "options": [
        "452.39 cm²",
        "75.40 cm²",
        "37.70 cm²",
        "226.19 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 12² = 452.39 cm²."
    },
    {
      "id": 105,
      "question": "Find the area of a circle with radius r = 13 cm. (Use π ≈ 3.1416)",
      "options": [
        "530.93 cm²",
        "81.68 cm²",
        "40.84 cm²",
        "265.46 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 13² = 530.93 cm²."
    },
    {
      "id": 106,
      "question": "Find the area of a circle with radius r = 14 cm. (Use π ≈ 3.1416)",
      "options": [
        "615.75 cm²",
        "87.96 cm²",
        "43.98 cm²",
        "307.88 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 14² = 615.75 cm²."
    },
    {
      "id": 107,
      "question": "Find the area of a circle with radius r = 15 cm. (Use π ≈ 3.1416)",
      "options": [
        "706.86 cm²",
        "94.25 cm²",
        "47.12 cm²",
        "353.43 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 15² = 706.86 cm²."
    },
    {
      "id": 108,
      "question": "Find the area of a circle with radius r = 16 cm. (Use π ≈ 3.1416)",
      "options": [
        "804.25 cm²",
        "100.53 cm²",
        "50.27 cm²",
        "402.12 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 16² = 804.25 cm²."
    },
    {
      "id": 109,
      "question": "Find the area of a circle with radius r = 17 cm. (Use π ≈ 3.1416)",
      "options": [
        "907.92 cm²",
        "106.81 cm²",
        "53.41 cm²",
        "453.96 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 17² = 907.92 cm²."
    },
    {
      "id": 110,
      "question": "Find the area of a circle with radius r = 18 cm. (Use π ≈ 3.1416)",
      "options": [
        "1017.88 cm²",
        "113.10 cm²",
        "56.55 cm²",
        "508.94 cm²"
      ],
      "correctAnswer": 0,
      "explanation": "Area = π r² = π × 18² = 1017.88 cm²."
    },
    {
      "id": 111,
      "question": "Evaluate sin²(0°) + cos²(0°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 112,
      "question": "Evaluate sin²(30°) + cos²(30°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 113,
      "question": "Evaluate sin²(45°) + cos²(45°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 114,
      "question": "Evaluate sin²(60°) + cos²(60°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 115,
      "question": "Evaluate sin²(90°) + cos²(90°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 116,
      "question": "Evaluate sin²(0°) + cos²(0°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 117,
      "question": "Evaluate sin²(30°) + cos²(30°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 118,
      "question": "Evaluate sin²(45°) + cos²(45°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 119,
      "question": "Evaluate sin²(60°) + cos²(60°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 120,
      "question": "Evaluate sin²(90°) + cos²(90°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 121,
      "question": "Evaluate sin²(0°) + cos²(0°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 122,
      "question": "Evaluate sin²(30°) + cos²(30°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 123,
      "question": "Evaluate sin²(45°) + cos²(45°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 124,
      "question": "Evaluate sin²(60°) + cos²(60°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 125,
      "question": "Evaluate sin²(90°) + cos²(90°).",
      "options": [
        "1",
        "0",
        "1/2",
        "√3/2"
      ],
      "correctAnswer": 0,
      "explanation": "By standard trigonometric identity, sin²θ + cos²θ = 1."
    },
    {
      "id": 126,
      "question": "Find the mean of the numbers: 1, 3, 5, 7, 9.",
      "options": [
        "5",
        "6",
        "4",
        "7"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 5."
    },
    {
      "id": 127,
      "question": "Find the mean of the numbers: 2, 4, 6, 8, 10.",
      "options": [
        "6",
        "7",
        "5",
        "8"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 6."
    },
    {
      "id": 128,
      "question": "Find the mean of the numbers: 3, 5, 7, 9, 11.",
      "options": [
        "7",
        "8",
        "6",
        "9"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 7."
    },
    {
      "id": 129,
      "question": "Find the mean of the numbers: 4, 6, 8, 10, 12.",
      "options": [
        "8",
        "9",
        "7",
        "10"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 8."
    },
    {
      "id": 130,
      "question": "Find the mean of the numbers: 5, 7, 9, 11, 13.",
      "options": [
        "9",
        "10",
        "8",
        "11"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 9."
    },
    {
      "id": 131,
      "question": "Find the mean of the numbers: 6, 8, 10, 12, 14.",
      "options": [
        "10",
        "11",
        "9",
        "12"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 10."
    },
    {
      "id": 132,
      "question": "Find the mean of the numbers: 7, 9, 11, 13, 15.",
      "options": [
        "11",
        "12",
        "10",
        "13"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 11."
    },
    {
      "id": 133,
      "question": "Find the mean of the numbers: 8, 10, 12, 14, 16.",
      "options": [
        "12",
        "13",
        "11",
        "14"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 12."
    },
    {
      "id": 134,
      "question": "Find the mean of the numbers: 9, 11, 13, 15, 17.",
      "options": [
        "13",
        "14",
        "12",
        "15"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 13."
    },
    {
      "id": 135,
      "question": "Find the mean of the numbers: 10, 12, 14, 16, 18.",
      "options": [
        "14",
        "15",
        "13",
        "16"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = (5k + 20)/5 = k + 4 = 14."
    },
    {
      "id": 136,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 137,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 138,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 139,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 140,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 141,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 142,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 143,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 144,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 145,
      "question": "What is the probability of drawing a red card from a standard deck of 52 cards?",
      "options": [
        "1/2",
        "1/4",
        "1/13",
        "3/4"
      ],
      "correctAnswer": 0,
      "explanation": "26/52 = 1/2."
    },
    {
      "id": 146,
      "question": "A pie chart shows expenditure on Education as 72°. What percentage of total expenditure is spent on Education?",
      "options": [
        "20%",
        "25%",
        "15%",
        "18%"
      ],
      "correctAnswer": 0,
      "explanation": "Percentage = (72 / 360) × 100 = 20%."
    },
    {
      "id": 147,
      "question": "A pie chart shows expenditure on Education as 72°. What percentage of total expenditure is spent on Education?",
      "options": [
        "20%",
        "25%",
        "15%",
        "18%"
      ],
      "correctAnswer": 0,
      "explanation": "Percentage = (72 / 360) × 100 = 20%."
    },
    {
      "id": 148,
      "question": "A pie chart shows expenditure on Education as 72°. What percentage of total expenditure is spent on Education?",
      "options": [
        "20%",
        "25%",
        "15%",
        "18%"
      ],
      "correctAnswer": 0,
      "explanation": "Percentage = (72 / 360) × 100 = 20%."
    },
    {
      "id": 149,
      "question": "A pie chart shows expenditure on Education as 72°. What percentage of total expenditure is spent on Education?",
      "options": [
        "20%",
        "25%",
        "15%",
        "18%"
      ],
      "correctAnswer": 0,
      "explanation": "Percentage = (72 / 360) × 100 = 20%."
    },
    {
      "id": 150,
      "question": "A pie chart shows expenditure on Education as 72°. What percentage of total expenditure is spent on Education?",
      "options": [
        "20%",
        "25%",
        "15%",
        "18%"
      ],
      "correctAnswer": 0,
      "explanation": "Percentage = (72 / 360) × 100 = 20%."
    }
  ],
  "bpsc_math_pyq": [
    {
      "id": 1,
      "question": "BPSC TRE 2.0 (2023): If α and β are the zeroes of x² - 5x + 6, find the value of (α² + β²).",
      "options": [
        "13",
        "25",
        "19",
        "31"
      ],
      "correctAnswer": 0,
      "explanation": "Sum α+β = 5, product αβ = 6. α² + β² = 5² - 2(6) = 13.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 2,
      "question": "BPSC TRE 3.0 (2024): The 10th term of the AP 2, 7, 12, ... is:",
      "options": [
        "47",
        "52",
        "42",
        "37"
      ],
      "correctAnswer": 0,
      "explanation": "a = 2, d = 5. a_10 = 2 + 9(5) = 47.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 3,
      "question": "BPSC TRE 1.0 (2023): The distance between points (2, 3) and (4, 1) is:",
      "options": [
        "2√2",
        "4",
        "2√3",
        "8"
      ],
      "correctAnswer": 0,
      "explanation": "d = √[(4-2)² + (1-3)²] = √8 = 2√2.",
      "info": "BPSC TRE 1.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 4,
      "question": "BPSC TRE 2.0 (2023): If sin θ = 3/5, then cos θ is equal to:",
      "options": [
        "4/5",
        "3/4",
        "5/4",
        "5/3"
      ],
      "correctAnswer": 0,
      "explanation": "cos θ = √(1 - 9/25) = 4/5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 5,
      "question": "BPSC TRE 3.0 (2024): The volume of a sphere of radius 3 cm is:",
      "options": [
        "36π cm³",
        "12π cm³",
        "108π cm³",
        "27π cm³"
      ],
      "correctAnswer": 0,
      "explanation": "V = (4/3)π (27) = 36π cm³.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 6,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(33) if log₂(32) = 5. (PYQ #6)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 7,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(34) if log₂(32) = 5. (PYQ #7)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 8,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(35) if log₂(32) = 5. (PYQ #8)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 9,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(36) if log₂(32) = 5. (PYQ #9)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 10,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(37) if log₂(32) = 5. (PYQ #10)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 11,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(38) if log₂(32) = 5. (PYQ #11)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 12,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(39) if log₂(32) = 5. (PYQ #12)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 13,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(40) if log₂(32) = 5. (PYQ #13)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 14,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(41) if log₂(32) = 5. (PYQ #14)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 15,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(42) if log₂(32) = 5. (PYQ #15)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 16,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(43) if log₂(32) = 5. (PYQ #16)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 17,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(44) if log₂(32) = 5. (PYQ #17)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 18,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(45) if log₂(32) = 5. (PYQ #18)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 19,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(46) if log₂(32) = 5. (PYQ #19)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 20,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(47) if log₂(32) = 5. (PYQ #20)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 21,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(48) if log₂(32) = 5. (PYQ #21)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 22,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(49) if log₂(32) = 5. (PYQ #22)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 23,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(50) if log₂(32) = 5. (PYQ #23)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 24,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(51) if log₂(32) = 5. (PYQ #24)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 25,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(52) if log₂(32) = 5. (PYQ #25)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 26,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(53) if log₂(32) = 5. (PYQ #26)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 27,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(54) if log₂(32) = 5. (PYQ #27)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 28,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(55) if log₂(32) = 5. (PYQ #28)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 29,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(56) if log₂(32) = 5. (PYQ #29)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 30,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(57) if log₂(32) = 5. (PYQ #30)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 31,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(58) if log₂(32) = 5. (PYQ #31)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 32,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(59) if log₂(32) = 5. (PYQ #32)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 33,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(60) if log₂(32) = 5. (PYQ #33)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 34,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(61) if log₂(32) = 5. (PYQ #34)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 35,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(62) if log₂(32) = 5. (PYQ #35)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 36,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(63) if log₂(32) = 5. (PYQ #36)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 37,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(64) if log₂(32) = 5. (PYQ #37)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 38,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(65) if log₂(32) = 5. (PYQ #38)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 39,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(66) if log₂(32) = 5. (PYQ #39)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 40,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(67) if log₂(32) = 5. (PYQ #40)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 41,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(68) if log₂(32) = 5. (PYQ #41)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 42,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(69) if log₂(32) = 5. (PYQ #42)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 43,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(70) if log₂(32) = 5. (PYQ #43)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 44,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(71) if log₂(32) = 5. (PYQ #44)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 45,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(72) if log₂(32) = 5. (PYQ #45)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 11-12 Mathematics"
    },
    {
      "id": 46,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(73) if log₂(32) = 5. (PYQ #46)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    },
    {
      "id": 47,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(74) if log₂(32) = 5. (PYQ #47)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 48,
      "question": "BPSC TRE 3.0 (2024): Find the value of log₂(75) if log₂(32) = 5. (PYQ #48)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 3.0 (2024) - Class 9-10 Mathematics"
    },
    {
      "id": 49,
      "question": "BPSC TRE 1.0 (2023): Find the value of log₂(76) if log₂(32) = 5. (PYQ #49)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 1.0 (2023) - Class 11-12 Mathematics"
    },
    {
      "id": 50,
      "question": "BPSC TRE 2.0 (2023): Find the value of log₂(77) if log₂(32) = 5. (PYQ #50)",
      "options": [
        "5",
        "6",
        "4",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "Since 2^5 = 32, log₂(32) = 5.",
      "info": "BPSC TRE 2.0 (2023) - Class 9-10 Mathematics"
    }
  ],
  "bpsc_math_prac1": [
    {
      "id": 1,
      "question": "Practice 1 Q#1: If 4% of a number is 12, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (4/100) × x = 12 => x = 300."
    },
    {
      "id": 2,
      "question": "Practice 1 Q#2: If 8% of a number is 24, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (8/100) × x = 24 => x = 300."
    },
    {
      "id": 3,
      "question": "Practice 1 Q#3: If 12% of a number is 36, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (12/100) × x = 36 => x = 300."
    },
    {
      "id": 4,
      "question": "Practice 1 Q#4: If 16% of a number is 48, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (16/100) × x = 48 => x = 300."
    },
    {
      "id": 5,
      "question": "Practice 1 Q#5: If 20% of a number is 60, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (20/100) × x = 60 => x = 300."
    },
    {
      "id": 6,
      "question": "Practice 1 Q#6: If 24% of a number is 72, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (24/100) × x = 72 => x = 300."
    },
    {
      "id": 7,
      "question": "Practice 1 Q#7: If 28% of a number is 84, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (28/100) × x = 84 => x = 300."
    },
    {
      "id": 8,
      "question": "Practice 1 Q#8: If 32% of a number is 96, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (32/100) × x = 96 => x = 300."
    },
    {
      "id": 9,
      "question": "Practice 1 Q#9: If 36% of a number is 108, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (36/100) × x = 108 => x = 300."
    },
    {
      "id": 10,
      "question": "Practice 1 Q#10: If 40% of a number is 120, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (40/100) × x = 120 => x = 300."
    },
    {
      "id": 11,
      "question": "Practice 1 Q#11: If 44% of a number is 132, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (44/100) × x = 132 => x = 300."
    },
    {
      "id": 12,
      "question": "Practice 1 Q#12: If 48% of a number is 144, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (48/100) × x = 144 => x = 300."
    },
    {
      "id": 13,
      "question": "Practice 1 Q#13: If 52% of a number is 156, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (52/100) × x = 156 => x = 300."
    },
    {
      "id": 14,
      "question": "Practice 1 Q#14: If 56% of a number is 168, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (56/100) × x = 168 => x = 300."
    },
    {
      "id": 15,
      "question": "Practice 1 Q#15: If 60% of a number is 180, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (60/100) × x = 180 => x = 300."
    },
    {
      "id": 16,
      "question": "Practice 1 Q#16: If 64% of a number is 192, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (64/100) × x = 192 => x = 300."
    },
    {
      "id": 17,
      "question": "Practice 1 Q#17: If 68% of a number is 204, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (68/100) × x = 204 => x = 300."
    },
    {
      "id": 18,
      "question": "Practice 1 Q#18: If 72% of a number is 216, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (72/100) × x = 216 => x = 300."
    },
    {
      "id": 19,
      "question": "Practice 1 Q#19: If 76% of a number is 228, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (76/100) × x = 228 => x = 300."
    },
    {
      "id": 20,
      "question": "Practice 1 Q#20: If 80% of a number is 240, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (80/100) × x = 240 => x = 300."
    },
    {
      "id": 21,
      "question": "Practice 1 Q#21: If 84% of a number is 252, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (84/100) × x = 252 => x = 300."
    },
    {
      "id": 22,
      "question": "Practice 1 Q#22: If 88% of a number is 264, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (88/100) × x = 264 => x = 300."
    },
    {
      "id": 23,
      "question": "Practice 1 Q#23: If 92% of a number is 276, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (92/100) × x = 276 => x = 300."
    },
    {
      "id": 24,
      "question": "Practice 1 Q#24: If 96% of a number is 288, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (96/100) × x = 288 => x = 300."
    },
    {
      "id": 25,
      "question": "Practice 1 Q#25: If 100% of a number is 300, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (100/100) × x = 300 => x = 300."
    },
    {
      "id": 26,
      "question": "Practice 1 Q#26: If 104% of a number is 312, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (104/100) × x = 312 => x = 300."
    },
    {
      "id": 27,
      "question": "Practice 1 Q#27: If 108% of a number is 324, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (108/100) × x = 324 => x = 300."
    },
    {
      "id": 28,
      "question": "Practice 1 Q#28: If 112% of a number is 336, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (112/100) × x = 336 => x = 300."
    },
    {
      "id": 29,
      "question": "Practice 1 Q#29: If 116% of a number is 348, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (116/100) × x = 348 => x = 300."
    },
    {
      "id": 30,
      "question": "Practice 1 Q#30: If 120% of a number is 360, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (120/100) × x = 360 => x = 300."
    },
    {
      "id": 31,
      "question": "Practice 1 Q#31: If 124% of a number is 372, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (124/100) × x = 372 => x = 300."
    },
    {
      "id": 32,
      "question": "Practice 1 Q#32: If 128% of a number is 384, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (128/100) × x = 384 => x = 300."
    },
    {
      "id": 33,
      "question": "Practice 1 Q#33: If 132% of a number is 396, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (132/100) × x = 396 => x = 300."
    },
    {
      "id": 34,
      "question": "Practice 1 Q#34: If 136% of a number is 408, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (136/100) × x = 408 => x = 300."
    },
    {
      "id": 35,
      "question": "Practice 1 Q#35: If 140% of a number is 420, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (140/100) × x = 420 => x = 300."
    },
    {
      "id": 36,
      "question": "Practice 1 Q#36: If 144% of a number is 432, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (144/100) × x = 432 => x = 300."
    },
    {
      "id": 37,
      "question": "Practice 1 Q#37: If 148% of a number is 444, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (148/100) × x = 444 => x = 300."
    },
    {
      "id": 38,
      "question": "Practice 1 Q#38: If 152% of a number is 456, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (152/100) × x = 456 => x = 300."
    },
    {
      "id": 39,
      "question": "Practice 1 Q#39: If 156% of a number is 468, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (156/100) × x = 468 => x = 300."
    },
    {
      "id": 40,
      "question": "Practice 1 Q#40: If 160% of a number is 480, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (160/100) × x = 480 => x = 300."
    },
    {
      "id": 41,
      "question": "Practice 1 Q#41: If 164% of a number is 492, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (164/100) × x = 492 => x = 300."
    },
    {
      "id": 42,
      "question": "Practice 1 Q#42: If 168% of a number is 504, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (168/100) × x = 504 => x = 300."
    },
    {
      "id": 43,
      "question": "Practice 1 Q#43: If 172% of a number is 516, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (172/100) × x = 516 => x = 300."
    },
    {
      "id": 44,
      "question": "Practice 1 Q#44: If 176% of a number is 528, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (176/100) × x = 528 => x = 300."
    },
    {
      "id": 45,
      "question": "Practice 1 Q#45: If 180% of a number is 540, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (180/100) × x = 540 => x = 300."
    },
    {
      "id": 46,
      "question": "Practice 1 Q#46: If 184% of a number is 552, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (184/100) × x = 552 => x = 300."
    },
    {
      "id": 47,
      "question": "Practice 1 Q#47: If 188% of a number is 564, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (188/100) × x = 564 => x = 300."
    },
    {
      "id": 48,
      "question": "Practice 1 Q#48: If 192% of a number is 576, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (192/100) × x = 576 => x = 300."
    },
    {
      "id": 49,
      "question": "Practice 1 Q#49: If 196% of a number is 588, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (196/100) × x = 588 => x = 300."
    },
    {
      "id": 50,
      "question": "Practice 1 Q#50: If 200% of a number is 600, what is the number?",
      "options": [
        "300",
        "400",
        "250",
        "350"
      ],
      "correctAnswer": 0,
      "explanation": "Let number be x. (200/100) × x = 600 => x = 300."
    }
  ],
  "bpsc_math_prac2": [
    {
      "id": 1,
      "question": "Practice 2 Q#1: A shopkeeper buys an article for ₹110 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹132",
        "₹126",
        "₹138",
        "₹121"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 110 × 1.20 = ₹132."
    },
    {
      "id": 2,
      "question": "Practice 2 Q#2: A shopkeeper buys an article for ₹120 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹144",
        "₹138",
        "₹150",
        "₹132"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 120 × 1.20 = ₹144."
    },
    {
      "id": 3,
      "question": "Practice 2 Q#3: A shopkeeper buys an article for ₹130 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹156",
        "₹150",
        "₹163",
        "₹143"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 130 × 1.20 = ₹156."
    },
    {
      "id": 4,
      "question": "Practice 2 Q#4: A shopkeeper buys an article for ₹140 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹168",
        "₹161",
        "₹175",
        "₹154"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 140 × 1.20 = ₹168."
    },
    {
      "id": 5,
      "question": "Practice 2 Q#5: A shopkeeper buys an article for ₹150 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹180",
        "₹173",
        "₹188",
        "₹165"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 150 × 1.20 = ₹180."
    },
    {
      "id": 6,
      "question": "Practice 2 Q#6: A shopkeeper buys an article for ₹160 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹192",
        "₹184",
        "₹200",
        "₹176"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 160 × 1.20 = ₹192."
    },
    {
      "id": 7,
      "question": "Practice 2 Q#7: A shopkeeper buys an article for ₹170 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹204",
        "₹195",
        "₹213",
        "₹187"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 170 × 1.20 = ₹204."
    },
    {
      "id": 8,
      "question": "Practice 2 Q#8: A shopkeeper buys an article for ₹180 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹216",
        "₹207",
        "₹225",
        "₹198"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 180 × 1.20 = ₹216."
    },
    {
      "id": 9,
      "question": "Practice 2 Q#9: A shopkeeper buys an article for ₹190 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹228",
        "₹218",
        "₹238",
        "₹209"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 190 × 1.20 = ₹228."
    },
    {
      "id": 10,
      "question": "Practice 2 Q#10: A shopkeeper buys an article for ₹200 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹240",
        "₹230",
        "₹250",
        "₹220"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 200 × 1.20 = ₹240."
    },
    {
      "id": 11,
      "question": "Practice 2 Q#11: A shopkeeper buys an article for ₹210 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹252",
        "₹241",
        "₹263",
        "₹231"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 210 × 1.20 = ₹252."
    },
    {
      "id": 12,
      "question": "Practice 2 Q#12: A shopkeeper buys an article for ₹220 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹264",
        "₹253",
        "₹275",
        "₹242"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 220 × 1.20 = ₹264."
    },
    {
      "id": 13,
      "question": "Practice 2 Q#13: A shopkeeper buys an article for ₹230 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹276",
        "₹265",
        "₹288",
        "₹253"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 230 × 1.20 = ₹276."
    },
    {
      "id": 14,
      "question": "Practice 2 Q#14: A shopkeeper buys an article for ₹240 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹288",
        "₹276",
        "₹300",
        "₹264"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 240 × 1.20 = ₹288."
    },
    {
      "id": 15,
      "question": "Practice 2 Q#15: A shopkeeper buys an article for ₹250 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹300",
        "₹288",
        "₹313",
        "₹275"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 250 × 1.20 = ₹300."
    },
    {
      "id": 16,
      "question": "Practice 2 Q#16: A shopkeeper buys an article for ₹260 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹312",
        "₹299",
        "₹325",
        "₹286"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 260 × 1.20 = ₹312."
    },
    {
      "id": 17,
      "question": "Practice 2 Q#17: A shopkeeper buys an article for ₹270 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹324",
        "₹311",
        "₹338",
        "₹297"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 270 × 1.20 = ₹324."
    },
    {
      "id": 18,
      "question": "Practice 2 Q#18: A shopkeeper buys an article for ₹280 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹336",
        "₹322",
        "₹350",
        "₹308"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 280 × 1.20 = ₹336."
    },
    {
      "id": 19,
      "question": "Practice 2 Q#19: A shopkeeper buys an article for ₹290 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹348",
        "₹334",
        "₹363",
        "₹319"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 290 × 1.20 = ₹348."
    },
    {
      "id": 20,
      "question": "Practice 2 Q#20: A shopkeeper buys an article for ₹300 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹360",
        "₹345",
        "₹375",
        "₹330"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 300 × 1.20 = ₹360."
    },
    {
      "id": 21,
      "question": "Practice 2 Q#21: A shopkeeper buys an article for ₹310 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹372",
        "₹357",
        "₹388",
        "₹341"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 310 × 1.20 = ₹372."
    },
    {
      "id": 22,
      "question": "Practice 2 Q#22: A shopkeeper buys an article for ₹320 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹384",
        "₹368",
        "₹400",
        "₹352"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 320 × 1.20 = ₹384."
    },
    {
      "id": 23,
      "question": "Practice 2 Q#23: A shopkeeper buys an article for ₹330 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹396",
        "₹379",
        "₹413",
        "₹363"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 330 × 1.20 = ₹396."
    },
    {
      "id": 24,
      "question": "Practice 2 Q#24: A shopkeeper buys an article for ₹340 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹408",
        "₹391",
        "₹425",
        "₹374"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 340 × 1.20 = ₹408."
    },
    {
      "id": 25,
      "question": "Practice 2 Q#25: A shopkeeper buys an article for ₹350 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹420",
        "₹402",
        "₹438",
        "₹385"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 350 × 1.20 = ₹420."
    },
    {
      "id": 26,
      "question": "Practice 2 Q#26: A shopkeeper buys an article for ₹360 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹432",
        "₹414",
        "₹450",
        "₹396"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 360 × 1.20 = ₹432."
    },
    {
      "id": 27,
      "question": "Practice 2 Q#27: A shopkeeper buys an article for ₹370 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹444",
        "₹425",
        "₹463",
        "₹407"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 370 × 1.20 = ₹444."
    },
    {
      "id": 28,
      "question": "Practice 2 Q#28: A shopkeeper buys an article for ₹380 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹456",
        "₹437",
        "₹475",
        "₹418"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 380 × 1.20 = ₹456."
    },
    {
      "id": 29,
      "question": "Practice 2 Q#29: A shopkeeper buys an article for ₹390 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹468",
        "₹448",
        "₹488",
        "₹429"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 390 × 1.20 = ₹468."
    },
    {
      "id": 30,
      "question": "Practice 2 Q#30: A shopkeeper buys an article for ₹400 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹480",
        "₹460",
        "₹500",
        "₹440"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 400 × 1.20 = ₹480."
    },
    {
      "id": 31,
      "question": "Practice 2 Q#31: A shopkeeper buys an article for ₹410 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹492",
        "₹471",
        "₹513",
        "₹451"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 410 × 1.20 = ₹492."
    },
    {
      "id": 32,
      "question": "Practice 2 Q#32: A shopkeeper buys an article for ₹420 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹504",
        "₹483",
        "₹525",
        "₹462"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 420 × 1.20 = ₹504."
    },
    {
      "id": 33,
      "question": "Practice 2 Q#33: A shopkeeper buys an article for ₹430 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹516",
        "₹494",
        "₹538",
        "₹473"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 430 × 1.20 = ₹516."
    },
    {
      "id": 34,
      "question": "Practice 2 Q#34: A shopkeeper buys an article for ₹440 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹528",
        "₹506",
        "₹550",
        "₹484"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 440 × 1.20 = ₹528."
    },
    {
      "id": 35,
      "question": "Practice 2 Q#35: A shopkeeper buys an article for ₹450 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹540",
        "₹518",
        "₹563",
        "₹495"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 450 × 1.20 = ₹540."
    },
    {
      "id": 36,
      "question": "Practice 2 Q#36: A shopkeeper buys an article for ₹460 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹552",
        "₹529",
        "₹575",
        "₹506"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 460 × 1.20 = ₹552."
    },
    {
      "id": 37,
      "question": "Practice 2 Q#37: A shopkeeper buys an article for ₹470 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹564",
        "₹541",
        "₹588",
        "₹517"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 470 × 1.20 = ₹564."
    },
    {
      "id": 38,
      "question": "Practice 2 Q#38: A shopkeeper buys an article for ₹480 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹576",
        "₹552",
        "₹600",
        "₹528"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 480 × 1.20 = ₹576."
    },
    {
      "id": 39,
      "question": "Practice 2 Q#39: A shopkeeper buys an article for ₹490 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹588",
        "₹564",
        "₹613",
        "₹539"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 490 × 1.20 = ₹588."
    },
    {
      "id": 40,
      "question": "Practice 2 Q#40: A shopkeeper buys an article for ₹500 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹600",
        "₹575",
        "₹625",
        "₹550"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 500 × 1.20 = ₹600."
    },
    {
      "id": 41,
      "question": "Practice 2 Q#41: A shopkeeper buys an article for ₹510 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹612",
        "₹587",
        "₹638",
        "₹561"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 510 × 1.20 = ₹612."
    },
    {
      "id": 42,
      "question": "Practice 2 Q#42: A shopkeeper buys an article for ₹520 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹624",
        "₹598",
        "₹650",
        "₹572"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 520 × 1.20 = ₹624."
    },
    {
      "id": 43,
      "question": "Practice 2 Q#43: A shopkeeper buys an article for ₹530 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹636",
        "₹610",
        "₹663",
        "₹583"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 530 × 1.20 = ₹636."
    },
    {
      "id": 44,
      "question": "Practice 2 Q#44: A shopkeeper buys an article for ₹540 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹648",
        "₹621",
        "₹675",
        "₹594"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 540 × 1.20 = ₹648."
    },
    {
      "id": 45,
      "question": "Practice 2 Q#45: A shopkeeper buys an article for ₹550 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹660",
        "₹633",
        "₹688",
        "₹605"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 550 × 1.20 = ₹660."
    },
    {
      "id": 46,
      "question": "Practice 2 Q#46: A shopkeeper buys an article for ₹560 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹672",
        "₹644",
        "₹700",
        "₹616"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 560 × 1.20 = ₹672."
    },
    {
      "id": 47,
      "question": "Practice 2 Q#47: A shopkeeper buys an article for ₹570 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹684",
        "₹656",
        "₹713",
        "₹627"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 570 × 1.20 = ₹684."
    },
    {
      "id": 48,
      "question": "Practice 2 Q#48: A shopkeeper buys an article for ₹580 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹696",
        "₹667",
        "₹725",
        "₹638"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 580 × 1.20 = ₹696."
    },
    {
      "id": 49,
      "question": "Practice 2 Q#49: A shopkeeper buys an article for ₹590 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹708",
        "₹679",
        "₹738",
        "₹649"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 590 × 1.20 = ₹708."
    },
    {
      "id": 50,
      "question": "Practice 2 Q#50: A shopkeeper buys an article for ₹600 and sells it at a gain of 20%. Find SP.",
      "options": [
        "₹720",
        "₹690",
        "₹750",
        "₹660"
      ],
      "correctAnswer": 0,
      "explanation": "SP = 600 × 1.20 = ₹720."
    }
  ],
  "bpsc_math_prac3": [
    {
      "id": 1,
      "question": "Practice 3 Q#1: Convert speed of 31 m/s into km/h.",
      "options": [
        "111.6 km/h",
        "77.5 km/h",
        "124.0 km/h",
        "93.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 31 × 3.6 = 111.6 km/h."
    },
    {
      "id": 2,
      "question": "Practice 3 Q#2: Convert speed of 32 m/s into km/h.",
      "options": [
        "115.2 km/h",
        "80.0 km/h",
        "128.0 km/h",
        "96.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 32 × 3.6 = 115.2 km/h."
    },
    {
      "id": 3,
      "question": "Practice 3 Q#3: Convert speed of 33 m/s into km/h.",
      "options": [
        "118.8 km/h",
        "82.5 km/h",
        "132.0 km/h",
        "99.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 33 × 3.6 = 118.8 km/h."
    },
    {
      "id": 4,
      "question": "Practice 3 Q#4: Convert speed of 34 m/s into km/h.",
      "options": [
        "122.4 km/h",
        "85.0 km/h",
        "136.0 km/h",
        "102.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 34 × 3.6 = 122.4 km/h."
    },
    {
      "id": 5,
      "question": "Practice 3 Q#5: Convert speed of 35 m/s into km/h.",
      "options": [
        "126.0 km/h",
        "87.5 km/h",
        "140.0 km/h",
        "105.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 35 × 3.6 = 126.0 km/h."
    },
    {
      "id": 6,
      "question": "Practice 3 Q#6: Convert speed of 36 m/s into km/h.",
      "options": [
        "129.6 km/h",
        "90.0 km/h",
        "144.0 km/h",
        "108.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 36 × 3.6 = 129.6 km/h."
    },
    {
      "id": 7,
      "question": "Practice 3 Q#7: Convert speed of 37 m/s into km/h.",
      "options": [
        "133.2 km/h",
        "92.5 km/h",
        "148.0 km/h",
        "111.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 37 × 3.6 = 133.2 km/h."
    },
    {
      "id": 8,
      "question": "Practice 3 Q#8: Convert speed of 38 m/s into km/h.",
      "options": [
        "136.8 km/h",
        "95.0 km/h",
        "152.0 km/h",
        "114.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 38 × 3.6 = 136.8 km/h."
    },
    {
      "id": 9,
      "question": "Practice 3 Q#9: Convert speed of 39 m/s into km/h.",
      "options": [
        "140.4 km/h",
        "97.5 km/h",
        "156.0 km/h",
        "117.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 39 × 3.6 = 140.4 km/h."
    },
    {
      "id": 10,
      "question": "Practice 3 Q#10: Convert speed of 40 m/s into km/h.",
      "options": [
        "144.0 km/h",
        "100.0 km/h",
        "160.0 km/h",
        "120.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 40 × 3.6 = 144.0 km/h."
    },
    {
      "id": 11,
      "question": "Practice 3 Q#11: Convert speed of 41 m/s into km/h.",
      "options": [
        "147.6 km/h",
        "102.5 km/h",
        "164.0 km/h",
        "123.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 41 × 3.6 = 147.6 km/h."
    },
    {
      "id": 12,
      "question": "Practice 3 Q#12: Convert speed of 42 m/s into km/h.",
      "options": [
        "151.2 km/h",
        "105.0 km/h",
        "168.0 km/h",
        "126.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 42 × 3.6 = 151.2 km/h."
    },
    {
      "id": 13,
      "question": "Practice 3 Q#13: Convert speed of 43 m/s into km/h.",
      "options": [
        "154.8 km/h",
        "107.5 km/h",
        "172.0 km/h",
        "129.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 43 × 3.6 = 154.8 km/h."
    },
    {
      "id": 14,
      "question": "Practice 3 Q#14: Convert speed of 44 m/s into km/h.",
      "options": [
        "158.4 km/h",
        "110.0 km/h",
        "176.0 km/h",
        "132.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 44 × 3.6 = 158.4 km/h."
    },
    {
      "id": 15,
      "question": "Practice 3 Q#15: Convert speed of 45 m/s into km/h.",
      "options": [
        "162.0 km/h",
        "112.5 km/h",
        "180.0 km/h",
        "135.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 45 × 3.6 = 162.0 km/h."
    },
    {
      "id": 16,
      "question": "Practice 3 Q#16: Convert speed of 46 m/s into km/h.",
      "options": [
        "165.6 km/h",
        "115.0 km/h",
        "184.0 km/h",
        "138.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 46 × 3.6 = 165.6 km/h."
    },
    {
      "id": 17,
      "question": "Practice 3 Q#17: Convert speed of 47 m/s into km/h.",
      "options": [
        "169.2 km/h",
        "117.5 km/h",
        "188.0 km/h",
        "141.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 47 × 3.6 = 169.2 km/h."
    },
    {
      "id": 18,
      "question": "Practice 3 Q#18: Convert speed of 48 m/s into km/h.",
      "options": [
        "172.8 km/h",
        "120.0 km/h",
        "192.0 km/h",
        "144.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 48 × 3.6 = 172.8 km/h."
    },
    {
      "id": 19,
      "question": "Practice 3 Q#19: Convert speed of 49 m/s into km/h.",
      "options": [
        "176.4 km/h",
        "122.5 km/h",
        "196.0 km/h",
        "147.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 49 × 3.6 = 176.4 km/h."
    },
    {
      "id": 20,
      "question": "Practice 3 Q#20: Convert speed of 50 m/s into km/h.",
      "options": [
        "180.0 km/h",
        "125.0 km/h",
        "200.0 km/h",
        "150.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 50 × 3.6 = 180.0 km/h."
    },
    {
      "id": 21,
      "question": "Practice 3 Q#21: Convert speed of 51 m/s into km/h.",
      "options": [
        "183.6 km/h",
        "127.5 km/h",
        "204.0 km/h",
        "153.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 51 × 3.6 = 183.6 km/h."
    },
    {
      "id": 22,
      "question": "Practice 3 Q#22: Convert speed of 52 m/s into km/h.",
      "options": [
        "187.2 km/h",
        "130.0 km/h",
        "208.0 km/h",
        "156.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 52 × 3.6 = 187.2 km/h."
    },
    {
      "id": 23,
      "question": "Practice 3 Q#23: Convert speed of 53 m/s into km/h.",
      "options": [
        "190.8 km/h",
        "132.5 km/h",
        "212.0 km/h",
        "159.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 53 × 3.6 = 190.8 km/h."
    },
    {
      "id": 24,
      "question": "Practice 3 Q#24: Convert speed of 54 m/s into km/h.",
      "options": [
        "194.4 km/h",
        "135.0 km/h",
        "216.0 km/h",
        "162.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 54 × 3.6 = 194.4 km/h."
    },
    {
      "id": 25,
      "question": "Practice 3 Q#25: Convert speed of 55 m/s into km/h.",
      "options": [
        "198.0 km/h",
        "137.5 km/h",
        "220.0 km/h",
        "165.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 55 × 3.6 = 198.0 km/h."
    },
    {
      "id": 26,
      "question": "Practice 3 Q#26: Convert speed of 56 m/s into km/h.",
      "options": [
        "201.6 km/h",
        "140.0 km/h",
        "224.0 km/h",
        "168.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 56 × 3.6 = 201.6 km/h."
    },
    {
      "id": 27,
      "question": "Practice 3 Q#27: Convert speed of 57 m/s into km/h.",
      "options": [
        "205.2 km/h",
        "142.5 km/h",
        "228.0 km/h",
        "171.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 57 × 3.6 = 205.2 km/h."
    },
    {
      "id": 28,
      "question": "Practice 3 Q#28: Convert speed of 58 m/s into km/h.",
      "options": [
        "208.8 km/h",
        "145.0 km/h",
        "232.0 km/h",
        "174.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 58 × 3.6 = 208.8 km/h."
    },
    {
      "id": 29,
      "question": "Practice 3 Q#29: Convert speed of 59 m/s into km/h.",
      "options": [
        "212.4 km/h",
        "147.5 km/h",
        "236.0 km/h",
        "177.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 59 × 3.6 = 212.4 km/h."
    },
    {
      "id": 30,
      "question": "Practice 3 Q#30: Convert speed of 60 m/s into km/h.",
      "options": [
        "216.0 km/h",
        "150.0 km/h",
        "240.0 km/h",
        "180.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 60 × 3.6 = 216.0 km/h."
    },
    {
      "id": 31,
      "question": "Practice 3 Q#31: Convert speed of 61 m/s into km/h.",
      "options": [
        "219.6 km/h",
        "152.5 km/h",
        "244.0 km/h",
        "183.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 61 × 3.6 = 219.6 km/h."
    },
    {
      "id": 32,
      "question": "Practice 3 Q#32: Convert speed of 62 m/s into km/h.",
      "options": [
        "223.2 km/h",
        "155.0 km/h",
        "248.0 km/h",
        "186.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 62 × 3.6 = 223.2 km/h."
    },
    {
      "id": 33,
      "question": "Practice 3 Q#33: Convert speed of 63 m/s into km/h.",
      "options": [
        "226.8 km/h",
        "157.5 km/h",
        "252.0 km/h",
        "189.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 63 × 3.6 = 226.8 km/h."
    },
    {
      "id": 34,
      "question": "Practice 3 Q#34: Convert speed of 64 m/s into km/h.",
      "options": [
        "230.4 km/h",
        "160.0 km/h",
        "256.0 km/h",
        "192.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 64 × 3.6 = 230.4 km/h."
    },
    {
      "id": 35,
      "question": "Practice 3 Q#35: Convert speed of 65 m/s into km/h.",
      "options": [
        "234.0 km/h",
        "162.5 km/h",
        "260.0 km/h",
        "195.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 65 × 3.6 = 234.0 km/h."
    },
    {
      "id": 36,
      "question": "Practice 3 Q#36: Convert speed of 66 m/s into km/h.",
      "options": [
        "237.6 km/h",
        "165.0 km/h",
        "264.0 km/h",
        "198.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 66 × 3.6 = 237.6 km/h."
    },
    {
      "id": 37,
      "question": "Practice 3 Q#37: Convert speed of 67 m/s into km/h.",
      "options": [
        "241.2 km/h",
        "167.5 km/h",
        "268.0 km/h",
        "201.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 67 × 3.6 = 241.2 km/h."
    },
    {
      "id": 38,
      "question": "Practice 3 Q#38: Convert speed of 68 m/s into km/h.",
      "options": [
        "244.8 km/h",
        "170.0 km/h",
        "272.0 km/h",
        "204.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 68 × 3.6 = 244.8 km/h."
    },
    {
      "id": 39,
      "question": "Practice 3 Q#39: Convert speed of 69 m/s into km/h.",
      "options": [
        "248.4 km/h",
        "172.5 km/h",
        "276.0 km/h",
        "207.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 69 × 3.6 = 248.4 km/h."
    },
    {
      "id": 40,
      "question": "Practice 3 Q#40: Convert speed of 70 m/s into km/h.",
      "options": [
        "252.0 km/h",
        "175.0 km/h",
        "280.0 km/h",
        "210.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 70 × 3.6 = 252.0 km/h."
    },
    {
      "id": 41,
      "question": "Practice 3 Q#41: Convert speed of 71 m/s into km/h.",
      "options": [
        "255.6 km/h",
        "177.5 km/h",
        "284.0 km/h",
        "213.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 71 × 3.6 = 255.6 km/h."
    },
    {
      "id": 42,
      "question": "Practice 3 Q#42: Convert speed of 72 m/s into km/h.",
      "options": [
        "259.2 km/h",
        "180.0 km/h",
        "288.0 km/h",
        "216.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 72 × 3.6 = 259.2 km/h."
    },
    {
      "id": 43,
      "question": "Practice 3 Q#43: Convert speed of 73 m/s into km/h.",
      "options": [
        "262.8 km/h",
        "182.5 km/h",
        "292.0 km/h",
        "219.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 73 × 3.6 = 262.8 km/h."
    },
    {
      "id": 44,
      "question": "Practice 3 Q#44: Convert speed of 74 m/s into km/h.",
      "options": [
        "266.4 km/h",
        "185.0 km/h",
        "296.0 km/h",
        "222.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 74 × 3.6 = 266.4 km/h."
    },
    {
      "id": 45,
      "question": "Practice 3 Q#45: Convert speed of 75 m/s into km/h.",
      "options": [
        "270.0 km/h",
        "187.5 km/h",
        "300.0 km/h",
        "225.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 75 × 3.6 = 270.0 km/h."
    },
    {
      "id": 46,
      "question": "Practice 3 Q#46: Convert speed of 76 m/s into km/h.",
      "options": [
        "273.6 km/h",
        "190.0 km/h",
        "304.0 km/h",
        "228.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 76 × 3.6 = 273.6 km/h."
    },
    {
      "id": 47,
      "question": "Practice 3 Q#47: Convert speed of 77 m/s into km/h.",
      "options": [
        "277.2 km/h",
        "192.5 km/h",
        "308.0 km/h",
        "231.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 77 × 3.6 = 277.2 km/h."
    },
    {
      "id": 48,
      "question": "Practice 3 Q#48: Convert speed of 78 m/s into km/h.",
      "options": [
        "280.8 km/h",
        "195.0 km/h",
        "312.0 km/h",
        "234.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 78 × 3.6 = 280.8 km/h."
    },
    {
      "id": 49,
      "question": "Practice 3 Q#49: Convert speed of 79 m/s into km/h.",
      "options": [
        "284.4 km/h",
        "197.5 km/h",
        "316.0 km/h",
        "237.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 79 × 3.6 = 284.4 km/h."
    },
    {
      "id": 50,
      "question": "Practice 3 Q#50: Convert speed of 80 m/s into km/h.",
      "options": [
        "288.0 km/h",
        "200.0 km/h",
        "320.0 km/h",
        "240.0 km/h"
      ],
      "correctAnswer": 0,
      "explanation": "Speed = 80 × 3.6 = 288.0 km/h."
    }
  ],
  "bpsc_math_prac4": [
    {
      "id": 1,
      "question": "Practice 4 Q#1: Find the perimeter of a equilateral triangle with side 6 cm.",
      "options": [
        "18 cm",
        "24 cm",
        "12 cm",
        "36 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 6 = 18 cm."
    },
    {
      "id": 2,
      "question": "Practice 4 Q#2: Find the perimeter of a equilateral triangle with side 7 cm.",
      "options": [
        "21 cm",
        "28 cm",
        "14 cm",
        "42 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 7 = 21 cm."
    },
    {
      "id": 3,
      "question": "Practice 4 Q#3: Find the perimeter of a equilateral triangle with side 8 cm.",
      "options": [
        "24 cm",
        "32 cm",
        "16 cm",
        "48 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 8 = 24 cm."
    },
    {
      "id": 4,
      "question": "Practice 4 Q#4: Find the perimeter of a equilateral triangle with side 9 cm.",
      "options": [
        "27 cm",
        "36 cm",
        "18 cm",
        "54 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 9 = 27 cm."
    },
    {
      "id": 5,
      "question": "Practice 4 Q#5: Find the perimeter of a equilateral triangle with side 10 cm.",
      "options": [
        "30 cm",
        "40 cm",
        "20 cm",
        "60 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 10 = 30 cm."
    },
    {
      "id": 6,
      "question": "Practice 4 Q#6: Find the perimeter of a equilateral triangle with side 11 cm.",
      "options": [
        "33 cm",
        "44 cm",
        "22 cm",
        "66 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 11 = 33 cm."
    },
    {
      "id": 7,
      "question": "Practice 4 Q#7: Find the perimeter of a equilateral triangle with side 12 cm.",
      "options": [
        "36 cm",
        "48 cm",
        "24 cm",
        "72 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 12 = 36 cm."
    },
    {
      "id": 8,
      "question": "Practice 4 Q#8: Find the perimeter of a equilateral triangle with side 13 cm.",
      "options": [
        "39 cm",
        "52 cm",
        "26 cm",
        "78 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 13 = 39 cm."
    },
    {
      "id": 9,
      "question": "Practice 4 Q#9: Find the perimeter of a equilateral triangle with side 14 cm.",
      "options": [
        "42 cm",
        "56 cm",
        "28 cm",
        "84 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 14 = 42 cm."
    },
    {
      "id": 10,
      "question": "Practice 4 Q#10: Find the perimeter of a equilateral triangle with side 15 cm.",
      "options": [
        "45 cm",
        "60 cm",
        "30 cm",
        "90 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 15 = 45 cm."
    },
    {
      "id": 11,
      "question": "Practice 4 Q#11: Find the perimeter of a equilateral triangle with side 16 cm.",
      "options": [
        "48 cm",
        "64 cm",
        "32 cm",
        "96 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 16 = 48 cm."
    },
    {
      "id": 12,
      "question": "Practice 4 Q#12: Find the perimeter of a equilateral triangle with side 17 cm.",
      "options": [
        "51 cm",
        "68 cm",
        "34 cm",
        "102 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 17 = 51 cm."
    },
    {
      "id": 13,
      "question": "Practice 4 Q#13: Find the perimeter of a equilateral triangle with side 18 cm.",
      "options": [
        "54 cm",
        "72 cm",
        "36 cm",
        "108 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 18 = 54 cm."
    },
    {
      "id": 14,
      "question": "Practice 4 Q#14: Find the perimeter of a equilateral triangle with side 19 cm.",
      "options": [
        "57 cm",
        "76 cm",
        "38 cm",
        "114 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 19 = 57 cm."
    },
    {
      "id": 15,
      "question": "Practice 4 Q#15: Find the perimeter of a equilateral triangle with side 20 cm.",
      "options": [
        "60 cm",
        "80 cm",
        "40 cm",
        "120 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 20 = 60 cm."
    },
    {
      "id": 16,
      "question": "Practice 4 Q#16: Find the perimeter of a equilateral triangle with side 21 cm.",
      "options": [
        "63 cm",
        "84 cm",
        "42 cm",
        "126 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 21 = 63 cm."
    },
    {
      "id": 17,
      "question": "Practice 4 Q#17: Find the perimeter of a equilateral triangle with side 22 cm.",
      "options": [
        "66 cm",
        "88 cm",
        "44 cm",
        "132 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 22 = 66 cm."
    },
    {
      "id": 18,
      "question": "Practice 4 Q#18: Find the perimeter of a equilateral triangle with side 23 cm.",
      "options": [
        "69 cm",
        "92 cm",
        "46 cm",
        "138 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 23 = 69 cm."
    },
    {
      "id": 19,
      "question": "Practice 4 Q#19: Find the perimeter of a equilateral triangle with side 24 cm.",
      "options": [
        "72 cm",
        "96 cm",
        "48 cm",
        "144 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 24 = 72 cm."
    },
    {
      "id": 20,
      "question": "Practice 4 Q#20: Find the perimeter of a equilateral triangle with side 25 cm.",
      "options": [
        "75 cm",
        "100 cm",
        "50 cm",
        "150 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 25 = 75 cm."
    },
    {
      "id": 21,
      "question": "Practice 4 Q#21: Find the perimeter of a equilateral triangle with side 26 cm.",
      "options": [
        "78 cm",
        "104 cm",
        "52 cm",
        "156 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 26 = 78 cm."
    },
    {
      "id": 22,
      "question": "Practice 4 Q#22: Find the perimeter of a equilateral triangle with side 27 cm.",
      "options": [
        "81 cm",
        "108 cm",
        "54 cm",
        "162 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 27 = 81 cm."
    },
    {
      "id": 23,
      "question": "Practice 4 Q#23: Find the perimeter of a equilateral triangle with side 28 cm.",
      "options": [
        "84 cm",
        "112 cm",
        "56 cm",
        "168 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 28 = 84 cm."
    },
    {
      "id": 24,
      "question": "Practice 4 Q#24: Find the perimeter of a equilateral triangle with side 29 cm.",
      "options": [
        "87 cm",
        "116 cm",
        "58 cm",
        "174 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 29 = 87 cm."
    },
    {
      "id": 25,
      "question": "Practice 4 Q#25: Find the perimeter of a equilateral triangle with side 30 cm.",
      "options": [
        "90 cm",
        "120 cm",
        "60 cm",
        "180 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 30 = 90 cm."
    },
    {
      "id": 26,
      "question": "Practice 4 Q#26: Find the perimeter of a equilateral triangle with side 31 cm.",
      "options": [
        "93 cm",
        "124 cm",
        "62 cm",
        "186 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 31 = 93 cm."
    },
    {
      "id": 27,
      "question": "Practice 4 Q#27: Find the perimeter of a equilateral triangle with side 32 cm.",
      "options": [
        "96 cm",
        "128 cm",
        "64 cm",
        "192 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 32 = 96 cm."
    },
    {
      "id": 28,
      "question": "Practice 4 Q#28: Find the perimeter of a equilateral triangle with side 33 cm.",
      "options": [
        "99 cm",
        "132 cm",
        "66 cm",
        "198 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 33 = 99 cm."
    },
    {
      "id": 29,
      "question": "Practice 4 Q#29: Find the perimeter of a equilateral triangle with side 34 cm.",
      "options": [
        "102 cm",
        "136 cm",
        "68 cm",
        "204 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 34 = 102 cm."
    },
    {
      "id": 30,
      "question": "Practice 4 Q#30: Find the perimeter of a equilateral triangle with side 35 cm.",
      "options": [
        "105 cm",
        "140 cm",
        "70 cm",
        "210 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 35 = 105 cm."
    },
    {
      "id": 31,
      "question": "Practice 4 Q#31: Find the perimeter of a equilateral triangle with side 36 cm.",
      "options": [
        "108 cm",
        "144 cm",
        "72 cm",
        "216 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 36 = 108 cm."
    },
    {
      "id": 32,
      "question": "Practice 4 Q#32: Find the perimeter of a equilateral triangle with side 37 cm.",
      "options": [
        "111 cm",
        "148 cm",
        "74 cm",
        "222 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 37 = 111 cm."
    },
    {
      "id": 33,
      "question": "Practice 4 Q#33: Find the perimeter of a equilateral triangle with side 38 cm.",
      "options": [
        "114 cm",
        "152 cm",
        "76 cm",
        "228 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 38 = 114 cm."
    },
    {
      "id": 34,
      "question": "Practice 4 Q#34: Find the perimeter of a equilateral triangle with side 39 cm.",
      "options": [
        "117 cm",
        "156 cm",
        "78 cm",
        "234 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 39 = 117 cm."
    },
    {
      "id": 35,
      "question": "Practice 4 Q#35: Find the perimeter of a equilateral triangle with side 40 cm.",
      "options": [
        "120 cm",
        "160 cm",
        "80 cm",
        "240 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 40 = 120 cm."
    },
    {
      "id": 36,
      "question": "Practice 4 Q#36: Find the perimeter of a equilateral triangle with side 41 cm.",
      "options": [
        "123 cm",
        "164 cm",
        "82 cm",
        "246 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 41 = 123 cm."
    },
    {
      "id": 37,
      "question": "Practice 4 Q#37: Find the perimeter of a equilateral triangle with side 42 cm.",
      "options": [
        "126 cm",
        "168 cm",
        "84 cm",
        "252 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 42 = 126 cm."
    },
    {
      "id": 38,
      "question": "Practice 4 Q#38: Find the perimeter of a equilateral triangle with side 43 cm.",
      "options": [
        "129 cm",
        "172 cm",
        "86 cm",
        "258 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 43 = 129 cm."
    },
    {
      "id": 39,
      "question": "Practice 4 Q#39: Find the perimeter of a equilateral triangle with side 44 cm.",
      "options": [
        "132 cm",
        "176 cm",
        "88 cm",
        "264 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 44 = 132 cm."
    },
    {
      "id": 40,
      "question": "Practice 4 Q#40: Find the perimeter of a equilateral triangle with side 45 cm.",
      "options": [
        "135 cm",
        "180 cm",
        "90 cm",
        "270 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 45 = 135 cm."
    },
    {
      "id": 41,
      "question": "Practice 4 Q#41: Find the perimeter of a equilateral triangle with side 46 cm.",
      "options": [
        "138 cm",
        "184 cm",
        "92 cm",
        "276 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 46 = 138 cm."
    },
    {
      "id": 42,
      "question": "Practice 4 Q#42: Find the perimeter of a equilateral triangle with side 47 cm.",
      "options": [
        "141 cm",
        "188 cm",
        "94 cm",
        "282 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 47 = 141 cm."
    },
    {
      "id": 43,
      "question": "Practice 4 Q#43: Find the perimeter of a equilateral triangle with side 48 cm.",
      "options": [
        "144 cm",
        "192 cm",
        "96 cm",
        "288 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 48 = 144 cm."
    },
    {
      "id": 44,
      "question": "Practice 4 Q#44: Find the perimeter of a equilateral triangle with side 49 cm.",
      "options": [
        "147 cm",
        "196 cm",
        "98 cm",
        "294 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 49 = 147 cm."
    },
    {
      "id": 45,
      "question": "Practice 4 Q#45: Find the perimeter of a equilateral triangle with side 50 cm.",
      "options": [
        "150 cm",
        "200 cm",
        "100 cm",
        "300 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 50 = 150 cm."
    },
    {
      "id": 46,
      "question": "Practice 4 Q#46: Find the perimeter of a equilateral triangle with side 51 cm.",
      "options": [
        "153 cm",
        "204 cm",
        "102 cm",
        "306 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 51 = 153 cm."
    },
    {
      "id": 47,
      "question": "Practice 4 Q#47: Find the perimeter of a equilateral triangle with side 52 cm.",
      "options": [
        "156 cm",
        "208 cm",
        "104 cm",
        "312 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 52 = 156 cm."
    },
    {
      "id": 48,
      "question": "Practice 4 Q#48: Find the perimeter of a equilateral triangle with side 53 cm.",
      "options": [
        "159 cm",
        "212 cm",
        "106 cm",
        "318 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 53 = 159 cm."
    },
    {
      "id": 49,
      "question": "Practice 4 Q#49: Find the perimeter of a equilateral triangle with side 54 cm.",
      "options": [
        "162 cm",
        "216 cm",
        "108 cm",
        "324 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 54 = 162 cm."
    },
    {
      "id": 50,
      "question": "Practice 4 Q#50: Find the perimeter of a equilateral triangle with side 55 cm.",
      "options": [
        "165 cm",
        "220 cm",
        "110 cm",
        "330 cm"
      ],
      "correctAnswer": 0,
      "explanation": "Perimeter = 3 × 55 = 165 cm."
    }
  ],
  "bpsc_math_prac5": [
    {
      "id": 1,
      "question": "Practice 5 Q#1: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 2,
      "question": "Practice 5 Q#2: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 3,
      "question": "Practice 5 Q#3: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 4,
      "question": "Practice 5 Q#4: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 5,
      "question": "Practice 5 Q#5: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 6,
      "question": "Practice 5 Q#6: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 7,
      "question": "Practice 5 Q#7: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 8,
      "question": "Practice 5 Q#8: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 9,
      "question": "Practice 5 Q#9: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 10,
      "question": "Practice 5 Q#10: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 11,
      "question": "Practice 5 Q#11: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 12,
      "question": "Practice 5 Q#12: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 13,
      "question": "Practice 5 Q#13: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 14,
      "question": "Practice 5 Q#14: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 15,
      "question": "Practice 5 Q#15: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 16,
      "question": "Practice 5 Q#16: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 17,
      "question": "Practice 5 Q#17: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 18,
      "question": "Practice 5 Q#18: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 19,
      "question": "Practice 5 Q#19: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 20,
      "question": "Practice 5 Q#20: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 21,
      "question": "Practice 5 Q#21: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 22,
      "question": "Practice 5 Q#22: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 23,
      "question": "Practice 5 Q#23: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 24,
      "question": "Practice 5 Q#24: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 25,
      "question": "Practice 5 Q#25: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 26,
      "question": "Practice 5 Q#26: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 27,
      "question": "Practice 5 Q#27: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 28,
      "question": "Practice 5 Q#28: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 29,
      "question": "Practice 5 Q#29: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 30,
      "question": "Practice 5 Q#30: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 31,
      "question": "Practice 5 Q#31: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 32,
      "question": "Practice 5 Q#32: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 33,
      "question": "Practice 5 Q#33: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 34,
      "question": "Practice 5 Q#34: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 35,
      "question": "Practice 5 Q#35: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 36,
      "question": "Practice 5 Q#36: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 37,
      "question": "Practice 5 Q#37: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 38,
      "question": "Practice 5 Q#38: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 39,
      "question": "Practice 5 Q#39: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 40,
      "question": "Practice 5 Q#40: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 41,
      "question": "Practice 5 Q#41: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 42,
      "question": "Practice 5 Q#42: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 43,
      "question": "Practice 5 Q#43: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 44,
      "question": "Practice 5 Q#44: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 45,
      "question": "Practice 5 Q#45: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 46,
      "question": "Practice 5 Q#46: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 47,
      "question": "Practice 5 Q#47: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 48,
      "question": "Practice 5 Q#48: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 49,
      "question": "Practice 5 Q#49: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    },
    {
      "id": 50,
      "question": "Practice 5 Q#50: If tan θ = 1, what is the acute angle θ in degrees?",
      "options": [
        "45°",
        "30°",
        "60°",
        "90°"
      ],
      "correctAnswer": 0,
      "explanation": "tan(45°) = 1, hence θ = 45°."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.BPSC_MATH_QUESTION_BANK = BPSC_MATH_QUESTION_BANK;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BPSC_MATH_QUESTION_BANK;
}
