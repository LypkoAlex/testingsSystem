import Tests        from './Tests';
import Specialities from './Specialities';
import Questions    from './Questions';
import Subjects     from './Subjects';
import Feedback     from './Feedback';
import Exams        from './Exams';

export default function init() {
    return {
        tests        : new Tests(),
        specialities : new Specialities(),
        subjects     : new Subjects(),
        exams        : new Exams(),
        feedback     : new Feedback(),
        questions    : new Questions()
    };
}
