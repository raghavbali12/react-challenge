import { useEffect, useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import User from './components/User';
import { getUserName } from "./api/user";

const App = () => {
  console.log("rerendering app ...")

  const [userId, setUserId] = useState(null);
  // const [time, setTime] = useState(new Date());
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    async function fetchUserId() {
      let serverUserId = await getUserName();
      setUserId(serverUserId);
    }
    let nowTime = new Date();
    setTimeStr(`${nowTime.toDateString()} ${nowTime.toTimeString()}`);
    fetchUserId();
  }, [])

  return (
    <div className="flex text-center justify-center m-8 min-h-screen overscroll-none">
      <div className="w-1/2 flex flex-col min-h-screen overscroll-none">
        <User userId={userId} setUserId={setUserId} />
        <Header timeStr={timeStr} userId={userId}/>
        <Items userId={userId}/>
      </div>
    </div>
  );
}

export default App;
