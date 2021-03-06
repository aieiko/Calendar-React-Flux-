/**
 * Created by aieiko on 10.12.15.
 */
var React = require('react');
var FluxActions = require('../actions/FluxActions');

var FluxEditPrompt = React.createClass({

    getInitialState() {
        return {
            description: '',
            even: 0
        };
    },

    handleDescChange(event) {
        this.setState({description: event.target.value});
        this.state.even = 1;
    },

    dropData() {
        var dropThis = this.props.usedata.id;

        FluxActions.dropThis(dropThis);
        this.state.even = 0;
        this.closeFormEdit();
    },

    closeFormEdit() {
        FluxActions.updateVisible(false);
        FluxActions.updateEditVisible(false);
    },

    editData() {
        var editThis = {
            id: this.props.usedata.id,
            description: this.state.description
        };
        console.log(editThis);
        FluxActions.editData(editThis);
        this.closeFormEdit();
    },

    render() {
        if(this.state.even == 0) {
            this.state.description = this.props.usedata.description;
        }
        return(
            <div className={"hol "+(this.props.visible ? 'active' : '')}>
                <button className="close"onClick={this.closeFormEdit}>X</button>
                <div>{this.props.usedata.name}</div>
                <div>{this.props.usedata.date}</div>
                <div>{this.props.usedata.participants}</div>
                <input className="description" value={this.state.description} type="text" placeholder="Описание" onChange={this.handleDescChange}/>
                <button onClick={this.editData}>Готово</button><button onClick={this.dropData}>Удалить</button>
            </div>
        )
    }

});

module.exports = FluxEditPrompt;