import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

import data                             from '../data/data';
import generatePdf                      from '../helpers/generatePdf';

        console.log(data);
        console.log(generatePdf);


export default class ScrollProgress extends Component {

    static defaultProps = {
    };

    constructor( props ) {
        super( props );
        this.state = {
        };
    }

    handleClick() {
        console.log(generatePdf);
        generatePdf(data);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="scroll-progress">
                <h1>Hello world</h1>
                <button onClick={() => {this.handleClick()} }>
                    GeneratePdf
                </button>
            </div>
        );
    }
}
