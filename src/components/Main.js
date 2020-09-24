import React from 'react';
import Avatar from './Avatar';
import Card from './Card';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import {CurrentCardContext} from '../contexts/CurrentCardContext'

const Main = (props) => {

  const currentUserContext = React.useContext(CurrentUserContext);
  const currentCardContext = React.useContext(CurrentCardContext);


const [userId, setUserId] = React.useState();
const [cards, setCards] = React.useState([]);
const [isCardLike, setIsCardLike] = React.useState(false)

function handleCardLike() {
  setIsCardLike(true)
}

// React.useEffect(() => {
//   Promise.all([
//   api.getProfile(), 
//   api.getInitialCards()
// ])
//   .then(res => {
//     const [profile, cards] = res
//     setUserId(profile._id)

    const items = currentCardContext.map(item => ({
      src: item.link,
      id: item._id,
      owner: item.owner._id,
      alt: item.name,
      title: item.name,
      likes: item.likes.length,
      cardLiked: item.likes.find((elem) => elem._id === currentUserContext._id)
  }))
  setCards(items)

//   })
//   .catch((err) => {
//     console.log(err);
//   })

// },[])

    return (
    <main>
       
    <Avatar avatar={props.onEditAvatar} profile={props.onEditProfile} addPlace={props.onAddPlace} userName={currentUserContext.name} userDescription={currentUserContext.about} userAvatar={currentUserContext.avatar} />

    <section className="places">
    {cards.map(card => <Card key={card.id} myId={userId} {...card} {...props} />)}
    </section>


   
    <ImagePopup card={props.card} onClose={props.onClose} />

    </main>
    );
}

export default Main;