import React from 'react'
import './less/header.scss';
import logo from '../assets/imgs/apple.svg';
import volume from '../assets/imgs/volume.svg';
import battery from '../assets/imgs/battery.svg';
import wifi from '../assets/imgs/wifi.svg';
import siri from '../assets/imgs/siri.png';
import Clock from './utils/clock';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-left_action header-left_logo">
          <img src={logo} alt="apple" />
        </div>
        <div className="header-left_action header-left_finder">Finder</div>
        <div className="header-left_action">File</div>
        <div className="header-left_action">Edit</div>
        <div className="header-left_action">View</div>
        <div className="header-left_action">Go</div>
        <div className="header-left_action">Window</div>
        <div className="header-left_action">Help</div>
      </div>
      <div className="header-right">
        <div className="header-right_action header-right_battery">
          <img src={battery} alt="" />
        </div>
        <div className="header-right_action">
          <img src={wifi} alt="" />
        </div>
        <div className="header-right_action">
          <img src={volume} alt="" />
        </div>
        <div className="header-right_action header-right_siri">
          <img src={siri} alt="" />
        </div>
        <div className="header-right_action header-right_clock">
          <Clock />
        </div>
      </div>
    </div>
  )
}
