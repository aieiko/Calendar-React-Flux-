/**
 * Created by aieiko on 09.12.15.
 */
var React = require('react');
var FluxActions = require('../actions/FluxActions');


var FluxAddPrompt = React.createClass({

    getInitialState: function() {
        return {
            fname:'',
            fdate:'',
            fparticipants: '',
            fdescription: ''
        }
    },
    handleNameChange: function(event) {
            this.setState({fname: event.target.value})
    },
    handleDateChange: function(event) {
        this.setState({fdate: event.target.value})
    },
    handlePartChange: function(event) {
        this.setState({fparticipants: event.target.value})
    },
    handleDescChange: function(event) {
        this.setState({fdescription: event.target.value})
    },

    addData: function() {
        var update = {
            ip: Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000,
            name: this.state.fname,
            date: this.state.fdate.match(/\d+/g),
            participants: this.state.fparticipants,
            description: this.state.fdescription
        };
        console.log(update);
        FluxActions.updateData(update);
        this.dropData();
        FluxActions.updateVisible(false);
    },
    dropData: function() {
        this.setState({fname: ''});
            this.state.fdate = '';
            this.state.fparticipants = '';
            this.state.fdescription = '';
    },

    closeFormAdd: function() {
        FluxActions.updateVisible(false);
        this.dropData();
    },


    render: function() {
        return(
            <div className={"hol "+(this.props.visible ? 'active' : '')}>
                <button className="close"onClick={this.closeFormAdd}>X</button>
                <input className="name" value={this.state.fname} type="text" placeholder="Событие" onChange={this.handleNameChange}/>
                <input className="date" value={this.state.fdate} type="text" placeholder="День(6), месяц(9), год(2015)" onChange={this.handleDateChange}/>
                <input className="participants" value={this.state.fparticipants}type="text" placeholder="Имена учасников" onChange={this.handlePartChange}/>
                <input className="description" value={this.state.fdescription} type="text" placeholder="Описание" onChange={this.handleDescChange}/>
                <button onClick={this.addData}>Готово</button><button onClick={this.dropData}>Удалить</button>
            </div>
        )
    }


});

module.exports = FluxAddPrompt;