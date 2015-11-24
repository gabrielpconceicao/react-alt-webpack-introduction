import alt from '../plugins/alt'

export default class SearchRepos {
    constructor() {

    }

    get( val ){
        $.ajax({
            url: 'https://api.github.com/search/repositories',
            dataType: 'json',
            data: 'q=' + val,
            cache: false,
            success: function(data) {
                this.actions.dataFound(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    dataFound( data ){
        this.dispatch( data )
    }
}

export default alt.createActions( SearchRepos )