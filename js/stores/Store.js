/**
 * Created by aieiko on 08.12.15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxConstants = require('../constants/FluxConstants');
var _ = require('underscore');

var _data = {}, _d = new Date(), _visible = false, _editvisible = false, _useData = {}, _fastvisible=false;

function editData(edit) {
    "use strict"
    for(let i=0; i<=_data.length; i++) {
        if(edit.id ==_data[i].id) {
            _data[i].description = edit.description;
            localStorage.setItem('data', JSON.stringify(_data));
            break;
        }
    }
}

function updateData(up) {
 _data.push(up);
    console.log(_data);
    localStorage.setItem('data', JSON.stringify(_data));
}

function changeUseData(use) {
    _useData = use;
}

function changeVisible(visible) {
    _visible = visible;
}

function changeEditVisible(visible) {
    _editvisible = visible;
}

function changeFastVisible(visible) {
    _fastvisible = visible;
}

function changeDate(newdate) {
    _d = newdate;
}

function loadData(data) {
    _data = data;
}

function dropData (drop) {
    console.log('not work');
}

var Store = _.extend({}, EventEmitter.prototype, {

    getData: function() {
        return _data;
    },

    addVisible: function() {
        return _visible;
    },

    editVisible: function() {
      return _editvisible;
    },

    visibleFast: function() {
      return _fastvisible;
    },

    useData: function() {
        return _useData;
    },

    getD: function() {
        return _d;
    },

    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch (action.actionType) {
        case FluxConstants.RECEIVE_DATA:
            loadData(action.data);
            break;

        case FluxConstants.CHANGE_DATE:
            changeDate(action.gotodate);
            break;

        case FluxConstants.FORM_ADD_VISIBLE:
            changeVisible(action.formAddVisible);
            break;

        case FluxConstants.FORM_EDIT_VISIBLE:
            changeEditVisible(action.formEditVisible);
            break;

        case FluxConstants.FORM_FAST_VISIBLE:
            changeFastVisible(action.formFastVisible);
            break;

        case FluxConstants.UPDATE_DATA:
            updateData(action.up);
            break;

        case FluxConstants.USE_DATA:
            changeUseData(action.useData);
            break;

        case FluxConstants.EDIT_DATA:
            editData(action.editData);
            break;

        case FluxConstants.DROP_DATA:
            dropData(action.dropData);
            break;

        default:
            return true;
    }

    Store.emitChange();
    return true;
});

module.exports = Store;