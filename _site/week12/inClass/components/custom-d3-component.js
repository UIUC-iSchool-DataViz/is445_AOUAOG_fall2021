const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;

class CustomD3Component extends D3Component {
  // initialization function
  initialize(node, props) {
    const svg = (this.svg = d3.select(node).append('svg'));
    svg // probably the background object
      .attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg // drawing initial circle
      .append('circle')
      .attr('r', 200)
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
  }

  update(props, oldProps) {
    this.svg
      .selectAll('circle')
      .transition()
      .duration(750)
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
  }
}

module.exports = CustomD3Component;
