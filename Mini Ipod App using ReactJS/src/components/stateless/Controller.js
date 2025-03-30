import React from "react";

// Functional Controller Component to handle the Click-Rotate operations in the Ipod
const Controller = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const {
		menu,
		rotate,
		tap,
		isMenuVisible,
		addClass,
		removeClass,
		mouse,
		screen,
		controllerRef,
		play,
		songsList,
		nextSong,
		prevSong,
		theme,
	} = props;
	//------------------------------------------------------------------------------------------
	// Changing the Controller Container Theme
	const styling = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div
			className="controller-container"
			id="controller-container"
			style={styling()}
			onClick={(e) => {
				e.stopPropagation();
				return;
			}}
			onMouseUp={(e) => {
				e.stopPropagation();
				removeClass("inner-circle", "down");
				return;
			}}
			onMouseDown={(e) => {
				e.stopPropagation();
				return;
			}}
		>
			<div
				className="controller"
				draggable="false"
				ref={controllerRef}
				style={styles.controller}
				onClick={(e) => {
					e.stopPropagation();
					return;
				}}
				onMouseDown={(e) => {
					e.stopPropagation();
					rotate(menu);
					return;
				}}
				onMouseUp={(e) => {
					e.stopPropagation();
					removeClass("inner-circle", "down");
					return;
				}}
				id="controller"
			>
				<div
					className={
						mouse.innerCircle === ""
							? "inner-circle"
							: "inner-circle down"
					}
					draggable="false"
					style={{ height: 80, width: 80 }}
					onClick={(e) => {
						e.stopPropagation();
						tap(menu, screen);
						return;
					}}
					onMouseDown={(e) => {
						e.stopPropagation();
						addClass("inner-circle", "down");
						return;
					}}
					onMouseUp={(e) => {
						e.stopPropagation();
						removeClass("inner-circle", "down");
						return;
					}}
				></div>
				<div
					className="menu-btn"
					draggable="false"
					onClick={(e) => {
						e.stopPropagation();
						isMenuVisible(menu, screen);
						return;
					}}
				>
					<h1 style={styles.menu} draggable="false">
						MENU
					</h1>
				</div>
				<div className="forward" draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
						alt="forward"
						style={styles.forward}
						draggable="false"
						onClick={() => {
							nextSong(songsList);
						}}
					/>
				</div>
				<div className="backward" draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
						alt="backward"
						style={styles.backward}
						draggable="false"
						onClick={() => {
							prevSong(songsList);
						}}
					/>
				</div>
				<div
					className="play-pause"
					draggable="false"
					onClick={() => {
						play(songsList);
					}}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/64/64595.png"
						alt="play-pause"
						style={styles.resume}
						draggable="false"
					/>
				</div>
			</div>
		</div>
	);
	//------------------------------------------------------------------------------------------
};

const styles = {
	controller: {
		height: 230,
		width: 230,
	},
	forward: {
		height: 56,
		width: 60,
		cursor: "pointer",
		padding: "10px",
	},
	backward: {
		height: 55,
		width: 60,
		transform: "rotate(180deg)",
		cursor: "pointer",
		padding: "10px",
	},
	menu: {
		fontWeight: "bolder",
		fontSize: 27,
		cursor: "pointer",
		padding: "5px",
	},
	resume: {
		height: "50px",
		width: "60px",
		cursor: "pointer",
		padding: "12px",
	},
};

export default Controller;
