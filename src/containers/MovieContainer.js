import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie, clearMovie, showLoadingSpinner } from "../actions";

import Movie from "../components/Movie/Movie";

class MovieContainer extends Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.getMovie(movieId);
  }

  getMovie = (movieId) => {
    this.props.clearMovie();
    this.props.showLoadingSpinner();
    this.props.getMovie(movieId);
  };

  render() {
    return (
      <Movie
        movie={this.props.movie}
        directors={this.props.directors}
        actors={this.props.actors}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.movie;
};

const mapDispatchToProps = {
  getMovie,
  clearMovie,
  showLoadingSpinner,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
