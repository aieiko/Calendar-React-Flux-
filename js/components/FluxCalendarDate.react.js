/**
 * Created by aieiko on 08.12.15.
 */
var React = require('react');
var FluxActions = require('../actions/FluxActions');

var FluxCalendarDate = React.createClass({

    prevDate: function(event) {
        var newDate = new Date();
        newDate.setMonth(this.props.date.getMonth() - 1);
        newDate.setFullYear(this.props.date.getFullYear());
        if(newDate.getMonth() == 11) {
            newDate.setFullYear(this.props.date.getFullYear() - 1);
        }
        console.log(newDate);
        FluxActions.changeDate(newDate);
    },

    nextDate: function(event) {
        var newDate = new Date();
        newDate.setMonth(this.props.date.getMonth() + 1);
        newDate.setFullYear(this.props.date.getFullYear());
        if(newDate.getMonth() == 0) {
            newDate.setFullYear(this.props.date.getFullYear() + 1);
        }
        FluxActions.changeDate(newDate);
    },


    render: function() {
        var arrMonth = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        return(
            <div>
                <div className="header"><button type="button" onClick={this.prevDate}>N</button>{arrMonth[this.props.date.getMonth()]} {this.props.date.getFullYear()}<button type="button" onClick={this.nextDate}>V</button></div>
                <div>
                    <div className="day">Пн</div>
                    <div className="day">Вт</div>
                    <div className="day">Ср</div>
                    <div className="day">Чт</div>
                    <div className="day">Пт</div>
                    <div className="day">Сб</div>
                    <div className="day">Вс</div>
                </div>
            </div>
        )
    }
});

module.exports = FluxCalendarDate;