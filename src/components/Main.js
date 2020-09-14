import React from 'react';
import Avatar from './Avatar';
import Card from './Card';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api'

const Main = (props) => {

const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();
const [userAvatar, setUserAvatar] = React.useState();
const [userId, setUserId] = React.useState();
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  Promise.all([
  api.getProfile(), 
  api.getInitialCards()
])
  .then(res => {
    const [getProfile, getInitialCards] = res
    setUserName(getProfile.name)
    setUserDescription(getProfile.about)
    setUserAvatar(getProfile.avatar)
    setUserId(getProfile._id)

    const items = getInitialCards.map(item => ({
      src: item.link,
      id: item._id,
      owner: item.owner._id,
      alt: item.name,
      title: item.name,
      likes: item.likes.length,
  }))
  setCards(items)

  })
  .catch((err) => {
    console.log(err);
  })

},[])

    return (
    <main>
       
    <Avatar avatar={props.onEditAvatar} profile={props.onEditProfile} addPlace={props.onAddPlace} userName={userName} userDescription={userDescription} userAvatar={userAvatar} />

    <section className="places">
    {cards.map(card => <Card key={card.id} myId={userId} {...card} {...props} />)}
    </section>


   
    <ImagePopup card={props.card} onClose={props.onClose} />

    </main>
    );
}

export default Main;