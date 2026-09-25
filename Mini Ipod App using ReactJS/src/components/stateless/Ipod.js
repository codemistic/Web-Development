import React from "react";
import Display from "./Display";
import Controller from "./Controller";

// Ipod Functional Component for the Ipod Structure with the incoming Props
const Ipod = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const {
		menu,
		screen,
		rotate,
		tap,
		isMenuVisible,
		addClass,
		removeClass,
		mouse,
		controllerRef,
		songsList,
		play,
		nextSong,
		prevSong,
		updateProgress,
		progressRef,
		theme,
	} = props;
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Bottom Container Theme Color
	const themeBottomContainer = () => {
		if (theme.themeIndex === 0) {
			return {
				background: "linear-gradient(90deg, #e3e4e5,#cacaca)",
				transition: "all 2s linear",
			};
		} else {
			return { backgroundColor: "black", transition: "all 2s linear" };
		}
	};
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Top Container Theme Color
	const themeTopContainer = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Display Container Theme Color
	const themeDisplayContainer = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Theme Shadow
	const themeIpod = () => {
		if (theme.themeIndex === 0) {
			return {
				boxShadow: "1px 4px 15px 10px rgba(151, 151, 151, 0.72)",
				background: "linear-gradient(90deg, #e3e4e5,#cacaca)",
			};
		} else {
			return {
				boxShadow: "0px 1px 15px 13px rgba(151, 151, 151, 0.72)",
				backgroundColor: "black",
			};
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div className="ipod" style={themeIpod()}>
			<div
				className="top-container"
				style={themeTopContainer()}
				onMouseUp={(e) => {
					e.stopPropagation();
					removeClass("inner-circle", "down");
					return;
				}}
			>
				<div className="display-container" style={themeDisplayContainer()}>
					<Display
						menu={menu}
						screen={screen}
						songsList={songsList}
						theme={theme}
						updateProgress={updateProgress}
						progressRef={progressRef}
					/>
				</div>
			</div>
			<div className="bottom-container" style={themeBottomContainer()}>
				<Controller
					menu={menu}
					rotate={rotate}
					tap={tap}
					isMenuVisible={isMenuVisible}
					addClass={addClass}
					removeClass={removeClass}
					mouse={mouse}
					screen={screen}
					controllerRef={controllerRef}
					songsList={songsList}
					theme={theme}
					play={play}
					nextSong={nextSong}
					prevSong={prevSong}
				/>
			</div>
		</div>
	);
	//------------------------------------------------------------------------------------------
};

export default Ipod;
