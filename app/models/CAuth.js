import { Model } from "../index"

export class CAuth extends Model {
	static get account() { return CAuth.localStorage.account }
	
	static server = "https://15t4qmf6fe.execute-api.us-west-2.amazonaws.com/api"
	// static server = process.env.NODE_ENV === "production" ? "https://15t4qmf6fe.execute-api.us-west-2.amazonaws.com/api" : "http://0.0.0.0:8000"
	static loginEndpoint = "/"

	static login(loginCode, callback) {
		CAuth.request("POST", CAuth.server + "/login", { loginCode: loginCode }, r => {
			CAuth.clearAllStorage()
			if (r.success) CAuth.saveLocalStorage({ "account": r })
			callback(r.success)
		})
	}

	static isDesktop() {
		//return (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
		return !( navigator.userAgent.toLowerCase().match("ipad") || (!(navigator.userAgent.toLowerCase().match("iphone")) && navigator.maxTouchPoints > 1) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
	}

	static logout() {
		CAuth.clearAllStorage()
		CAuth.verifyAuthOrRouteToLogin()
	}

	static verifyAuthOrRouteToLogin(r) {
		if (r && !r.success) {
			CAuth.clearAllStorage()
			if (r.message) alert(r.message)
		}
		if (CAuth.account == undefined) {
			CAuth.clearAllStorage()
			window.location.href = CAuth.loginEndpoint
		}
	}
}
