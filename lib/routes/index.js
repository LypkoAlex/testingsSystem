import Projects     from './Projects';
import Testings     from './Testings';
import Specialities from './Specialities';
import Questions    from './Questions';
import Subjects     from './Subjects';

export default function init() {
    return {
        projects     : new Projects(),
        testings     : new Testings(),
        specialities : new Specialities(),
        subjects     : new Subjects(),
        questions    : new Questions()
    };
}
