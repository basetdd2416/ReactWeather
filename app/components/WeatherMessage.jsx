var React = require('react');

/*var WeatherMessage = React.createClass({
    render: function () {
        console.log(this.props.location);
        const {location,temp} = this.props;
        return (
            <h3>It's it {temp} in {location}.</h3>
        )
    }
});*/

const WeatherMessage = ({temp,location}) => {
    return (
        <h3>It's it {temp} in {location}.</h3>
    )
}
module.exports = WeatherMessage;