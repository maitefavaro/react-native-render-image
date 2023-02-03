import Login from "./pages/Login";
import Routers from "./routers";
import { useDeviceOrientation } from "@react-native-community/hooks";


export default function App() {

  const orientation = useDeviceOrientation()

  console.log('orientation is', orientation)

  return (
      <Routers />
  );
}