import React, { useState } from "react";

interface searchSideBarProps {
    listFilter : any
}

const SearchSideBarComponent : React.FC<searchSideBarProps> = ({listFilter}) => {
    const [buyNowChecked, setBuyNowChecked] = useState<boolean>(false);
    const [listChecked, setListChecked] = useState<boolean>(false);

    const listFiiterComp = (param1: boolean, param2: boolean) => {
        listFilter(param1, param2)
    }
    return(
        <div className="w-[100%] pt-[20px] pl-[20px] pr-[20px] md:h-[500px] sm:h-full relative box-border border-2 rounded-[5px] border-gray-666 transition-all duration-300 hover:border-yellow-300">
            <select className="pb-[10px] w-[100%] rounded-[5px] transition-all duration-300 bg-transparent text-2lg">
                {/* <option value={1} className="bg-transparent">
                    All BlockChains
                </option>
                <option value={2} className="bg-transparent">
                    All BlockChains
                </option> */}
            </select>
            <div className="w-[100%] box-border border-t-2 rounded-[1px] p-5 border-gray-100"></div>
            <div className="w-[100%]">
                {/* <label className="flex justify-between h-10 m-2">
                    <span className="text-white-700">Buy Now</span>
                    <input
                        type="checkbox"
                        className="form-checkbox bg-transparent h-5 w-5 text-green-500"
                        checked = {buyNowChecked}
                        onChange={() => {
                            setBuyNowChecked(!buyNowChecked);
                            listFiiterComp(!buyNowChecked, listChecked);
                        }}
                    />
                </label> */}
                <label className="flex justify-between h-10 m-2">
                    <span className="text-white-700">Listed</span>
                    <input
                        type="checkbox"
                        className="form-checkbox bg-transparent h-5 w-5 text-green-500"
                        checked={listChecked}
                        onChange={() => {
                            setListChecked(!listChecked);
                            listFiiterComp(buyNowChecked, !listChecked)
                        }}
                    />
                </label>
            </div>
        </div>
    )
}

export default SearchSideBarComponent;