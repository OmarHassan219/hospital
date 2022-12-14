import React,{useState,useEffect} from 'react'

export const Context = React.createContext()

const StateContext = ({children}) => {
    const [user, setuser] = useState()
    const [password, setpassword] = useState()
    const [LogIn, setLogIn] = useState(false)
    const [userValidation, setuserValidation] = useState(false)
    const [showNewReg, setshowNewReg] = useState(false)
    const [saveuser, setSaveUser] = useState('');
    const [showUserBooked, setshowUserBooked] = useState(false);
	const [showburgermenu, setshowburgermenu] = useState(false)
const [bookedToday, setbookedToday] = useState([])
const [date, setdate] = useState('')


    const [usersArray,setusersArray] = useState({ bookedAppointements:[] , myPrescription:[]  })
    


let savedUserDetails = localStorage.getItem('UsersDetails')


    useEffect(() => {
      
      if(savedUserDetails){
        setusersArray(JSON.parse(savedUserDetails))
 }
         
    },[])

//  useEffect(() => {
// if(usersArray.bookedAppointements.length){


// var dtToday = new Date();
    
//     var month = dtToday.getMonth() + 1;
//     var day = dtToday.getDate();
//     var year = dtToday.getFullYear();
//     if(month < 10)
//         month = '0' + month.toString();
//     if(day < 10)
//         day = '0' + day.toString();
    
//     var maxDate = year + '-' + month + '-' + day;
// setdate(maxDate)
    







// console.log(userbookedarray)

//          }
        


//  },[usersArray])

   
    
  return (

    <Context.Provider value={{user,setuser,password,setpassword,userValidation,setuserValidation,saveuser, setSaveUser, showNewReg, setshowNewReg,LogIn,setLogIn,usersArray,setusersArray,showUserBooked, setshowUserBooked , showburgermenu, setshowburgermenu,bookedToday, setbookedToday,date, setdate}}>
{children}
    </Context.Provider>

  )
}

export default StateContext