import React, {  useRef } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';


function Imagescroll() {

  const imglist=useRef(null);

  const scroll=(direction)=>{
    const scrollamount=imglist.current.clientWidth*direction;
    imglist.current.scrollBy({left:scrollamount,behavior:"smooth"})
  };
  return (
    <div className='image-body'>
      <div className='image-wrapper'>
        <div className='image-scroll'>
               <label className='click-btn' id='left-btn' onClick={()=>scroll(-0.7)}>
               <FontAwesomeIcon  icon={faAngleLeft} />
               </label>
            <div className='image-list' ref={imglist}>
                   {data.map((h,index)=>
                  (<img src={h.img} alt='' key={index}/> ))};
            </div>
                 <label className='click-btn' id='right-btn' onClick={()=>scroll(0.7)}>
                   <FontAwesomeIcon  icon={faAngleRight}/>
                 </label>
        </div>
      </div>
    </div>

  )
}

const data=[
  {img:'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABan_SGhmKkHRdUmhF-DzQueCFwl6Evtv-dxip0v6HWrmKRROq6ilCAybAeYA2L0_VOzAVI3YlP3AoQMKHJOiKmuJLUOL4ZpYxJc.webp?r=0f6'},
    {img:'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS7dyld569XV52EmvaAs6GzTtMdIQU8Zt9-yGDnn0m6JopAB1BKIVRBbH4T94B-dR-NnG6B4xerGgKWih07ZQpH4Z2jhpOLwKb4JkVLW4q2bhRSiXBnPRDvdElbC47Lc-8G2fHz0Xql-L0_hL4elj5BfmRiaQ-KWorhWm-STZquEl2UOaAMxfuwSMfN_F6Dw5KMVEhIEI42e4jMw663a-YJZTrl-o-j4Q5T6eAUOEN-KPY3hqrIuffWhgXcMH_9KWh4HtzOWVAemc9i5ft5jGrUdjSS9HUJwxC5mhCK1T3L5YxPK4yVQXHaH0VUeja9zGdgj8kjeUbF7muN3zz3X4JE.webp?r=2b9'},
    {img:'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfP1_7nLpY1Gio3tPeNx-UFsRg9nm5Kt9ebmWADCw9pwg7ey4dVXRbWJ0XBKyvzdLeADC1Ke-cw_DZBbTdgDBGZOWhOlYDgfh1FhpuQu5hAnpXH9zG2XMOfWrn0l81K4qpMJEXIZh8x_z6yMoaea61GZhw3ajO-WAg9FxRBWuXi0svaarVcp2ZnvUBNqwfFx9R6Tgd31HDRHxKeG__aOKMGMDEb-4_uqI3grMZFl41FEazHdhoTIhvESC3af7LkMfgxRig-0OZEpQ7_8gmSbSht9m4TmApDSFikMMKALypeQScwT_aQP-fblNIHrFI3xNoBW1modhb_z9sl9uHHuZ_L5DYrCyo5RJ6gKQk32tZBMfYozIAk.webp?r=ead' },
    {img :'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWap9hHVElt-GijDK-GbW7gDiPbSC2ofVEWpO_8ptKt8LS-Ul3l6MT72Fp_7aYhzg4LkmMyNsFOq8OoMdGTKUQJaC4l7_JpESoaTcKe-HMUSE104sjEkUstFOTrs8MNBcWV1dq0T9_aVIdFEGCc0cMlrY90sUaa8r_5aRysf4Ox38ZcaewNZwrZvWX352t8czy2inCQjUyJTcaRBl11RMexmg9G8VmdSzc-OoSWC70Y_d8HnPxRrUHV_YHUzj-11kkvCuVe_J3ItJpctGMN8JemWeLOHRTVh69Qvi6f_bBKxSI0UhC8tmAtgrUG6tiD7yNUnnXcs_tITt8tHdae5IAc.webp?r=8c7' },
    {img :'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYIRsM_M3WYLA_KjPZ3b_gumnUsE0SSCNbPGUlnFVUT3vIs906bdPHC_JCpoKQmwRXMJ7zpZTfP7K95fN840aI-hLbVFeTM6qF4Q5f6M8hymquqFFJTlSjTmls8Dk3CmfHjs5zUWSiSmhK7uoPsEr2FdB4s4VGHXcKc.webp?r=a57'},
    {img :'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcaKrijLQxz_EkAAY5WREodwgUqrjmMH4X52tj4ijlpN_LEOvmVwka9AUuwXfhVBEcyr29i9M6kzUEep5ejP9qk7JEZZeB3YOme9gH5H11qv7yJtJGZldaO6gHcfQKEOqocgO7fcMI6O-xkskLnBWC0imfT9srd_LgJolt3_zCwTbzGapbUtfaVXgKibwOmzJA8d_eceM37JcNjdYlXjBSVMfJpieuqusMa-mvZ5QhlgJi_XgXpu6PQcosl4z3_SHJYRe0Ctj1Y-eSjzW8oxXWfHyXUp75xXaQ5Ak_s83mX59lkTOHOFBcVb.webp?r=787' },
    {img :'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZDSMSd0KRaOwqEouWgt8j_GJ50Qcsx1sdFMYKZBp-AOeJ5QppOODD_ZR1WkqeUjLRmKttkU1QP44sNcs3sYUvEhIMCU-EvgQ3Ytg_A9IbPId4W3NlLVvhMEOvX3gesSw7gyL0vj6Rkzy8X7hLRaqLJlRVtXO9qIPOY.webp?r=a34'},
    {img :'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb3oIcLN4qX-MzZw3EhHY5l4qxUssxXcNgTbPS3_qYa85HJMiJ_7vSflzTZ0FhI8R3bggn_Q9bXHDgzgI-Q96OPDDA2f7RYmAOLUIj4xAIpOMkUmTFl25eejETvoKx6VfHpKs-USBtDQ8rYL1aDAFj1TR-VC_McL82VNeFBWVoV0zvG26iMO6uupuXSTX60.webp?r=71f' },
    {img: 'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR11drhQRlSsQmsXzEEtMIGJv7tiZvqOe6n-eLMOjpjviju_blTgJunNu40dIApIx2vZ_5Fp1ITLjMgH07Vd8Hxz9qr28rOG8NEzSlPvbqkCMUQb9b2OKy9vjNvm_We7yJqVrAUJF4HwjBioGuP8S_7L3AtBLxsEZQ4IM-SBETGhz61wTcQTs_6cMdvGaFmBOGgZb5B9OWGsB-XpQvRGuK7IMF_9C5_9Z7DeuqYmf5KVQYaWJzqbFm_vs_1VmjcIcTT7XnvPeNO1YfzPNIOKHdHa5lKc.webp?r=68c' },
    // {img: 'https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQoIOWd1nsPhBquUlc_QjBJHW-2l-28skE3C8UObE4qpOSWVFRLTB3u4Y-SRqMHoF8LRkdpbd5XLBtX7bFDSVzOWmPGT51RzyCNleaekfhFTivHLxiRggs-OO7PHnU-W8sbfGQ6ZLhI2SUh1fttyzXxDJ9hecQE9S55zzp9L9zVhnHg2umrwDPxVx0sgikUXpeWn8rkaXQHDsa7-f7o1T_OloUSuTK6bql2qdBlin54CtKaoo1bygmjKi_b_1vVLl9IiJO5k0ln5OL2jdvXwVcUHPnSoTp8WjJzRUn6uZ62TJmpdA4jxU3M7.webp?r=efc' },
];

export default Imagescroll;