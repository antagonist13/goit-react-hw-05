import { ThreeDots } from 'react-loader-spinner'
export default function Loader() {
    return <>
    <ThreeDots
  visible={true}
  height="50"
  width="50"
  color="#0b3d91"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</>
}