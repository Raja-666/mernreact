import React from 'react';
import './helpcenter.scss';


const HelpCenterCategorySearch = () => {
    return(
        <>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
            <div style={{position: 'absolute', top: '-10px'}}>
                <button className='backbtn'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.78125 9.75L11.4375 6.125C11.5938 5.96875 11.8438 5.96875 11.9688 6.125L12.2188 6.34375C12.3438 6.5 12.3438 6.71875 12.2188 6.875L9 10L12.1875 13.1562C12.3438 13.3125 12.3438 13.5312 12.1875 13.6875L11.9688 13.9062C11.8438 14.0625 11.5938 14.0625 11.4375 13.9062L7.78125 10.2812C7.625 10.125 7.625 9.90625 7.78125 9.75Z" fill="white"/>
                </svg>
                </button>
            </div>
              <div className="text-center hpCateActive mb-5">
                <span>Help Center</span>
                <span className="verticalline"></span>
                <span className="">Category Name</span>
                <span className="verticalline"></span>
                <span className="active">Article Name</span>
              </div>
            </div>
            
        </div>
        <div className='row'>
            <div className='col-12 paraTxt'>
                <div className='fs-28 fw-600 mb-3'>Article Name</div>
                <p>Vestibulum sed arcu non odio. Varius duis at consectetur lorem. Bibendum neque egestas congue quisque egestas diam in arcu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Eget velit aliquet sagittis id consectetur. Magna fermentum iaculis eu non diam phasellus. Sit amet purus gravida quis blandit turpis. Donec pretium vulputate sapien nec sagittis. Ultrices mi tempus imperdiet nulla malesuada. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Proin nibh nisl condimentum id venenatis a condimentum vitae.</p>
                <p>Odio eu feugiat pretium nibh. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Risus in hendrerit gravida rutrum quisque. A scelerisque purus semper eget duis at. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Semper eget duis at tellus at. Purus ut faucibus pulvinar elementum integer enim. Elementum nisi quis eleifend quam. Malesuada nunc vel risus commodo viverra maecenas accumsan. Pretium viverra suspendisse potenti nullam ac tortor. Mi proin sed libero enim. Sit amet tellus cras adipiscing enim eu turpis. Sed viverra ipsum nunc aliquet bibendum enim. Sagittis vitae et leo duis ut diam. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. In egestas erat imperdiet sed euismod. Nibh tortor id aliquet lectus proin nibh. Sociis natoque penatibus et magnis dis.</p>
                <p>Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Ac tortor vitae purus faucibus. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Morbi tristique senectus et netus et malesuada. Morbi tristique senectus et netus et malesuada fames ac turpis. Tellus mauris a diam maecenas sed enim ut sem. Iaculis nunc sed augue lacus viverra. Pharetra sit amet aliquam id diam maecenas ultricies. Est lorem ipsum dolor sit amet. Aliquet enim tortor at auctor. Mauris sit amet massa vitae. Sagittis orci a scelerisque purus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Sit amet dictum sit amet justo donec. Nullam vehicula ipsum a arcu cursus vitae congue mauris.</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default HelpCenterCategorySearch;