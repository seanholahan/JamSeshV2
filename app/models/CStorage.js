import { Model } from "./../index"

export class CStorage extends Model {
	static shared = new CStorage()

	init() {
		this.language = window.localStorage.getItem("language")

		this.subtitleSetting = window.localStorage.getItem("subtitleSetting")
		if (this.subtitleSetting == null) {
			this.subtitleSetting = ""
			this.saveSubtitleSetting()
		}

		this.audioLanguageSetting = window.localStorage.getItem("audioLanguageSetting")
		if (this.audioLanguageSetting == null) {
			this.audioLanguageSetting = ""
			this.saveAudioLanguageSetting()
		}

		this.resumeData = JSON.parse(window.localStorage.getItem("ResumeData"))
		if (this.resumeData == null) {
			this.resumeData = {}
			this.saveResumeData()
		}

		this.loggedIn = window.localStorage.getItem("LoggedIn")
		if (this.loggedIn == null) {
			this.loggedIn = ""
			this.saveLoggedIn()
		}

		this.accountGuild = window.localStorage.getItem("accountGuild")
		if (this.accountGuild == null) {
			this.saveAccountGuild("SAG")
		}

		this.accountType = window.localStorage.getItem("accountType")
		if (this.accountType == null) {
			this.saveAccountType("FINAL")
		}
		this.lastSort = window.localStorage.getItem("lastSort")
		if (this.lastSort == null) {
			this.saveLastSort("default")
		}
	}

	saveLanguage(last) {
		this.language = last
		localStorage.setItem("language", this.language)
	}

	saveAudioLanguageSetting(last) {
		this.audioLanguageSetting = last
		localStorage.setItem("audioLanguageSetting", this.audioLanguageSetting)
	}

	saveSubtitleSetting(last) {
		this.subtitleSetting = last
		localStorage.setItem("subtitleSetting", this.subtitleSetting)
	}

	saveLastSort(last) {
		this.lastSort = last
		localStorage.setItem("lastSort", this.lastSort)
	}

	saveResumeData() {
		localStorage.setItem("ResumeData", JSON.stringify(this.resumeData))
	}

	saveLoggedIn() {
		localStorage.setItem("LoggedIn", this.loggedIn)
	}

	saveAccountType(type) {
		this.accountType = type
		localStorage.setItem("accountType", this.accountType)
	}

	saveAccountGuild(type) {
		this.accountGuild = type
		localStorage.setItem("accountGuild", this.accountGuild)
	}
}
