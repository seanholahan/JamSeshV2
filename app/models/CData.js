import { Model, CAuth, LanguageData } from "../index"

export class CData extends Model {
	static appData = null
	static language = LanguageData[CAuth.account ? CAuth.account.language : 'en']

	// static get lastGuild() { return CData.localStorage.lastGuild || (CData.multipleLogins ? "all" : CData.appData.feed.loggedIn[0].name) }
	// static get lastSort() { return CData.localStorage.lastSort || (CData.multipleLogins ? "all" : "nomination") }
	// static get multipleLogins() { return CData.appData.feed.loggedIn.length > 1 ? true : false }

	static getAppData(callback) {
		if (CData.appData) { callback(CData.appData); return }
		
		CData.request("POST", CAuth.server + "/v2/feed", { _id: CAuth.account._id, token: CAuth.account.token, language: "en" , loginCode: "BBBB" }, r => {
			// CAuth.verifyAuthOrRouteToLogin(r)
			CData.appData = r
			console.log(r)
			callback(CData.appData)
		})
	}

	static updateLanguage(code) {
		CAuth.account.language = code
		CAuth.saveLocalStorage({ 'account': CAuth.account })
		window.location.reload()
	}
}
