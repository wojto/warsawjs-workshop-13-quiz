'use strict';

let data = [{
    id: 1,
    title: "best car?",
    answers: [{
        id: 1,
        content: "ford",
        correct: false
    }, {
        id: 2,
        content: "fiat",
        correct: false
    }, {
        id: 3,
        content: "tesla",
        correct: false
    }, {
        id: 4,
        content: "GM",
        correct: true
    }

    ]
}];

function check(qid, aid) {
    let q = data.find(question => { return question.id == qid });
    if (q) {
        let a=q.answers.find(answer => { return answer.id == aid });
        if (a && a.correct) {
            return true;
        }
    }
    return false;
}
export default check;
