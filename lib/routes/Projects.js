import Base from './Base';

export default class Projects extends Base {
    list() {
        return this.run('projects/List', {
            params: {}
        });
    }
}
