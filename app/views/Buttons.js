import { Controller, Button, View, view, Image,CAuth, BLData } from "../index"
import "./Buttons.scss"

export class Input extends View {
	tag = () => "input"
	domAttributes = s => ({ type: s.isPassword ? "password" : "text", value: s.value || "", "placeholder": s.placeholder || "", autocorrect: "off", autocapitalize: "off" })
	classes = () => ['MAXWIDTH', this.state.showError ? "Error" : ""]
	init = s => { if (s.onChange) this.addEventListener("keyup", e => s.onChange(e.target.value)) }
	listen = s => ({
		"formHasEmpties": d => {
			if (d.ref != s.ref) return
			s.showError = !d.reset
		}
	})
}

export class PIN extends Input {}

export class Submit extends Button {
	classes = () => ['MAXWIDTH', this.state.disabled ? "Disabled" : this.state.destructive ? "Destructive" : '']
	layout = s => [
		s.image ? view(Image, { image: s.image }) : '',
		s.title
	]
	onClick = () => {
		this.refresh(this.state.loading || "Please Wait...")
		this.state.loaderClick(() => this.refresh())
	}
}

export class Link extends Button {}

export class CheckboxLabel extends View {
	classes = () => ['COLUMN', 'ROWIFY', 'SPACED', 'TIGHT', 'Button']
	tag = () => 'label'
	layout = s => [
		view(Checkbox, { onChange: s.onChange, ref: s.REF }),
		s.label
	]
}

export class Checkbox extends View {
	tag = () => 'input'
	domAttributes = s => ({ type: 'checkbox' })
	init = s => {
		this.addEventListener("change", e => {
			if (s.onChange) s.onChange(this.dom.checked)
		})
	}
}

export class Select extends View {
	tag = () => "select"
	classes = () => ['MAXWIDTH', "Input", 'Button', this.state.showError ? "Error" : ""]
	init = s => { if (s.onChange) this.addEventListener("change", e => s.onChange(e.target.value)) }
	layout = s => s.options.map((o, i) => view(Option, { option: this.getOption(o), value: this.getValue(o, i), selected: s.value==this.getValue(o, i) }))
	listen = s => ({
		"formHasEmpties": d => {
			if (d.ref == s.ref) {
				if (d.reset) s.showError = false
				else s.showError = true
			}
		}
	})
	getOption(o) {
		if (Array.isArray(o)) return o[0]
		return o
	}
	getValue(o, i) { 
		if (Array.isArray(o) && o.length == 2) return o[1]
		return o
	}
}

export class Option extends View {
	tag = () => "option"
	domAttributes = () => { 
		const r = {}
		if (this.state.selected) r.selected = true
		if (this.state.disabled) r.disabled = true
		if (this.state.value !== undefined) r.value = this.state.value
		return r
	}
	layout = s => s.option
}
export class BackIcon extends Image {}
export class BackButtonWithText extends View {
	classes = s => [CAuth.isDesktop() ? "":"InActive"]
	layout = s => [	
		view(BackIcon, {  image:"/images/arrowBack.svg" }),
		view("Text",s.text)

	]	
}


export class DetailButton extends View {
	layout = s => [
		view(PlayIcon, { image:s.image}),
		view("ButtonText", s.text)
	]
}
class PlayIcon extends Image {}
