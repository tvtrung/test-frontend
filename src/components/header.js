import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/mystyle.css';
import logo from '../images/logo.png';

function Header(){
	const menu = [
		{
			name:'Home',
			link:'/',
		},
		{
			name:'About',
			link:'/about',
		},
		{
			name:'Services',
			link:'/services',
		},
		{
			name:'Portfolio',
			link:'/portfolio',
		},
		{
			name:'Contacts',
			link:'/contacts',
		},
	]
	const [showCustom, setShowCustom] = useState(false);
	const [showLogo, setShowLogo] = useState(true);
	return (
		<div>
			<div className={`${showCustom === true ? 'content-resize' : ''}`}>
				<div className='header'>
					<div className='logo'>
						{showLogo && (
							<img alt='' src={logo}/>
						)}
					</div>
					<div className='menu'>
						<ul>
							{menu.map((data, i) => (
								<li key={i}><Link to={data.link}>{data.name}</Link></li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={`box-custom ${showCustom === true ? 'show' : 'hide'}`}>
				<div className='box-custom-close' onClick={()=>{setShowCustom(false)}}>Đóng</div>
				<div className='section-item'>
					<h3>Header</h3>
					<div>
						<input type="checkbox" id={`logo-status`} defaultChecked={showLogo} onChange={()=>{setShowLogo(!showLogo)}} />
							<label htmlFor={`logo-status`} className='pointer'>Logo</label>
  					</div>
				</div>
			</div>
			<div className='click-edit-header' onClick={()=>{setShowCustom(true)}}>
				<span>Header</span>
			</div>
		</div>
	)
}
export default Header;