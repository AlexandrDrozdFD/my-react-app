import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/img_avatar.png'

class Users extends React.Component {
  constructor(props) {
    super(props);
    alert('New {}')
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return <div>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className='user_wrapper'>
              <div>
                <div>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.name} className={style.userPhoto} />
                </div>
                <div>
                  {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>unfollow</button> : <button onClick={() => this.props.follow(user.id)}>follow</button>}
                </div>
              </div>
              <div className='user-container'>
                <div className="user">
                  <div className="user__name">
                    {user.name}
                  </div>
                  <div className="user__status">
                    {user.status != null ? user.status : 'This status is awesome@@'}
                  </div>
                </div>
                <div className="user">
                  <div className="user__city">
                    Does not exist
                </div>
                  <div className="user__country">
                    Too
                </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
  }
}

export default Users;
