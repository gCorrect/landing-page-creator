export interface LandingPage {
  id: number;
  name: string;
  language: string[];
  languages: Array<InfoPerLanguage>;
  logo: {
    url: string;
    width: string;
    height: string;
    borderSize: string;
  },
  background: string;
  fontFace : {
    fontFamily: string;
    src: string;
  },
  text: {
    content: string;
    color: string;
    bgColor: string;
    padding: string;
    borderRadius: string;
  },
  links: Array<Link>,
}


export class InfoPerLanguage {
  name: string = '';
  code?: string = '';
  text: string = '';
  links: Array<LinkInfo> = [];
}

export class Link {
  url: string = '';
  width: string = '';
  button: Button = new Button();
}

export class Button {
  text: string = '';
  color: string   = '';
  bgColor: string = '';
  margin: string = '';
  padding: string = '';
  borderRadius: string = '';
  hoverBgColor: string = '';
}

export class LinkInfo{
  caption: string = '' ;  
  url: string = '';
  linkStyles: LinkStyles = new LinkStyles(); 
}

export class LinkStyles {
  width: string = '';
  color: string   = '';
  bgColor: string = '';
  margin: string = '';
  padding: string = '';
  borderRadius: string = '';
  hoverBgColor: string = '';
}