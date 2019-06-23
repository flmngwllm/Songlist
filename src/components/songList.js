import React, { Component } from 'react';
import { connect } from 'react-redux'

class songList extends Component {
    render() {
        // this.props === { songs: state.songs}
        console.log(this.props)
        return (
            <div>
                songList
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)

    return { songs: state.songs}

}
export default connect(mapStateToProps) (songList);