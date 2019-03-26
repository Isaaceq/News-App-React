import React, { Component } from 'react';


class Loading extends Component {
    render() {
        return (
            <div>
                <div className="loading-overlay">
                    <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
                </div>

            </div>

        );
        }
}

export default Loading;