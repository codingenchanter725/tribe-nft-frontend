import IsraelPropechy from "@/components/IsraelPropechy";
import MostChoosen from "@/components/MostChoosen";
import Thankyou from "@/components/Thankyou";

interface OtherProps {
    params : {
        action : string,
    }
}
const Action : React.FC<OtherProps> = ({ params }) => {
    const action = params.action;
    return(
        <div className="relative flex flex-col justify-center items-center box-border w-[100%]">
            { action === "thankyou" &&  <Thankyou /> }
            { action === "most" && <MostChoosen />}
            { action === "propechy" && <IsraelPropechy />}
        </div>
    )
}

export default Action;