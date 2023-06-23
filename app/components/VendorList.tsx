import Link from "next/link";

interface VendorListProps {
  vendor: {
    name: string;
  };
}

const VendorList: React.FC<VendorListProps> = ({ vendor }) => {
  return (
    <div>
      <Link id={vendor.name} href={"#"}>
        <h1 className="text-lg font-medium underline">{vendor.name}</h1>
      </Link>
    </div>
  );
};

export default VendorList;
