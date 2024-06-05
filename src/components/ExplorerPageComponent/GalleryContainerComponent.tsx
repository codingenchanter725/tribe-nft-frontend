"use client";
import React, { useState, useEffect } from 'react';
import SearchButtonComponent from './SearchButtonComponent';
import SearchHeaderComponent from './SearchHeaderComponent';
import GalleryComponent from './GalleryComponent';
import SearchSideBarComponent from './SearchSideBarComponent';
import DetailComponent from './DetailComponent';
import { getAllData } from '@/assets/utils/contract';
export interface itemProps {
    token_id: string,
    owner: string,
    price: string,
    description: string,
    image: string,
    listed : boolean,
}
interface galleryContainerProps {
    owner : string,
}
let allData : itemProps[] = [];
const GalleryContainerCompoent: React.FC<galleryContainerProps> = ({owner}) => {
    const [searchView, setSearchView] = useState<boolean>(false);
    const [detailFlag, setDetailFlag] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [key, setKey] = useState<string>("");
    const [isBuy, setIsBuy] = useState<boolean>(false);
    const [isList, setIsList] = useState<boolean>(false);
    const [selectedData, setSelectedData] = useState<itemProps>({owner : "", listed : false, token_id : "", price :"", description : "", image : ""});
    const [data, setData] = useState<itemProps[]>([]);

    useEffect(() => {
       fetchMoreData();
    }, []);
    
    const fetchMoreData = async () => {
        setData([]);
        setLoading(true);
        allData = await getAllData(owner);
        setData(allData);
        setLoading(false);
    };
    const setDetailView = (token_id : string) =>{
        setSelectedData(data.filter((item) => item.token_id === token_id)[0]);
        setDetailFlag(true);
    }
    const keySearch = (keyword : string) => {
        setKey(keyword);
        dataFilterFun(keyword, isBuy, isList);
    }
    const listFilter = (isBuyNow : boolean, isListed : boolean ) => {
        setIsBuy(isBuyNow);
        setIsList(isListed);
        dataFilterFun(key, isBuyNow, isListed);
    }
    const dataFilterFun = (param1: string, param2 : boolean, param3 : boolean) => {
        setData(allData.filter(item => {
            const filterListed = item.listed === param3;
            const ownerIncludesOwner = item.owner.includes(param1);
            const ownerIncludesDesc = item.description.includes(param1);
            return filterListed && (param1 === "" ? true : ownerIncludesOwner || ownerIncludesDesc) ;
        }));
    }
    return (
        <div className='relative flex z-2 flex-col min-h-[100vh] box-border text-white p-2 max-w-[1600px] m-auto'>
        
            {
                detailFlag ? (
                    <DetailComponent listed={selectedData.listed} setDetailFlag={setDetailFlag} owner={selectedData.owner} token_id={selectedData.token_id} image={selectedData.image} price={selectedData.price} description={selectedData.description} />
                ) :
                    (
                        <>
                            <SearchButtonComponent keySearch={keySearch} setSearchView={setSearchView} />
                            {loading &&
                                <div className="inline-block m-auto mt-10 h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                        Loading...
                                    </span>
                                </div>
                            }
                            {
                                searchView && allData.length > 0 ? (
                                    <div className="block">
                                        <div className="w-[100%] pt-[20px] min-[650px]:pl-[50px]">
                                            <SearchHeaderComponent setSearchView={setSearchView} total_count={data.length} />
                                        </div>
                                        <div className="min-[650px]:flex min-[650px]:pl-[50px]">
                                            <div className="min-[650px]:w-[25vw] max-[650px]:w-[100vw] pt-[35px] pl-[35px] pr-[35px] ">
                                                <SearchSideBarComponent listFilter={listFilter} />
                                            </div>
                                            <div className="min-[650px]:w-[75vw] max-[650px]:w-[100vw]">
                                                <GalleryComponent galleryitems={data} setDetailView={setDetailView} width="30" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <GalleryComponent galleryitems={data} setDetailView={setDetailView} width="25" />
                                    </div>
                                )
                            }
                        </>
                    )
            }
        </div>
    )
}
export default GalleryContainerCompoent;