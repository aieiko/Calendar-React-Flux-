/**
 * Created by aieiko on 09.12.15.
 */
var React = require('react');
var FluxActions = require('../actions/FluxActions');

var FluxCalendarHead = React.createClass({
    getInitialState() {
        return {
            filter: ''
        }
    },

    handleFilter: function(event) {
        this.setState({filter: event.target.value})
    },

    fastAddVisible: function() {
        FluxActions.updateFastVisible(true);
    },


    elemInSearch: function() {
        return(
            <div className="elem_in_search">{this.props.headdata.map((data, index) => {
                    if(this.state.filter == '') {
                    } else {
                        if(data.name.indexOf(this.state.filter) >= 0 || data.participants.indexOf(this.state.filter) >= 0 || data.date.indexOf(this.state.filter) >= 0){
                            return(
                                <div key={index}>{data.name}</div>
                            )
                        }
                    }
            })}</div>
        )
    },

    render: function() {
        return(
            <div>
                <div>
                    <button onClick={this.fastAddVisible}>Добавить</button><button>Обновить</button>{this.state.vis}
                    <input className="search" value={this.state.filter} type="text" placeholder="Search" onChange={this.handleFilter}/>
                </div>
                {this.elemInSearch()}
            </div>
        )
    }

});

module.exports = FluxCalendarHead;