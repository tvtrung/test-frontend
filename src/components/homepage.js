import React, { useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Helper from "../Helper/helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/mystyle.css';
import banner1 from '../images/slide1.png';
import banner2 from '../images/slide2.png';

import service1 from '../images/icon1.png';
import service2 from '../images/icon2.png';
import service3 from '../images/icon3.png';
import service4 from '../images/icon4.png';

function Layout(){
	const settings = {
	    dots: false,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1
	};
	const data_service = [
		{
			id:1,
			img:service1,
			title:'Suspendisse',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel orci nunc. Pellentesque ut arcu vestibulum lacus pharetra sagittis.',
			link:'/',
			btn_name: 'read more',
			isShow:true
		},
		{
			id:2,
			img:service2,
			title:'Suspendisse',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel orci nunc. Pellentesque ut arcu vestibulum lacus pharetra sagittis.',
			link:'/',
			btn_name: 'read more',
			isShow:true
		},
		{
			id:3,
			img:service3,
			title:'Suspendisse',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel orci nunc. Pellentesque ut arcu vestibulum lacus pharetra sagittis.',
			link:'/',
			btn_name: 'read more',
			isShow:true
		},
		{
			id:4,
			img:service4,
			title:'Suspendisse',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel orci nunc. Pellentesque ut arcu vestibulum lacus pharetra sagittis.',
			link:'/',
			btn_name: 'read more',
			isShow:true
		},
	]
	const data_banner = [
		{
			id:1,
			img:banner1,
			title:'Sample services',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			link:'/',
		},
		{
			id:2,
			img:banner2,
			title:'Sample services',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			link:'/',
		},
	]

	const [showCustom, setShowCustom] = useState(false);

	const [page_title, setPage_title] = useState('Trang chủ');
	const [page_description, setPage_description] = useState('Mô tả');

	const [introduce_title, setIntroduce_title] = useState('Some of our top services');
	const [introduce_description, setIntroduce_description] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel orci nunc. Pellentesque ut arcu vestibulum lacus pharetra sagittis.');
	
	const [service_list, setService_list] = useState(data_service);
	const [banner_list, setBanner_list] = useState(data_banner);
	/*Services*/
	const changeServiceTitle = (text, i) => {
		let _service_list = JSON.parse(JSON.stringify(service_list));
		_service_list[i].title = text;
		setService_list(_service_list);
	}
	const changeServiceDescription = (text, i) => {
		let _service_list = JSON.parse(JSON.stringify(service_list));
		_service_list[i].description = text;
		setService_list(_service_list);
	}
	const changeServiceButton = (text, i) => {
		let _service_list = JSON.parse(JSON.stringify(service_list));
		_service_list[i].btn_name = text;
		setService_list(_service_list);
	}
	const changeServiceStatus = (i) => {
		let _service_list = JSON.parse(JSON.stringify(service_list));
		_service_list[i].isShow = !_service_list[i].isShow;
		setService_list(_service_list);
	}
	/*Slider*/
	const changeSliderTitle = (text, i) => {
		let _banner_list = JSON.parse(JSON.stringify(banner_list));
		_banner_list[i].title = text;
		setBanner_list(_banner_list);
	}
	const changeSliderDescription = (text, i) => {
		let _banner_list = JSON.parse(JSON.stringify(banner_list));
		_banner_list[i].description = text;
		setBanner_list(_banner_list);
	}
	return (
		<div>
			<Helmet>
                <meta charSet="utf-8" />
                <title>{page_title}</title>
                <meta name="description" content={page_description}/>
            </Helmet>
            <div className={`${showCustom === true ? 'content-resize' : ''}`}>
				<div className='slider'>
					<Slider {...settings}>
						{banner_list.map((data, i)=>(
							<React.Fragment key={i}>
								<div className='item'>
									<img src={data.img} alt='' style={{width:'100%'}}/>
									<div className='description'>
										{data.title !== '' && (
										<div className='line1'>
											{Helper.renderHTML(data.title)}
										</div>
										)}
										{data.description !== '' && (
										<div className='line2'>
											{Helper.renderHTML(data.description)}
										</div>
										)}
									</div>
								</div>
							</React.Fragment>
						))}
					</Slider>
				</div>
				<div className='box-introduction'>
					<div className='title-introduction'>
						<div className='title'>
							{Helper.renderHTML(introduce_title)}
						</div>
						<div className='description'>
							{Helper.renderHTML(introduce_description)}
						</div>
					</div>
				</div>
				<div className='box-services'>
					<div className='list'>
						{service_list.map((data, i) => (
							<React.Fragment key={i}>
								{data.isShow === true && (
									<div className='box-item'>
										<div className='item'>
											<div className='padding'>
												<div><img src={data.img} alt=''/></div>
												<div className='title'>
													{Helper.renderHTML(data.title)}
												</div>
												<div className='description'>
													{Helper.renderHTML(data.description)}
											       </div>
												<div className='btn-readmore'>
													<Link to={data.link}>{data.btn_name}</Link>
												</div>
											</div>
										</div>
									</div>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>

			<div className={`box-custom ${showCustom === true ? 'show' : 'hide'}`}>
				<div className='box-custom-close' onClick={()=>{setShowCustom(false)}}>Đóng</div>
				<div className='section-item'>
					<h3>Cấu hình</h3>
					<div>
						<label htmlFor="page-title">Site Title: </label>
	  					<input type="text" value={page_title} id="page-title" onChange={(e)=>{setPage_title(e.target.value)}}/>
	  					<p></p>
	  					<label htmlFor="page-description">Tagline: </label>
	  					<input type="text" value={page_description} id="page-description" onChange={(e)=>{setPage_description(e.target.value)}}/>
  					</div>
				</div>
				<div className='section-item'>
					<h3>Slideshow</h3>
					{banner_list.map((data, i)=>(
						<div className='item-slider' key={i}>
							<div>Slide {data.id}</div>
							<hr/>
							<label htmlFor={`slider-title-${data.id}`}>Tiêu đề: </label>
		  					<input type="text" value={banner_list[i].title} id={`slider-title-${data.id}`} onChange={(e)=>{changeSliderTitle(e.target.value, i)}}/>
		  					<p></p>
		  					<label htmlFor={`slider-description-${data.id}`}>Mô tả: </label>
		  					<textarea id={`slider-description-${data.id}`} onChange={(e)=>{changeSliderDescription(e.target.value, i)}} value={banner_list[i].description} rows="6"></textarea>
	  					</div>
					))}
				</div>
				<div className='section-item'>
					<h3>Introduction</h3>
					<div>
						<label htmlFor="introduce-title">Tiêu đề: </label>
	  					<input type="text" value={introduce_title} id="introduce-title" onChange={(e)=>{setIntroduce_title(e.target.value)}}/>
	  					<p></p>
	  					<label htmlFor="introduce-description">Đoạn mô tả : </label>
	  					<textarea id="introduce-title" onChange={(e)=>{setIntroduce_description(e.target.value)}} value={introduce_description} rows="6"></textarea>
  					</div>
				</div>
				<div className='section-item'>
					<h3>Our Services</h3>
					{service_list.map((data, i)=>(
						<div className='item-services' key={i}>
							<div>Dịch vụ {data.id}</div>
							<hr/>
							<input type="checkbox" id={`services-status-${data.id}`} defaultChecked={data.isShow} onChange={()=>{changeServiceStatus(i)}} />
							<label htmlFor={`services-status-${data.id}`} className='pointer'> Hiển thị</label>
							<p></p>
							<label htmlFor={`services-title-${data.id}`}>Tiêu đề: </label>
		  					<input type="text" value={service_list[i].title} id={`services-title-${data.id}`} onChange={(e)=>{changeServiceTitle(e.target.value, i)}}/>
		  					<p></p>
		  					<label htmlFor={`services-description-${data.id}`}>Mô tả: </label>
		  					<textarea id={`services-description-${data.id}`} onChange={(e)=>{changeServiceDescription(e.target.value, i)}} value={service_list[i].description} rows="6"></textarea>
		  					<p></p>
		  					<label htmlFor={`services-button-${data.id}`}>Button text: </label>
		  					<input type="text" value={service_list[i].btn_name} id={`services-button-${data.id}`} onChange={(e)=>{changeServiceButton(e.target.value, i)}}/>
	  					</div>
					))}
				</div>
			</div>
			<div className='click-edit-toppage' onClick={()=>{setShowCustom(true)}}>
				<span>Top page</span>
			</div>
		</div>
	)
}
export default Layout;