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
const [isCardLike, setIsCardLike] = React.useState(false)

function handleCardLike() {
  setIsCardLike(true)
}

React.useEffect(() => {
  Promise.all([
  api.getProfile(), 
  api.getInitialCards()
])
  .then(res => {
    const [profile, cards] = res
    setUserName(profile.name)
    setUserDescription(profile.about)
    setUserAvatar(profile.avatar)
    setUserId(profile._id)

    const items = cards.map(item => ({
      src: item.link,
      id: item._id,
      owner: item.owner._id,
      alt: item.name,
      title: item.name,
      likes: item.likes.length,
      cardLiked: item.likes.find((elem) => elem._id === profile._id)
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