import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";
import { logout } from "./features/userSlice";
import logo from "./linkedin.svg";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
// import { LinkedIn } from "@material-ui/icons";

const Header = () => {
	const dispatch = useDispatch();

	const logoutHandler = async () => {
		await auth.signOut();
		dispatch(logout());
	};

	return (
		<div className="header">
			<div className="header__left">
				<img src={logo} alt="Linkedin Logo" />

				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>

			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption title="Me" onClick={logoutHandler} avatar={true} />
			</div>
		</div>
	);
};

export default Header;
