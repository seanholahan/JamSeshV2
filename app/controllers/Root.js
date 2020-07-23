import "./Root.scss"
import { CAuth, CData, LanguageData, view, AccountParentalConsent, NavController, Controller, Home, ImgLoading, LoginAdditional, LoginWarning, LoginAgreement, LoginPiracy, LoginTOS, LoginFBI, LoginSecurity, Detail, AccountMembershipAdd, Account, NavBar, Login, Search, DetailSeasons, DetailEpisodes, BitPlayer, NavBarDesktop, AccountLanguage, AccountPrivacy, AccountTerms, AccountFAQ, AccountSignout, AccountMembership } from "./../index.js"

export class Root extends Controller {
	classes = () => [CAuth.isDesktop() ? 'isDesktop' : '']
	layout = () => {
		if (false) return view(NavLogin)
		const nav = view(NavMain)
		return [
			view(CAuth.isDesktop() ? NavBarDesktop : NavBar, { navController: nav.object }),
			nav
		]
	}
}

export class NavLogin extends NavController {
	layout = () => view(Loading)
	router = () => ({
		"/": Login,
		"/additional-code": LoginAdditional,
		"/user-agreement": LoginAgreement,
		"/network-security": LoginSecurity,
		"/network-warning": LoginWarning,
		"/piracy-warning": LoginPiracy,
		"/terms-of-service": LoginTOS,
		"/fbi-warning": LoginFBI,
		NotFound: NotFound,
	})
}

export class NavMain extends NavController {
	classes = () => ['TOP']
	layout = () => view(Loading)
	router = () => ({
		"/": Home,
		NotFound: NotFound,
	})

	push(v) {
		super.push(v)
		this.notify('NavControllerUpdate', this.topController) //todo put into psystem
	}

	pop(_id=null) {
		const r = super.pop(_id)
		this.notify('NavControllerUpdate', this.topController)
		return r
	}
}

export class LoggedInController extends Controller {
	init = s => {
		CData.language = LanguageData[CData.localStorage.account.language]
	}
	
	preroute = finish => {
		CData.getAppData(feed => finish())
	}
}

export class Loading extends Controller {
	navRemoveFromHistory = () => true
	classes = () => ['SELFCENTER']
	layout = () => view(ImgLoading)
}

class NotFound extends Controller {
	title = () => "Page Not Found"
	classes = () => ["COLUMN", 'SELFCENTER']
	layout = () => [
		view("Header", "We're Sorry :("),
		view("", `This page does not exist`),
	]
}
