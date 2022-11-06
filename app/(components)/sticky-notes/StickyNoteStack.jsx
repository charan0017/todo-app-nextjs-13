'use client';

import { useRouter } from 'next/navigation';
import ColorPicker from '../ColorPicker';
import { useDispatch, useSelector } from 'react-redux';
import { changeDefaultCardColor } from '../../../redux/actions';

import { Colors } from '../../../constants';

const { defaultCardColor } = Colors;

export default function StickyNoteStack() {
    const router = useRouter();

    const selectedColor = useSelector((state) => state?.defaultCardColor || defaultCardColor);
    const dispatch = useDispatch();
    function setSelectedColor(color) {
        dispatch(changeDefaultCardColor(color));
    }

    return (
        <div className="relative w-64 h-64">
            <div
                className={`absolute top-0 left-0 z-30 w-64 h-64 flex flex-col ${selectedColor?.className || 'bg-lime-400 shadow-lime-500/60'} shadow-md drop-shadow-md hover:drop-shadow-xl transition-all duration-200 ease-in-out`}
            >
                <ColorPicker
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                >
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        <div
                            className={`w-fit border border-dashed hover:border-dotted ${selectedColor?.borderClassName || 'border-lime-600'} rounded-lg p-4 cursor-pointer select-none transition-all duration-200 ease-in-out`}
                            onClick={() => router.push('/create')}
                        >
                            <p className={`font-kaushanScript text-xl ${selectedColor?.textClassName || 'text-lime-700'}`}>
                                Add Note
                            </p>
                        </div>
                    </div>
                </ColorPicker>
            </div>
            <div className={`absolute top-0 -left-3 z-10 rotate-[-2deg] w-64 h-64 flex flex-col p-6 ${selectedColor?.className || 'bg-lime-400 shadow-lime-500/60'} shadow-md drop-shadow-md`} />
            <div className={`absolute top-2 left-2 z-20 rotate-[4deg] w-64 h-64 flex flex-col p-6 ${selectedColor?.className || 'bg-lime-400 shadow-lime-500/60'} shadow-md drop-shadow-md`} />
        </div>
    );
}
