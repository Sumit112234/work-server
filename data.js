
// const questions = Array.from({ length: 100 }, (_, index) => ({
//     category: ["JEE", "NEET", "CET", "GATE"][Math.floor(Math.random() * 4)],
//     question: `Sample question number ${index + 1}?`,
//     options: [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       Math.random() > 0.5 ? "Option E" : null // Randomly adding a 5th option
//     ].filter(Boolean),
//     answer: "Option A", // Placeholder answer; this can be randomized
//     serial_no: index + 1,
//     Id: `Q${index + 1}`,
//     subject: ["Physics", "Chemistry", "Math", "Biology"][Math.floor(Math.random() * 4)],
//     chapter: `Chapter ${Math.floor(Math.random() * 20) + 1}`
//   }));

// const questions = [
//   {
//     "category": "CET",
//     "question": "Sample question number 1?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 1,
//     "Id": "Q1",
//     "subject": "Chemistry",
//     "chapter": "Chapter 5"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 2?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 2,
//     "Id": "Q2",
//     "subject": "Biology",
//     "chapter": "Chapter 1"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 3?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 3,
//     "Id": "Q3",
//     "subject": "Chemistry",
//     "chapter": "Chapter 19"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 4?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 4,
//     "Id": "Q4",
//     "subject": "Math",
//     "chapter": "Chapter 2"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 5?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 5,
//     "Id": "Q5",
//     "subject": "Chemistry",
//     "chapter": "Chapter 3"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 6?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 6,
//     "Id": "Q6",
//     "subject": "Biology",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 7?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 7,
//     "Id": "Q7",
//     "subject": "Physics",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 8?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 8,
//     "Id": "Q8",
//     "subject": "Math",
//     "chapter": "Chapter 14"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 9?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 9,
//     "Id": "Q9",
//     "subject": "Physics",
//     "chapter": "Chapter 7"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 10?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 10,
//     "Id": "Q10",
//     "subject": "Chemistry",
//     "chapter": "Chapter 4"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 11?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 11,
//     "Id": "Q11",
//     "subject": "Chemistry",
//     "chapter": "Chapter 4"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 12?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 12,
//     "Id": "Q12",
//     "subject": "Chemistry",
//     "chapter": "Chapter 9"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 13?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 13,
//     "Id": "Q13",
//     "subject": "Math",
//     "chapter": "Chapter 11"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 14?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 14,
//     "Id": "Q14",
//     "subject": "Math",
//     "chapter": "Chapter 12"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 15?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 15,
//     "Id": "Q15",
//     "subject": "Physics",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 16?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 16,
//     "Id": "Q16",
//     "subject": "Biology",
//     "chapter": "Chapter 10"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 17?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 17,
//     "Id": "Q17",
//     "subject": "Chemistry",
//     "chapter": "Chapter 8"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 18?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 18,
//     "Id": "Q18",
//     "subject": "Chemistry",
//     "chapter": "Chapter 5"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 19?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 19,
//     "Id": "Q19",
//     "subject": "Biology",
//     "chapter": "Chapter 10"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 20?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 20,
//     "Id": "Q20",
//     "subject": "Physics",
//     "chapter": "Chapter 5"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 21?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 21,
//     "Id": "Q21",
//     "subject": "Physics",
//     "chapter": "Chapter 11"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 22?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 22,
//     "Id": "Q22",
//     "subject": "Biology",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 23?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 23,
//     "Id": "Q23",
//     "subject": "Chemistry",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 24?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 24,
//     "Id": "Q24",
//     "subject": "Physics",
//     "chapter": "Chapter 8"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 25?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 25,
//     "Id": "Q25",
//     "subject": "Chemistry",
//     "chapter": "Chapter 12"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 26?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 26,
//     "Id": "Q26",
//     "subject": "Physics",
//     "chapter": "Chapter 8"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 27?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 27,
//     "Id": "Q27",
//     "subject": "Math",
//     "chapter": "Chapter 9"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 28?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 28,
//     "Id": "Q28",
//     "subject": "Chemistry",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 29?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 29,
//     "Id": "Q29",
//     "subject": "Biology",
//     "chapter": "Chapter 14"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 30?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 30,
//     "Id": "Q30",
//     "subject": "Physics",
//     "chapter": "Chapter 11"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 31?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 31,
//     "Id": "Q31",
//     "subject": "Chemistry",
//     "chapter": "Chapter 9"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 32?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 32,
//     "Id": "Q32",
//     "subject": "Chemistry",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 33?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 33,
//     "Id": "Q33",
//     "subject": "Math",
//     "chapter": "Chapter 19"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 34?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 34,
//     "Id": "Q34",
//     "subject": "Physics",
//     "chapter": "Chapter 15"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 35?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 35,
//     "Id": "Q35",
//     "subject": "Biology",
//     "chapter": "Chapter 11"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 36?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 36,
//     "Id": "Q36",
//     "subject": "Biology",
//     "chapter": "Chapter 3"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 37?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 37,
//     "Id": "Q37",
//     "subject": "Chemistry",
//     "chapter": "Chapter 5"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 38?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 38,
//     "Id": "Q38",
//     "subject": "Biology",
//     "chapter": "Chapter 18"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 39?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 39,
//     "Id": "Q39",
//     "subject": "Math",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 40?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 40,
//     "Id": "Q40",
//     "subject": "Math",
//     "chapter": "Chapter 12"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 41?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 41,
//     "Id": "Q41",
//     "subject": "Math",
//     "chapter": "Chapter 6"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 42?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 42,
//     "Id": "Q42",
//     "subject": "Math",
//     "chapter": "Chapter 18"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 43?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 43,
//     "Id": "Q43",
//     "subject": "Physics",
//     "chapter": "Chapter 15"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 44?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 44,
//     "Id": "Q44",
//     "subject": "Biology",
//     "chapter": "Chapter 7"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 45?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 45,
//     "Id": "Q45",
//     "subject": "Chemistry",
//     "chapter": "Chapter 12"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 46?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 46,
//     "Id": "Q46",
//     "subject": "Math",
//     "chapter": "Chapter 2"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 47?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 47,
//     "Id": "Q47",
//     "subject": "Math",
//     "chapter": "Chapter 15"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 48?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 48,
//     "Id": "Q48",
//     "subject": "Physics",
//     "chapter": "Chapter 3"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 49?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 49,
//     "Id": "Q49",
//     "subject": "Physics",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 50?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 50,
//     "Id": "Q50",
//     "subject": "Physics",
//     "chapter": "Chapter 1"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 51?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 51,
//     "Id": "Q51",
//     "subject": "Chemistry",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 52?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 52,
//     "Id": "Q52",
//     "subject": "Physics",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 53?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 53,
//     "Id": "Q53",
//     "subject": "Chemistry",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 54?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 54,
//     "Id": "Q54",
//     "subject": "Chemistry",
//     "chapter": "Chapter 14"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 55?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 55,
//     "Id": "Q55",
//     "subject": "Chemistry",
//     "chapter": "Chapter 19"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 56?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 56,
//     "Id": "Q56",
//     "subject": "Biology",
//     "chapter": "Chapter 19"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 57?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 57,
//     "Id": "Q57",
//     "subject": "Math",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 58?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 58,
//     "Id": "Q58",
//     "subject": "Chemistry",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 59?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 59,
//     "Id": "Q59",
//     "subject": "Physics",
//     "chapter": "Chapter 14"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 60?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 60,
//     "Id": "Q60",
//     "subject": "Physics",
//     "chapter": "Chapter 13"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 61?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 61,
//     "Id": "Q61",
//     "subject": "Chemistry",
//     "chapter": "Chapter 7"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 62?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 62,
//     "Id": "Q62",
//     "subject": "Biology",
//     "chapter": "Chapter 8"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 63?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 63,
//     "Id": "Q63",
//     "subject": "Math",
//     "chapter": "Chapter 5"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 64?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 64,
//     "Id": "Q64",
//     "subject": "Math",
//     "chapter": "Chapter 9"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 65?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 65,
//     "Id": "Q65",
//     "subject": "Physics",
//     "chapter": "Chapter 18"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 66?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 66,
//     "Id": "Q66",
//     "subject": "Biology",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 67?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 67,
//     "Id": "Q67",
//     "subject": "Chemistry",
//     "chapter": "Chapter 7"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 68?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 68,
//     "Id": "Q68",
//     "subject": "Physics",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 69?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 69,
//     "Id": "Q69",
//     "subject": "Physics",
//     "chapter": "Chapter 3"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 70?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 70,
//     "Id": "Q70",
//     "subject": "Math",
//     "chapter": "Chapter 2"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 71?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 71,
//     "Id": "Q71",
//     "subject": "Math",
//     "chapter": "Chapter 6"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 72?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 72,
//     "Id": "Q72",
//     "subject": "Math",
//     "chapter": "Chapter 12"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 73?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 73,
//     "Id": "Q73",
//     "subject": "Math",
//     "chapter": "Chapter 7"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 74?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 74,
//     "Id": "Q74",
//     "subject": "Physics",
//     "chapter": "Chapter 20"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 75?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 75,
//     "Id": "Q75",
//     "subject": "Biology",
//     "chapter": "Chapter 15"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 76?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 76,
//     "Id": "Q76",
//     "subject": "Physics",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 77?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 77,
//     "Id": "Q77",
//     "subject": "Chemistry",
//     "chapter": "Chapter 17"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 78?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 78,
//     "Id": "Q78",
//     "subject": "Math",
//     "chapter": "Chapter 14"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 79?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 79,
//     "Id": "Q79",
//     "subject": "Physics",
//     "chapter": "Chapter 6"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 80?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 80,
//     "Id": "Q80",
//     "subject": "Chemistry",
//     "chapter": "Chapter 1"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 81?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 81,
//     "Id": "Q81",
//     "subject": "Math",
//     "chapter": "Chapter 2"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 82?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 82,
//     "Id": "Q82",
//     "subject": "Math",
//     "chapter": "Chapter 19"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 83?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 83,
//     "Id": "Q83",
//     "subject": "Physics",
//     "chapter": "Chapter 4"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 84?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 84,
//     "Id": "Q84",
//     "subject": "Biology",
//     "chapter": "Chapter 1"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 85?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 85,
//     "Id": "Q85",
//     "subject": "Biology",
//     "chapter": "Chapter 14"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 86?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 86,
//     "Id": "Q86",
//     "subject": "Physics",
//     "chapter": "Chapter 17"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 87?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 87,
//     "Id": "Q87",
//     "subject": "Biology",
//     "chapter": "Chapter 10"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 88?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 88,
//     "Id": "Q88",
//     "subject": "Math",
//     "chapter": "Chapter 10"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 89?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 89,
//     "Id": "Q89",
//     "subject": "Physics",
//     "chapter": "Chapter 5"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 90?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 90,
//     "Id": "Q90",
//     "subject": "Biology",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 91?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 91,
//     "Id": "Q91",
//     "subject": "Math",
//     "chapter": "Chapter 18"
//   },
//   {
//     "category": "JEE",
//     "question": "Sample question number 92?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 92,
//     "Id": "Q92",
//     "subject": "Math",
//     "chapter": "Chapter 10"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 93?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 93,
//     "Id": "Q93",
//     "subject": "Chemistry",
//     "chapter": "Chapter 3"
//   },
//   {
//     "category": "CET",
//     "question": "Sample question number 94?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 94,
//     "Id": "Q94",
//     "subject": "Math",
//     "chapter": "Chapter 18"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 95?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 95,
//     "Id": "Q95",
//     "subject": "Physics",
//     "chapter": "Chapter 15"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 96?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 96,
//     "Id": "Q96",
//     "subject": "Biology",
//     "chapter": "Chapter 9"
//   },
//   {
//     "category": "GATE",
//     "question": "Sample question number 97?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 97,
//     "Id": "Q97",
//     "subject": "Math",
//     "chapter": "Chapter 9"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 98?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 98,
//     "Id": "Q98",
//     "subject": "Physics",
//     "chapter": "Chapter 16"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 99?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D"
//     ],
//     "answer": "Option A",
//     "serial_no": 99,
//     "Id": "Q99",
//     "subject": "Physics",
//     "chapter": "Chapter 2"
//   },
//   {
//     "category": "NEET",
//     "question": "Sample question number 100?",
//     "options": [
//       "Option A",
//       "Option B",
//       "Option C",
//       "Option D",
//       "Option E"
//     ],
//     "answer": "Option A",
//     "serial_no": 100,
//     "Id": "Q100",
//     "subject": "Chemistry",
//     "chapter": "Chapter 9"
//   }
// ];
  
  const questions = [
    {
      "category": "JEE",
      "question": "What is the atomic number of Helium?",
      "options": ["1", "2", "4", "6"],
      "answer": "2",
      "serial_no": 1,
      "Id": "Q1",
      "subject": "Chemistry",
      "chapter": "Chapter 1"
    },
    {
      "category": "NEET",
      "question": "What is the powerhouse of the cell?",
      "options": ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      "answer": "Mitochondria",
      "serial_no": 2,
      "Id": "Q2",
      "subject": "Biology",
      "chapter": "Chapter 3"
    },
    {
      "category": "CET",
      "question": "What is the SI unit of force?",
      "options": ["Pascal", "Newton", "Joule", "Watt"],
      "answer": "Newton",
      "serial_no": 3,
      "Id": "Q3",
      "subject": "Physics",
      "chapter": "Chapter 2"
    },
    {
      "category": "GATE",
      "question": "What is the value of the mathematical constant π?",
      "options": ["2.14", "3.14", "1.62", "4.13"],
      "answer": "3.14",
      "serial_no": 4,
      "Id": "Q4",
      "subject": "Mathematics",
      "chapter": "Chapter 1"
    },
    {
      "category": "JEE",
      "question": "Who is known as the father of modern chemistry?",
      "options": ["Isaac Newton", "Albert Einstein", "Antoine Lavoisier", "Dmitri Mendeleev"],
      "answer": "Antoine Lavoisier",
      "serial_no": 5,
      "Id": "Q5",
      "subject": "Chemistry",
      "chapter": "Chapter 4"
    },
    {
      "category": "NEET",
      "question": "Which blood group is known as the universal donor?",
      "options": ["A", "B", "O", "AB"],
      "answer": "O",
      "serial_no": 6,
      "Id": "Q6",
      "subject": "Biology",
      "chapter": "Chapter 5"
    },
    {
      "category": "CET",
      "question": "What is the speed of light in a vacuum?",
      "options": ["3 x 10^8 m/s", "2 x 10^8 m/s", "1.5 x 10^8 m/s", "3.5 x 10^8 m/s"],
      "answer": "3 x 10^8 m/s",
      "serial_no": 7,
      "Id": "Q7",
      "subject": "Physics",
      "chapter": "Chapter 1"
    },
    {
      "category": "GATE",
      "question": "What is the derivative of sin(x)?",
      "options": ["cos(x)", "-cos(x)", "-sin(x)", "sin(x)"],
      "answer": "cos(x)",
      "serial_no": 8,
      "Id": "Q8",
      "subject": "Mathematics",
      "chapter": "Chapter 3"
    },
    {
      "category": "JEE",
      "question": "What is the molecular formula of water?",
      "options": ["H2O", "CO2", "O2", "H2"],
      "answer": "H2O",
      "serial_no": 9,
      "Id": "Q9",
      "subject": "Chemistry",
      "chapter": "Chapter 2"
    },
    {
      "category": "NEET",
      "question": "Which part of the plant is responsible for photosynthesis?",
      "options": ["Stem", "Root", "Leaf", "Flower"],
      "answer": "Leaf",
      "serial_no": 10,
      "Id": "Q10",
      "subject": "Biology",
      "chapter": "Chapter 4"
    },
    {
      "category": "CET",
      "question": "Who formulated the laws of motion?",
      "options": ["Galileo", "Newton", "Einstein", "Tesla"],
      "answer": "Newton",
      "serial_no": 11,
      "Id": "Q11",
      "subject": "Physics",
      "chapter": "Chapter 6"
    },
    {
      "category": "GATE",
      "question": "What is the integral of 1/x?",
      "options": ["ln(x)", "e^x", "x^2/2", "1/x^2"],
      "answer": "ln(x)",
      "serial_no": 12,
      "Id": "Q12",
      "subject": "Mathematics",
      "chapter": "Chapter 2"
    },
    {
      "category": "JEE",
      "question": "What is Avogadro's number?",
      "options": ["6.02 x 10^23", "3.14", "1.62 x 10^23", "2.17 x 10^23"],
      "answer": "6.02 x 10^23",
      "serial_no": 13,
      "Id": "Q13",
      "subject": "Chemistry",
      "chapter": "Chapter 3"
    },
    {
      "category": "NEET",
      "question": "What is the structural and functional unit of the kidney?",
      "options": ["Neuron", "Nephron", "Alveolus", "Atrium"],
      "answer": "Nephron",
      "serial_no": 14,
      "Id": "Q14",
      "subject": "Biology",
      "chapter": "Chapter 8"
    },
    {
      "category": "CET",
      "question": "What is the unit of electrical resistance?",
      "options": ["Volt", "Ohm", "Ampere", "Watt"],
      "answer": "Ohm",
      "serial_no": 15,
      "Id": "Q15",
      "subject": "Physics",
      "chapter": "Chapter 7"
    },
    {
      "category": "JEE",
      "question": "What is the law of conservation of mass?",
      "options": ["Mass can be created or destroyed", "Mass and energy are interchangeable", "Mass remains constant in a chemical reaction", "Mass is directly proportional to volume"],
      "answer": "Mass remains constant in a chemical reaction",
      "serial_no": 16,
      "Id": "Q16",
      "subject": "Chemistry",
      "chapter": "Chapter 5"
    },
    {
      "category": "NEET",
      "question": "What is the process of photosynthesis?",
      "options": ["Conversion of light energy into chemical energy", "Conversion of chemical energy into light energy", "Breakdown of food molecules to release energy", "Building up of complex molecules from simpler ones"],
      "answer": "Conversion of light energy into chemical energy",
      "serial_no": 17,
      "Id": "Q17",
      "subject": "Biology",
      "chapter": "Chapter 6"
    },
    {
      "category": "CET",
      "question": "What is the principle of Archimedes?",
      "options": ["A body immersed in a fluid experiences an upthrust equal to the weight of the fluid displaced", "Pressure is inversely proportional to area", "Pressure in a fluid at rest acts equally in all directions", "Velocity of a fluid is inversely proportional to its cross-sectional area"],
      "answer": "A body immersed in a fluid experiences an upthrust equal to the weight of the fluid displaced",
      "serial_no": 18,
      "Id": "Q18",
      "subject": "Physics",
      "chapter": "Chapter 8"
    },
    {
      "category": "GATE",
      "question": "What is the limit of (sin x)/x as x approaches 0?",
      "options": ["0", "1", "infinity", "does not exist"],
      "answer": "1",
      "serial_no": 19,
      "Id": "Q19",
      "subject": "Mathematics",
      "chapter": "Chapter 4"
    },
    {
      "category": "JEE",
      "question": "What is the concept of entropy?",
      "options": ["Measure of disorder in a system", "Measure of energy in a system", "Measure of work done by a system", "Measure of heat transferred to a system"],
      "answer": "Measure of disorder in a system",
      "serial_no": 20,
      "Id": "Q20",
      "subject": "Chemistry",
      "chapter": "Chapter 6"
    },
    {
      "category": "NEET",
      "question": "What is the function of the nervous system?",
      "options": ["To transport oxygen to cells", "To break down food for energy", "To coordinate and control body functions", "To protect the body from infection"],
      "answer": "To coordinate and control body functions",
      "serial_no": 21,
      "Id": "Q21",
      "subject": "Biology",
      "chapter": "Chapter 7"
    },
    {
      "category": "CET",
      "question": "What is the formula for kinetic energy?",
      "options": ["1/2 mv^2", "mgh", "F x d", "P x V"],
      "answer": "1/2 mv^2",
      "serial_no": 22,
      "Id": "Q22",
      "subject": "Physics",
      "chapter": "Chapter 9"
    },
    {
      "category": "GATE",
      "question": "What is the derivative of e^x?",
      "options": ["e^x", "x*e^(x-1)", "ln(x)", "1/x"],
      "answer": "e^x",
      "serial_no": 23,
      "Id": "Q23",
      "subject": "Mathematics",
      "chapter": "Chapter 5"
    },
    {
      "category": "JEE",
      "question": "What is the concept of hybridization?",
      "options": ["Mixing of atomic orbitals to form hybrid orbitals", "Mixing of different elements to form a compound", "Mixing of different isotopes of an element", "Mixing of different energy levels of an atom"],
      "answer": "Mixing of atomic orbitals to form hybrid orbitals",
      "serial_no": 24,
      "Id": "Q24",
      "subject": "Chemistry",
      "chapter": "Chapter 7"
    },
    {
      "category": "NEET",
      "question": "What is the role of insulin in the body?",
      "options": ["To regulate blood sugar levels", "To aid in digestion", "To fight infection", "To regulate body temperature"],
      "answer": "To regulate blood sugar levels",
      "serial_no": 25,
      "Id": "Q25",
      "subject": "Biology",
      "chapter": "Chapter 8"
    },
    {
      "category": "CET",
      "question": "What is the unit of electric charge?",
      "options": ["Volt", "Ampere", "Coulomb", "Ohm"],
      "answer": "Coulomb",
      "serial_no": 26,
      "Id": "Q26",
      "subject": "Physics",
      "chapter": "Chapter 10"
    },
    {
      "category": "GATE",
      "question": "What is the integral of x^n?",
      "options": ["x^(n+1)/(n+1)", "nx^(n-1)", "ln(x^n)", "1/(n+1)x^(n+1)"],
      "answer": "x^(n+1)/(n+1)",
      "serial_no": 27,
      "Id": "Q27",
      "subject": "Mathematics",
      "chapter": "Chapter 6"
    },
    {
      "category": "JEE",
      "question": "What is the concept of redox reactions?",
      "options": ["Reactions involving transfer of electrons", "Reactions involving transfer of protons", "Reactions involving transfer of heat", "Reactions involving transfer of mass"],
      "answer": "Reactions involving transfer of electrons",
      "serial_no": 28,
      "Id": "Q28",
      "subject": "Chemistry",
      "chapter": "Chapter 8"
    },
    {
      "category": "NEET",
      "question": "What is the function of the kidneys?",
      "options": ["To produce hormones", "To filter waste products from the blood", "To aid in digestion", "To regulate body temperature"],
      "answer": "To filter waste products from the blood",
      "serial_no": 29,
      "Id": "Q29",
      "subject": "Biology",
      "chapter": "Chapter 9"
    },
    {
      "category": "CET",
      "question": "What is the principle of conservation of energy?",
      "options": ["Energy can be created but not destroyed", "Energy can be destroyed but not created", `Energy   
   can neither be created nor destroyed, but can be transformed from one form to another`, `Energy   
   is directly proportional to mass`],
      "answer": "Energy can neither be created nor destroyed, but can be transformed from one form to another",
      "serial_no": 30,
      "Id": "Q30",
      "subject": "Physics",
      "chapter": "Chapter 11"
    },
    {
      "category": "GATE",
      "question": "What is the Taylor series expansion of e^x?",
      "options": ["1 + x + x^2/2! + x^3/3! + ...", "1 - x + x^2/2! - x^3/3! + ...", "x - x^2/2! + x^3/3! - ...", "1 + x^2/2! + x^4/4! + ..."],
      "answer": "1 + x + x^2/2! + x^3/3! + ...",
      "serial_no": 31,
      "Id": "Q31",
      "subject": "Mathematics",
      "chapter": "Chapter 7"
    },
    {
      "category": "JEE",
      "question": "What is the concept of equilibrium constant?",
      "options": ["Ratio of the rate constants of forward and backward reactions", "Ratio of the concentrations of products to reactants at equilibrium", "Ratio of the activation energies of forward and backward reactions", "Ratio of the enthalpy changes of forward and backward reactions"],
      "answer": "Ratio of the concentrations of products to reactants at equilibrium",
      "serial_no": 32,
      "Id": "Q32",
      "subject": "Chemistry",
      "chapter": "Chapter 9"
    },
    {
      "category": "NEET",
      "question": "What is the function of the endocrine system?",
      "options": ["To regulate body temperature", "To transport oxygen to cells", "To produce hormones to regulate body functions", "To filter waste products from the blood"],
      "answer": "To produce hormones to regulate body functions",
      "serial_no": 33,
      "Id": "Q33",
      "subject": "Biology",
      "chapter": "Chapter 10"
    },
    {
      "category": "CET",
      "question": "What is the unit of power?",
      "options": ["Joule", "Watt", "Newton", "Pascal"],
      "answer": "Watt",
      "serial_no": 34,
      "Id": "Q34",
      "subject": "Physics",
      "chapter": "Chapter 12"
    },
    {
      "category": "GATE",
      "question": "What is the Laplace transform of f(t) = t^n?",
      "options": ["n!/s^(n+1)", "s^n/n!", "1/(s-n)", "e^(-ns)"],
      "answer": "n!/s^(n+1)",
      "serial_no": 35,
      "Id": "Q35",
      "subject": "Mathematics",
      "chapter": "Chapter 8"
    },
    {
      "category": "JEE",
      "question": "What is the concept of ionic bond?",
      "options": ["Bond formed by sharing of electrons", "Bond formed by transfer of electrons", "Bond formed by electrostatic attraction between ions", "Bond formed by hydrogen bonding"],
      "answer": "Bond formed by transfer of electrons",
      "serial_no": 36,
      "Id": "Q36",
      "subject": "Chemistry",
      "chapter": "Chapter 10"
    },
    {
      "category": "NEET",
      "question": "What is the process of respiration?",
      "options": ["Taking in oxygen and releasing carbon dioxide", "Breaking down food to release energy", "Building up of complex molecules from simpler ones", "Transport of oxygen to cells"],
      "answer": "Taking in oxygen and releasing carbon dioxide",
      "serial_no": 37,
      "Id": "Q37",
      "subject": "Biology",
      "chapter": "Chapter 11"
    },
    {
      "category": "CET",
      "question": "What is the formula for potential energy?",
      "options": ["mgh", "1/2 mv^2", "F x d", "P x V"],
      "answer": "mgh",
      "serial_no": 38,
      "Id": "Q38",
      "subject": "Physics",
      "chapter": "Chapter 13"
    },
    {
      "category": "GATE",
      "question": "What is the Fourier transform of a Dirac delta function?",
      "options": ["1", "0", "infinity", "undefined"],
      "answer": "1",
      "serial_no": 39,
      "Id": "Q39",
      "subject": "Mathematics",
      "chapter": "Chapter 9"
    },
    {
      "category": "JEE",
      "question": "What is the concept of pH?",
      "options": ["Measure of acidity of a solution", "Measure of basicity of a solution", "Measure of concentration of a solution", "Measure of temperature of a solution"],
      "answer": "Measure of acidity of a solution",
      "serial_no": 40,
      "Id": "Q40",
      "subject": "Chemistry",
      "chapter": "Chapter 11"
    },
    {
      "category": "NEET",
      "question": "What is the role of the liver in the human body?",
      "options": ["To produce hormones", "To filter waste products from the blood", "To aid in digestion and detoxification", "To regulate body temperature"],
      "answer": "To aid in digestion and detoxification",
      "serial_no": 41,
      "Id": "Q41",
      "subject": "Biology",
      "chapter": "Chapter 12"
    },
    {
      "category": "CET",
      "question": "What is the unit of pressure?",
      "options": ["Pascal", "Newton", "Joule", "Watt"],
      "answer": "Pascal",
      "serial_no": 42,
      "Id": "Q42",
      "subject": "Physics",
      "chapter": "Chapter 14"
    },
    {
      "category": "GATE",
      "question": "What is the divergence of a vector field?",
      "options": ["Measure of the source or sink of a vector field", "Measure of the curl of a vector field", "Measure of the magnitude of a vector field", "Measure of the direction of a vector field"],
      "answer": "Measure of the source or sink of a vector field",
      "serial_no": 43,
      "Id": "Q43",
      "subject": "Mathematics",
      "chapter": "Chapter 10"
    },
    {
      "category": "JEE",
      "question": "What is the concept of chemical equilibrium?",
      "options": ["State of a reaction where the rate of forward reaction is equal to the rate of backward reaction", "State of a reaction where the concentration of reactants is equal to the concentration of products", "State of a reaction where the temperature remains constant", "State of a reaction where the pressure remains constant"],
      "answer": "State of a reaction where the rate of forward reaction is equal to the rate of backward reaction",
      "serial_no": 44,
      "Id": "Q44",
      "subject": "Chemistry",
      "chapter": "Chapter 12"
    },
    {
      "category": "NEET",
      "question": "What is the function of the lungs?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To aid in digestion", "To exchange oxygen and carbon dioxide with the blood"],
      "answer": "To exchange oxygen and carbon dioxide with the blood",
      "serial_no": 45,
      "Id": "Q45",
      "subject": "Biology",
      "chapter": "Chapter 13"
    },
    {
      "category": "CET",
      "question": "What is the unit of electric field intensity?",
      "options": ["Volt", "Ampere", "Coulomb", "Newton/Coulomb"],
      "answer": "Newton/Coulomb",
      "serial_no": 46,
      "Id": "Q46",
      "subject": "Physics",
      "chapter": "Chapter 15"
    },
    {
      "category": "GATE",
      "question": "What is the curl of a vector field?",
      "options": ["Measure of the source or sink of a vector field", "Measure of the rotation of a vector field", "Measure of the magnitude of a vector field", "Measure of the direction of a vector field"],
      "answer": "Measure of the rotation of a vector field",
      "serial_no": 47,
      "Id": "Q47",
      "subject": "Mathematics",
      "chapter": "Chapter 11"
    },
    {
      "category": "JEE",
      "question": "What is the concept of organic chemistry?",
      "options": ["Chemistry of carbon compounds", "Chemistry of inorganic compounds", "Chemistry of metals", "Chemistry of non-metals"],
      "answer": "Chemistry of carbon compounds",
      "serial_no": 48,
      "Id": "Q48",
      "subject": "Chemistry",
      "chapter": "Chapter 13"
    },
    {
      "category": "NEET",
      "question": "What is the function of the heart?",
      "options": ["To pump blood throughout the body", "To filter waste products from the blood", "To aid in digestion", "To regulate body temperature"],
      "answer": "To pump blood throughout the body",
      "serial_no": 49,
      "Id": "Q49",
      "subject": "Biology",
      "chapter": "Chapter 14"
    },
    {
      "category": "CET",
      "question": "What is the unit of magnetic field strength?",
      "options": ["Tesla", "Gauss", "Weber", "Ampere-turn/meter"],
      "answer": "Tesla",
      "serial_no": 50,
      "Id": "Q50",
      "subject": "Physics",
      "chapter": "Chapter 16"
    },
    {
      "category": "GATE",
      "question": "What is the Green's theorem?",
      "options": ["Relates a line integral to a surface integral", "Relates a surface integral to a volume integral", "Relates a line integral to a volume integral", "Relates a surface integral to a line integral"],
      "answer": "Relates a line integral to a surface integral",
      "serial_no": 51,
      "Id": "Q51",
      "subject": "Mathematics",
      "chapter": "Chapter 12"
    },
    {
      "category": "JEE",
      "question": "What is the concept of isomerism?",
      "options": ["Compounds with the same molecular formula but different structural formulas", "Compounds with the same molecular formula but different physical properties", "Compounds with the same molecular formula but different chemical properties", "Compounds with different molecular formulas but the same structural formula"],
      "answer": "Compounds with the same molecular formula but different structural formulas",
      "serial_no": 52,
      "Id": "Q52",
      "subject": "Chemistry",
      "chapter": "Chapter 14"
    },
    {
      "category": "NEET",
      "question": "What is the function of the digestive system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To regulate body temperature"],
      "answer": "To break down food into nutrients",
      "serial_no": 53,
      "Id": "Q53",
      "subject": "Biology",
      "chapter": "Chapter 15"
    },
    {
      "category": "CET",
      "question": "What is the principle of electromagnetic induction?",
      "options": ["A changing magnetic field induces an electric current", "A changing electric current induces a magnetic field", "A moving charge produces a magnetic field", "A magnetic field exerts a force on a moving charge"],
      "answer": "A changing magnetic field induces an electric current",
      "serial_no": 54,
      "Id": "Q54",
      "subject": "Physics",
      "chapter": "Chapter 17"
    },
    {
      "category": "GATE",
      "question": "What is the Stokes' theorem?",
      "options": ["Relates a line integral to a surface integral", "Relates a surface integral to a volume integral", "Relates a line integral to a volume integral", "Relates a surface integral to a line integral"],
      "answer": "Relates a line integral to a surface integral",
      "serial_no": 55,
      "Id": "Q55",
      "subject": "Mathematics",
      "chapter": "Chapter 13"
    },
    {
      "category": "JEE",
      "question": "What is the concept of functional groups?",
      "options": ["Groups of atoms responsible for the characteristic properties of organic compounds", "Groups of atoms that are not involved in chemical reactions", "Groups of atoms that are only present in inorganic compounds", "Groups of atoms that are only present in biological molecules"],
      "answer": "Groups of atoms responsible for the characteristic properties of organic compounds",
      "serial_no": 56,
      "Id": "Q56",
      "subject": "Chemistry",
      "chapter": "Chapter 15"
    },
    {
      "category": "NEET",
      "question": "What is the function of the endocrine system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To produce hormones to regulate body functions", "To regulate body temperature"],
      "answer": "To produce hormones to regulate body functions",
      "serial_no": 57,
      "Id": "Q57",
      "subject": "Biology",
      "chapter": "Chapter 16"
    },
    {
      "category": "CET",
      "question": "What is the principle of a transformer?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Ohm's law", "Kirchhoff's laws"],
      "answer": "Electromagnetic induction",
      "serial_no": 58,
      "Id": "Q58",
      "subject": "Physics",
      "chapter": "Chapter 18"
    },
    {
      "category": "GATE",
      "question": "What is the divergence theorem?",
      "options": ["Relates a surface integral to a volume integral", "Relates a line integral to a surface integral", "Relates a line integral to a volume integral", "Relates a surface integral to a line integral"],
      "answer": "Relates a surface integral to a volume integral",
      "serial_no": 59,
      "Id": "Q59",
      "subject": "Mathematics",
      "chapter": "Chapter 14"
    },
    {
      "category": "JEE",
      "question": "What is the concept of chemical kinetics?",
      "options": ["Study of the rates of chemical reactions", "Study of the mechanisms of chemical reactions", "Study of the equilibrium of chemical reactions", "Study of the thermodynamics of chemical reactions"],
      "answer": "Study of the rates of chemical reactions",
      "serial_no": 60,
      "Id": "Q60",
      "subject": "Chemistry",
      "chapter": "Chapter 16"
    },
    {
      "category": "NEET",
      "question": "What is the function of the nervous system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To coordinate and control body functions"],
      "answer": "To coordinate and control body functions",
      "serial_no": 61,
      "Id": "Q61",
      "subject": "Biology",
      "chapter": "Chapter 17"
    },
    {
      "category": "CET",
      "question": "What is the principle of a generator?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Ohm's law", "Kirchhoff's laws"],
      "answer": "Electromagnetic induction",
      "serial_no": 62,
      "Id": "Q62",
      "subject": "Physics",
      "chapter": "Chapter 19"
    },
    {
      "category": "GATE",
      "question": "What is the Fourier series of a periodic function?",
      "options": ["Representation of a periodic function as a sum of sine and cosine functions", "Representation of a periodic function as a sum of exponential functions", "Representation of a periodic function as a sum of polynomial functions", "Representation of a periodic function as a sum of logarithmic functions"],
      "answer": "Representation of a periodic function as a sum of sine and cosine functions",
      "serial_no": 63,
      "Id": "Q63",
      "subject": "Mathematics",
      "chapter": "Chapter 15"
    },
    {
      "category": "JEE",
      "question": "What is the concept of chemical bonding?",
      "options": ["Forces that hold atoms together in molecules and compounds", "Forces that hold ions together in ionic compounds", "Forces that hold molecules together in covalent compounds", "Forces that hold atoms together in metallic compounds"],
      "answer": "Forces that hold atoms together in molecules and compounds",
      "serial_no": 64,
      "Id": "Q64",
      "subject": "Chemistry",
      "chapter": "Chapter 17"
    },
    {
      "category": "NEET",
      "question": "What is the function of the respiratory system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To exchange oxygen and carbon dioxide with the blood"],
      "answer": "To exchange oxygen and carbon dioxide with the blood",
      "serial_no": 65,
      "Id": "Q65",
      "subject": "Biology",
      "chapter": "Chapter 18"
    },
    {
      "category": "CET",
      "question": "What is the principle of a motor?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Force on a current-carrying conductor in a magnetic field", "Ohm's law"],
      "answer": "Force on a current-carrying conductor in a magnetic field",
      "serial_no": 66,
      "Id": "Q66",
      "subject": "Physics",
      "chapter": "Chapter 20"
    },
    {
      "category": "GATE",
      "question": "What is the Laplace transform of a unit step function?",
      "options": ["1/s", "1/s^2", "s", "s^2"],
      "answer": "1/s",
      "serial_no": 67,
      "Id": "Q67",
      "subject": "Mathematics",
      "chapter": "Chapter 16"
    },
    {
      "category": "JEE",
      "question": "What is the concept of periodic table?",
      "options": ["Arrangement of elements based on their atomic number and properties", "Arrangement of elements based on their atomic mass and properties", "Arrangement of elements based on their electron configuration and properties", "Arrangement of elements based on their chemical reactivity and properties"],
      "answer": "Arrangement of elements based on their atomic number and properties",
      "serial_no": 68,
      "Id": "Q68",
      "subject": "Chemistry",
      "chapter": "Chapter 18"
    },
    {
      "category": "NEET",
      "question": "What is the function of the excretory system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To regulate body temperature"],
      "answer": "To filter waste products from the blood",
      "serial_no": 69,
      "Id": "Q69",
      "subject": "Biology",
      "chapter": "Chapter 19"
    },
    {
      "category": "CET",
      "question": "What is the principle of a galvanometer?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Force on a current-carrying conductor in a magnetic field", "Ohm's law"],
      "answer": "Force on a current-carrying conductor in a magnetic field",
      "serial_no": 70,
      "Id": "Q70",
      "subject": "Physics",
      "chapter": "Chapter 21"
    },
    {
      "category": "GATE",
      "question": "What is the Z-transform of a unit impulse function?",
      "options": ["1", "0", "infinity", "undefined"],
      "answer": "1",
      "serial_no": 71,
      "Id": "Q71",
      "subject": "Mathematics",
      "chapter": "Chapter 17"
    },
    {
      "category": "JEE",
      "question": "What is the concept of solutions?",
      "options": ["Homogeneous mixtures of two or more substances", "Heterogeneous mixtures of two or more substances", "Pure substances", "Elements"],
      "answer": "Homogeneous mixtures of two or more substances",
      "serial_no": 72,
      "Id": "Q72",
      "subject": "Chemistry",
      "chapter": "Chapter 19"
    },
    {
      "category": "NEET",
      "question": "What is the function of the reproductive system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To produce offspring"],
      "answer": "To produce offspring",
      "serial_no": 73,
      "Id": "Q73",
      "subject": "Biology",
      "chapter": "Chapter 20"
    },
    {
      "category": "CET",
      "question": "What is the principle of a voltmeter?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Force on a current-carrying conductor in a magnetic field"],
      "answer": "Ohm's law",
      "serial_no": 74,
      "Id": "Q74",
      "subject": "Physics",
      "chapter": "Chapter 22"
    },
    {
      "category": "GATE",
      "question": "What is the convolution of two functions?",
      "options": ["Integral of the product of the two functions", "Product of the integrals of the two functions", "Sum of the integrals of the two functions", "Difference of the integrals of the two functions"],
      "answer": "Integral of the product of the two functions",
      "serial_no": 75,
      "Id": "Q75",
      "subject": "Mathematics",
      "chapter": "Chapter 18"
    },
    {
      "category": "JEE",
      "question": "What is the concept of electrochemistry?",
      "options": ["Study of the relationship between electricity and chemical reactions", "Study of the relationship between magnetism and chemical reactions", "Study of the relationship between heat and chemical reactions", "Study of the relationship between light and chemical reactions"],
      "answer": "Study of the relationship between electricity and chemical reactions",
      "serial_no": 76,
      "Id": "Q76",
      "subject": "Chemistry",
      "chapter": "Chapter 20"
    },
    {
      "category": "NEET",
      "question": "What is the function of the immune system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To protect the body from infection",
      "serial_no": 77,
      "Id": "Q77",
      "subject": "Biology",
      "chapter": "Chapter 21"
    },
    {
      "category": "CET",
      "question": "What is the principle of an ammeter?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Force on a current-carrying conductor in a magnetic field"],
      "answer": "Ohm's law",
      "serial_no": 78,
      "Id": "Q78",
      "subject": "Physics",
      "chapter": "Chapter 23"
    },
    {
      "category": "GATE",
      "question": "What is the Dirac delta function?",
      "options": ["Function that is zero everywhere except at a single point", "Function that is one everywhere", "Function that is zero everywhere", "Function that is infinite everywhere"],
      "answer": "Function that is zero everywhere except at a single point",
      "serial_no": 79,
      "Id": "Q79",
      "subject": "Mathematics",
      "chapter": "Chapter 19"
    },
    {
      "category": "JEE",
      "question": "What is the concept of redox reactions?",
      "options": ["Reactions involving transfer of electrons", "Reactions involving transfer of protons", "Reactions involving transfer of heat", "Reactions involving transfer of mass"],
      "answer": "Reactions involving transfer of electrons",
      "serial_no": 80,
      "Id": "Q80",
      "subject": "Chemistry",
      "chapter": "Chapter 21"
    },
    {
      "category": "NEET",
      "question": "What is the function of the circulatory system?",
      "options": ["To transport oxygen and nutrients to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To transport oxygen and nutrients to cells",
      "serial_no": 81,
      "Id": "Q81",
      "subject": "Biology",
      "chapter": "Chapter 22"
    },
    {
      "category": "CET",
      "question": "What is the principle of a potentiometer?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Potential drop across a uniform wire is directly proportional to its length"],
      "answer": "Potential drop across a uniform wire is directly proportional to its length",
      "serial_no": 82,
      "Id": "Q82",
      "subject": "Physics",
      "chapter": "Chapter 24"
    },
    {
      "category": "GATE",
      "question": "What is the Fourier transform of a Gaussian function?",
      "options": ["Another Gaussian function", "A Dirac delta function", "A sinusoidal function", "A constant function"],
      "answer": "Another Gaussian function",
      "serial_no": 83,
      "Id": "Q83",
      "subject": "Mathematics",
      "chapter": "Chapter 20"
    },
    {
      "category": "JEE",
      "question": "What is the concept of chemical equilibrium?",
      "options": ["State of a reaction where the rate of forward reaction is equal to the rate of backward reaction", "State of a reaction where the concentration of reactants is equal to the concentration of products", "State of a reaction where the temperature remains constant", "State of a reaction where the pressure remains constant"],
      "answer": "State of a reaction where the rate of forward reaction is equal to the rate of backward reaction",
      "serial_no": 84,
      "Id": "Q84",
      "subject": "Chemistry",
      "chapter": "Chapter 22"
    },
    {
      "category": "NEET",
      "question": "What is the function of the skeletal system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To provide structural support and protection", "To regulate body temperature"],
      "answer": "To provide structural support and protection",
      "serial_no": 85,
      "Id": "Q85",
      "subject": "Biology",
      "chapter": "Chapter 23"
    },
    {
      "category": "CET",
      "question": "What is the principle of a meter bridge?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Wheatstone bridge principle"],
      "answer": "Wheatstone bridge principle",
      "serial_no": 86,
      "Id": "Q86",
      "subject": "Physics",
      "chapter": "Chapter 25"
    },
    {
      "category": "GATE",
      "question": "What is the Z-transform of a unit step function?",
      "options": ["1/s", "1/s^2", "s", "s^2"],
      "answer": "1/s",
      "serial_no": 87,
      "Id": "Q87",
      "subject": "Mathematics",
      "chapter": "Chapter 21"
    },
    {
      "category": "JEE",
      "question": "What is the concept of solutions?",
      "options": ["Homogeneous mixtures of two or more substances", "Heterogeneous mixtures of two or more substances", "Pure substances", "Elements"],
      "answer": "Homogeneous mixtures of two or more substances",
      "serial_no": 88,
      "Id": "Q88",
      "subject": "Chemistry",
      "chapter": "Chapter 23"
    },
    {
      "category": "NEET",
      "question": "What is the function of the muscular system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To enable movement"],
      "answer": "To enable movement",
      "serial_no": 89,
      "Id": "Q89",
      "subject": "Biology",
      "chapter": "Chapter 24"
    },
    {
      "category": "CET",
      "question": "What is the principle of a thermocouple?",
      "options": ["Seebeck effect", "Peltier effect", "Thomson effect", "Joule's heating effect"],
      "answer": "Seebeck effect",
      "serial_no": 90,
      "Id": "Q90",
      "subject": "Physics",
      "chapter": "Chapter 26"
    },
    {
      "category": "GATE",
      "question": "What is the convolution of two functions?",
      "options": ["Integral of the product of the two functions", "Product of the integrals of the two functions", "Sum of the integrals of the two functions", "Difference of the integrals of the two functions"],
      "answer": "Integral of the product of the two functions",
      "serial_no": 91,
      "Id": "Q91",
      "subject": "Mathematics",
      "chapter": "Chapter 22"
    },
    {
      "category": "JEE",
      "question": "What is the concept of electrochemistry?",
      "options": ["Study of the relationship between electricity and chemical reactions", "Study of the relationship between magnetism and chemical reactions", "Study of the relationship between heat and chemical reactions", "Study of the relationship between light and chemical reactions"],
      "answer": "Study of the relationship between electricity and chemical reactions",
      "serial_no": 92,
      "Id": "Q92",
      "subject": "Chemistry",
      "chapter": "Chapter 24"
    },
    {
      "category": "NEET",
      "question": "What is the function of the immune system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To protect the body from infection",
      "serial_no": 93,
      "Id": "Q93",
      "subject": "Biology",
      "chapter": "Chapter 25"
    },
    {
      "category": "CET",
      "question": "What is the principle of a transistor?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Transistor action"],
      "answer": "Transistor action",
      "serial_no": 94,
      "Id": "Q94",
      "subject": "Physics",
      "chapter": "Chapter 27"
    },
    {
      "category": "GATE",
      "question": "What is the Dirac delta function?",
      "options": ["Function that is zero everywhere except at a single point", "Function that is one everywhere", "Function that is zero everywhere", "Function that is infinite everywhere"],
      "answer": "Function that is zero everywhere except at a single point",
      "serial_no": 95,
      "Id": "Q95",
      "subject": "Mathematics",
      "chapter": "Chapter 23"
    },
    {
      "category": "JEE",
      "question": "What is the concept of redox reactions?",
      "options": ["Reactions involving transfer of electrons", "Reactions involving transfer of protons", "Reactions involving transfer of heat", "Reactions involving transfer of mass"],
      "answer": "Reactions involving transfer of electrons",
      "serial_no": 96,
      "Id": "Q96",
      "subject": "Chemistry",
      "chapter": "Chapter 25"
    },
    {
      "category": "NEET",
      "question": "What is the function of the circulatory system?",
      "options": ["To transport oxygen and nutrients to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To transport oxygen and nutrients to cells",
      "serial_no": 97,
      "Id": "Q97",
      "subject": "Biology",
      "chapter": "Chapter 26"
    },
    {
      "category": "CET",
      "question": "What is the principle of a diode?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Semiconductor properties"],
      "answer": "Semiconductor properties",
      "serial_no": 98,
      "Id": "Q98",
      "subject": "Physics",
      "chapter": "Chapter 28"
    },
    {
      "category": "GATE",
      "question": "What is the Fourier transform of a Gaussian function?",
      "options": ["Another Gaussian function", "A Dirac delta function", "A sinusoidal function", "A constant function"],
      "answer": "Another Gaussian function",
      "serial_no": 99,
      "Id": "Q99",
      "subject": "Mathematics",
      "chapter": "Chapter 24"
    },
    {
      "category": "JEE",
      "question": "What is the concept of chemical equilibrium?",
      "options": ["State of a reaction where the rate of forward reaction is equal to the rate of backward reaction", "State of a reaction where the concentration of reactants is equal to the concentration of products", "State of a reaction where the temperature remains constant", "State of a reaction where the pressure remains constant"],
      "answer": "State of a reaction where the rate of forward reaction is equal to the rate of backward reaction",
      "serial_no": 100,
      "Id": "Q100",
      "subject": "Chemistry",
      "chapter": "Chapter 26"
    }
  ]
  
module.exports = questions;
  