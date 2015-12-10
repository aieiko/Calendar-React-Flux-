/**
 * Created by aieiko on 08.12.15.
 */
window.React = require('react');
window.ReactDOM = require('react-dom');
var Reminders = require('./reminders');
var RemindersAPI = require('./utils/RemindersAPI');
var FluxCalendarApp = require('./components/FluxCalendarApp.react');

Reminders.init();

RemindersAPI.getData();

ReactDOM.render(
<FluxCalendarApp />,
    document.getElementById('calendar')
);
