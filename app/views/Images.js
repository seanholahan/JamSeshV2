import { Image } from "../index"
import "./Images.scss"

export class ImgCircuit extends Image { image = () => "/images/circuitLogo.png"; classes = () => ['Button'] }
export class ImgLoading extends Image { image = () => "/images/LoadingIndicator.gif" }
export class ImgFBI extends Image { image = () => "/images/FBI.png" }
export class ImgHomeland extends Image { image = () => "/images/HomelandSecurity.png" }
export class ImgPiracy extends Image { image = () => "/images/IPRCenter.png" }

export class ImgHome extends Image { image = () => "/images/home.svg"; classes = () => ['Button'] }
export class ImgAccount extends Image { image = () => "/images/account.svg"; classes = () => ['Button'] }
export class ImgSearch extends Image { image = () => "/images/search.svg"; classes = () => ['Button'] }
export class ImgBack extends Image { image = () => "/images/angle-arrow-down.svg" }

export class ImgArrowRight extends Image { image = () => "/images/angle-arrow-down.svg" }
export class ImgPoster extends Image {}
