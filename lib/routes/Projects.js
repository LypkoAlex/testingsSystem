import Base from './Base';

export default class Projects extends Base {
    list() {
        console.log('hello1');
        return this.run('projects/List', {
            params: {}
        });
    }
}
