import Repository from './Repository';

const resource = '/cannabis';
export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getCannabis(cannabisId) {
        return Repository.get(`${resource}/${cannabisId}`);
    }
}