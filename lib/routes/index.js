import Projects from './Projects';
import Testings from './Testings';
import Questions from './Questions';

export default function init() {
    return {
        projects : new Projects(),
        testings : new Testings(),
        questions: new Questions()
    };
}
