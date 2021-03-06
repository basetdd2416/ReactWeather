var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
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
                    isLoading: false,
                    errorMessage: error.message
                });
            })


    },
    componentDidMount: function () {
        var location = this.props.location.query.location;
        var isValidLocation = location && location.length > 0;

        if (!isValidLocation) {
            return;
        }

        this.handleSearch(location);
        window.location.hash = '#/';
    },
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;

        var isValidLocation = location && location.length > 0;

        if (!isValidLocation) {
            return;
        }

        this.handleSearch(location);
        window.location.hash = '#/';

    },
    render: function () {
        const {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            }

            if (!temp && !location) {
                return;
            }

            return <WeatherMessage location={location} temp={temp}/>
        }

        function renderError() {
            console.log(typeof errorMessage)
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;