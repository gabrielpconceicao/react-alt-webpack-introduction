import alt from '../plugins/alt';
import searchReposUsers from '../actions/SearchUsers'

class User {
    constructor() {
        this.bindAction( searchReposUsers.dataFound, this.onUsers )

        this.state = {
          user: []
        }
    }

    onUsers( obj ) {
        this.setState({ user: obj});
    }
}

export default alt.createStore( User )