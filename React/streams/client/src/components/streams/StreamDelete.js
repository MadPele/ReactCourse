import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.stream) {
      return <Modal title="Loading..." />;
    }

    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={`Are you sure you want delete "${this.props.stream.title}"?`}
          actions={this.renderActions()}
          onDismiss={() => {
            history.push("/");
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamDelete);
