/**
 * Created by aieiko on 08.12.15.
 */
var FluxActions = require('../actions/FluxActions');

module.exports = {

    // get localStorage
    getData: function() {
        var data = JSON.parse(localStorage.getItem('data'));
        FluxActions.receiveData(data);
    }

};
