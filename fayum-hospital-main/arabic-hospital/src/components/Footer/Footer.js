import React from 'react'
import logo from '../../Assets/جامعة الفيوم.png'
import './footer.css'
import {Link} from 'react-router-dom'




const Footer = () => {

const scrolling =(e)=>{
console.log(e)
window.scroll({top:'0', behavior:'smooth'})


}




  return (
    <div className='footer  p-4'>
<div className='container'>
<div className='row'>
<div className='col-lg-4 col-md-12 col-sm-12 mb-md-5 mb-sm-5'>
<h3 className='mb-3'>مستشفى جامعة الفيوم</h3>
<a target='blank' href='https://www.fayoum.edu.eg/hospital/AboutCollegePage6.aspx'>

  <div style={{cursor:"pointer"}} className='logo'>
        <img src={logo} alt="hospital"/>
    </div>
</a>
</div>
<div className='col-lg-4 col-md-6 col-sm-6  ' >
<h3 className='mb-3'>  الروابط المهمة</h3>
<Link onClick={scrolling} to='/حجز-المواعيد'>
    <p>حجز المواعيد</p>
</Link>
<Link onClick={scrolling} to='/إجازة-الأطباء'>
    <p>إجازة الأطباء</p>
</Link>
<Link onClick={scrolling} to='/التخصصات-المتاحة'>
    <p>التخصصات المتاحة</p>
</Link>
<Link onClick={scrolling} to='/مواعيد-حضور-الدكاترة'>
    <p>مواعيد حضور الدكاترة</p>
</Link>


</div>
<div className='col-lg-4 col-md-6 col-sm-6'>
<h3 className='mb-3'>  تابعونا على </h3>

<a target='blank' href='https://www.facebook.com/FayoumU/'>
    <p>الفيسبوك </p>
</a>
<a target='blank' href='https://twitter.com/fayuniversity'>
    <p>تويتر </p>
</a>
<a target='blank' href='https://fayoum.edu.eg/'>
    <p>الموقع الرسمي لجامعة الفيوم </p>
</a>
<a target='blank' href='https://ar.wikipedia.org/wiki/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%81%D9%8A%D9%88%D9%85'>
    <p>ويكيبيديا  </p>
</a>

</div>










</div>









    </div>
    </div>
  )
}

export default Footer