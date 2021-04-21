import React from 'react'
import Finder from '../assets/icons/37_finder.png';
import Facetime from '../assets/icons/45_facetime.png';
import Appstore from '../assets/icons/63_appstore.png';
import Safari from '../assets/icons/15_safari.png';
import Notes from '../assets/icons/23_notes.png';
import Preview from '../assets/icons/18_preview.png';
import Music from '../assets/icons/24_music.png';
import Siri from '../assets/icons/10_siri.png';
import Terminal from '../assets/icons/07_terminal.png';
import Calculator from '../assets/icons/56_calculator.png';
import Map from '../assets/icons/28_maps.png';
import Mail from '../assets/icons/29_mail.png';
import Tv from '../assets/icons/04_tv+.png';
import Contacts from '../assets/icons/50_contacts.png';
import Trash from '../assets/imgs/trash.png';
import Chrome from '../assets/imgs/chrome.png';
import './less/footer.scss';

const apps1 = [{
  name: 'App Store',
  logo: Appstore
}, {
  name: 'Finder',
  logo: Finder
}, {
  name: 'Face Time',
  logo: Facetime
}, {
  name: 'Safari',
  logo: Safari
}, {
  name: 'Notes',
  logo: Notes
}, {
  name: 'Preview',
  logo: Preview
}, {
  name: 'Siri',
  logo: Siri
}]

const apps2 = [{
  name: 'Music',
  logo: Music
}, {
  name: 'Terminal',
  logo: Terminal
}, {
  name: 'Google Chrome',
  logo: Chrome
}, {
  name: 'Calculator',
  logo: Calculator
}, {
  name: 'Map',
  logo: Map
}, {
  name: 'Music',
  logo: Music
}]

const apps3 = [{
  name: 'Mail',
  logo: Mail
}, {
  name: 'Tv',
  logo: Tv
}, {
  name: 'Contacts',
  logo: Contacts
}, {
  name: 'Trash',
  logo: Trash
}]

const Footer = () => {

  const renderApps = () => {
    return <>
      {apps1.map(app => (
        <div className="footer-apps_item" title={app.name}>
          <img src={app.logo} alt="" />
        </div>
      ))}
      <div className="divider"></div>
      {apps2.map(app => (
        <div className="footer-apps_item" title={app.name}>
          <img src={app.logo} alt="" />
        </div>
      ))}
      <div className="divider"></div>
      {apps3.map(app => (
        <div className="footer-apps_item" title={app.name}>
          <img src={app.logo} alt="" />
        </div>
      ))}
    </>
  }

  return (
    <div className="footer">
      <div className="footer-apps">
        {renderApps()}
      </div>
    </div>
  )
}

export default Footer;