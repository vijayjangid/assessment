import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchOkrs } from "./api";
import { makeGetFilteredOkrs } from "./selectors";
import { OkrList } from "../../components/okr-list";

class Okrs extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOkrs());
  }
  render() {
    const { loading, error, data } = this.props.okrs;
    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && !error && <OkrList data={data} />}
      </>
    );
  }
}

const makeMapStateToProps = () => {
  const getFilteredOkrs = makeGetFilteredOkrs();
  const mapStateToProps = (state, props) => {
    return {
      okrs: getFilteredOkrs(state, props),
      loading: state.okrs.loading,
      error: state.okrs.error
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(Okrs);
