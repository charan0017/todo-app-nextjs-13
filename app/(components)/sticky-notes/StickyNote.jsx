'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateRandomRotation } from '../../../utils';


import { Colors } from '../../../constants';

const { defaultCardColor, cardColors } = Colors;

export default function StickyNote({
    stickyNote = {},
}) {
    const router = useRouter();
    const [randomRotation] = useState(generateRandomRotation());
    const stickyNoteColor = cardColors.basic.find((color) => color.id === stickyNote?.colorId)
        || cardColors.fancy.find((color) => color.id === stickyNote?.colorId) || defaultCardColor;
    return (
        <div
            className={`w-64 h-64 ${stickyNoteColor?.className} flex flex-col p-6 shadow-xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 ease-in-out cursor-pointer`}
            style={{
                transform: `rotate(${randomRotation}deg)`,
            }}
            onClick={() => router.push(`/${stickyNote?.id}`)}
        >
            <div className="w-full self-center overflow-hidden">
                <p className="font-gloriaHallelujah text-xl font-semibold tracking-wide text-center whitespace-nowrap select-none">
                    {stickyNote?.title}
                </p>
            </div>
            <div className="w-full h-3/5 flex flex-row justify-center items-center">
                <p className="font-gloriaHallelujah text-md text-center leading-loose select-none">
                    {stickyNote?.content}
                </p>
            </div>
            <div className="end-mark"></div>
        </div>
    );
}
