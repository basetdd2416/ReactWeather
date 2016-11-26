var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        var that = this;

        this.setState({isLoading: true});
        openWeatherMap
            .getTemp(location)
            .then(function (temp) {
                console.log(temp)
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                })
            })
            .catch(function (error) {
                that.setState({
                    location: 'N/A',
                    temp: 'N/A',
                    isLoading: false
                })
                alert(error)
            })

    },
    render: function () {
        const {isLoading,temp,location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            }

            if (!temp && !location) {
                return;
            }

            return  <WeatherMessage location={location} temp={temp}/>


        }
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;