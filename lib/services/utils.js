export function dumpTest(data) {
    return {
        id        : data._id,
        type      : data.type,
        createdAt : data.createdAt,
        result    : data.result,
        answers   : data.answers,
        questions : data.questions,
        subject   : data.subject || null
    };
}

export function dumpQuestion(data) {
    return {
        id          : data._id,
        text        : data.text,
        subject     : data.subject,
        answers     : data.answers,
        testType    : data.testType || null,
        img         : data.img || null
    };
}

export function dumpQuestionAnswer(data) {
    return {
        id          : data._id,
        text        : data.text,
        subject     : data.subject,
        answerIndex : data.answerIndex,
        answers     : data.answers,
        img         : data.img || null,
        testType    : data.testType || null
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
        speciality : dumpSpeciality(data.speciality),
        subjects   : data.subjects
    };
}

export function dumpSubject(data) {
    return {
        id         : data._id,
        title      : data.title,
        speciality : dumpSpeciality(data.speciality),
        questions  : data.questions
    };
}
