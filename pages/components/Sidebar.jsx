// imports
import React , {useState} from "react";

import { ConnectButton } from "web3uikit";
import Image from "next/image";

import {useMoralis } from "react-moralis"

 // end of imports


// tailwind styles 
const styles = {
  container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
  profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
  profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
  profilePic: `rounded-3xl object-cover`,
};
//end of styles 

export function Sidebar() {

  // const {
  //   isAuthenticated , 
  //   authenticate ,
  //   enableWeb3,
  //   moralis ,
  //   user ,
  //    isWeb3Enabaled
  // } = useMoralis;



  let [nickname , setNickname] = useState("");
  const isAuthenticated = true;
  let [username ,changename] = useState("");

  const handleSetUsername = ()=>{
    changename(nickname);
  }


  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.jpg`}
                alt="profile"
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            {!username ? (
              <>
                <div className={styles.username}>
                  <input
                    type="text"
                    placeholder="Username...."
                    className={styles.usernameInput}
                    value={nickname}
                    onChange={(e)=>{setNickname(e.target.value)}}
                  />
                </div>
                <button
                  className={styles.setNickname}
                  onClick={handleSetUsername}
                >
                  Set Nickname
                </button>
              </>
            ) : (
              <div>
                <div className={styles.welcome}>Wecome {username}</div>
              </div>
            )}
          </>
        )}
        <div className={styles.connectButton}>
          <ConnectButton />
        </div>
        <div className={styles.menu}>

        </div>
      </div>
    </div>
  );
}
