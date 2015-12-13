/**
 * Created by aieiko on 08.12.15.
 */
var React = require('react');
var Store = require('../stores/Store');
var FluxCalendarDate = require('./FluxCalendarDate.react');
var FluxDays = require('./FluxDays.react');
var FluxCalendarHead = require('./FluxCalendarHead.react');
var FluxAddPrompt = require('./FluxAddPrompt.react');
var FluxEditPrompt = require('./FluxEditPrompt.react');
var FluxFastAdd = require('./FluxFastAdd.react');

function getState() {
    return {
        data: Store.getData(),
        d: Store.getD(),
        addVisible: Store.addVisible(),
        editVisible: Store.editVisible(),
        fastVisible: Store.visibleFast(),
        useData: Store.useData()
    }
}

var FluxCalendarApp = React.createClass({

    getInitialState() {
        return getState();
    },

    componentDidMount() {
        Store.addChangeListener(this._onChange);
    },

    // Remove change listers from stores
    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    },

    render() {


        return (
            <div className="flux-app">
                <FluxCalendarHead headdata={this.state.data}/>
                <FluxFastAdd fastVis={this.state.fastVisible}/>
                <FluxCalendarDate date={this.state.d}/>
                <FluxDays data={this.state.data} today={this.state.d.getDate()} month={this.state.d.getMonth()} year={this.state.d.getFullYear()} days={33 - new Date(this.state.d.getFullYear(), this.state.d.getMonth(), 33).getDate()} fday={new Date(this.state.d.getFullYear(), this.state.d.getMonth(),1).getDay()}/>
                <FluxAddPrompt visible={this.state.addVisible} />
                <FluxEditPrompt visible={this.state.editVisible} usedata={this.state.useData}/>
            </div>
        );
    },

    _onChange() {
        this.setState(getState());
    }

});

module.exports = FluxCalendarApp;