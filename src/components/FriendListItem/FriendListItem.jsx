import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={clsx(css.wrapper, isOnline ? css.online : css.offline)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
