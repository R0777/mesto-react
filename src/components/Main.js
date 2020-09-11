import React from 'react';
import Avatar from './Avatar';
import Places from './Places';
import Bigimg from './Bigimg';
import FormAddcard from './FormAddcard';
import FormNewavatar from './FormNewavatar';
import FormProfile from './FormProfile';
import Formremovecard from './Formremovecard';


const Main = () => {

function handleEditAvatarClick() {
    const popUpProfile = document.querySelector('#new-avatar')
    popUpProfile.classList.add('active')
}

function handleEditProfileClick() {
    const popUpProfile = document.querySelector('#profile')
    popUpProfile.classList.add('active')
}

function handleAddPlaceClick() {
    const popUpProfile = document.querySelector('#add-card')
    popUpProfile.classList.add('active')
}
    return (
    <main>
    <Avatar avatar={handleEditAvatarClick} profile={handleEditProfileClick} addPlace={handleAddPlaceClick}/>
    <Places />
    <FormProfile />
    <FormAddcard />
    <FormNewavatar />
    <Formremovecard />
    <Bigimg />
    </main>
    );
}

export default Main;