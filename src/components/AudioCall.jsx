// AudioCall.js
import { useRef, useEffect } from "react";
import Peer from "simple-peer";

const AudioCall = () => {
  const localStreamRef = useRef();
  const remoteStreamRef = useRef();
  const peerRef = useRef();

  useEffect(() => {
    // Get user media for the local stream
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        localStreamRef.current = stream;
      })
      .catch((error) => console.error("Error accessing microphone:", error));

    return () => {
      // Clean up resources when the component unmounts
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (peerRef.current) {
        peerRef.current.destroy();
      }
    };
  }, []);

  const startCall = () => {
    // Create a peer connection
    peerRef.current = new Peer({
      initiator: true,
      stream: localStreamRef.current,
    });

    // Handle incoming data from the remote peer
    peerRef.current.on("data", (data) => {
      console.log("Received data:", data);
    });

    // Handle incoming stream from the remote peer
    peerRef.current.on("stream", (stream) => {
      remoteStreamRef.current.srcObject = stream;
    });
  };

  return (
    <div>
      <h1>Audio Call</h1>
      <button onClick={startCall}>Start Call</button>
      <audio ref={remoteStreamRef} autoPlay controls />
    </div>
  );
};

export default AudioCall;
