/**
 * Created by aieiko on 08.12.15.
 */
"use strict"
var React = require('react');
var FluxActions = require('../actions/FluxActions');

var FluxDays = React.createClass({

    addPrompt() {
        FluxActions.updateVisible(true);
    },


    editPrompt(useData) {
        FluxActions.useData(useData);
        FluxActions.updateEditVisible(true);
    },

    buildDays() {
        var getDays = function(n, days, month, year, fday) {

            var mass = [];
            var valid = 0;

            if(fday == 0) fday = 7;
            var prevMonthdays = 35 - new Date(year, month-1, 33).getDate() - fday;
            var nextMonthdays = 1;

            for(let i=1; i <= n; i++) {

                if(i> days+valid) {
                    mass[i] = { d:
                    {
                        day: nextMonthdays,
                        style: 'other_month'
                    } };
                    nextMonthdays++;
                }
                else if(i< fday) {
                    mass[i] = { d:
                    {
                        day: prevMonthdays,
                        style: 'other_month'
                    } };
                    valid++;
                    prevMonthdays++;

                } else {
                    if(valid >= 1) {
                        mass[i] = { d:
                        {
                            day: i-valid+'',
                            style: 'this_month'
                        } };
                    } else {
                        mass[i] = { d:
                        {
                            day: i,
                            style: 'this_month'
                        } };
                    }
                }
                if(mass.length > n) return mass;

            }

        };
        var massDays = getDays(42, this.props.days, this.props.month, this.props.year, this.props.fday);

        return massDays.map((mday, index) => {
            return <div className={"adr "+mday.d.style} onClick={this.addPrompt} key={index}>{mday.d.day} {this.props.data.map((data, index) => {
                if(data.date[0] === mday.d.day && data.date[1] == this.props.month && data.date[2] == this.props.year) {
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

    render() {
        return(
            <div>
            {this.buildDays()}
            </div>
        )
    }
});

module.exports = FluxDays;