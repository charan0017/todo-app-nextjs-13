'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { changeDefaultCardColor, addStickyNote, updateStickyNote, deleteStickyNote } from '../../../redux/actions';

import { Colors } from '../../../constants';
import ColorPicker from '../ColorPicker';

const { defaultCardColor, cardColors } = Colors;

export default function CreateStickyNode({
    stickyNote,
}) {
    const router = useRouter();
    const selectedColor = useSelector((state) => state?.defaultCardColor || defaultCardColor);
    const dispatch = useDispatch();
    const isCreate = !stickyNote?.id;

    function setSelectedColor(color) {
        dispatch(changeDefaultCardColor(color));
    }

    const [title, setTitle] = useState(stickyNote?.title || '');
    const [content, setContent] = useState(stickyNote?.content || '');
    const [colorId, setColorId] = useState(stickyNote?.colorId || 'default');

    const stickyNoteColor = cardColors.basic.find((color) => color.id === colorId)
        || cardColors.fancy.find((color) => color.id === colorId) || selectedColor;

    const isSubmitDisabled = !title || !content;

    function onChangeHandler() {
        if (isSubmitDisabled) return;
        const payload = {
            ...stickyNote,
            title,
            content,
            colorId,
        };
        dispatch(isCreate ? addStickyNote(payload) : updateStickyNote(payload));
        router.push('/');
    }

    function onDeleteHandler() {
        if (isCreate) return;
        dispatch(deleteStickyNote(stickyNote));
        router.push('/');
    }

    useEffect(() => {
        setColorId(selectedColor.id);
    }, [selectedColor]);

    return (
        <div
            className="z-[888] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full bg-transparent backdrop-blur-sm bg-white/30"
            onClick={() => router.push('/')}
        >
            <Link
                className="fixed top-3 right-6 p-1.5 px-3 bg-white/50 rounded-full border border-solid cursor-pointer"
                href="/"
            >
                <i className="fa-solid fa-close fa-2x" />
            </Link>
            <div
                className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-[2] w-64 h-64 ${stickyNoteColor?.className || 'bg-lime-400 shadow-lime-500/60'} flex flex-col shadow-2xl drop-shadow-2xl transition-all duration-200 ease-in-out`}
                onClick={(e) => e.stopPropagation()}
            >
                <ColorPicker
                    className="p-6"
                    pickerClassName="top-1 right-1"
                    dropdownClassName="top-7 right-2"
                    selectedColor={stickyNoteColor}
                    setSelectedColor={setSelectedColor}
                >
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-start">
                        <input
                            className={`font-gloriaHallelujah w-full text-2xl font-semibold tracking-wide text-center whitespace-nowrap select-none bg-transparent border-none outline-none placeholder:text-black/20 ${stickyNoteColor?.textClassName || 'text-lime-400'}`}
                            maxLength={15}
                            placeholder="Title"
                            autoFocus
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className={`font-gloriaHallelujah w-full h-full resize-none text-2xl mb-3 font-semibold tracking-wide text-center whitespace-nowrap select-none bg-transparent border-none outline-none placeholder:text-black/20 ${stickyNoteColor?.textClassName || 'text-lime-400'}`}
                            maxLength={75}
                            placeholder="Description"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <div
                            className={`hidden group-hover:block absolute bottom-1 right-1 py-0.5 px-1.5 rounded-full hover:bg-white/30 ${isSubmitDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={onChangeHandler}
                        >
                            <span className={`${stickyNoteColor?.textClassName || 'text-lime-700'}`}>
                                <i className="fa-solid fa-arrow-up-from-bracket" />
                            </span>
                        </div>
                        {isCreate ? null : (
                            <div
                                className={`hidden group-hover:block absolute bottom-1 right-8 py-0.5 px-1.5 ml-4 rounded-full hover:bg-white/30 ${isSubmitDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                onClick={onDeleteHandler}
                            >
                                <span className={`${stickyNoteColor?.textClassName || 'text-lime-700'}`}>
                                    <i className="fa-solid fa-trash-can" />
                                </span>
                            </div>
                        )}
                    </div>
                </ColorPicker>
            </div>
        </div>
    );
}
