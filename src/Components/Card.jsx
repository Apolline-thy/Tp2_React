const topBarStyles = {
  Facebook: "bg-facebook",
  Twitter: "bg-twitter",
  Instagram: "bg-gradient-to-r from-instagram-start to-instagram-end",
  Youtube: "bg-youtube",
};

function Card({ platform, icon, user, followers, today }) {
  const todayColor = today.startsWith("-")
    ? "text-bright-red"
    : "text-lime-green";

  return (
    <div className="bg-theme-card relative overflow-hidden rounded-md py-6 text-center">
      <div
        className={`absolute top-0 left-0 h-2 w-full ${topBarStyles[platform]}`}
      ></div>
      <div className="flex items-center justify-center gap-2">
        <img src={icon} alt={platform} />
        <h2 className="text-theme-text-muted text-xs font-bold">{user}</h2>
      </div>
      <div>
        <h1 className="text-theme-text text-4xl font-bold">{followers}</h1>
        <h2 className="text-theme-text-muted text-sm font-bold tracking-wider uppercase">
          FOLLOWERS
        </h2>
      </div>
      <p className={`text-sm font-bold ${todayColor}`}>{today}</p>
    </div>
  );
}

export default Card;
