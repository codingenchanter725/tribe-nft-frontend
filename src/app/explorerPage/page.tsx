import GalleryContainerCompoent from "@/components/ExplorerPageComponent/GalleryContainerComponent";
import MostChoosen from "@/components/MostChoosen";
import IsraelPropechy from "@/components/IsraelPropechy";
const Home: React.FC = () => {
  return (
    <div className='relative flex z-2 flex-col min-h-[100vh] max-w-[1600px] mx-auto box-border text-white p-2'>
      <div className="ml-20 text max-w-[540px]:m-auto w-[320px]">
        Buy, Sell and Trade <br/> Your NTFs
        <div className="mt-10 flex">
          <button className="m-2 h-10 w-32 box-border rounded-lg border-2 border-gray-500 hover:border-green-400">Explore</button>
          <button className="m-2 h-10 w-32 box-border rounded-lg border-2 border-gray-500 hover:border-green-400">List</button>
        </div>
      </div>
      {/* <MostChoosen />
      <IsraelPropechy /> */}
      <GalleryContainerCompoent owner=""/>
    </div>
  );
}

export default Home;
