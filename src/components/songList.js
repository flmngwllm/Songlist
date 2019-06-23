import React, { Component } from 'react';
import { connect } from 'react-redux'

class songList extends Component {
 
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className= "item" key={song.title}>
                <div className="right floated content">
                    <button className="ui button primary">
                        Select
                    </button>
                </div>
                <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    render() {
        // this.props === { songs: state.songs}
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)

    return { songs: state.songs}

}
export default connect(mapStateToProps) (songList);