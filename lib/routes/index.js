import Projects from './Projects';
import Testings from './Testings';

export default function init() {
    return {
        projects: new Projects(),
        testings: new Testings()
    };
}
