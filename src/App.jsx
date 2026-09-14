import Card from "./Components/Card";
import data from "./Data/data";
function App() {
  return (
    <div className="bg-theme-light-top-bg flex flex-col gap-10 p-15">
      <div>
        <h2 className="text-theme-text text-4xl">Social Media Dashboard</h2>
        <p className="text-theme-text-muted text-2xl">
          Total Followers: 23,004
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((data) => (
          <Card
            key={data.id}
            platform={data.platform}
            icon={data.icon}
            user={data.user}
            followers={data.followers}
            today={data.today}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
