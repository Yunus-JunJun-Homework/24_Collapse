import React from 'react';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.opened,
    };
  }

  onChange = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <p>
          <a
            onClick={this.onChange}
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={open}
          >
            Link with href
          </a>
        </p>
        <div className={`collapse ${open ? 'show' : null}`}>
          <div className="card card-body">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
export default Collapse;
