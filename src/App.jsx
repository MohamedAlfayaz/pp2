import { useState } from "react";
import Home from "./pages/Home";
import videoFile from './assets/front_video.mp4';

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div>
      {!showHome ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            flexDirection: "column",
            backgroundColor: "white", // or your page background
          }}
        >
          <video
            src={videoFile}
            autoPlay
            muted
            onEnded={() => setShowHome(true)}
            style={{ width: 700, height: 400, objectFit: "cover" }}
          />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
