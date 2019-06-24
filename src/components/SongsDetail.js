import React from 'react';
import {connect} from 'react-redux'




//if a song is not selected it will display select a song
const SongDetail = ({mySelectedSong}) => {
if(!mySelectedSong){
    return <div>Select a song</div>
}


    return(
        <div>

            <h3>Details for:</h3>
            <p>Title:{mySelectedSong.title}</p>
            <p>Duration:{mySelectedSong.duration}</p>
            {mySelectedSong.title}
        </div>
    )
}

//accesing state from redux
const mapStateToProps = (state) =>{

   return {mySelectedSong: state.selectedSong}
}

//connecting the state 
export default connect(mapStateToProps)(SongDetail);