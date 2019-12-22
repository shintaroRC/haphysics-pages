// Copyright (c) 2019 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import App, { AppContext } from "next/app";

export default class extends App {
    // https://github.com/zeit/next.js/blob/master/errors/opt-out-auto-static-optimization.md
    // static async getInitialProps({ Component, ctx }: AppContext) {
    //     let pageProps = {};
    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx);
    //     }
    //     return { pageProps };
    // }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        );
    }
}