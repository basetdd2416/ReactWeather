var React = require('react');
var {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
    onSearch: function (e) {
      e.preventDefault();
      var location = this.refs.location.value;
      var isValidaLocation = location && location.length > 0;
      var encodedLocation = encodeURIComponent(location);
      if(!isValidaLocation) {
          return;
      }
        this.refs.location.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>GetWeather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" ref="location"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})

module.exports = Nav;


var old = (
    <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>GetWeather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>

        <a href="#/about">Go to About </a>
    </div>
);