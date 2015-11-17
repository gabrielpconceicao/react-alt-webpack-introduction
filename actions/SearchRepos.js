const gitApi = 'https://api.github.com/';
//import Repo from '../stores/Repo';

import alt from '../plugins/alt';

class SearchRepos {
  findRepos(id, text) {
    return { id, text }
  }
}

export default alt.createActions(SearchRepos);