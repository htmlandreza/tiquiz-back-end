const Question = require('../models/Question');

class QuestionController {
    async store(req, res) {
        const question = await Question.create({
            question: "O que deve ser impresso na tela na primeira vez que for criar uma aplicação em uma linguagem de programação que você não conhece?",
            topic: "Tópicos Emergentes de TI",
            correctAnswer: "Hello Word",
            optionsAnswer: [
                {
                    optionsID: 0,
                    answer: "Oi gente"
                },
                {
                    optionsID: 1,
                    answer: "Testando"
                },
                {
                    optionsID: 2,
                    answer: "Minha primeira aplicação em..."
                },
                {
                    optionsID: 3,
                    answer: "Meu nome é..."
                }
            ],
            creatBy: [{
                intitution: "Faculdade São José",
                teacherName: "Andreza Moreira",
                teacherEmail: "htmlandreza@gmail.com"
            }],
            status: "Ativo"
        })

        return res.json(question);
    }
}

module.exports = new QuestionController();