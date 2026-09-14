function Card({ platform, icon, user, followers, today }) {
  return (
    <div>
      <div className="flex flex-row items-center">
        <img src={icon} alt={platform} />
        <h2>{user}</h2>
      </div>
      <div>
        <h1>{followers}</h1>
        <h2>FOLLOWERS</h2>
      </div>
      <p>{today}</p>
    </div>
  );
}

export default Card;
