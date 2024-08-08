// script.js

const questions = [
    {
        question: 'Câu hỏi 1: HTML là gì?',
        answers: [
            { text: 'A. Hypertext Markup Language', correct: true },
            { text: 'B. Hypertext Machine Language', correct: false },
            { text: 'C. Hyperlink Markup Language', correct: false },
            { text: 'D. None of the above', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 2: CSS dùng để làm gì?',
        answers: [
            { text: 'A. Định dạng giao diện người dùng', correct: true },
            { text: 'B. Xử lý dữ liệu', correct: false },
            { text: 'C. Lưu trữ dữ liệu', correct: false },
            { text: 'D. Cung cấp dữ liệu', correct: false }
        ]
    }
    // Thêm các câu hỏi khác ở đây
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;

    // Tìm tất cả các nút câu trả lời
    const buttons = answerButtons.querySelectorAll('button');

    // Đổi màu nút theo kết quả
    buttons.forEach(button => {
        // So sánh nội dung của nút với câu trả lời
        if (button.innerText === answer.text) {
            if (correct) {
                button.classList.add('blink-green'); // Thêm lớp nhấp nháy xanh lá cây nếu đúng
            } else {
                button.classList.add('blink-red'); // Đổi màu nút thành đỏ nếu sai
            }
        }
        // Vô hiệu hóa tất cả các nút sau khi chọn câu trả lời
        button.disabled = true;
    });

    nextButton.classList.remove('hide');
}



function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        // Kết thúc quiz, có thể hiển thị điểm số
        questionContainer.innerText = 'Cảm ơn bạn đã hoàn thành quiz!';
        answerButtons.innerHTML = '';
        nextButton.classList.add('hide');
    }
}

nextButton.addEventListener('click', nextQuestion);

startQuiz();
