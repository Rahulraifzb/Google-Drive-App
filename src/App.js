import React, { useState } from 'react'
import FilesView from './components/filesView/FilesView'
import Header from './components/header'
import { Sidebar } from './components/sidebar'
import "./App.css"
import SideIcons from './components/sideIcons'
import GDriveLogo from "./media/google-drive-logo.png"
import { auth, provider } from './firebase'

function App() {
  const [user, setUser] = useState()

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider)
        .then((result) => {
          setUser(result.user)
        })
    }
  }
  return (
    <div className="app">
      {
        user ? (
          <div>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </div>
        ) : (
          <div className="app__login">
            <img src={GDriveLogo} alt="Google Drive" />
            <button onClick={handleLogin} type="button">Log in to Google Drive</button>
          </div>
        )
      }

    </div>
  )
}

export default App
