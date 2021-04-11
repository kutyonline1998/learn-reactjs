import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'V-pop vui tuoi',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/8/8/3/788304c4c906ca801d1bf77b1f2b443f.jpg'
        },
        {
            id: 2,
            name: 'nhac si hat',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/8/2/6/38265170b417dd079a3639ead075a3be.jpg'
        },
        {
            id: 3,
            name: 'tha thinh',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg'
        },
    ]
    return (
        <div>
            <h2>goi y cho hom nay</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;