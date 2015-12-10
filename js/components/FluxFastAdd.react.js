/**
 * Created by aieiko on 10.12.15.
 */
var React = require('react');
var FluxActions = require('../actions/FluxActions');

var FluxFastAdd = React.createClass({

    getInitialState: function() {
        return {
            fastInput: ''
        }
    },

    closeFastAdd: function() {
        FluxActions.updateFastVisible(false);
        this.setState({fastInput: ''});
    },

    handleFastChange: function(event) {
        this.setState({fastInput: event.target.value})
    },

    fastCreate: function() {
        var str = this.state.fastInput.match(/\d+/g);
        var name = this.state.fastInput.split(',');
        var fastUpdate = {
            ip: Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000,
            name: name[1],
            date: [str[0], str[1], new Date().getFullYear()],
            participants: '',
            description: ''
        };
        FluxActions.updateData(fastUpdate);
        this.closeFastAdd();
    },

    render: function() {
            return(
                <div className={"fast_add "+(this.props.fastVis ? 'active' : 'none')}>
                    <button className="close"onClick={this.closeFastAdd}>X</button>
                    <input type="text" placeholder="День(6) Месяц(9), Событие" value={this.state.fastInput} onChange={this.handleFastChange}/>
                    <button onClick={this.fastCreate}>Создать</button>
                </div>
            )
    }
});

module.exports = FluxFastAdd;