export function dumpTest(data) {
    return {
        id        : data._id,
        type      : data.type,
        createdAt : data.createdAt,
        answers   : data.answers,
        questions : data.questions,
        subject   : data.subject || null
    };
}

export function dumpQuestion(data) {
    return {
        id          : data._id,
        text        : data.text,
        subject     : dumpSubject(data.subject),
        answers     : data.answers
    };
}

export function dumpQuestionAnswer(data) {
    return {
        id          : data._id,
        text        : data.text,
        subject     : dumpSubject(data.subject),
        answerIndex : data.answerIndex,
        answers     : data.answers
    };
}

export function dumpSpeciality(data) {
    return {
        id    : data._id,
        title : data.title
    };
}

export function dumpExam(data) {
    return {
        id         : data._id,
        title      : data.title,
        speciality : data.speciality,
        subjects   : data.subjects
    };
}

export function dumpSubject(data) {
    return {
        id         : data._id,
        title      : data.title,
        speciality : data.speciality,
        questions  : data.questions
    };
}
