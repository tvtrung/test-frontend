import React, { useState } from 'react';
import Helper from "../Helper/helper";
import '../style/mystyle.css';
function Footer(){
	const [showCustom, setShowCustom] = useState(false);

	const [copyrightTitle, setCopyrightTitle] = useState('Copyright © 2021 Sample Service CO., Ltd. All rights reserved.');

	return (
		<div>
			<div className={`${showCustom === true ? 'content-resize' : ''}`}>
				<div className='footer'>
					<div className='text'>{Helper.renderHTML(copyrightTitle)}</div>
				</div>
			</div>
			<div className={`box-custom ${showCustom === true ? 'show' : 'hide'}`}>
				<div className='box-custom-close' onClick={()=>{setShowCustom(false)}}>Đóng</div>
				<div className='section-item'>
					<h3>CopyRight</h3>
					<div>
						<label htmlFor="introduce-title">Copyright Text: </label>
	  					<input type="text" value={copyrightTitle} id="introduce-title" onChange={(e)=>{setCopyrightTitle(e.target.value)}}/>
  					</div>
				</div>
			</div>
			<div className='click-edit-footer' onClick={()=>{setShowCustom(true)}}>
				<span>Footer</span>
			</div>
		</div>
	)
}
export default Footer;