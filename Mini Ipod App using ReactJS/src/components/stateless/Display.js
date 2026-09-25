import React from "react";
import Menu from "./Menu";
import Allsongs from "./Allsongs";

// Functional Display Component to Render the Display in Ipod
const Display = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { menu, screen, songsList, updateProgress, progressRef, theme } =
		props;
	const { wallpaper, screenIndex } = screen;
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Display Theme Color
	const themeDisplay = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div className="display" style={themeDisplay()}>
			{screenIndex === 7 && (
				<Allsongs
					songsList={songsList}
					updateProgress={updateProgress}
					progressRef={progressRef}
				/>
			)}
			{screenIndex !== 7 && (
				<img
					src={wallpaper[screenIndex]}
					alt="DISPLAY SCREEN"
					style={{
						height: "100%",
						width: "100%",
						borderTopLeftRadius: "10%",
						borderTopRightRadius: "10%",
						zIndex: 2,
					}}
				/>
			)}

			<Menu menu={menu} />
		</div>
	);
	//------------------------------------------------------------------------------------------
};

export default Display;
