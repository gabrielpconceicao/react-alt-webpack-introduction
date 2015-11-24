import alt from '../plugins/alt'

export default class SearchUsers {
    constructor() {

    }

    get( val ){
        $.ajax({
            url: 'https://api.github.com/search/users',
            dataType: 'json',
            data: 'q=' + val,
            cache: false,
            success: function(data) {
                this.actions.dataFound(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error( 'error getting users' );
            }.bind(this)
        });
    }

    dataFound( data ){
        this.dispatch( data )
    }
}

export default alt.createActions( SearchUsers )