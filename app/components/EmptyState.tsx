'use client';

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
    title= 'No exact matches',
    subtitle= 'Try changing or removing some of your filters',
    showReset
}) => {
    const router = useRouter();

    return (
        <div className="h-[100vh] flex flex-col gap-2 justify-center items-center">
            <Heading center="text-center" title={title} subtitle={subtitle}/>
            <div className="w-48 mt-4">
                {showReset && (
                    <Button outline label="Go to Homepage" onClick={()=> router.push('/home')} />
                )}
            </div>
        </div>
    );
}

export default EmptyState;