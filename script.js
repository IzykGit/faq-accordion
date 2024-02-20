

const questions = document.querySelectorAll('.question')

const answers = document.querySelectorAll('.answer')

const images = document.querySelectorAll('.questionImage')


const plusImage = './assets/images/icon-plus.svg';
const minusImage = './assets/images/icon-minus.svg';

answers.forEach(answer => {
    if(!answer.classList.contains('answer-close')) {
        answer.classList.add('answer-close')
    }
})

images.forEach(image => {
    if(image.src !== plusImage) {
        image.src = plusImage
    }
})

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        answers[index].classList.toggle('answer-close')
        

        if (images[index].src.contains(plusImage)) {
            images[index].src = minusImage;
        } else {
            images[index].src = plusImage;
        }
    })
})
