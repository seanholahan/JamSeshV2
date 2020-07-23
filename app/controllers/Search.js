import { view, LoggedInController, CData, PosterCollection, SubHeaderNoBorder, Input } from "./../index"


export class Search extends LoggedInController {
	title = () => `Circuit | ${CData.language.search}`
	classes = () => ['COLUMN', 'SPACED']

	didAppear = () => {
		this.get('search').focus()
		this.onChange('')
	}

	layout = s => [
		view(Input, { placeholder:`${CData.language.search}...`, ref: 'search', onChange: this.onChange }),
		view(PosterCollection, { items: [], ref: 'posterCollection' })
	]

	onChange = q => {
		this.get('posterCollection').object.setState({
			items: [{ 
				title: `${CData.language.searching}: ${q}`, 
				items: Object.keys(CData.appData.feed.items).filter(slug => slug.includes(q.trim().toLowerCase()))
			}]
		})
	}
}
