import css from "./Profile.module.css"
export default function Profile(props) {
    return (
    <div className={css.mainWraper}>
      <div className={css.centeredWraper}>
        <img
          src={props.image}
          alt="User avatar"
          className={css.userImage}
        />
        <p className={css.name}>{props.name}</p>
        <p className={css.subInfo}>@{props.tag}</p>
        <p className={css.subInfo}>{props.location}</p>
      </div>
    
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.stats}>{props.stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.stats}>{props.stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.stats}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>)
}