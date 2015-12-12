/**
 * Created by aieiko on 08.12.15.
 */
var React = require('react');
var FluxActions = require('../actions/FluxActions');

var FluxDays = React.createClass({

    addPrompt: function() {
        FluxActions.updateVisible(true);
    },


    editPrompt: function(useData) {
        FluxActions.useData(useData);
        FluxActions.updateEditVisible(true);
    },

    buildDays: function() {
        var getDays = function(n, days, fday) {
            "use strict"
            var mass = [];
            var valid = 0;

            if(fday == 0) fday= 7;

            for(let i=1; i<=n; i++) {

                if(i> days+valid) {
                    mass[i] = { d:''}
                }
                else if(i< fday){
                        mass[i] = { d: ''}
                        valid++;
                } else {
                    if(valid >= 1){
                        mass[i] = { d:i-valid}
                    } else {
                        mass[i] = { d:i}
                    }

                }
                if(mass.length>n) return mass;

            }

        };
        var massDays = getDays(42, this.props.days, this.props.fday);

        return massDays.map((day, index) => {
            return <div className="adr" onClick={this.addPrompt} key={index}>{day.d} {this.props.data.map((data, index) => {
                if(data.date[0] == day.d && data.date[1] == this.props.month && data.date[2] == this.props.year) {
                    return (
                        <div key={index} onClick={this.editPrompt.bind(this, data)}>
                            <h1 className="name">{data.name}</h1>
                            <div className="description">{data.description}</div>
                            <div className="description">{data.date[0]} {data.date[1]} {data.date[3]} </div>
                            <div className="description">{data.participants} </div>
                        </div>
                    )
                }
            })}</div>


        })
    },

    render: function() {
        return(
            <div>
            {this.buildDays()}
            </div>
        )
    }
});

module.exports = FluxDays;