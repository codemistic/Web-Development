import React from "react";
import Ipod from "../stateless/Ipod";
import ZingTouch from "zingtouch";
import Helmet from "react-helmet";
// importing images from assets
import images from "../../assets/images/images";
// importing songs and thumbnails
import songs from "../../assets/songs/songs";

// Stateful App Class Component to Render the App as a whole
class App extends React.Component {
	//-------------------------------------------------------------------------------------------
	// Constructor for initialization of State and Ref
	constructor() {
		super();
		// State
		const song1 = new Audio(songs.music1);
		const song2 = new Audio(songs.music2);
		const song3 = new Audio(songs.music3);
		this.state = {
			// State Managing the Menu
			menu: {
				// Menu Options along with their Sub-Menu Options
				options: [
					{
						music: ["all-songs", "artists", "albums"],
					},
					{
						games: [],
					},
					{
						coverflow: [],
					},
					{
						settings: [
							"change-wallpaper",
							"change-orientation",
							"change-theme",
						],
					},
				],
				// Making the Menu Visible
				menuVisible: "no",
				musicVisible: "no",
				settingsVisible: "no",
				// Menu Options Index for traversal in Options and Sub Options
				optionsIndex: 0,
				musicIndex: 0,
				settingsIndex: 0,
				// used for Main Page Rendering like songs,artists,albums
				pageRender: "no",
			},
			// State Managing the Screen Display
			screen: {
				// List of wallpapers, Pages in Background to Render
				wallpaper: [
					// wallpapers
					images.wallpaper1,
					images.wallpaper2,
					images.wallpaper3,
					images.wallpaper4,
					images.wallpaper5,
					// coverflow
					images.coverflow,
					// games
					images.games,
					// all songs
					images.allsongs,
					// artists
					images.artists,
					// albums
					images.albums,
				],
				// Wallpaper index for traversal in Wallpaper Array to access wallpaper
				wallpaperIndex: 0,
				// Wallpaper index for traversal in Wallpaper Array for every Screen
				screenIndex: 0,
			},
			// State Managing the Mouse Click CSS Effect
			mouse: {
				innerCircle: "",
			},
			// State Managing the Songs
			songsList: {
				songs: [song1, song2, song3],
				thumbnails: [images.song1Img, images.song2Img, images.song3Img],
				songIndex: 0,
				name: ["Stay", "Deserve You", "Yummy"],
				isPlaying: false,
			},
			// State Managing the Themes
			theme: {
				themeList: ["Classic", "Dark"],
				themeIndex: 0,
			},
		};
		// Reference to access the Component
		this.controllerRef = React.createRef();
		this.progressRef = React.createRef();
	}
	//-------------------------------------------------------------------------------------------
	// Functionality to choose the menu to display and handle the Menu Clicks
	isMenuVisible = (menu, screen) => {
		const { songsList } = this.state;
		// To go back to the previous Menu from the current Display
		if (menu.pageRender === "yes") {
			menu.menuVisible = "yes";
			screen.screenIndex = screen.wallpaperIndex;
			menu.pageRender = "no";

			songsList.songs.map((song) => {
				song.pause();
				song.currentTime = 0;
				return [];
			});
			songsList.isPlaying = false;
		}
		// To open the Menu and visit different Menu Options
		else {
			if (
				menu.menuVisible === "yes" &&
				menu.musicVisible === "no" &&
				menu.settingsVisible === "no"
			) {
				menu.menuVisible = "no";
			} else if (
				menu.menuVisible === "yes" &&
				menu.musicVisible === "yes" &&
				menu.settingsVisible === "no"
			) {
				menu.musicVisible = "no";
			} else if (
				menu.menuVisible === "yes" &&
				menu.musicVisible === "no" &&
				menu.settingsVisible === "yes"
			) {
				menu.settingsVisible = "no";
			} else {
				menu.menuVisible = "yes";
			}
		}
		this.setState({ menu, screen, songsList });
		return;
	};
	//-------------------------------------------------------------------------------------------
	// Functionality to handle the Down Press CSS effect on Middle Button
	addClass = (classname, event) => {
		if (classname === "inner-circle" && event === "down") {
			const { mouse } = this.state;
			mouse.innerCircle = "down";
			this.setState({ mouse });
		}
	};
	//-------------------------------------------------------------------------------------------
	// Functionality to handle the Up Press CSS effect on Middle Button
	removeClass = (classname, event) => {
		if (classname === "inner-circle" && event === "down") {
			const { mouse } = this.state;
			mouse.innerCircle = "";
			this.setState({ mouse });
		}
	};
	//-------------------------------------------------------------------------------------------
	// Functionality to handle the Click Operations in the App for the Displays
	tap = (menu, screen) => {
		const { songsList, theme } = this.state;
		// To go to the Sub Menu of the Main Menu
		if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "no"
		) {
			if (menu.optionsIndex === 0) {
				menu.musicVisible = "yes";
			} else if (menu.optionsIndex === 1) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 6;
			} else if (menu.optionsIndex === 2) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 5;
			} else {
				menu.settingsVisible = "yes";
			}
		}
		// To Open the Pages of Music Menu
		else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "yes" &&
			menu.settingsVisible === "no"
		) {
			if (menu.musicIndex === 0) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 7;
				songsList.isPlaying = true;
				songsList.songs[songsList.songIndex].play();
			} else if (menu.musicIndex === 1) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 8;
			} else {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 9;
			}
		}
		// To Open the Pages of Settings Menu
		else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "yes"
		) {
			if (menu.settingsIndex === 0) {
				if (screen.wallpaperIndex < 4) {
					screen.wallpaperIndex += 1;
				} else {
					screen.wallpaperIndex = 0;
				}
				screen.screenIndex = screen.wallpaperIndex;
			}
			// For changing the Orientation
			else if (menu.settingsIndex === 1) {
				alert("Feature Will Be Added in the Next Version Release !! :)");
			}
			// For changing the Theme
			else {
				if (theme.themeIndex === 0) {
					theme.themeIndex = 1;
				} else {
					theme.themeIndex = 0;
				}
			}
		} else {
		}
		this.setState({ menu, screen, songsList, theme });
		return;
	};
	//-------------------------------------------------------------------------------------------
	// Functionality to handle the Rotation Operations in the App for the Options
	rotate = (menu) => {
		// Binds the rotate event to the active region
		this.activeRegionOuter.bind(
			this.containerElementOuter,
			"rotate",
			(event) => {
				event.stopPropagation();
				// Rotation in Main Menu
				if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "no" &&
					menu.settingsVisible === "no"
				) {
					const angle = event.detail.angle;
					if (angle >= 0 && angle <= 90) {
						menu.optionsIndex = 0;
					} else if (angle > 90 && angle <= 180) {
						menu.optionsIndex = 1;
					} else if (angle > 180 && angle <= 270) {
						menu.optionsIndex = 2;
					} else if (angle > 270 && angle <= 360) {
						menu.optionsIndex = 3;
					} else if (angle >= -90 && angle < 0) {
						menu.optionsIndex = 3;
					} else if (angle >= -180 && angle < -90) {
						menu.optionsIndex = 2;
					} else if (angle >= -270 && angle < -180) {
						menu.optionsIndex = 1;
					} else if (angle >= -360 && angle < -270) {
						menu.optionsIndex = 0;
					} else {
					}
				}
				// Rotation in Music Menu
				else if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "yes" &&
					menu.settingsVisible === "no"
				) {
					const angle = event.detail.angle;
					if (angle >= 0 && angle <= 120) {
						menu.musicIndex = 0;
					} else if (angle > 120 && angle <= 240) {
						menu.musicIndex = 1;
					} else if (angle > 240 && angle <= 360) {
						menu.musicIndex = 2;
					} else if (angle >= -120 && angle < 0) {
						menu.musicIndex = 2;
					} else if (angle >= -240 && angle < -120) {
						menu.musicIndex = 1;
					} else if (angle >= -360 && angle < -240) {
						menu.musicIndex = 0;
					} else {
					}
				}
				// Rotation in Settings Menu
				else if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "no" &&
					menu.settingsVisible === "yes"
				) {
					const angle = event.detail.angle;
					if (angle >= 0 && angle <= 120) {
						menu.settingsIndex = 0;
					} else if (angle > 120 && angle <= 240) {
						menu.settingsIndex = 1;
					} else if (angle > 240 && angle <= 360) {
						menu.settingsIndex = 2;
					} else if (angle >= -120 && angle < 0) {
						menu.settingsIndex = 2;
					} else if (angle >= -240 && angle < -120) {
						menu.settingsIndex = 1;
					} else if (angle >= -360 && angle < -240) {
						menu.settingsIndex = 0;
					} else {
					}
				} else {
				}
				this.setState({ menu });
			}
		);
	};
	//-------------------------------------------------------------------------------------------
	// Gets called before the First Re-Render and uses the Reference to the Controller
	componentDidMount() {
		this.containerElementOuter = this.controllerRef.current;
		this.activeRegionOuter = new ZingTouch.Region(this.containerElementOuter);
	}
	//-------------------------------------------------------------------------------------------
	// Gets called when we press the Play/Pause Button to Play-Pause the Song
	play = (songsList) => {
		if (
			this.state.menu.pageRender === "yes" &&
			this.state.screen.screenIndex === 7
		) {
			const { songIndex } = songsList;
			if (songsList.isPlaying) {
				songsList.isPlaying = false;
				songsList.songs[songIndex].pause();
			} else {
				songsList.isPlaying = true;
				songsList.songs[songIndex].play();
			}
			this.setState({ songsList });
		} else {
		}
	};
	//-------------------------------------------------------------------------------------------
	// Gets called when we Press the Next Button for the Next Song
	nextSong = (songsList) => {
		if (
			this.state.menu.pageRender === "yes" &&
			this.state.screen.screenIndex === 7
		) {
			songsList.songs.map((song) => {
				song.pause();
				song.currentTime = 0;
				return [];
			});
			songsList.isPlaying = false;
			songsList.songIndex += 1;
			if (songsList.songIndex > songsList.songs.length - 1) {
				songsList.songIndex = 0;
			}
			songsList.songs[songsList.songIndex].play();
			songsList.isPlaying = true;
			this.setState({ songsList });
		} else {
		}
	};
	//-------------------------------------------------------------------------------------------
	// Gets called when we Press the Previous Button for the Previous Song
	prevSong = (songsList) => {
		if (
			this.state.menu.pageRender === "yes" &&
			this.state.screen.screenIndex === 7
		) {
			songsList.songs.map((song) => {
				song.pause();
				song.currentTime = 0;
				return [];
			});
			songsList.isPlaying = false;
			songsList.songIndex -= 1;
			if (songsList.songIndex < 0) {
				songsList.songIndex = songsList.songs.length - 1;
			}
			songsList.songs[songsList.songIndex].play();
			songsList.isPlaying = true;
			this.setState({ songsList });
		} else {
		}
	};
	//-------------------------------------------------------------------------------------------
	// Gets called to Update the Song Progress Bar
	updateProgress = (event) => {
		if (
			this.state.menu.pageRender === "yes" &&
			this.state.screen.screenIndex === 7
		) {
			const { currentTime, duration } = event.srcElement;
			const progressPercent = (currentTime / duration) * 100;
			this.progressRef.current.style.width = progressPercent + "%";
		} else {
		}
	};
	//-------------------------------------------------------------------------------------------
	// Renders the App Component
	render() {
		//------------------------------------------------------------------------------------------
		//Unpacking the State
		const { menu, screen, mouse, songsList, theme } = this.state;
		//------------------------------------------------------------------------------------------
		// Changing the Application Body Theme
		const styling = () => {
			if (theme.themeIndex === 0) {
				return "background-color: ''; transition: all 2s linear;";
			} else {
				return "background-color: black; transition: all 2s linear;";
			}
		};
		//------------------------------------------------------------------------------------------
		return (
			<div className="App">
				<Ipod
					screen={screen}
					menu={menu}
					mouse={mouse}
					songsList={songsList}
					theme={theme}
					isMenuVisible={this.isMenuVisible}
					addClass={this.addClass}
					removeClass={this.removeClass}
					tap={this.tap}
					rotate={this.rotate}
					play={this.play}
					nextSong={this.nextSong}
					prevSong={this.prevSong}
					updateProgress={this.updateProgress}
					controllerRef={this.controllerRef}
					progressRef={this.progressRef}
				/>
				<Helmet>
					<style>{`body { ${styling()} }`}</style>
				</Helmet>
			</div>
		);
		//------------------------------------------------------------------------------------------
	}
	//-------------------------------------------------------------------------------------------
}

export default App;
