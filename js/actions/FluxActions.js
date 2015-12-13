/**
 * Created by aieiko on 08.12.15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxConstants = require('../constants/FluxConstants');

var FluxActions = {

    receiveData: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.RECEIVE_DATA,
            data: data
        })
    },

    changeDate: function(newdate) {
      AppDispatcher.handleAction({
          actionType: FluxConstants.CHANGE_DATE,
          gotodate: newdate
      })
    },


    updateVisible: function(visible) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.FORM_ADD_VISIBLE,
            formAddVisible: visible
        })
    },
    updateEditVisible: function(visible) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.FORM_EDIT_VISIBLE,
            formEditVisible: visible
        })
    },
    updateFastVisible: function(visible) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.FORM_FAST_VISIBLE,
            formFastVisible: visible
        })
    },

    updateData: function(update) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.UPDATE_DATA,
            up: update

        })
    },
    useData: function(userData) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.USE_DATA,
            useData: userData

        })
    },
    editData: function(edit) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.EDIT_DATA,
            editData: edit
        })
    },
    dropThis: function(drop) {
        AppDispatcher.handleAction({
            actionType: FluxConstants.DROP_DATA,
            dropData: drop
        })
    }
};

module.exports = FluxActions;