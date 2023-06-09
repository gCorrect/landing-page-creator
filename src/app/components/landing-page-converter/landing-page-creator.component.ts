//@angular
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//fontawesome
import {
  faEdit,
  faMinus,
  faPlus,
  faWindowClose,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
// models
import { LandingPage, Link, LinkInfo } from '../../models/landingPage.model';
import { fonts, Font } from 'src/app/models/fonts.model';
import { languages, Language } from 'src/app/models/languages.model';

declare var saveAs: any;

@Component({
  selector: 'app-landing-page-creator',
  templateUrl: './landing-page-creator.component.html',
  styleUrls: ['./landing-page-creator.component.scss'],
})
export class LandingPageCreatorComponent implements OnInit {
  // stirngs
  cssText = '';
  jsText = '';
  htmlText = ' ';
  //icons
  minusIcon = faMinus;
  plusIcon = faPlus;
  closeIcon = faWindowClose;
  editIcon = faEdit;
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  // form display booleans
  allSpecsOpen = false;
  isOtherLanguages = true;
  langSpecsOpen = false;
  fontSpecsOpen = false;
  bgSpecsOpen = false;
  isLogo = true;
  logoSpecsOpen = false;
  isText = true;
  textSpecsOpen = false;

  linkSpecsOpen: boolean[] = [false];
  //
  indexLink = 2;
  //
  hover = false;
  hovered = 0;
  //Objects
  landingPage: LandingPage = {
    id: 1,
    name: '',
    language: ['Greek', 'English'],
    languages: [
      {
        name: 'Greek',
        code: 'el',
        text: '@Το κατάστημά μου',
        links: [
          {
            caption: 'My link 1',
            url: 'https://www.mylink.com',
            linkStyles: {
              width: '400',
              color: '#ffffff',
              bgColor: '#9f9240',
              margin: '15px auto',
              padding: '10px 20px',
              borderRadius: '5px',
              hoverBgColor: 'gray',
            },
          },
        ],
      },
      // second language example
      {
        name: 'English',
        code: 'en',
        text: '@My Company',
        links: [
          {
            caption: 'My Link1',
            url: 'https://www.mylink.com',
            linkStyles: {
              width: '400',
              color: '#ffffff',
              bgColor: '#9f9240',
              margin: '15px auto',
              padding: '10px 20px',
              borderRadius: '5px',
              hoverBgColor: 'gray',
            },
          },
        ],
      },
    ],
    fontFace: {
      fontFamily: 'Arial',
      src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
    },
    background:
      'https://res.cloudinary.com/blue-plus-technologies-ltd/image/upload/f_auto,q_auto,dpr_auto,w_2050,c_limit/v1610373335/wmh0jyatqbfweupqgzxy.jpg',
    // background: '',
    logo: {
      url: 'https://res.cloudinary.com/blue-plus-technologies-ltd/image/upload/v1609790111/tkbwoo2z75yim69lndka.png',
      // url: 'https://www.i-host.gr/content/customers/img/aleria/logo.png',
      width: '200',
      height: '200',
      borderSize: '31px',
    },
    text: {
      content: '@myCompany',
      color: '#ffffff',
      bgColor: '#000000d9',
      padding: '',
      borderRadius: '5px',
    },
    links: [
      {
        url: 'https://www.aleria.gr/en/menu',
        width: '400',
        button: {
          text: 'My Link1',
          color: '#ffffff',
          bgColor: '#9f9240',
          margin: '15px auto',
          padding: '10px 20px',
          borderRadius: '5px',
          hoverBgColor: 'gray',
        },
      },
    ],
  };

  fonts: Font[] = fonts;
  languages: Language[] = languages;

  // Functions
  exportCss() {
    console.log('exportCss');
    var blob = new Blob([this.cssText], { type: 'text/plain;charset=utf-8' });
    new saveAs(blob, `${this.landingPage.name}.css`);
  }

  exportJs() {
    console.log('exportCss');
    var blob = new Blob([this.jsText], { type: 'text/plain;charset=utf-8' });
    new saveAs(blob, `${this.landingPage.name}.js`);
  }

  exportHtml() {
    console.log('exportCss');
    var blob = new Blob(
      [this.htmlText],
      // var blob = new Blob([this.htmlText],
      { type: 'text/plain;charset=utf-8' }
    );
    new saveAs(blob, `${this.landingPage.name}.html`);
  }

  createCss() {
    console.log('createCss');

    let linkStyles = this.landingPage.languages[0].links[0].linkStyles;

    let cssText = `
/* ============Custom============== */

  #language {
    color: white;
    border: none;
    font-size: 20px;
    background: transparent;
    position: absolute;
    right: 20px;
    width: auto;
    display: block;
    cursor: pointer;
    text-decoration: underline;
    box-shadow: none !important;
  }

  #language option{
    color: black;
  }
    .venue-logo {
    background-image: url('${this.landingPage.logo.url}');
    width: ${this.landingPage.logo.width}px;
    height: ${this.landingPage.logo.height}px;
    background-color: white;
    border-radius: 15px;
    border: 31px solid white;
    margin: 50px auto;
    display: block;
    box-shadow: 0px 1px 2px 2px rgba(0, 0, 0,  0.27);

  }

  body {
    font-family: ${this.landingPage.fontFace.fontFamily}, sans-serif;
    background-image: url('${this.landingPage.background}');  
    min-height: 100vh;
    color: black;
    background-size: cover;

    .venue-buttons button {
      font-size: 25px;
      background-color: ${linkStyles.bgColor};};
      box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.27);
      color: ${linkStyles.color};

    }
    
    .venue-buttons a {
      display: block;
      margin: 0px auto;
      max-width: ${linkStyles.width}px;
      text-decoration: none;
    }
    
    .venue-buttons button:hover {
      background-color: ${linkStyles.hoverBgColor};
    }

    .text-container {
      text-align: center;
    }
    
    .venue-text {
      color: ${this.landingPage.text.color};
      background-color: ${this.landingPage.text.bgColor};
      padding: ${this.landingPage.text.padding};
      border-radius: ${this.landingPage.text.borderRadius};
      display: inline-block;
    }

    `;
    this.cssText = cssText;
  } //createCss() End

  createJs() {
    let languages = this.landingPage.languages;
    let text: string | undefined = '';
    for (let langIndex = 0; langIndex < languages.length; langIndex++) {
      let lineText = languages[langIndex].code?.concat(
        `: "${languages[langIndex].text}", \n`
      );
      lineText += '\t\t';
      console.log('each text line: \n' + lineText);

      if (text !== undefined) text += lineText;
    }

    let caption: string | undefined = '';
    let url: string | undefined = '';
    let linksCaptions: string[] = [];
    let linksURL: string[] = [];
    for (let i = 0; i < languages[0].links.length; i++) {
      caption = '';
      url = '';
      for (let langIndex = 0; langIndex < languages.length; langIndex++) {
        let lineCaption = languages[langIndex].code?.concat(
          `: "${languages[langIndex].links[i].caption}", \n`
        );
        lineCaption += '\t\t\t';
        let lineURL =
          `link` +
          languages[langIndex].code?.concat(
            `: "${languages[langIndex].links[i].url}", \n`
          );
        lineURL += '\t\t\t';

        if (caption !== undefined) caption += lineCaption;
        if (url !== undefined) url += lineURL;
      }
      linksCaptions[i] = caption;
      linksURL[i] = url;
    }

    let linkInfo = '';
    let allLinksInfo = '';
    for (let i = 0; i < languages[0].links.length; i++) {
      linkInfo = `
  {
    caption: {
      ${linksCaptions[i]}
    },
      ${linksURL[i]}
  },
  `;
      allLinksInfo += linkInfo;
    }

    let jsText = `
var __linksData = {

  text: {
    ${text}
  },
  
  links: [
    ${allLinksInfo}
  ]
};

`;

    this.jsText = jsText;
  } //createJs() End

  createHtml() {
    console.log('createHtml');

    let linkStyles = this.landingPage.languages[0].links[0].linkStyles;

    let htmlText = `    

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>i-host Links Manager</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
  <link rel="stylesheet" href="css/global-style.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"
    integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>

  <script src="scripts/main.js"></script>
</head>

<style>
/* ============Global============== */
body {
  background-image: radial-gradient(circle, #e7e7e7, #ededed, #f3f3f3, #f9f9f9, #ffffff);
  min-height: 100vh;
}

.venue-logo {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 50px auto;
  background-size: contain;
}

.venue-buttons {
  text-align: center;
  margin: 40px auto;
}

.venue-buttons button {
  display: block;
  margin: 15px auto;
  padding: 10px 20px;
  text-align: center;
  width: 100%;
  border: none;
  color: ${linkStyles.color};
  background-color: #283593;
  border-radius: 5px;
  font-size: 20px;
}

.venue-buttons button:hover {
  background-color: #19257a;
}

.venue-buttons button i {
  float: left;
}

.venue-buttons a {
  display: block;
  margin: 0px auto;
  max-width: 250px;
  text-decoration: none;
}

#language {
  color: black;
  border: none;
  font-size: 20px;
  background: transparent;
  position: absolute;
  right: 20px;
  width: auto;
  display: block;
  cursor: pointer;
  text-decoration: underline; 
  box-shadow: none !important; 
}

#language option {
  background-color: white;
  color: black;
}

/* ============Custom============== */

  #language {
    color: white;
    border: none;
    font-size: 20px;
    background: transparent;
    position: absolute;
    right: 20px;
    width: auto;
    display: block;
    cursor: pointer;
    text-decoration: underline;
    box-shadow: none !important;
  }

  #language option{
    color: black;
  }
    .venue-logo {
    background-image: url('${this.landingPage.logo.url}');
    width: ${this.landingPage.logo.width}px;
    height: ${this.landingPage.logo.height}px;
    background-color: white;
    border-radius: 15px;
    border: 31px solid white;
    margin: 50px auto;
    display: block;
    box-shadow: 0px 1px 2px 2px rgba(0, 0, 0,  0.27);

  }

  body {
    font-family: ${this.landingPage.fontFace.fontFamily}, sans-serif;
    background-image: url('${this.landingPage.background}');  
    min-height: 100vh;
    color: black;
    background-size: cover;

    .venue-buttons button {
      font-size: 25px;
      background-color: ${linkStyles.bgColor};};
      box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.27);
      color: ${linkStyles.color};

    }
    
    .venue-buttons a {
      display: block;
      margin: 0px auto;
      max-width: ${linkStyles.width}px;
      text-decoration: none;
    }
    
    .venue-buttons button:hover {
      background-color: ${linkStyles.hoverBgColor};
    }

    .text-container {
      text-align: center;
    }
    
    .venue-text {
      color: ${this.landingPage.text.color};
      background-color: ${this.landingPage.text.bgColor};
      padding: ${this.landingPage.text.padding};
      border-radius: ${this.landingPage.text.borderRadius};
      display: inline-block;
    }

  </style>

<body>
    <div class="container">
        <!-- lang -->
        <select class="form-control" name="language" id="language" onchange="switchLanguage(this.value)">
            <option value='en' id='en'>English</option>
            <option value='el' id='el'>Greek</option>
        </select>

        <!-- logo -->
        <div class="row">
            <div class="col">
                <div class="venue-logo"></div>
            </div>
        </div>

        <!-- text -->
        <div class="row">
            <div class="col text-container">
                <div class="venue-text text-center">${this.landingPage.text.content}</div>
            </div>
        </div>

        <!-- buttons -->
        <div class="row">
            <div class="col">
            <div class="venue-buttons"><a href="https://www.i-host.gr/Reservations/New?restaurant=42&amp;lang=el"><button class="btn-undefined"><i class="bi bi-undefined"></i><span>Κρατήσεις</span></button></a><a href="https://giftspot.gr/gallery/remezzo.html"><button class="btn-undefined"><i class="bi bi-undefined"></i><span>Gift Cards</span></button></a><a href="misc/remmezo/food_menu.pdf"><button class="btn-undefined"><i class="bi bi-undefined"></i><span>Μενού - Φαγητό</span></button></a><a href="misc/remmezo/wine_list.pdf"><button class="btn-undefined"><i class="bi bi-undefined"></i><span>Λίστα Κρασιών</span></button></a><a href="misc/remmezo/bar_menu.pdf"><button class="btn-undefined"><i class="bi bi-undefined"></i><span>Μενού - Bar</span></button></a></div>
            </div>
        </div>

        <!-- text below -->
        <div class="row">
            <div class="col text-container">
                <div class="venue-text-below"></div>
            </div>
        </div>

    </div>

  <script type="text/javascript">
    init();
  </script>
</body>

</html>
    `;
    this.htmlText = htmlText;
    console.log('htmlText : ' + htmlText);
  } //createHtml() End

  // Language
  languageStyles() {
    const styles = {
      'font-family': `${this.landingPage.fontFace.fontFamily}`,
    };
    return styles;
  }

  // Language Adder
  defaultLanguage: Language = { value: 'Greek', code: 'el' };
  OtherLanguageToPush: Language = { value: '', code: '' };
  setDefaultLanguage(language: Language) {
    if (!this.landingPage.language.includes(language.value)) {
      // this.landingPage.language.sort();

      this.landingPage.language[0] = language.value;

      this.landingPage.languages[0] = {
        name: language.value,
        code: language.code,
        text: '@myCompany',
        links: [
          {
            caption: 'My Link',
            url: 'https://www.mylink.com',
            linkStyles: {
              width: '400',
              color: '#ffffff',
              bgColor: '#9f9240',
              margin: '15px auto',
              padding: '10px 20px',
              borderRadius: '5px',
              hoverBgColor: 'gray',
            },
          },
        ],
      };
      console.log(this.landingPage.language);
      console.log(this.landingPage.languages);
    } else {
      alert(`${language.value} already exists. Please, try again.`);
    }
    console.log('default lang:' + this.landingPage.language[0]);
  }
  addLanguage(language: Language) {
    this.isOtherLanguages = true;
    if (this.landingPage.language.includes(language.value)) {
      alert(`${language.value} already exists. Please, try again.`);
    } else if (language.value == '') {
      alert(`Sorry, no empty Language Field permitted.`);
    } else {
      this.landingPage.language.push(language.value);

      this.landingPage.languages.push({
        name: language.value,
        code: language.code,
        text: '@myCompany',
        links: [
          {
            caption: 'My Link',
            url: 'https://www.mylink.com',
            linkStyles: {
              width: '400',
              color: '#ffffff',
              bgColor: '#9f9240',
              margin: '15px auto',
              padding: '10px 20px',
              borderRadius: '5px',
              hoverBgColor: 'gray',
            },
          },
        ],
      });
    }

    // this.landingPage.lan guage.sort();
    console.log(this.landingPage.language);
  }

  removeDefaultLanguage() {
    this.landingPage.languages.splice(0, 1);
    this.landingPage.language.splice(0, 1);

    console.log('removeDefaultLanguage');
  }
  removeLanguage(language: string) {
    for (
      let langIndex = 0;
      langIndex < this.landingPage.language.length;
      langIndex++
    ) {
      if (this.landingPage.language[langIndex] === language) {
        this.landingPage.languages.splice(langIndex, 1);
        this.landingPage.language.splice(langIndex, 1);
      }
    }
    console.log('langs after remove : ' + this.landingPage.language);
  }

  // removeLanguage(index: number){
  //   this.landingPage.language.splice(index, 1);
  //   this.landingPage.languages.splice(index, 1);
  //   console.log(this.landingPage.language);
  // }

  selectedLanguage = 'Greek';
  langIndex: number = 0;
  selectedLang(language: string) {
    this.selectedLanguage = language;

    this.langIndex = this.landingPage.language.indexOf(language);
    console.log('langIndex : ' + this.langIndex);
  }

  // Background Image
  bgStyles() {
    const styles = {
      'background-image': `url('${this.landingPage.background}')`,
      'background-size': 'cover',
    };
    return styles;
  }

  // Logo
  logoStyles() {
    let styles = {};
    if (this.landingPage.logo.url === '') {
      styles = { display: 'none' };
    } else {
      styles = {
        width: `${this.landingPage.logo.width}px`,
        height: `${this.landingPage.logo.height}px`,
        'background-image': `url('${this.landingPage.logo.url}')`,
      };
    }
    return styles;
  }
  addRemoveLogo() {
    this.isLogo
      ? (this.landingPage.logo.url =
          'https://res.cloudinary.com/blue-plus-technologies-ltd/image/upload/v1609790111/tkbwoo2z75yim69lndka.png')
      : (this.landingPage.logo.url = '');
    console.log('this.landingPage.logo.url : ' + this.landingPage.logo.url);
  }

  //Text
  textStyles() {
    const styles = {
      'font-family': `${this.landingPage.fontFace.fontFamily}`,
      color: `${this.landingPage.text.color}`,
      'background-color': `${this.landingPage.text.bgColor}`,
      padding: `${this.landingPage.text.padding}px`,
      'border-radius': `${this.landingPage.text.borderRadius}`,
    };
    return styles;
  }
  addRemoveText() {
    if (this.isText) {
      for (
        let langIndex = 0;
        langIndex < this.landingPage.languages.length;
        langIndex++
      ) {
        this.landingPage.languages[langIndex].text = '@myCompany';
      }
      this.landingPage.languages;
    } else {
      for (
        let langIndex = 0;
        langIndex < this.landingPage.languages.length;
        langIndex++
      ) {
        this.landingPage.languages[langIndex].text = '';
      }
    }
    for (
      let langIndex = 0;
      langIndex < this.landingPage.languages.length;
      langIndex++
    ) {
      console.log('langIndex: ' + langIndex);
      console.log(
        'this.landingPage.languages[langIndex].text : ' +
          this.landingPage.languages[langIndex].text
      );
    }
  }

  // Links
  linkStyles(index: number) {
    console.log('link Index' + index);

    const styles = {
      'font-family': `${this.landingPage.fontFace.fontFamily}`,
      // 'width': `${this.landingPage.languages[this.langIndex].links[index].linkStyles.width}px`,
      width: `${
        this.landingPage.languages[this.langIndex].links[index].linkStyles.width
      }px`,
    };
    return styles;
  }

  linkButtonStyles(index: number) {
    let linkStyles =
      this.landingPage.languages[this.langIndex].links[index].linkStyles;
    let styles = {
      'background-color': '',
      color: `${linkStyles.color}`,
      padding: `${linkStyles.padding}`,
      'border-radius': `${linkStyles.borderRadius}`,
    };
    if (this.hover)
      // `${this.hover} ? {'background-color': ${this.landingPage.links[index].button.hoverBgColor} }: {'background-color': ${this.landingPage.links[index].button.bgColor}}`
      styles['background-color'] = `${linkStyles.hoverBgColor}`;
    else {
      styles['background-color'] = `${linkStyles.bgColor}`;
    }

    return styles;
  }

  addLink() {
    let links: any[] = [''];
    //console.log(this.name,this.empoloyeeID);
    for (
      let langIndex = 0;
      langIndex < this.landingPage.languages.length;
      langIndex++
    ) {
      links[langIndex] = this.landingPage.languages[langIndex].links;
      let linkInfo = new LinkInfo();
      linkInfo.url = 'https://www.mylink.com';
      if (linkInfo) {
        linkInfo.caption = `My Link${this.indexLink}`;
      }
      links[langIndex].push(linkInfo);
    }
    // let link: Link = {url: '', width: '', button: {text: '', color: '', bgColor: '', padding: '', borderRadius: ''}, fontFace: {fontFamily: ''}, text: {color: '', bgColor: '', padding: '', borderRadius: ''}, logo: {url: '', width: '', height: ''}, background: '}};
    // let linkInfo = new LinkInfo();
    // let linkStyle = new Link();
    // linkInfo.url = 'https://www.mylink.com';
    // if(linkInfo){
    //   linkInfo.caption = `My Link${this.indexLink}`;
    // }
    // links.push(linkInfo);
    this.indexLink++;
    this.linkSpecsOpen.push(false);
    console.log(links);
  }

  addButton() {
    //console.log(this.name,this.empoloyeeID);
    let links = this.landingPage.links;
    // let link: Link = {url: '', width: '', button: {text: '', color: '', bgColor: '', padding: '', borderRadius: ''}, fontFace: {fontFamily: ''}, text: {color: '', bgColor: '', padding: '', borderRadius: ''}, logo: {url: '', width: '', height: ''}, background: '}};
    let linkCustObj = new Link();
    linkCustObj.url = 'https://www.mylink.com';
    if (linkCustObj.button) {
      linkCustObj.button.text = `My Link${this.indexLink}`;
    }
    links.push(linkCustObj);
    this.indexLink++;
    this.linkSpecsOpen.push(false);
    console.log(links);
  }

  moveLinkUp(index: number) {
    //rearrhange styles
    let links = this.landingPage.links;
    let tempLink = links[index];
    links[index] = links[index - 1];
    links[index - 1] = tempLink;

    if (index !== 0) {
      let linksInfo = this.landingPage.languages[this.langIndex].links;
      let tempLinkInfo = linksInfo[index];
      linksInfo[index] = linksInfo[index - 1];
      linksInfo[index - 1] = tempLinkInfo;
    }

    console.log(links);
  }
  moveLinkDown(index: number) {
    let links = this.landingPage.links;
    let tempLink = links[index];
    links[index] = links[index + 1];
    links[index + 1] = tempLink;

    let linksInfo = this.landingPage.languages[this.langIndex].links;
    if (index !== linksInfo.length - 1) {
      let tempLinkInfo = linksInfo[index];
      linksInfo[index] = linksInfo[index + 1];
      linksInfo[index + 1] = tempLinkInfo;
    }
  }

  // ========== PIT ================

  // FONT SEARCH==========================
  ngOnInit(): void {
    this.getFontFamilyNames();
    console.log('langIndex : ' + this.langIndex);
  }
  sampleFonts = ['Arial', 'Arrial', 'Arrriiaal'];

  getFontFamilyNames() {
    let fonts = this.sampleFonts;
    let pattern = /riiaa/i;
    const fontFamilies = fonts.map((font) => {
      // const matches = font.match(/^(.*?)\s/);
      const matches = font.match(pattern);
      return matches ? matches[1] : font;
    });
    console.log('fontFamilies : ', fontFamilies);
    return fontFamilies;
  }

  hideLanguage() {
    console.log('hideLanguage');
    const language = document
      .getElementsByClassName('language')
      .item(0) as HTMLElement;
    const close = document.getElementById('close-lang');
    const plus = document.getElementById('plus-icon-lang');

    if (language !== null && close !== null && plus !== null) {
      language.style.display = 'none';
      close.style.display = 'none';
      plus.style.display = 'block';
    }
  }
  displayLanguage() {
    console.log('displayLanguage');
    const language = document
      .getElementsByClassName('language')
      .item(0) as HTMLElement;
    const plus = document.getElementById('plus-icon-lang');
    const close = document.getElementById('close-lang');

    if (language !== null && plus !== null && close !== null) {
      console.log('displayLanguage');

      language.style.display = 'block';
      close.style.display = 'inline';
      plus.style.display = 'none';
    }
  }

  isplaySets() {
    this.allSpecsOpen = !this.allSpecsOpen;
  }

  linkSpecs(index: number) {
    this.linkSpecsOpen[index] = true;
  }

  closeLogoDetails() {
    this.logoSpecsOpen = false;
  }

  displayBgForm() {
    const close = document.getElementById('close-bg');
    const background = document.getElementById('background');
    if (background !== null && close !== null) {
      background.style.display = 'block';
      close.style.alignSelf = 'flex-end';
      close.style.display = 'inline';
    }
  }
  hideBgForm() {
    console.log('noneDisplay');
    const background = document.getElementById('background');
    const close = document.getElementById('close-bg');

    // const plus = document.getElementById('plus-icon');
    //
    if (background !== null && close !== null) {
      background.style.display = 'none';
      close.style.display = 'none';
      // plus.style.display = 'block';
    }
  }

  displayFontForm() {
    const close = document.getElementById('close-font');
    const fontFaceForm = document.getElementById('font-face-form');
    const fontEditIcon = document.getElementById('font-edit-icon');
    if (fontFaceForm !== null && close !== null && fontEditIcon !== null) {
      fontFaceForm.style.display = 'flex';
      fontFaceForm.style.flexDirection = 'column';
      close.style.display = 'block';
      close.style.alignSelf = 'flex-end';
      fontEditIcon.style.display = 'none';
    }
  }
  hideFontForm() {
    const background = document.getElementById('font-face-form');
    const close = document.getElementById('close-font');
    const fontEditIcon = document.getElementById('font-edit-icon');

    // const plus = document.getElementById('plus-icon');
    //
    if (background !== null && close !== null && fontEditIcon !== null) {
      background.style.display = 'none';
      close.style.display = 'none';
      fontEditIcon.style.display = 'inline';
      // plus.style.display = 'block';
    }
  }

  fontStyles() {
    const styles = { 'font-family': 'sans-serif' };
    return styles;
  }

  setClose(close: boolean) {
    this.logoSpecsOpen = false;
    console.log('setClose ' + close);
  }
}
