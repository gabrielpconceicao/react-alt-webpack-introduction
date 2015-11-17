import alt from '../plugins/alt';

// actions
import SearchRepos from '../actions/SearchRepos'

class Repo {
  constructor() {
    this.bindListeners({
      updateRepos: SearchRepos.findRepos
    });

    this.state = {
      repos: []
    };
  }

  updateRepos( repos ) {
    this.setState({ repos: this.state.todos.concat( repos ) });
  }
}

export default alt.createStore( Repo, 'Repo');