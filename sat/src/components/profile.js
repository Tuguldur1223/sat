import React, { useEffect, useState } from "react";

import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./profile.css"
function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState("start");
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  function pro(){
    setIsHovered(prevState => !prevState);
  }
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked1(true);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false);
      console.log("a");
    } else if (checkboxNumber === 2) {
      setIsChecked1(false);
      setIsChecked2(true);
      setIsChecked3(false);
      setIsChecked4(false);
      console.log("b");
    } else if (checkboxNumber === 3) {
      setIsChecked1(false);
      setIsChecked2(false);
      setIsChecked3(true);
      setIsChecked4(false);
      console.log("c");
    } else if (checkboxNumber === 4) {
      setIsChecked1(false);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(true);
      console.log("d");
    }
  };
   
  return (
    <>
      {userDetails ? (
        <>
        <div className="body2">
        <div className="header">
          <div className="Logo"><h1 className="logo">SAT</h1></div>
          <div className="div4">
         <div className="p">
          <div className="Pro" onClick={pro} >
            <h1 className="Pro_name">{userDetails.name[0]}</h1> 
          </div>
          { isHovered &&          
            <div className="Pro_menu" >
              <ul>
              <p>Email: {userDetails.email}</p>          
              <button className="btn btn-primary" onClick={handleLogout} >
               Logout
              </button>
              </ul>
              
            </div>
            }
            </div>
            <button className="time" onMouseEnter={()=>setHidden(`${40}:${0}${0}`)} onMouseLeave={()=>setHidden("start")}>{hidden}</button>
            </div>
        </div>
        <div className="buhshal">
          <div>
           <div className="shal">
                <div className="body_ono">
                  <div className="onoo">1 оноо</div>
                </div>
                <div className="Line"></div><br/>
                <div className="bodlog">
                      <h2>if a<sup>-1/2</sup>=3, what is the value a?</h2>
                </div><br/>
                <div className="Hariu">
                <label>
                  
            <input
              type="checkbox"
              className="check"
              checked={isChecked1}
              onChange={() => handleCheckboxChange(1)}
              id="checkbox"
            />
            -9
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              className="check"
              checked={isChecked2}
              onChange={() => handleCheckboxChange(2)}
              id="checkbox"
            />
           1/9
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              className="check"
              checked={isChecked3}
              onChange={() => handleCheckboxChange(3)}
              id="checkbox"
            />
            1/3
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              className="check"
              checked={isChecked4}
              onChange={() => handleCheckboxChange(4)}
              id="checkbox"
            />
            9
          </label>
          </div>
           </div>

           <div className="shal">
          
           </div>
           </div>
           <div>
           <div className="shal">
          
          </div>
          <div className="shal">
          
          </div>
          </div>
        </div>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default Profile;