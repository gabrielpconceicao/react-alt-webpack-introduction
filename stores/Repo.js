import alt from '../plugins/alt';
import searchRepos from '../actions/SearchRepos'

class Repo {
  constructor() {
    this.bindAction( searchRepos.dataFound, this.onRepos )
  }

  onRepos( obj ) {
    console.log( obj );
    // setState??
    //this.setState({ repo: this.state.repo.concat( obj ) });
  }
}

export default alt.createStore( Repo )