// script.js

const questions = [
    {
        question: 'Câu hỏi 1: Trong các luận điểm sau đây về văn hóa, luận điểm nào của HCM nói về chức năng của văn hóa?',
        answers: [
            { text: 'A. Kháng chiến hóa văn hóa, văn hóa hóa kháng chiến', correct: false },
            { text: 'B. Văn hóa cũng là 1 mặt trận', correct: false },
            { text: 'C. Xây dựng chính trị: dân quyền', correct: false },
            { text: 'D. Văn hóa phải thiết thực phục vụ nhân dân, góp phần vào việc nâng cao đời sống vui tươi, lành mạnh của quần chúng', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 2: Hoàn thiện câu sau đây của HCM: "Văn hóa phải [...] cho quốc dân đi"',
        answers: [
            { text: 'A. Mở đường', correct: false },
            { text: 'B. Chỉ đường', correct: false },
            { text: 'C. Soi đường', correct: true },
            { text: 'D. Dẫn đường', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 3: Theo HCM, chức năng của văn hóa là?',
        answers: [
            { text: 'A. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp', correct: false },
            { text: 'B. Nâng cao dân trí', correct: false },
            { text: 'C. Bồi dưỡng những phẩm chất và phong cách tốt đẹp', correct: false },
            { text: 'D. Tất cả đều đúng', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 4: Theo HCM, muốn thức tỉnh 1 dân tộc trước hết phải thức tỉnh bộ phận dân cư nào?',
        answers: [
            { text: 'A. Thanh niên', correct: true },
            { text: 'B. Trí thức', correct: false },
            { text: 'C. Phụ nữ', correct: false },
            { text: 'D. Nông dân', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 5: Trong cách mạng dân tộc dân chủ nhân dân, nền văn hóa mới có những tính chất nào?',
        answers: [
            { text: 'A. Dân tộc, đại chúng, hiện đại', correct: false },
            { text: 'B. Dân tộc, khoa học, dân chúng', correct: false },
            { text: 'C. Dân tộc, khoa học, đại chúng', correct: true },
            { text: 'D. Dân tộc, khoa học, quần chúng', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 6: HCM đánh giá cao nhất yếu tố nào trong giá trị văn hóa dân tộc?',
        answers: [
            { text: 'A. Lòng yêu nước', correct: false },
            { text: 'B. Ý thức đoàn kết cộng đồng', correct: false },
            { text: 'C. Lòng thương người', correct: false },
            { text: 'D. Yêu lao động', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 7: Tư tưởng đạo đức của HCM bắt nguồn từ?',
        answers: [
            { text: 'A. Truyền thống đạo đức của dân tộc Việt Nam', correct: false },
            { text: 'B. Kế thừa tư tưởng đạo đức phương Đông và tinh hoa văn hóa nhân loại', correct: false },
            { text: 'C. Tư tưởng đạo đức và những tấm gương đạo đức của Marx, Engels, Lenin', correct: false },
            { text: 'D. Tất cả đều đúng', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 8: Phẩm chất đạo đức cơ bản của con người Việt Nam trong thời đại mới theo tư tưởng HCM là?',
        answers: [
            { text: 'A. Trung với nước, hiếu với dân. Yêu thương con người', correct: false },
            { text: 'B. Cần, kiệm, liêm, chính và chí công vô tư', correct: false },
            { text: 'C. Có tinh thần quốc tế trong sáng', correct: false },
            { text: 'D. Cả A, B và C', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 9: Con người theo quan niệm của HCM là?',
        answers: [
            { text: 'A. Vốn quý nhất, nhân tố quan trọng của cách mạng', correct: false },
            { text: 'B. Vốn quý nhất, nhân tố quyết định thành công của cách mạng', correct: true },
            { text: 'C. Vốn quý của cách mạng', correct: false },
            { text: 'D. Động lực của cách mạng', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 10: Theo HCM: "[...] là gốc của cách mạng"',
        answers: [
            { text: 'A. Tài năng', correct: false },
            { text: 'B. Đạo đức', correct: true },
            { text: 'C. Bản lĩnh chính trị', correct: false },
            { text: 'D. Phẩm chất chính trị', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 11: HCM đề cập đến đạo đức trong những quan hệ nào sau đây?',
        answers: [
            { text: 'A. Đối với mình', correct: false },
            { text: 'B. Đối với người', correct: false },
            { text: 'C. Đối với việc', correct: false },
            { text: 'D. Cả A, B và C', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 12: Theo tư tưởng HCM, để phát huy động lực con người, cần phải?',
        answers: [
            { text: 'A. Phát huy sức mạnh của cả cộng đồng dân tộc và sức mạnh của cá nhân người lao động', correct: false },
            { text: 'B. Phát huy sức mạnh đoàn kết của cả cộng đồng dân tộc', correct: false },
            { text: 'C. Phát huy sức mạnh của cá nhân con người', correct: false },
            { text: 'D. Kêu gọi toàn dân', correct: true }
        ]
    },
    {
        question: 'Câu hỏi 13: Theo tư tưởng HCM, tính đại chúng của nền văn hóa được thể hiện ở chỗ?',
        answers: [
            { text: 'A. Nền văn hóa ấy phải phục vụ cho nhân dân và do nhân dân xây dựng nên', correct: true },
            { text: 'B. Đó là 1 nền văn hóa đa dạng', correct: false },
            { text: 'C. Đó là 1 nền văn hóa vượt ra khỏi biên giới quốc gia', correct: false },
            { text: 'D. Đó là 1 nền văn hóa rộng lớn', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 14: "Người cách mạng phải có [...], không có [...] thì dù tài giỏi đến mấy cũng không lãnh đạo được nhân dân"',
        answers: [
            { text: 'A. Tài năng và đạo đức', correct: false },
            { text: 'B. Đạo đức cách mạng', correct: true },
            { text: 'C. Bản lĩnh chính trị', correct: false },
            { text: 'D. Uy tín', correct: false }
        ]
    },
    {
        question: 'Câu hỏi 15: "Bồi dưỡng thế hệ cách mạng cho đời sau là 1 việc [...] và rất cần thiết"',
        answers: [
            { text: 'A. Không thể thiếu', correct: false },
            { text: 'B. Tương đối quan trọng', correct: true },
            { text: 'C. Rất quan trọng', correct: false },
            { text: 'D. Rất nên làm', correct: false }
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
        if (button.innerText === answer.text) {
            if (correct) {
                button.classList.add('blink-green'); // Thêm lớp nhấp nháy xanh lá cây nếu đúng
            } else {
                button.classList.add('blink-red'); // Thêm lớp nhấp nháy đỏ nếu sai
            }
        } else if (button.innerText === getCorrectAnswerText()) {
            button.classList.add('blink-green'); // Thêm lớp nhấp nháy xanh lá cây cho câu trả lời đúng
        }
        // Vô hiệu hóa tất cả các nút sau khi chọn câu trả lời
        button.disabled = true;
    });

    nextButton.classList.remove('hide');
}

function getCorrectAnswerText() {
    // Tìm câu trả lời đúng của câu hỏi hiện tại
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.answers.find(answer => answer.correct);
    return correctAnswer.text;
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
