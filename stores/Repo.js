import alt from '../plugins/alt';
import searchRepos from '../actions/SearchRepos'

class Repo {
  constructor() {
    this.bindAction( searchRepos.dataFound, this.onRepos )

    this.state = {
      repo: []
    }
  }

  onRepos( obj ) {
    this.setState({ repo: obj});
  }
}

export default alt.createStore( Repo )