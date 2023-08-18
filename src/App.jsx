import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import User from './components/User';

const App = () => {
  console.log("rerendering app ...")

  const [userId, setUserId] = useState(null);
  const [time, setTime] = useState(new Date());
  const [timeStr, setTimeStr] = useState(`${time.toDateString()} ${time.toTimeString()}`);

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
