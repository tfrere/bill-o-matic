import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import generatePdf                      from '../helpers/generatePdf';

import test                             from '../data/test';
import karuna1                          from '../data/karuna1';
import karuna2                          from '../data/karuna2';
import labrh1                           from '../data/labrh1';
import collectivz1                      from '../data/collectivz1';
import collectivz2                      from '../data/collectivz2';
import frontscope                       from '../data/frontscope';
import tbrc1                            from '../data/tbrc1';
import pes1                             from '../data/pes1';
import wort1                            from '../data/wort1';
import wort2                            from '../data/wort2';
import wort3                            from '../data/wort3';


export default class ScrollProgress extends Component {

    static defaultProps = {
    };

    constructor( props ) {
        super( props );
        this.state = {
        };
    }

    handleClick(data) {
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
                <button onClick={() => {this.handleClick(test)} }>
                    GenerateTest
                </button>
                <button onClick={() => {this.handleClick(labrh1)} }>
                  GenerateLab
                </button>
                <button onClick={() => {this.handleClick(karuna1)} }>
                    GenerateKaruna1
                </button>
                <button onClick={() => {this.handleClick(karuna2)} }>
                    GenerateKaruna2
                </button>
                <button onClick={() => {this.handleClick(collectivz1)} }>
                    GenerateCollectivz1
                </button>
                <button onClick={() => {this.handleClick(collectivz2)} }>
                    GenerateCollectivz2
                </button>
                <button onClick={() => {this.handleClick(frontscope)} }>
                    GenerateFrontScope
                </button>
                <button onClick={() => {this.handleClick(tbrc1)} }>
                    GenerateTbrc1
                </button>
                <button onClick={() => {this.handleClick(pes1)} }>
                    GeneratePes1
                </button>
                <button onClick={() => {this.handleClick(wort1)} }>
                    GenerateWort1
                </button>
                <button onClick={() => {this.handleClick(wort2)} }>
                    GenerateWort2
                </button>
                <button onClick={() => {this.handleClick(wort3)} }>
                    GenerateWort3
                </button>
            </div>
        );
    }
}
