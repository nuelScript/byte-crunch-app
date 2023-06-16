import Link from "next/link";

interface VendorListProps {
    vendor: {
        name: string;
    }
}

const VendorList: React.FC<VendorListProps> = ({vendor}) => {
    return ( 
        <div>
            <Link href={'#'}>
                <h1 className="underline font-medium text-lg">{vendor.name}</h1>
            </Link>            
        </div>
     );
}
 
export default VendorList;