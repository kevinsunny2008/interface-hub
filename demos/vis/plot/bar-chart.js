import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LabelSeries,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import { Component } from 'react';
// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


const greenData = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];

const blueData = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }, { x: 'C', y: 11 }];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));

export default class Example extends Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <FlexibleWidthXYPlot xType="ordinal" height={300} xDistance={100}>
        <VerticalGridLines style={{ strokeWidth: 0.5 }} />
        <HorizontalGridLines style={{ strokeWidth: 0.5 }} />
        <XAxis style={{ strokeWidth: 0.5 }} />
        <YAxis style={{ strokeWidth: 0.5 }} />
        <BarSeries
          className="vertical-bar-series-example"
          color="#007bff"
          data={greenData}
        />
        <BarSeries color="#52c41a" data={blueData} />
        <LabelSeries data={labelData} getLabel={d => d.x} />
      </FlexibleWidthXYPlot>
    );
  }
}
