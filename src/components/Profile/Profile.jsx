import css from './Profile.module.css';

export default function Profile({ image, name, tag, location, stats }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.profilePhoto} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
