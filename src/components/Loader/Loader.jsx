import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      height={80}
      width={80}
      color="#808080"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#808080"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
