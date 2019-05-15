import React from "react";

class ImageCard extends React.Component {
  constructor() {
    super();
    this.state = { spans: 0 };

    this.imageREF = React.createRef();
  }

  componentDidMount() {
    this.imageREF.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageREF.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);
    console.log(spans);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageREF} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
