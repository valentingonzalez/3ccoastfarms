import CannabisRepository from './cannabisRepository';

const repositories = {
    cannabis: CannabisRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};