import "./NavBar.scss"
import { View, view, Search, ImgCircuit, ImgHome, ImgSearch, ImgAccount, Back, Home, Loading } from "../index"

export class NavBar extends View {
	classes = () => ['MAXWIDTH']
	layout = s => view('Inner MAXWIDTH', this.getBar())
	listen = s => ({
		'NavControllerUpdate': c => this.refresh()
	})

	getBar() {
		if (this.state.navController.topController instanceof Loading || this.state.navController.topController instanceof Home) return this.barHome()
		else return this.barBackTitle()
	}

	barHome = () => [
		view(NavBarLeft, view(ImgSearch, { onClick: () => this.state.navController.route("/search") }),	),
		view(NavBarCenter, { style: { letterSpacing: '2px' } }, [ view("HEAVY", "FYC"), view("THIN", "2020") ]),
		view(NavBarRight, view(ImgAccount, { onClick: () => this.state.navController.route("/account") }))
	]

	barBackTitle = () => [
		view(NavBarLeft, view(Back, { navController: this.state.navController })),
		view(NavBarCenter, ''),
		view(NavBarRight)
	]
}

export class NavBarDesktop extends View {
	classes = () => ['MAXWIDTH']
	layout = s => view('Inner MAXWIDTH', this.getBar())

	getBar = () => [
		view(NavBarLeft, view(ImgCircuit, { onClick: () => this.state.navController.route("/") })),
		view(NavBarCenter, { style: { letterSpacing: '2px' } }, [ view("HEAVY", "FYC"), view("THIN", "2020") ]),
		view(NavBarRight, [
			view(ImgSearch, { onClick: () => this.state.navController.route("/search") }),	
			view(ImgAccount, { onClick: () => this.state.navController.route("/account/membership") }),	
			view(ImgHome, { onClick: () => this.state.navController.route("/") }),	
		])
	]
}

class NavBarLeft extends View { classes = () => ['MAXWIDTH', 'LEFT', 'SPACED', 'TIGHT'] }
class NavBarCenter extends View { classes = () => ['MAXWIDTH', 'SEMIBOLD'] }
class NavBarRight extends View { classes = () => ['MAXWIDTH', 'RIGHT', 'SPACED', 'TIGHT'] }
