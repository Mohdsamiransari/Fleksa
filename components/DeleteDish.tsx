'use client'

import Image from 'next/image'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { deleteDish } from '@/lib/actions/dish.action'

function DeleteDish ( {dishId}: { dishId: String} ) {
    const router = useRouter();
    const pathname = usePathname();
    const [dialogOpen, setDialogOpen] = useState(true);

    const handleDelete = async () =>{
        await deleteDish(dishId, pathname)
        setDialogOpen(false); 
    }

    return (
        <Dialog >
            <DialogTrigger >
                <Image
                    src="/assets/delete.svg"
                    alt="repost"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                />
            </DialogTrigger>
            {dialogOpen && (
                <DialogContent>
                    <DialogHeader className='flex flex-row gap-4 items-center'>
                        <DialogTitle >Are you absolutely sure?</DialogTitle>
                        <DialogDescription >
                            <Button onClick={handleDelete} className='bg-red-500' >Delete</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            )}
        </Dialog>
    )
};

export default DeleteDish;