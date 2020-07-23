import "./Utility.scss"
import { View, view, Button, ImgBack, ImgPoster, ImgArrowRight, CData, LoggedInController } from "../index"


export class Header extends View { classes = s => ['MAXWIDTH', 'TOP', 'COLUMN'] }
export class HeaderBorder extends Header {}
export class SubHeader extends Header {}
export class SubHeaderBorder extends SubHeader {}

export class ErrorMessage extends View {
	classes = s => [s.error ? "FADEIN" : "HIDDEN"]
	layout = s => s.error || "Placeholder" // placeholder generating proper height
	listen = s => ({
		"ErrorMessage": m => {
			s.error = m
		}
	})
}

export class ScrollBox extends View {
	classes = () => ['COLUMN', 'MAXWIDTH', 'TEXTLEFT', 'LEFT']
}

export class Back extends Button {
	style = () => ({ fontSize: '18px' })
	layout = () => [ view(ImgBack), 'Back' ]
	onClick = () => {
		if (this.state.navController.dom.children.length == 1) window.location = '/'
		else window.history.back()
	}
}

export class Setting extends View {
	classes = s => [`MAXWIDTH SPREAD Button ${s.active ? 'Active': ''}`]
	style = () => ({ padding: '13px 0' })
	layout = s => [
		s.title,
		view(ImgArrowRight)
	]
}

export class BorderBottom extends View {
	classes = () => ['MAXWIDTH']
}

export class PosterCollection extends View {
	classes = () => ['MAXWIDTH', 'COLUMN', 'SPACED', 'WIDE']

	layout = s => s.items.map(h => 
		view('MAXWIDTH COLUMN SPACED', [
			view(SubHeaderBorder, h.title),
			view(Grid, h.items.map(i => 
				view('Button', { onClick: () => this.goDetail(CData.appData.feed.items[i]) }, [
					view(ImgPoster, { image : CData.appData.feed.items[i].poster })
				])
			))
		])
	)

	goDetail = m => {
		if (m.type == "movie") this.navController.route(`/detail/${m.slug}`)
		else this.navController.route(`/detail/${m.slug}/seasons`)
	}
}

export class Grid extends View {
	classes = () => ['WRAP', 'SPREAD', 'MAXWIDTH', 'TOP']
	didAppear = () => {
		const frag = window.document.createDocumentFragment()
		for (let i = 0; i < 8; i++) frag.appendChild(view('Filler'))
        this.dom.appendChild(frag)
	}
}
