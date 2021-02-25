import React from 'react';
import style from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {

    props.setUsers([
      {
        id: 1,
        photoURL: 'https://avatars.mds.yandex.net/get-zen_doc/1131857/pub_5ace7bfd2f578cfabcc0495a_5ace921477d0e6fc45b8b76c/scale_1200',
        followed: true,
        fullName: 'Sasha',
        status: 'Good Idea',
        location: { city: 'Moskow', country: 'Russia' },
      },
      {
        id: 2,
        photoURL: 'https://avatars.mds.yandex.net/get-zen_doc/1131857/pub_5ace7bfd2f578cfabcc0495a_5ace921477d0e6fc45b8b76c/scale_1200',
        followed: false,
        fullName: 'Roman',
        status: 'Perfect!!!',
        location: { city: 'Gomel', country: 'Belarus' },
      },
      {
        id: 3,
        photoURL: 'https://avatars.mds.yandex.net/get-zen_doc/1131857/pub_5ace7bfd2f578cfabcc0495a_5ace921477d0e6fc45b8b76c/scale_1200',
        followed: true,
        fullName: 'Julia',
        status: 'Think the same',
        location: { city: 'Vroslaw', country: 'Poland' },
      }
    ])
  }

  return (
    <React.Fragment>
      {props.users.map((user) => {
        return (
          <div key={user.id} className='user_wrapper'>
            <div>
              <div>
                <img src={user.photoURL} alt={user.fullName} className={style.userPhoto} />
              </div>
              <div>
                {user.followed ? <button onClick={() => props.unfollow(user.id)}>unfollow</button> : <button onClick={() => props.follow(user.id)}>follow</button>}
              </div>
            </div>
            <div className='user-container'>
              <div className="user">
                <div className="user__name">
                  {user.fullName}
                </div>
                <div className="user__status">
                  {user.status}
                </div>
              </div>
              <div className="user">
                <div className="user__city">
                  {user.location.city}
                </div>
                <div className="user__country">
                  {user.location.country}
                </div>
              </div>

            </div>
          </div>
        )
      })}

    </React.Fragment>
  )
}

export default Users;
