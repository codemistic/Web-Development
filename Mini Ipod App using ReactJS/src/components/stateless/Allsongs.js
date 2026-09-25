import React from "react";

// Functional All-songs Component to Render the Song Player which plays the Song in the Ipod
const Allsongs = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { songsList, updateProgress, progressRef } = props;
	const { songs, thumbnails, songIndex, name } = songsList;
	const audio = songs[songIndex];
	//------------------------------------------------------------------------------------------
	// To update the Progress Bar
	audio.addEventListener("timeupdate", (event) => {
		updateProgress(event);
	});
	//------------------------------------------------------------------------------------------
	return (
		<div className="music-player" style={styles.player}>
			<div className="song-info" style={styles.songInfo}>
				<div className="image" style={styles.img}>
					<img
						src={thumbnails[songIndex]}
						alt="song-thumbnail"
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
				<p style={styles.title}>{name[songIndex]}</p>
			</div>
			<div className="progress-container" style={styles.progressContainer}>
				<div className="progress" ref={progressRef}></div>
			</div>
		</div>
	);
	//------------------------------------------------------------------------------------------
};

const styles = {
	player: {
		height: "100%",
		width: "100%",
		textTransform: "capitalize",
		borderTopLeftRadius: "10%",
		borderTopRightRadius: "10%",
		zIndex: 5,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		overflow: "hidden",
		backgroundColor: "black",
	},
	title: {
		fontFamily: "Lobster",
		textAlign: "center",
		marginTop: "20px",
		width: "90%",
		color: "white",
		fontWeight: "bolder",
		fontSize: "30px",
		letterSpacing: "0.15rem",
	},
	img: {
		border: "2px solid white",
		height: "50%",
		width: "50%",
	},
	progressContainer: {
		height: "7px",
		backgroundColor: "#fff",
		width: "90%",
		borderRadius: "50px",
		marginTop: "-50px",
	},
	songInfo: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		marginTop: "-40px",
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
};

export default Allsongs;
