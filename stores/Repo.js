import alt from '../plugins/alt';
import searchReposActions from '../actions/SearchRepos'

class Repo {
  constructor() {
    this.bindAction( searchReposActions.dataFound, this.onRepos )

    this.state = {
      repo: []
    }
  }

  onRepos( obj ) {
    this.setState({ repo: obj});
  }
}

export default alt.createStore( Repo )